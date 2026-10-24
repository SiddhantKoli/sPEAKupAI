const catalogChoices = {
  base: [
    { id: "woman", label: "Young woman", bases: ["woman", "man"] },
    { id: "man", label: "Young man", bases: ["woman", "man"] }
  ],
  hair: [
    { id: "bob", label: "Modern bob", bases: ["woman"] },
    { id: "curly", label: "Curly bob", bases: ["woman"] },
    { id: "longButNotTooLong", label: "Long waves", bases: ["woman"] },
    { id: "bigHair", label: "Curly volume", bases: ["woman"] },
    { id: "shortCurly", label: "Textured pixie", bases: ["woman"] },
    { id: "shortWaved", label: "Textured crop", bases: ["man"] },
    { id: "theCaesarAndSidePart", label: "Side part", bases: ["man"] },
    { id: "shortRound", label: "Curly crop", bases: ["man"] },
    { id: "shortFlat", label: "Buzz cut", bases: ["man"] },
    { id: "frizzle", label: "Messy curls", bases: ["man"] }
  ],
  eyes: [
    { id: "default", label: "Open eyes" }, { id: "happy", label: "Happy eyes" },
    { id: "side", label: "Side glance" }, { id: "wink", label: "Wink" }
  ],
  mouth: [
    { id: "smile", label: "Smile" }, { id: "serious", label: "Neutral" },
    { id: "twinkle", label: "Grin" }, { id: "screamOpen", label: "Open" }
  ],
  brows: [
    { id: "default", label: "Natural" }, { id: "raisedExcited", label: "Raised" },
    { id: "flatNatural", label: "Straight" }, { id: "sadConcerned", label: "Thoughtful" }
  ],
  facialHair: [
    { id: "none", label: "Clean shaven", bases: ["man"] },
    { id: "moustacheMagnum", label: "Moustache", bases: ["man"] },
    { id: "moustacheFancy", label: "Handlebar", bases: ["man"] },
    { id: "beardLight", label: "Light beard", bases: ["man"] },
    { id: "beardMedium", label: "Full beard", bases: ["man"] },
    { id: "beardMajestic", label: "Long beard", bases: ["man"] }
  ],
  glasses: [
    { id: "none", label: "No glasses" }, { id: "round", label: "Round" },
    { id: "prescription02", label: "Square" }, { id: "prescription01", label: "Half frame" },
    { id: "wayfarers", label: "Wayfarer" }, { id: "sunglasses", label: "Sunglasses" },
    { id: "cat-eye", label: "Cat-eye" }, { id: "monocle", label: "Monocle" }
  ],
  clothes: [
    { id: "blazerAndShirt", label: "Tailored blazer", suggestedColor: "#0058be" },
    { id: "blazerAndSweater", label: "Layered blazer", suggestedColor: "#dc2c4f" },
    { id: "collarAndSweater", label: "Soft cardigan", suggestedColor: "#16845c" },
    { id: "shirtCrewNeck", label: "Knit sweater", suggestedColor: "#e0a426" },
    { id: "shirtVNeck", label: "Collared shirt", suggestedColor: "#168c91" },
    { id: "hoodie", label: "Everyday hoodie", suggestedColor: "#dc2c4f" },
    { id: "overall", label: "Utility overalls", suggestedColor: "#0058be" },
    { id: "graphicShirt", label: "Graphic tee", suggestedColor: "#e67825" },
    { id: "shirtScoopNeck", label: "Relaxed tee", suggestedColor: "#168c91" }
  ],
  neckwear: [
    { id: "none", label: "None" }, { id: "tie", label: "Tie" }, { id: "bow-tie", label: "Bow tie" },
    { id: "scarf", label: "Scarf" }, { id: "bandana", label: "Bandana" },
    { id: "ascot", label: "Ascot" }, { id: "pearls", label: "Pearls" }
  ],
  hats: [
    { id: "none", label: "No hat" }, { id: "hat", label: "Flat cap" },
    { id: "beret", label: "Beret" }, { id: "sun-hat", label: "Sun hat" },
    { id: "winterHat04", label: "Beanie" }, { id: "fedora", label: "Fedora" },
    { id: "hijab", label: "Headscarf" }
  ],
  extras: [
    { id: "brooch", label: "Brooch" }, { id: "star-pin", label: "Star pin" },
    { id: "medal", label: "Medal" }, { id: "flower", label: "Lapel flower" },
    { id: "pocket-square", label: "Pocket square" }, { id: "earrings", label: "Earrings" },
    { id: "badge", label: "Name badge" }, { id: "chain", label: "Watch chain" }
  ]
};

