import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut as firebaseSignOut, updateProfile } from "firebase/auth";
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config.local.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const profileRef = (uid) => doc(db, "userProfiles", uid);
const sessionsRef = (uid) => collection(profileRef(uid), "sessions");
const CLOUD_USER_KEY = "speakup-cloud-user-v1";
let activeUser = null;

function publishAuthState(user, profile = null, history = null, cloudError = "", isolateLocal = false, pending = false) {
  window.dispatchEvent(new CustomEvent("speakup:auth-state", { detail: { user, profile, history, cloudError, isolateLocal, pending } }));
}

async function saveProfile(profile) {
  if (!activeUser) return;
  const syncedProfile = {
    name: String(profile.name || "").slice(0, 32),
    handle: String(profile.handle || "").slice(0, 20),
    weeklyGoal: Math.min(7, Math.max(1, Number(profile.weeklyGoal) || 3)),
    mascot: {
      character: profile.mascot?.character === "grandpa" ? "grandpa" : "grandma",
      hair: profile.mascot?.hair || "#c7d0dc",
      glasses: profile.mascot?.glasses || "square",
      shirt: profile.mascot?.shirt || "#71345f",
      accessory: profile.mascot?.accessory || "scarf"
    },
    updatedAt: serverTimestamp()
  };
  await setDoc(profileRef(activeUser.uid), syncedProfile, { merge: true });
}

function cleanSession(result) {
  const session = JSON.parse(JSON.stringify(result));
  session.id = String(result.id || crypto.randomUUID()).replaceAll("/", "_").slice(0, 128);
  return session;
}

async function syncHistory(history) {
  const user = activeUser;
  if (!user) return;
  const latest = (Array.isArray(history) ? history : []).slice(0, 25).map(cleanSession);
  const latestIds = new Set(latest.map((item) => item.id));
  await Promise.all(latest.map((item) => setDoc(doc(sessionsRef(user.uid), item.id), item)));
  const existing = await getDocs(sessionsRef(user.uid));
  await Promise.all(existing.docs.filter((snapshot) => !latestIds.has(snapshot.id)).map((snapshot) => deleteDoc(snapshot.ref)));
}

async function saveSession(result) {
  const user = activeUser;
  if (!user) return;
  const session = cleanSession(result);
  await setDoc(doc(sessionsRef(user.uid), session.id), session);
}

async function clearHistory() {
  const user = activeUser;
  if (!user) return;
  const existing = await getDocs(sessionsRef(user.uid));
  await Promise.all(existing.docs.map((snapshot) => deleteDoc(snapshot.ref)));
}

onAuthStateChanged(auth, async (user) => {
  activeUser = user;
  if (!user) {
    publishAuthState(null);
    return;
  }
  publishAuthState(user, null, null, "", false, true);
  try {
    const snapshot = await getDoc(profileRef(user.uid));
    const cloudProfile = snapshot.exists() ? snapshot.data() : null;
    const sessionsQuery = query(sessionsRef(user.uid), orderBy("date", "desc"), limit(25));
    const historySnapshot = await getDocs(sessionsQuery);
    const cloudHistory = historySnapshot.docs.map((item) => item.data());
    const lastUid = localStorage.getItem(CLOUD_USER_KEY);
    const isolateLocal = Boolean(lastUid && lastUid !== user.uid);
    localStorage.setItem(CLOUD_USER_KEY, user.uid);
    if (auth.currentUser?.uid === user.uid) publishAuthState(user, cloudProfile, cloudHistory, "", isolateLocal);
  } catch (error) {
    if (auth.currentUser?.uid === user.uid) publishAuthState(user, null, null, error.message || "Could not load the cloud profile.");
  }
});

window.SpeakUpFirebase = {
  signIn: () => signInWithPopup(auth, provider),
  signInWithEmail: (email, password) => signInWithEmailAndPassword(auth, email, password),
  createAccount: async (email, password, displayName) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName });
    return credential;
  },
  resetPassword: (email) => sendPasswordResetEmail(auth, email),
  signOut: () => firebaseSignOut(auth),
  saveProfile,
  syncHistory,
  saveSession,
  clearHistory
};