const slotFor = {
  base: "base", hair: "hair", eyes: "face", mouth: "face", brows: "face", facialHair: "face",
  glasses: "glasses", clothes: "clothes", neckwear: "neckwear", hats: "hats", extras: "extras"
};
const variantFor = {
  hair: (id) => ({ topVariant: id }), hats: (id) => ({ topVariant: id }),
  clothes: (id) => ({ clothesVariant: id }), glasses: (id) => ({ accessoriesVariant: id }),
  eyes: (id) => ({ eyesVariant: id }), mouth: (id) => ({ mouthVariant: id }),
  brows: (id) => ({ eyebrowsVariant: id }), facialHair: (id) => ({ facialHairVariant: id })
};

export const COACH_BASES = ["woman", "man"];
export const HAIR_DEFAULTS = { woman: "longButNotTooLong", man: "shortWaved" };
export const COACH_PALETTE = {
  ink: "#141b2b", yellow: "#ffe600", blue: "#0058be", red: "#dc2c4f", green: "#16845c",
  skin: ["#f8dfc2", "#edb98a", "#d08b5b", "#ae5d29", "#8e5d46", "#684536"],
  hair: ["#f4f0e6", "#aeb7c4", "#292b31", "#5a4035", "#a94f36", "#e0b85f"],
  clothes: ["#141b2b", "#0058be", "#dc2c4f", "#16845c", "#ffe600", "#168c91", "#e67825", "#e6e6e6", "#fffefd"],
  glasses: ["#141b2b", "#0058be", "#dc2c4f", "#e0b85f", "#fffefd"]
};

export const COACH_CATEGORIES = [
  { id: "base", label: "Player", icon: "users-round", description: "Choose your avatar style and skin tone." },
  { id: "hair", label: "Hair", icon: "scissors", description: "Find a style and color that fits." },
  { id: "face", label: "Face", icon: "smile", description: "Set the expression and facial hair." },
  { id: "glasses", label: "Glasses", icon: "glasses", description: "Add a signature pair." },
  { id: "clothes", label: "Clothes", icon: "shirt", description: "Build a look with color and pattern." },
  { id: "neckwear", label: "Neckwear", icon: "badge", description: "Finish the collar and neckline." },
  { id: "hats", label: "Hats", icon: "hat-glasses", description: "Try a hat or head covering." },
  { id: "extras", label: "Extras", icon: "sparkles", description: "Add up to three small details." }
];

export const COACH_PARTS = Object.entries(catalogChoices).flatMap(([choice, items]) => items.map((item, index) => ({
  id: item.id,
  slot: slotFor[choice],
  choice,
  label: item.label,
  bases: item.bases || COACH_BASES,
  z: choice === "base" ? 0 : choice === "hair" || choice === "hats" ? 50 : choice === "extras" ? 90 : 60,
  colourSlots: ({ hair: ["hair"], glasses: ["glasses"], clothes: ["top"], neckwear: ["neck"], hats: ["hat"], extras: ["accessories"] })[choice] || [],
  hides: choice === "hats" && item.id !== "none" ? ["hair"] : [],
  variant: variantFor[choice]?.(item.id) || {},
  order: index
})));

export const coachPartsFor = (category, base = "woman") => COACH_PARTS.filter((part) => part.slot === category && part.bases.includes(base));
export const coachOptionsFor = (choice, base = "woman") => COACH_PARTS.filter((part) => part.choice === choice && part.bases.includes(base));
