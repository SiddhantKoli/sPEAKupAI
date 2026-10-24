(() => {
  // node_modules/lucide/dist/esm/defaultAttributes.mjs
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  // node_modules/lucide/dist/esm/createElement.mjs
  var createSVGElement = ([tag, attrs, children]) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs).forEach((name) => {
      element.setAttribute(name, String(attrs[name]));
    });
    if (children?.length) {
      children.forEach((child) => {
        const childElement = createSVGElement(child);
        element.appendChild(childElement);
      });
    }
    return element;
  };
  var createElement = (iconNode, customAttrs = {}) => {
    const tag = "svg";
    const attrs = {
      ...defaultAttributes,
      ...customAttrs
    };
    return createSVGElement([tag, attrs, iconNode]);
  };

  // node_modules/lucide/dist/esm/shared/src/utils/mergeClasses.mjs
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();

  // node_modules/lucide/dist/esm/shared/src/utils/hasA11yProp.mjs
  var hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
    return false;
  };

  // node_modules/lucide/dist/esm/shared/src/utils/toCamelCase.mjs
  var toCamelCase = (string) => {
    let out = "";
    let upperNext = false;
    for (const ch of string) {
      if (ch === "-" || ch === "_" || ch <= " ") {
        upperNext = out.length > 0;
        continue;
      }
      if (out.length === 0) {
        out += ch.toLowerCase();
      } else {
        out += upperNext ? ch.toUpperCase() : ch;
      }
      upperNext = false;
    }
    return out;
  };

  // node_modules/lucide/dist/esm/shared/src/utils/toPascalCase.mjs
  var toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };

  // node_modules/lucide/dist/esm/replaceElement.mjs
  var getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
  var getClassNames = (attrs) => {
    if (typeof attrs === "string") return attrs;
    if (!attrs || !attrs.class) return "";
    if (attrs.class && typeof attrs.class === "string") {
      return attrs.class.split(" ");
    }
    if (attrs.class && Array.isArray(attrs.class)) {
      return attrs.class;
    }
    return "";
  };
  var replaceElement = (element, { nameAttr, icons, attrs }) => {
    const iconName = element.getAttribute(nameAttr);
    if (iconName == null) return;
    const ComponentName = toPascalCase(iconName);
    const iconNode = icons[ComponentName];
    if (!iconNode) {
      return console.warn(
        `${element.outerHTML} icon name was not found in the provided icons object.`
      );
    }
    const elementAttrs = getAttrs(element);
    const ariaProps = hasA11yProp(elementAttrs) ? {} : { "aria-hidden": "true" };
    const iconAttrs = {
      ...defaultAttributes,
      "data-lucide": iconName,
      ...ariaProps,
      ...attrs,
      ...elementAttrs
    };
    const elementClassNames = getClassNames(elementAttrs);
    const className = getClassNames(attrs);
    const classNames = mergeClasses(
      "lucide",
      `lucide-${iconName}`,
      ...elementClassNames,
      ...className
    );
    if (classNames) {
      Object.assign(iconAttrs, {
        class: classNames
      });
    }
    const svgElement = createElement(iconNode, iconAttrs);
    return element.parentNode?.replaceChild(svgElement, element);
  };

  // node_modules/lucide/dist/esm/icons/badge.mjs
  var Badge = [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ]
  ];

  // node_modules/lucide/dist/esm/icons/check.mjs
  var Check = [["path", { d: "M20 6 9 17l-5-5" }]];

  // node_modules/lucide/dist/esm/icons/chevron-down.mjs
  var ChevronDown = [["path", { d: "m6 9 6 6 6-6" }]];

  // node_modules/lucide/dist/esm/icons/download.mjs
  var Download = [
    ["path", { d: "M12 15V3" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["path", { d: "m7 10 5 5 5-5" }]
  ];

  // node_modules/lucide/dist/esm/icons/face-slightly-smiling.mjs
  var FaceSlightlySmiling = [
    ["path", { d: "M15 10V9" }],
    ["path", { d: "M16.472 15a6 6 0 01-8.943 0" }],
    ["path", { d: "M9 10V9" }],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ];

  // node_modules/lucide/dist/esm/icons/glasses.mjs
  var Glasses = [
    ["circle", { cx: "6", cy: "15", r: "4" }],
    ["circle", { cx: "18", cy: "15", r: "4" }],
    ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }],
    ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }],
    ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]
  ];

  // node_modules/lucide/dist/esm/icons/hat-glasses.mjs
  var HatGlasses = [
    ["path", { d: "M14 18a2 2 0 0 0-4 0" }],
    [
      "path",
      {
        d: "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"
      }
    ],
    ["path", { d: "M2 11h20" }],
    ["circle", { cx: "17", cy: "18", r: "3" }],
    ["circle", { cx: "7", cy: "18", r: "3" }]
  ];

  // node_modules/lucide/dist/esm/icons/redo-2.mjs
  var Redo2 = [
    ["path", { d: "m15 14 5-5-5-5" }],
    ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }]
  ];

  // node_modules/lucide/dist/esm/icons/rotate-ccw.mjs
  var RotateCcw = [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
    ["path", { d: "M3 3v5h5" }]
  ];

  // node_modules/lucide/dist/esm/icons/scissors.mjs
  var Scissors = [
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["path", { d: "M8.12 8.12 12 12" }],
    ["path", { d: "M20 4 8.12 15.88" }],
    ["circle", { cx: "6", cy: "18", r: "3" }],
    ["path", { d: "M14.8 14.8 20 20" }]
  ];

  // node_modules/lucide/dist/esm/icons/shirt.mjs
  var Shirt = [
    [
      "path",
      {
        d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
      }
    ]
  ];

  // node_modules/lucide/dist/esm/icons/shuffle.mjs
  var Shuffle = [
    ["path", { d: "m18 14 4 4-4 4" }],
    ["path", { d: "m18 2 4 4-4 4" }],
    ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" }],
    ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2" }],
    ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" }]
  ];

  // node_modules/lucide/dist/esm/icons/sparkles.mjs
  var Sparkles = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
      }
    ],
    ["path", { d: "M20 2v4" }],
    ["path", { d: "M22 4h-4" }],
    ["circle", { cx: "4", cy: "20", r: "2" }]
  ];

  // node_modules/lucide/dist/esm/icons/undo-2.mjs
  var Undo2 = [
    ["path", { d: "M9 14 4 9l5-5" }],
    ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]
  ];

  // node_modules/lucide/dist/esm/icons/users-round.mjs
  var UsersRound = [
    ["path", { d: "M18 21a8 8 0 0 0-16 0" }],
    ["circle", { cx: "10", cy: "8", r: "5" }],
    ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]
  ];

  // node_modules/lucide/dist/esm/lucide.mjs
  var createIcons = ({
    icons = {},
    nameAttr = "data-lucide",
    attrs = {},
    root = document,
    inTemplates
  } = {}) => {
    if (!Object.values(icons).length) {
      throw new Error(
        "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
      );
    }
    if (typeof root === "undefined") {
      throw new Error("`createIcons()` only works in a browser environment.");
    }
    const elementsToReplace = Array.from(root.querySelectorAll(`[${nameAttr}]`));
    elementsToReplace.forEach((element) => replaceElement(element, { nameAttr, icons, attrs }));
    if (inTemplates) {
      const templates = Array.from(root.querySelectorAll("template"));
      templates.forEach(
        (template) => createIcons({
          icons,
          nameAttr,
          attrs,
          root: template.content,
          inTemplates
        })
      );
    }
    if (nameAttr === "data-lucide") {
      const deprecatedElements = root.querySelectorAll("[icon-name]");
      if (deprecatedElements.length > 0) {
        console.warn(
          "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
        );
        Array.from(deprecatedElements).forEach(
          (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
        );
      }
    }
  };

  // coach/catalog.js
  var catalogChoices = {
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
      { id: "default", label: "Open eyes" },
      { id: "happy", label: "Happy eyes" },
      { id: "side", label: "Side glance" },
      { id: "wink", label: "Wink" }
    ],
    mouth: [
      { id: "smile", label: "Smile" },
      { id: "serious", label: "Neutral" },
      { id: "twinkle", label: "Grin" },
      { id: "screamOpen", label: "Open" }
    ],
    brows: [
      { id: "default", label: "Natural" },
      { id: "raisedExcited", label: "Raised" },
      { id: "flatNatural", label: "Straight" },
      { id: "sadConcerned", label: "Thoughtful" }
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
      { id: "none", label: "No glasses" },
      { id: "round", label: "Round" },
      { id: "prescription02", label: "Square" },
      { id: "prescription01", label: "Half frame" },
      { id: "wayfarers", label: "Wayfarer" },
      { id: "sunglasses", label: "Sunglasses" },
      { id: "cat-eye", label: "Cat-eye" },
      { id: "monocle", label: "Monocle" }
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
      { id: "none", label: "None" },
      { id: "tie", label: "Tie" },
      { id: "bow-tie", label: "Bow tie" },
      { id: "scarf", label: "Scarf" },
      { id: "bandana", label: "Bandana" },
      { id: "ascot", label: "Ascot" },
      { id: "pearls", label: "Pearls" }
    ],
    hats: [
      { id: "none", label: "No hat" },
      { id: "hat", label: "Flat cap" },
      { id: "beret", label: "Beret" },
      { id: "sun-hat", label: "Sun hat" },
      { id: "winterHat04", label: "Beanie" },
      { id: "fedora", label: "Fedora" },
      { id: "hijab", label: "Headscarf" }
    ],
    extras: [
      { id: "brooch", label: "Brooch" },
      { id: "star-pin", label: "Star pin" },
      { id: "medal", label: "Medal" },
      { id: "flower", label: "Lapel flower" },
      { id: "pocket-square", label: "Pocket square" },
      { id: "earrings", label: "Earrings" },
      { id: "badge", label: "Name badge" },
      { id: "chain", label: "Watch chain" }
    ]
  };
  var slotFor = {
    base: "base",
    hair: "hair",
    eyes: "face",
    mouth: "face",
    brows: "face",
    facialHair: "face",
    glasses: "glasses",
    clothes: "clothes",
    neckwear: "neckwear",
    hats: "hats",
    extras: "extras"
  };
  var variantFor = {
    hair: (id) => ({ topVariant: id }),
    hats: (id) => ({ topVariant: id }),
    clothes: (id) => ({ clothesVariant: id }),
    glasses: (id) => ({ accessoriesVariant: id }),
    eyes: (id) => ({ eyesVariant: id }),
    mouth: (id) => ({ mouthVariant: id }),
    brows: (id) => ({ eyebrowsVariant: id }),
    facialHair: (id) => ({ facialHairVariant: id })
  };
  var COACH_BASES = ["woman", "man"];
  var HAIR_DEFAULTS = { woman: "longButNotTooLong", man: "shortWaved" };
  var COACH_PALETTE = {
    ink: "#141b2b",
    yellow: "#ffe600",
    blue: "#0058be",
    red: "#dc2c4f",
    green: "#16845c",
    skin: ["#f8dfc2", "#edb98a", "#d08b5b", "#ae5d29", "#8e5d46", "#684536"],
    hair: ["#f4f0e6", "#aeb7c4", "#292b31", "#5a4035", "#a94f36", "#e0b85f"],
    clothes: ["#141b2b", "#0058be", "#dc2c4f", "#16845c", "#ffe600", "#168c91", "#e67825", "#e6e6e6", "#fffefd"],
    glasses: ["#141b2b", "#0058be", "#dc2c4f", "#e0b85f", "#fffefd"]
  };
  var COACH_CATEGORIES = [
    { id: "base", label: "Player", icon: "users-round", description: "Choose your avatar style and skin tone." },
    { id: "hair", label: "Hair", icon: "scissors", description: "Find a style and color that fits." },
    { id: "face", label: "Face", icon: "smile", description: "Set the expression and facial hair." },
    { id: "glasses", label: "Glasses", icon: "glasses", description: "Add a signature pair." },
    { id: "clothes", label: "Clothes", icon: "shirt", description: "Build a look with color and pattern." },
    { id: "neckwear", label: "Neckwear", icon: "badge", description: "Finish the collar and neckline." },
    { id: "hats", label: "Hats", icon: "hat-glasses", description: "Try a hat or head covering." },
    { id: "extras", label: "Extras", icon: "sparkles", description: "Add up to three small details." }
  ];
  var COACH_PARTS = Object.entries(catalogChoices).flatMap(([choice, items]) => items.map((item, index) => ({
    id: item.id,
    slot: slotFor[choice],
    choice,
    label: item.label,
    bases: item.bases || COACH_BASES,
    z: choice === "base" ? 0 : choice === "hair" || choice === "hats" ? 50 : choice === "extras" ? 90 : 60,
    colourSlots: { hair: ["hair"], glasses: ["glasses"], clothes: ["top"], neckwear: ["neck"], hats: ["hat"], extras: ["accessories"] }[choice] || [],
    hides: choice === "hats" && item.id !== "none" ? ["hair"] : [],
    variant: variantFor[choice]?.(item.id) || {},
    order: index
  })));
  var coachOptionsFor = (choice, base = "woman") => COACH_PARTS.filter((part) => part.choice === choice && part.bases.includes(base));

  // node_modules/@dicebear/core/lib/Error/ValidationError.js
  var ValidationError = class extends Error {
    constructor(prefix, details) {
      const parts = [];
      for (const detail of details) {
        const segments = [];
        if (detail.instancePath) {
          segments.push(detail.instancePath);
        }
        if (detail.message) {
          segments.push(detail.message);
        }
        parts.push(segments.join(" "));
      }
      super(`${prefix}: ${parts.join(", ")}`);
      this.name = "ValidationError";
      this.details = details;
    }
  };

  // node_modules/@dicebear/core/lib/Error/StyleValidationError.js
  var StyleValidationError = class extends ValidationError {
    constructor(details) {
      super("Invalid style definition", details);
      this.name = "StyleValidationError";
    }
  };

  // node_modules/@dicebear/core/lib/Validator/StyleValidator.js
  var validate = (function() {
    "use strict";
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pattern0 = new RegExp("^https?:\\/\\/", "u");
    const ref1 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        const prev0 = errorCount;
        if (data.length > 2048 && stringLength(data) > 2048) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        if (errorCount === prev0) {
          if (!pattern0.test(data)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/pattern", instanceLocation: "#" });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const errorMerge = ({ keywordLocation, instanceLocation }, schemaBase, dataBase) => ({
      keywordLocation: `${schemaBase}${keywordLocation.slice(1)}`,
      instanceLocation: `${dataBase}${instanceLocation.slice(1)}`
    });
    const pointerPart = (s) => /~\//.test(s) ? `${s}`.replace(/~/g, "~0").replace(/\//g, "~1") : s;
    const pattern1 = new RegExp("[uU][rR][lL][ \\t\\n\\f\\r]*\\([ \\t\\n\\f\\r]*[^#) \\t\\n\\f\\r]", "u");
    const pattern2 = new RegExp("[eE][xX][pP][rR][eE][sS][sS][iI][oO][nN][ \\t\\n\\f\\r]*\\(", "u");
    const pattern3 = new RegExp("[bB][eE][hH][aA][vV][iI][oO][rR][ \\t\\n\\f\\r]*:", "u");
    const pattern4 = new RegExp("-[mM][oO][zZ]-[bB][iI][nN][dD][iI][nN][gG]", "u");
    const pattern5 = new RegExp("[jJ][aA][vV][aA][sS][cC][rR][iI][pP][tT][ \\t\\n\\f\\r]*:", "u");
    const pattern6 = new RegExp("[vV][bB][sS][cC][rR][iI][pP][tT][ \\t\\n\\f\\r]*:", "u");
    const pattern7 = new RegExp("\\\\", "u");
    const ref4 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (data.length > 16384 && stringLength(data) > 16384) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        const sub0 = (() => {
          let errorCount2 = 0;
          let suberr3 = null;
          const sub1 = (() => {
            let errorCount3 = 0;
            const prev1 = errorCount3;
            if (errorCount3 === prev1) {
              if (!pattern1.test(data)) {
                if (suberr3 === null)
                  suberr3 = [];
                suberr3.push({ keywordLocation: "#/not/anyOf/0/pattern", instanceLocation: "#" });
                errorCount3++;
              }
            }
            return errorCount3 === 0;
          })();
          if (!sub1) {
            const sub2 = (() => {
              let errorCount3 = 0;
              const prev2 = errorCount3;
              if (errorCount3 === prev2) {
                if (!pattern2.test(data)) {
                  if (suberr3 === null)
                    suberr3 = [];
                  suberr3.push({ keywordLocation: "#/not/anyOf/1/pattern", instanceLocation: "#" });
                  errorCount3++;
                }
              }
              return errorCount3 === 0;
            })();
            if (!sub2) {
              const sub3 = (() => {
                let errorCount3 = 0;
                const prev3 = errorCount3;
                if (errorCount3 === prev3) {
                  if (!pattern3.test(data)) {
                    if (suberr3 === null)
                      suberr3 = [];
                    suberr3.push({ keywordLocation: "#/not/anyOf/2/pattern", instanceLocation: "#" });
                    errorCount3++;
                  }
                }
                return errorCount3 === 0;
              })();
              if (!sub3) {
                const sub4 = (() => {
                  let errorCount3 = 0;
                  const prev4 = errorCount3;
                  if (errorCount3 === prev4) {
                    if (!pattern4.test(data)) {
                      if (suberr3 === null)
                        suberr3 = [];
                      suberr3.push({ keywordLocation: "#/not/anyOf/3/pattern", instanceLocation: "#" });
                      errorCount3++;
                    }
                  }
                  return errorCount3 === 0;
                })();
                if (!sub4) {
                  const sub5 = (() => {
                    let errorCount3 = 0;
                    const prev5 = errorCount3;
                    if (errorCount3 === prev5) {
                      if (!pattern5.test(data)) {
                        if (suberr3 === null)
                          suberr3 = [];
                        suberr3.push({ keywordLocation: "#/not/anyOf/4/pattern", instanceLocation: "#" });
                        errorCount3++;
                      }
                    }
                    return errorCount3 === 0;
                  })();
                  if (!sub5) {
                    const sub6 = (() => {
                      let errorCount3 = 0;
                      const prev6 = errorCount3;
                      if (errorCount3 === prev6) {
                        if (!pattern6.test(data)) {
                          if (suberr3 === null)
                            suberr3 = [];
                          suberr3.push({ keywordLocation: "#/not/anyOf/5/pattern", instanceLocation: "#" });
                          errorCount3++;
                        }
                      }
                      return errorCount3 === 0;
                    })();
                    if (!sub6) {
                      const sub7 = (() => {
                        let errorCount3 = 0;
                        const prev7 = errorCount3;
                        if (errorCount3 === prev7) {
                          if (!pattern7.test(data)) {
                            if (suberr3 === null)
                              suberr3 = [];
                            suberr3.push({ keywordLocation: "#/not/anyOf/6/pattern", instanceLocation: "#" });
                            errorCount3++;
                          }
                        }
                        return errorCount3 === 0;
                      })();
                      if (!sub7)
                        errorCount2++;
                    }
                  }
                }
              }
            }
          }
          return errorCount2 === 0;
        })();
        if (sub0) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/not", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref3 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (data.length > 1024 && stringLength(data) > 1024) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        const err3 = validate3.errors;
        const res3 = ref4(data);
        const suberr4 = ref4.errors;
        validate3.errors = err3;
        if (!res3) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push(...suberr4.map((e) => errorMerge(e, "#/allOf/0/$ref", "#")));
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const pattern8 = new RegExp("^[a-z][a-zA-Z0-9]*$", "u");
    const ref7 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        const prev8 = errorCount;
        if (data.length > 64 && stringLength(data) > 64) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        if (errorCount === prev8) {
          if (!pattern8.test(data)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/pattern", instanceLocation: "#" });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref6 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      const err15 = validate3.errors;
      const res15 = ref7(data);
      const suberr17 = ref7.errors;
      validate3.errors = err15;
      if (!res15) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push(...suberr17.map((e) => errorMerge(e, "#/allOf/0/$ref", "#")));
        errorCount++;
      }
      return errorCount === 0;
    };
    const ref5 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      let suberr15 = null;
      const sub8 = (() => {
        let errorCount2 = 0;
        const err14 = validate3.errors;
        const res14 = ref3(data);
        const suberr16 = ref3.errors;
        validate3.errors = err14;
        if (!res14) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push(...suberr16.map((e) => errorMerge(e, "#/anyOf/0/$ref", "#")));
          errorCount2++;
        }
        return errorCount2 === 0;
      })();
      if (!sub8) {
        const sub9 = (() => {
          let errorCount2 = 0;
          if (!(typeof data === "object" && data && !Array.isArray(data))) {
            if (suberr15 === null)
              suberr15 = [];
            suberr15.push({ keywordLocation: "#/anyOf/1/type", instanceLocation: "#" });
            errorCount2++;
          } else {
            if (!(data.type !== void 0 && hasOwn(data, "type"))) {
              if (suberr15 === null)
                suberr15 = [];
              suberr15.push({ keywordLocation: "#/anyOf/1/required", instanceLocation: "#/type" });
              errorCount2++;
            }
            if (!(data.name !== void 0 && hasOwn(data, "name"))) {
              if (suberr15 === null)
                suberr15 = [];
              suberr15.push({ keywordLocation: "#/anyOf/1/required", instanceLocation: "#/name" });
              errorCount2++;
            }
            if (data.type !== void 0 && hasOwn(data, "type")) {
              if (!(data.type === "color")) {
                if (suberr15 === null)
                  suberr15 = [];
                suberr15.push({ keywordLocation: "#/anyOf/1/properties/type/const", instanceLocation: "#/type" });
                errorCount2++;
              }
            }
            if (data.name !== void 0 && hasOwn(data, "name")) {
              const err16 = validate3.errors;
              const res16 = ref6(data.name);
              const suberr18 = ref6.errors;
              validate3.errors = err16;
              if (!res16) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr18.map((e) => errorMerge(e, "#/anyOf/1/properties/name/$ref", "#/name")));
                errorCount2++;
              }
            }
            for (const key4 of Object.keys(data)) {
              if (key4 !== "type" && key4 !== "name") {
                if (suberr15 === null)
                  suberr15 = [];
                suberr15.push({ keywordLocation: "#/anyOf/1/additionalProperties", instanceLocation: "#/" + pointerPart(key4) });
                errorCount2++;
              }
            }
          }
          return errorCount2 === 0;
        })();
        if (!sub9) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/anyOf", instanceLocation: "#" });
          if (suberr15)
            validate3.errors.push(...suberr15);
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref8 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (data.length > 16384 && stringLength(data) > 16384) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        const err23 = validate3.errors;
        const res23 = ref4(data);
        const suberr25 = ref4.errors;
        validate3.errors = err23;
        if (!res23) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push(...suberr25.map((e) => errorMerge(e, "#/allOf/0/$ref", "#")));
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const pattern9 = new RegExp("^#[a-zA-Z_][a-zA-Z0-9_.-]*$", "u");
    const pattern10 = new RegExp("^data:image\\/(png|gif|jpeg|webp|avif);base64,[a-zA-Z0-9+/=]+$", "u");
    const pattern11 = new RegExp("@[iI][mM][pP][oO][rR][tT]", "u");
    const pattern12 = new RegExp("@[fF][oO][nN][tT]-[fF][aA][cC][eE]", "u");
    const pattern13 = new RegExp("@[dD][oO][cC][uU][mM][eE][nN][tT]", "u");
    const pattern14 = new RegExp("@[cC][hH][aA][rR][sS][eE][tT]", "u");
    const ref9 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (data.length > 4096 && stringLength(data) > 4096) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        const sub16 = (() => {
          let errorCount2 = 0;
          let suberr130 = null;
          const sub17 = (() => {
            let errorCount3 = 0;
            const prev11 = errorCount3;
            if (errorCount3 === prev11) {
              if (!pattern11.test(data)) {
                if (suberr130 === null)
                  suberr130 = [];
                suberr130.push({ keywordLocation: "#/not/anyOf/0/pattern", instanceLocation: "#" });
                errorCount3++;
              }
            }
            return errorCount3 === 0;
          })();
          if (!sub17) {
            const sub18 = (() => {
              let errorCount3 = 0;
              const prev12 = errorCount3;
              if (errorCount3 === prev12) {
                if (!pattern12.test(data)) {
                  if (suberr130 === null)
                    suberr130 = [];
                  suberr130.push({ keywordLocation: "#/not/anyOf/1/pattern", instanceLocation: "#" });
                  errorCount3++;
                }
              }
              return errorCount3 === 0;
            })();
            if (!sub18) {
              const sub19 = (() => {
                let errorCount3 = 0;
                const prev13 = errorCount3;
                if (errorCount3 === prev13) {
                  if (!pattern13.test(data)) {
                    if (suberr130 === null)
                      suberr130 = [];
                    suberr130.push({ keywordLocation: "#/not/anyOf/2/pattern", instanceLocation: "#" });
                    errorCount3++;
                  }
                }
                return errorCount3 === 0;
              })();
              if (!sub19) {
                const sub20 = (() => {
                  let errorCount3 = 0;
                  const prev14 = errorCount3;
                  if (errorCount3 === prev14) {
                    if (!pattern14.test(data)) {
                      if (suberr130 === null)
                        suberr130 = [];
                      suberr130.push({ keywordLocation: "#/not/anyOf/3/pattern", instanceLocation: "#" });
                      errorCount3++;
                    }
                  }
                  return errorCount3 === 0;
                })();
                if (!sub20)
                  errorCount2++;
              }
            }
          }
          return errorCount2 === 0;
        })();
        if (sub16) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/not", instanceLocation: "#" });
          errorCount++;
        }
        const err125 = validate3.errors;
        const res125 = ref4(data);
        const suberr131 = ref4.errors;
        validate3.errors = err125;
        if (!res125) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push(...suberr131.map((e) => errorMerge(e, "#/allOf/0/$ref", "#")));
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref2 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (data["alignment-baseline"] !== void 0 && hasOwn(data, "alignment-baseline")) {
          const err4 = validate3.errors;
          const res4 = ref3(data["alignment-baseline"]);
          const suberr5 = ref3.errors;
          validate3.errors = err4;
          if (!res4) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr5.map((e) => errorMerge(e, "#/properties/alignment-baseline/$ref", "#/alignment-baseline")));
            errorCount++;
          }
        }
        if (data.amplitude !== void 0 && hasOwn(data, "amplitude")) {
          const err5 = validate3.errors;
          const res5 = ref3(data.amplitude);
          const suberr6 = ref3.errors;
          validate3.errors = err5;
          if (!res5) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr6.map((e) => errorMerge(e, "#/properties/amplitude/$ref", "#/amplitude")));
            errorCount++;
          }
        }
        if (data.azimuth !== void 0 && hasOwn(data, "azimuth")) {
          const err6 = validate3.errors;
          const res6 = ref3(data.azimuth);
          const suberr7 = ref3.errors;
          validate3.errors = err6;
          if (!res6) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr7.map((e) => errorMerge(e, "#/properties/azimuth/$ref", "#/azimuth")));
            errorCount++;
          }
        }
        if (data.baseFrequency !== void 0 && hasOwn(data, "baseFrequency")) {
          const err7 = validate3.errors;
          const res7 = ref3(data.baseFrequency);
          const suberr8 = ref3.errors;
          validate3.errors = err7;
          if (!res7) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr8.map((e) => errorMerge(e, "#/properties/baseFrequency/$ref", "#/baseFrequency")));
            errorCount++;
          }
        }
        if (data["baseline-shift"] !== void 0 && hasOwn(data, "baseline-shift")) {
          const err8 = validate3.errors;
          const res8 = ref3(data["baseline-shift"]);
          const suberr9 = ref3.errors;
          validate3.errors = err8;
          if (!res8) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr9.map((e) => errorMerge(e, "#/properties/baseline-shift/$ref", "#/baseline-shift")));
            errorCount++;
          }
        }
        if (data.bias !== void 0 && hasOwn(data, "bias")) {
          const err9 = validate3.errors;
          const res9 = ref3(data.bias);
          const suberr10 = ref3.errors;
          validate3.errors = err9;
          if (!res9) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr10.map((e) => errorMerge(e, "#/properties/bias/$ref", "#/bias")));
            errorCount++;
          }
        }
        if (data.class !== void 0 && hasOwn(data, "class")) {
          const err10 = validate3.errors;
          const res10 = ref3(data.class);
          const suberr11 = ref3.errors;
          validate3.errors = err10;
          if (!res10) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr11.map((e) => errorMerge(e, "#/properties/class/$ref", "#/class")));
            errorCount++;
          }
        }
        if (data.clipPathUnits !== void 0 && hasOwn(data, "clipPathUnits")) {
          const err11 = validate3.errors;
          const res11 = ref3(data.clipPathUnits);
          const suberr12 = ref3.errors;
          validate3.errors = err11;
          if (!res11) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr12.map((e) => errorMerge(e, "#/properties/clipPathUnits/$ref", "#/clipPathUnits")));
            errorCount++;
          }
        }
        if (data["clip-path"] !== void 0 && hasOwn(data, "clip-path")) {
          const err12 = validate3.errors;
          const res12 = ref3(data["clip-path"]);
          const suberr13 = ref3.errors;
          validate3.errors = err12;
          if (!res12) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr13.map((e) => errorMerge(e, "#/properties/clip-path/$ref", "#/clip-path")));
            errorCount++;
          }
        }
        if (data["clip-rule"] !== void 0 && hasOwn(data, "clip-rule")) {
          const err13 = validate3.errors;
          const res13 = ref3(data["clip-rule"]);
          const suberr14 = ref3.errors;
          validate3.errors = err13;
          if (!res13) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr14.map((e) => errorMerge(e, "#/properties/clip-rule/$ref", "#/clip-rule")));
            errorCount++;
          }
        }
        if (data.color !== void 0 && hasOwn(data, "color")) {
          const err17 = validate3.errors;
          const res17 = ref5(data.color);
          const suberr19 = ref5.errors;
          validate3.errors = err17;
          if (!res17) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr19.map((e) => errorMerge(e, "#/properties/color/$ref", "#/color")));
            errorCount++;
          }
        }
        if (data["color-interpolation"] !== void 0 && hasOwn(data, "color-interpolation")) {
          const err18 = validate3.errors;
          const res18 = ref3(data["color-interpolation"]);
          const suberr20 = ref3.errors;
          validate3.errors = err18;
          if (!res18) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr20.map((e) => errorMerge(e, "#/properties/color-interpolation/$ref", "#/color-interpolation")));
            errorCount++;
          }
        }
        if (data["color-interpolation-filters"] !== void 0 && hasOwn(data, "color-interpolation-filters")) {
          const err19 = validate3.errors;
          const res19 = ref3(data["color-interpolation-filters"]);
          const suberr21 = ref3.errors;
          validate3.errors = err19;
          if (!res19) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr21.map((e) => errorMerge(e, "#/properties/color-interpolation-filters/$ref", "#/color-interpolation-filters")));
            errorCount++;
          }
        }
        if (data.crossorigin !== void 0 && hasOwn(data, "crossorigin")) {
          const err20 = validate3.errors;
          const res20 = ref3(data.crossorigin);
          const suberr22 = ref3.errors;
          validate3.errors = err20;
          if (!res20) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr22.map((e) => errorMerge(e, "#/properties/crossorigin/$ref", "#/crossorigin")));
            errorCount++;
          }
        }
        if (data.cx !== void 0 && hasOwn(data, "cx")) {
          const err21 = validate3.errors;
          const res21 = ref3(data.cx);
          const suberr23 = ref3.errors;
          validate3.errors = err21;
          if (!res21) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr23.map((e) => errorMerge(e, "#/properties/cx/$ref", "#/cx")));
            errorCount++;
          }
        }
        if (data.cy !== void 0 && hasOwn(data, "cy")) {
          const err22 = validate3.errors;
          const res22 = ref3(data.cy);
          const suberr24 = ref3.errors;
          validate3.errors = err22;
          if (!res22) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr24.map((e) => errorMerge(e, "#/properties/cy/$ref", "#/cy")));
            errorCount++;
          }
        }
        if (data.d !== void 0 && hasOwn(data, "d")) {
          const err24 = validate3.errors;
          const res24 = ref8(data.d);
          const suberr26 = ref8.errors;
          validate3.errors = err24;
          if (!res24) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr26.map((e) => errorMerge(e, "#/properties/d/$ref", "#/d")));
            errorCount++;
          }
        }
        if (data.decoding !== void 0 && hasOwn(data, "decoding")) {
          const err25 = validate3.errors;
          const res25 = ref3(data.decoding);
          const suberr27 = ref3.errors;
          validate3.errors = err25;
          if (!res25) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr27.map((e) => errorMerge(e, "#/properties/decoding/$ref", "#/decoding")));
            errorCount++;
          }
        }
        if (data.diffuseConstant !== void 0 && hasOwn(data, "diffuseConstant")) {
          const err26 = validate3.errors;
          const res26 = ref3(data.diffuseConstant);
          const suberr28 = ref3.errors;
          validate3.errors = err26;
          if (!res26) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr28.map((e) => errorMerge(e, "#/properties/diffuseConstant/$ref", "#/diffuseConstant")));
            errorCount++;
          }
        }
        if (data.direction !== void 0 && hasOwn(data, "direction")) {
          const err27 = validate3.errors;
          const res27 = ref3(data.direction);
          const suberr29 = ref3.errors;
          validate3.errors = err27;
          if (!res27) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr29.map((e) => errorMerge(e, "#/properties/direction/$ref", "#/direction")));
            errorCount++;
          }
        }
        if (data.display !== void 0 && hasOwn(data, "display")) {
          const err28 = validate3.errors;
          const res28 = ref3(data.display);
          const suberr30 = ref3.errors;
          validate3.errors = err28;
          if (!res28) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr30.map((e) => errorMerge(e, "#/properties/display/$ref", "#/display")));
            errorCount++;
          }
        }
        if (data.divisor !== void 0 && hasOwn(data, "divisor")) {
          const err29 = validate3.errors;
          const res29 = ref3(data.divisor);
          const suberr31 = ref3.errors;
          validate3.errors = err29;
          if (!res29) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr31.map((e) => errorMerge(e, "#/properties/divisor/$ref", "#/divisor")));
            errorCount++;
          }
        }
        if (data["dominant-baseline"] !== void 0 && hasOwn(data, "dominant-baseline")) {
          const err30 = validate3.errors;
          const res30 = ref3(data["dominant-baseline"]);
          const suberr32 = ref3.errors;
          validate3.errors = err30;
          if (!res30) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr32.map((e) => errorMerge(e, "#/properties/dominant-baseline/$ref", "#/dominant-baseline")));
            errorCount++;
          }
        }
        if (data.dx !== void 0 && hasOwn(data, "dx")) {
          const err31 = validate3.errors;
          const res31 = ref3(data.dx);
          const suberr33 = ref3.errors;
          validate3.errors = err31;
          if (!res31) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr33.map((e) => errorMerge(e, "#/properties/dx/$ref", "#/dx")));
            errorCount++;
          }
        }
        if (data.dy !== void 0 && hasOwn(data, "dy")) {
          const err32 = validate3.errors;
          const res32 = ref3(data.dy);
          const suberr34 = ref3.errors;
          validate3.errors = err32;
          if (!res32) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr34.map((e) => errorMerge(e, "#/properties/dy/$ref", "#/dy")));
            errorCount++;
          }
        }
        if (data.edgeMode !== void 0 && hasOwn(data, "edgeMode")) {
          const err33 = validate3.errors;
          const res33 = ref3(data.edgeMode);
          const suberr35 = ref3.errors;
          validate3.errors = err33;
          if (!res33) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr35.map((e) => errorMerge(e, "#/properties/edgeMode/$ref", "#/edgeMode")));
            errorCount++;
          }
        }
        if (data.elevation !== void 0 && hasOwn(data, "elevation")) {
          const err34 = validate3.errors;
          const res34 = ref3(data.elevation);
          const suberr36 = ref3.errors;
          validate3.errors = err34;
          if (!res34) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr36.map((e) => errorMerge(e, "#/properties/elevation/$ref", "#/elevation")));
            errorCount++;
          }
        }
        if (data.exponent !== void 0 && hasOwn(data, "exponent")) {
          const err35 = validate3.errors;
          const res35 = ref3(data.exponent);
          const suberr37 = ref3.errors;
          validate3.errors = err35;
          if (!res35) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr37.map((e) => errorMerge(e, "#/properties/exponent/$ref", "#/exponent")));
            errorCount++;
          }
        }
        if (data.fill !== void 0 && hasOwn(data, "fill")) {
          const err36 = validate3.errors;
          const res36 = ref5(data.fill);
          const suberr38 = ref5.errors;
          validate3.errors = err36;
          if (!res36) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr38.map((e) => errorMerge(e, "#/properties/fill/$ref", "#/fill")));
            errorCount++;
          }
        }
        if (data["fill-opacity"] !== void 0 && hasOwn(data, "fill-opacity")) {
          const err37 = validate3.errors;
          const res37 = ref3(data["fill-opacity"]);
          const suberr39 = ref3.errors;
          validate3.errors = err37;
          if (!res37) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr39.map((e) => errorMerge(e, "#/properties/fill-opacity/$ref", "#/fill-opacity")));
            errorCount++;
          }
        }
        if (data["fill-rule"] !== void 0 && hasOwn(data, "fill-rule")) {
          const err38 = validate3.errors;
          const res38 = ref3(data["fill-rule"]);
          const suberr40 = ref3.errors;
          validate3.errors = err38;
          if (!res38) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr40.map((e) => errorMerge(e, "#/properties/fill-rule/$ref", "#/fill-rule")));
            errorCount++;
          }
        }
        if (data.filter !== void 0 && hasOwn(data, "filter")) {
          const err39 = validate3.errors;
          const res39 = ref3(data.filter);
          const suberr41 = ref3.errors;
          validate3.errors = err39;
          if (!res39) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr41.map((e) => errorMerge(e, "#/properties/filter/$ref", "#/filter")));
            errorCount++;
          }
        }
        if (data.filterUnits !== void 0 && hasOwn(data, "filterUnits")) {
          const err40 = validate3.errors;
          const res40 = ref3(data.filterUnits);
          const suberr42 = ref3.errors;
          validate3.errors = err40;
          if (!res40) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr42.map((e) => errorMerge(e, "#/properties/filterUnits/$ref", "#/filterUnits")));
            errorCount++;
          }
        }
        if (data["flood-color"] !== void 0 && hasOwn(data, "flood-color")) {
          const err41 = validate3.errors;
          const res41 = ref5(data["flood-color"]);
          const suberr43 = ref5.errors;
          validate3.errors = err41;
          if (!res41) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr43.map((e) => errorMerge(e, "#/properties/flood-color/$ref", "#/flood-color")));
            errorCount++;
          }
        }
        if (data["flood-opacity"] !== void 0 && hasOwn(data, "flood-opacity")) {
          const err42 = validate3.errors;
          const res42 = ref3(data["flood-opacity"]);
          const suberr44 = ref3.errors;
          validate3.errors = err42;
          if (!res42) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr44.map((e) => errorMerge(e, "#/properties/flood-opacity/$ref", "#/flood-opacity")));
            errorCount++;
          }
        }
        if (data["font-family"] !== void 0 && hasOwn(data, "font-family")) {
          let suberr45 = null;
          const sub10 = (() => {
            let errorCount2 = 0;
            const err43 = validate3.errors;
            const res43 = ref3(data["font-family"]);
            const suberr46 = ref3.errors;
            validate3.errors = err43;
            if (!res43) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push(...suberr46.map((e) => errorMerge(e, "#/properties/font-family/anyOf/0/$ref", "#/font-family")));
              errorCount2++;
            }
            return errorCount2 === 0;
          })();
          if (!sub10) {
            const sub11 = (() => {
              let errorCount2 = 0;
              if (!(typeof data["font-family"] === "object" && data["font-family"] && !Array.isArray(data["font-family"]))) {
                if (suberr45 === null)
                  suberr45 = [];
                suberr45.push({ keywordLocation: "#/properties/font-family/anyOf/1/type", instanceLocation: "#/font-family" });
                errorCount2++;
              } else {
                if (!(data["font-family"].type !== void 0 && hasOwn(data["font-family"], "type"))) {
                  if (suberr45 === null)
                    suberr45 = [];
                  suberr45.push({ keywordLocation: "#/properties/font-family/anyOf/1/required", instanceLocation: "#/font-family/type" });
                  errorCount2++;
                }
                if (!(data["font-family"].name !== void 0 && hasOwn(data["font-family"], "name"))) {
                  if (suberr45 === null)
                    suberr45 = [];
                  suberr45.push({ keywordLocation: "#/properties/font-family/anyOf/1/required", instanceLocation: "#/font-family/name" });
                  errorCount2++;
                }
                if (data["font-family"].type !== void 0 && hasOwn(data["font-family"], "type")) {
                  if (!(data["font-family"].type === "variable")) {
                    if (suberr45 === null)
                      suberr45 = [];
                    suberr45.push({ keywordLocation: "#/properties/font-family/anyOf/1/properties/type/const", instanceLocation: "#/font-family/type" });
                    errorCount2++;
                  }
                }
                if (data["font-family"].name !== void 0 && hasOwn(data["font-family"], "name")) {
                  if (!(data["font-family"].name === "fontFamily")) {
                    if (suberr45 === null)
                      suberr45 = [];
                    suberr45.push({ keywordLocation: "#/properties/font-family/anyOf/1/properties/name/const", instanceLocation: "#/font-family/name" });
                    errorCount2++;
                  }
                }
                for (const key5 of Object.keys(data["font-family"])) {
                  if (key5 !== "type" && key5 !== "name") {
                    if (suberr45 === null)
                      suberr45 = [];
                    suberr45.push({ keywordLocation: "#/properties/font-family/anyOf/1/additionalProperties", instanceLocation: "#/font-family/" + pointerPart(key5) });
                    errorCount2++;
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub11) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/font-family/anyOf", instanceLocation: "#/font-family" });
              if (suberr45)
                validate3.errors.push(...suberr45);
              errorCount++;
            }
          }
        }
        if (data["font-size"] !== void 0 && hasOwn(data, "font-size")) {
          const err44 = validate3.errors;
          const res44 = ref3(data["font-size"]);
          const suberr47 = ref3.errors;
          validate3.errors = err44;
          if (!res44) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr47.map((e) => errorMerge(e, "#/properties/font-size/$ref", "#/font-size")));
            errorCount++;
          }
        }
        if (data["font-size-adjust"] !== void 0 && hasOwn(data, "font-size-adjust")) {
          const err45 = validate3.errors;
          const res45 = ref3(data["font-size-adjust"]);
          const suberr48 = ref3.errors;
          validate3.errors = err45;
          if (!res45) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr48.map((e) => errorMerge(e, "#/properties/font-size-adjust/$ref", "#/font-size-adjust")));
            errorCount++;
          }
        }
        if (data["font-style"] !== void 0 && hasOwn(data, "font-style")) {
          const err46 = validate3.errors;
          const res46 = ref3(data["font-style"]);
          const suberr49 = ref3.errors;
          validate3.errors = err46;
          if (!res46) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr49.map((e) => errorMerge(e, "#/properties/font-style/$ref", "#/font-style")));
            errorCount++;
          }
        }
        if (data["font-variant"] !== void 0 && hasOwn(data, "font-variant")) {
          const err47 = validate3.errors;
          const res47 = ref3(data["font-variant"]);
          const suberr50 = ref3.errors;
          validate3.errors = err47;
          if (!res47) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr50.map((e) => errorMerge(e, "#/properties/font-variant/$ref", "#/font-variant")));
            errorCount++;
          }
        }
        if (data["font-weight"] !== void 0 && hasOwn(data, "font-weight")) {
          let suberr51 = null;
          const sub12 = (() => {
            let errorCount2 = 0;
            const err48 = validate3.errors;
            const res48 = ref3(data["font-weight"]);
            const suberr52 = ref3.errors;
            validate3.errors = err48;
            if (!res48) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push(...suberr52.map((e) => errorMerge(e, "#/properties/font-weight/anyOf/0/$ref", "#/font-weight")));
              errorCount2++;
            }
            return errorCount2 === 0;
          })();
          if (!sub12) {
            const sub13 = (() => {
              let errorCount2 = 0;
              if (!(typeof data["font-weight"] === "object" && data["font-weight"] && !Array.isArray(data["font-weight"]))) {
                if (suberr51 === null)
                  suberr51 = [];
                suberr51.push({ keywordLocation: "#/properties/font-weight/anyOf/1/type", instanceLocation: "#/font-weight" });
                errorCount2++;
              } else {
                if (!(data["font-weight"].type !== void 0 && hasOwn(data["font-weight"], "type"))) {
                  if (suberr51 === null)
                    suberr51 = [];
                  suberr51.push({ keywordLocation: "#/properties/font-weight/anyOf/1/required", instanceLocation: "#/font-weight/type" });
                  errorCount2++;
                }
                if (!(data["font-weight"].name !== void 0 && hasOwn(data["font-weight"], "name"))) {
                  if (suberr51 === null)
                    suberr51 = [];
                  suberr51.push({ keywordLocation: "#/properties/font-weight/anyOf/1/required", instanceLocation: "#/font-weight/name" });
                  errorCount2++;
                }
                if (data["font-weight"].type !== void 0 && hasOwn(data["font-weight"], "type")) {
                  if (!(data["font-weight"].type === "variable")) {
                    if (suberr51 === null)
                      suberr51 = [];
                    suberr51.push({ keywordLocation: "#/properties/font-weight/anyOf/1/properties/type/const", instanceLocation: "#/font-weight/type" });
                    errorCount2++;
                  }
                }
                if (data["font-weight"].name !== void 0 && hasOwn(data["font-weight"], "name")) {
                  if (!(data["font-weight"].name === "fontWeight")) {
                    if (suberr51 === null)
                      suberr51 = [];
                    suberr51.push({ keywordLocation: "#/properties/font-weight/anyOf/1/properties/name/const", instanceLocation: "#/font-weight/name" });
                    errorCount2++;
                  }
                }
                for (const key6 of Object.keys(data["font-weight"])) {
                  if (key6 !== "type" && key6 !== "name") {
                    if (suberr51 === null)
                      suberr51 = [];
                    suberr51.push({ keywordLocation: "#/properties/font-weight/anyOf/1/additionalProperties", instanceLocation: "#/font-weight/" + pointerPart(key6) });
                    errorCount2++;
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub13) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/font-weight/anyOf", instanceLocation: "#/font-weight" });
              if (suberr51)
                validate3.errors.push(...suberr51);
              errorCount++;
            }
          }
        }
        if (data.fx !== void 0 && hasOwn(data, "fx")) {
          const err49 = validate3.errors;
          const res49 = ref3(data.fx);
          const suberr53 = ref3.errors;
          validate3.errors = err49;
          if (!res49) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr53.map((e) => errorMerge(e, "#/properties/fx/$ref", "#/fx")));
            errorCount++;
          }
        }
        if (data.fy !== void 0 && hasOwn(data, "fy")) {
          const err50 = validate3.errors;
          const res50 = ref3(data.fy);
          const suberr54 = ref3.errors;
          validate3.errors = err50;
          if (!res50) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr54.map((e) => errorMerge(e, "#/properties/fy/$ref", "#/fy")));
            errorCount++;
          }
        }
        if (data.gradientTransform !== void 0 && hasOwn(data, "gradientTransform")) {
          const err51 = validate3.errors;
          const res51 = ref3(data.gradientTransform);
          const suberr55 = ref3.errors;
          validate3.errors = err51;
          if (!res51) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr55.map((e) => errorMerge(e, "#/properties/gradientTransform/$ref", "#/gradientTransform")));
            errorCount++;
          }
        }
        if (data.gradientUnits !== void 0 && hasOwn(data, "gradientUnits")) {
          const err52 = validate3.errors;
          const res52 = ref3(data.gradientUnits);
          const suberr56 = ref3.errors;
          validate3.errors = err52;
          if (!res52) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr56.map((e) => errorMerge(e, "#/properties/gradientUnits/$ref", "#/gradientUnits")));
            errorCount++;
          }
        }
        if (data.height !== void 0 && hasOwn(data, "height")) {
          const err53 = validate3.errors;
          const res53 = ref3(data.height);
          const suberr57 = ref3.errors;
          validate3.errors = err53;
          if (!res53) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr57.map((e) => errorMerge(e, "#/properties/height/$ref", "#/height")));
            errorCount++;
          }
        }
        if (data.href !== void 0 && hasOwn(data, "href")) {
          let suberr58 = null;
          const sub14 = (() => {
            let errorCount2 = 0;
            if (!(typeof data.href === "string")) {
              if (suberr58 === null)
                suberr58 = [];
              suberr58.push({ keywordLocation: "#/properties/href/anyOf/0/type", instanceLocation: "#/href" });
              errorCount2++;
            } else {
              const prev9 = errorCount2;
              if (data.href.length > 128 && stringLength(data.href) > 128) {
                if (suberr58 === null)
                  suberr58 = [];
                suberr58.push({ keywordLocation: "#/properties/href/anyOf/0/maxLength", instanceLocation: "#/href" });
                errorCount2++;
              }
              if (errorCount2 === prev9) {
                if (!pattern9.test(data.href)) {
                  if (suberr58 === null)
                    suberr58 = [];
                  suberr58.push({ keywordLocation: "#/properties/href/anyOf/0/pattern", instanceLocation: "#/href" });
                  errorCount2++;
                }
              }
            }
            return errorCount2 === 0;
          })();
          if (!sub14) {
            const sub15 = (() => {
              let errorCount2 = 0;
              if (!(typeof data.href === "string")) {
                if (suberr58 === null)
                  suberr58 = [];
                suberr58.push({ keywordLocation: "#/properties/href/anyOf/1/type", instanceLocation: "#/href" });
                errorCount2++;
              } else {
                const prev10 = errorCount2;
                if (data.href.length > 262144 && stringLength(data.href) > 262144) {
                  if (suberr58 === null)
                    suberr58 = [];
                  suberr58.push({ keywordLocation: "#/properties/href/anyOf/1/maxLength", instanceLocation: "#/href" });
                  errorCount2++;
                }
                if (errorCount2 === prev10) {
                  if (!pattern10.test(data.href)) {
                    if (suberr58 === null)
                      suberr58 = [];
                    suberr58.push({ keywordLocation: "#/properties/href/anyOf/1/pattern", instanceLocation: "#/href" });
                    errorCount2++;
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub15) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/href/anyOf", instanceLocation: "#/href" });
              if (suberr58)
                validate3.errors.push(...suberr58);
              errorCount++;
            }
          }
        }
        if (data.id !== void 0 && hasOwn(data, "id")) {
          const err54 = validate3.errors;
          const res54 = ref3(data.id);
          const suberr59 = ref3.errors;
          validate3.errors = err54;
          if (!res54) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr59.map((e) => errorMerge(e, "#/properties/id/$ref", "#/id")));
            errorCount++;
          }
        }
        if (data["image-rendering"] !== void 0 && hasOwn(data, "image-rendering")) {
          const err55 = validate3.errors;
          const res55 = ref3(data["image-rendering"]);
          const suberr60 = ref3.errors;
          validate3.errors = err55;
          if (!res55) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr60.map((e) => errorMerge(e, "#/properties/image-rendering/$ref", "#/image-rendering")));
            errorCount++;
          }
        }
        if (data.in !== void 0 && hasOwn(data, "in")) {
          const err56 = validate3.errors;
          const res56 = ref3(data.in);
          const suberr61 = ref3.errors;
          validate3.errors = err56;
          if (!res56) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr61.map((e) => errorMerge(e, "#/properties/in/$ref", "#/in")));
            errorCount++;
          }
        }
        if (data.in2 !== void 0 && hasOwn(data, "in2")) {
          const err57 = validate3.errors;
          const res57 = ref3(data.in2);
          const suberr62 = ref3.errors;
          validate3.errors = err57;
          if (!res57) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr62.map((e) => errorMerge(e, "#/properties/in2/$ref", "#/in2")));
            errorCount++;
          }
        }
        if (data.intercept !== void 0 && hasOwn(data, "intercept")) {
          const err58 = validate3.errors;
          const res58 = ref3(data.intercept);
          const suberr63 = ref3.errors;
          validate3.errors = err58;
          if (!res58) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr63.map((e) => errorMerge(e, "#/properties/intercept/$ref", "#/intercept")));
            errorCount++;
          }
        }
        if (data.k1 !== void 0 && hasOwn(data, "k1")) {
          const err59 = validate3.errors;
          const res59 = ref3(data.k1);
          const suberr64 = ref3.errors;
          validate3.errors = err59;
          if (!res59) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr64.map((e) => errorMerge(e, "#/properties/k1/$ref", "#/k1")));
            errorCount++;
          }
        }
        if (data.k2 !== void 0 && hasOwn(data, "k2")) {
          const err60 = validate3.errors;
          const res60 = ref3(data.k2);
          const suberr65 = ref3.errors;
          validate3.errors = err60;
          if (!res60) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr65.map((e) => errorMerge(e, "#/properties/k2/$ref", "#/k2")));
            errorCount++;
          }
        }
        if (data.k3 !== void 0 && hasOwn(data, "k3")) {
          const err61 = validate3.errors;
          const res61 = ref3(data.k3);
          const suberr66 = ref3.errors;
          validate3.errors = err61;
          if (!res61) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr66.map((e) => errorMerge(e, "#/properties/k3/$ref", "#/k3")));
            errorCount++;
          }
        }
        if (data.k4 !== void 0 && hasOwn(data, "k4")) {
          const err62 = validate3.errors;
          const res62 = ref3(data.k4);
          const suberr67 = ref3.errors;
          validate3.errors = err62;
          if (!res62) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr67.map((e) => errorMerge(e, "#/properties/k4/$ref", "#/k4")));
            errorCount++;
          }
        }
        if (data.kernelMatrix !== void 0 && hasOwn(data, "kernelMatrix")) {
          const err63 = validate3.errors;
          const res63 = ref3(data.kernelMatrix);
          const suberr68 = ref3.errors;
          validate3.errors = err63;
          if (!res63) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr68.map((e) => errorMerge(e, "#/properties/kernelMatrix/$ref", "#/kernelMatrix")));
            errorCount++;
          }
        }
        if (data.kernelUnitLength !== void 0 && hasOwn(data, "kernelUnitLength")) {
          const err64 = validate3.errors;
          const res64 = ref3(data.kernelUnitLength);
          const suberr69 = ref3.errors;
          validate3.errors = err64;
          if (!res64) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr69.map((e) => errorMerge(e, "#/properties/kernelUnitLength/$ref", "#/kernelUnitLength")));
            errorCount++;
          }
        }
        if (data.lang !== void 0 && hasOwn(data, "lang")) {
          const err65 = validate3.errors;
          const res65 = ref3(data.lang);
          const suberr70 = ref3.errors;
          validate3.errors = err65;
          if (!res65) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr70.map((e) => errorMerge(e, "#/properties/lang/$ref", "#/lang")));
            errorCount++;
          }
        }
        if (data.lengthAdjust !== void 0 && hasOwn(data, "lengthAdjust")) {
          const err66 = validate3.errors;
          const res66 = ref3(data.lengthAdjust);
          const suberr71 = ref3.errors;
          validate3.errors = err66;
          if (!res66) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr71.map((e) => errorMerge(e, "#/properties/lengthAdjust/$ref", "#/lengthAdjust")));
            errorCount++;
          }
        }
        if (data["letter-spacing"] !== void 0 && hasOwn(data, "letter-spacing")) {
          const err67 = validate3.errors;
          const res67 = ref3(data["letter-spacing"]);
          const suberr72 = ref3.errors;
          validate3.errors = err67;
          if (!res67) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr72.map((e) => errorMerge(e, "#/properties/letter-spacing/$ref", "#/letter-spacing")));
            errorCount++;
          }
        }
        if (data["lighting-color"] !== void 0 && hasOwn(data, "lighting-color")) {
          const err68 = validate3.errors;
          const res68 = ref5(data["lighting-color"]);
          const suberr73 = ref5.errors;
          validate3.errors = err68;
          if (!res68) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr73.map((e) => errorMerge(e, "#/properties/lighting-color/$ref", "#/lighting-color")));
            errorCount++;
          }
        }
        if (data["marker-end"] !== void 0 && hasOwn(data, "marker-end")) {
          const err69 = validate3.errors;
          const res69 = ref3(data["marker-end"]);
          const suberr74 = ref3.errors;
          validate3.errors = err69;
          if (!res69) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr74.map((e) => errorMerge(e, "#/properties/marker-end/$ref", "#/marker-end")));
            errorCount++;
          }
        }
        if (data["marker-mid"] !== void 0 && hasOwn(data, "marker-mid")) {
          const err70 = validate3.errors;
          const res70 = ref3(data["marker-mid"]);
          const suberr75 = ref3.errors;
          validate3.errors = err70;
          if (!res70) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr75.map((e) => errorMerge(e, "#/properties/marker-mid/$ref", "#/marker-mid")));
            errorCount++;
          }
        }
        if (data["marker-start"] !== void 0 && hasOwn(data, "marker-start")) {
          const err71 = validate3.errors;
          const res71 = ref3(data["marker-start"]);
          const suberr76 = ref3.errors;
          validate3.errors = err71;
          if (!res71) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr76.map((e) => errorMerge(e, "#/properties/marker-start/$ref", "#/marker-start")));
            errorCount++;
          }
        }
        if (data.markerHeight !== void 0 && hasOwn(data, "markerHeight")) {
          const err72 = validate3.errors;
          const res72 = ref3(data.markerHeight);
          const suberr77 = ref3.errors;
          validate3.errors = err72;
          if (!res72) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr77.map((e) => errorMerge(e, "#/properties/markerHeight/$ref", "#/markerHeight")));
            errorCount++;
          }
        }
        if (data.markerUnits !== void 0 && hasOwn(data, "markerUnits")) {
          const err73 = validate3.errors;
          const res73 = ref3(data.markerUnits);
          const suberr78 = ref3.errors;
          validate3.errors = err73;
          if (!res73) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr78.map((e) => errorMerge(e, "#/properties/markerUnits/$ref", "#/markerUnits")));
            errorCount++;
          }
        }
        if (data.markerWidth !== void 0 && hasOwn(data, "markerWidth")) {
          const err74 = validate3.errors;
          const res74 = ref3(data.markerWidth);
          const suberr79 = ref3.errors;
          validate3.errors = err74;
          if (!res74) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr79.map((e) => errorMerge(e, "#/properties/markerWidth/$ref", "#/markerWidth")));
            errorCount++;
          }
        }
        if (data.mask !== void 0 && hasOwn(data, "mask")) {
          const err75 = validate3.errors;
          const res75 = ref3(data.mask);
          const suberr80 = ref3.errors;
          validate3.errors = err75;
          if (!res75) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr80.map((e) => errorMerge(e, "#/properties/mask/$ref", "#/mask")));
            errorCount++;
          }
        }
        if (data.maskContentUnits !== void 0 && hasOwn(data, "maskContentUnits")) {
          const err76 = validate3.errors;
          const res76 = ref3(data.maskContentUnits);
          const suberr81 = ref3.errors;
          validate3.errors = err76;
          if (!res76) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr81.map((e) => errorMerge(e, "#/properties/maskContentUnits/$ref", "#/maskContentUnits")));
            errorCount++;
          }
        }
        if (data.maskUnits !== void 0 && hasOwn(data, "maskUnits")) {
          const err77 = validate3.errors;
          const res77 = ref3(data.maskUnits);
          const suberr82 = ref3.errors;
          validate3.errors = err77;
          if (!res77) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr82.map((e) => errorMerge(e, "#/properties/maskUnits/$ref", "#/maskUnits")));
            errorCount++;
          }
        }
        if (data.media !== void 0 && hasOwn(data, "media")) {
          const err78 = validate3.errors;
          const res78 = ref3(data.media);
          const suberr83 = ref3.errors;
          validate3.errors = err78;
          if (!res78) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr83.map((e) => errorMerge(e, "#/properties/media/$ref", "#/media")));
            errorCount++;
          }
        }
        if (data.method !== void 0 && hasOwn(data, "method")) {
          const err79 = validate3.errors;
          const res79 = ref3(data.method);
          const suberr84 = ref3.errors;
          validate3.errors = err79;
          if (!res79) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr84.map((e) => errorMerge(e, "#/properties/method/$ref", "#/method")));
            errorCount++;
          }
        }
        if (data.mode !== void 0 && hasOwn(data, "mode")) {
          const err80 = validate3.errors;
          const res80 = ref3(data.mode);
          const suberr85 = ref3.errors;
          validate3.errors = err80;
          if (!res80) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr85.map((e) => errorMerge(e, "#/properties/mode/$ref", "#/mode")));
            errorCount++;
          }
        }
        if (data.numOctaves !== void 0 && hasOwn(data, "numOctaves")) {
          const err81 = validate3.errors;
          const res81 = ref3(data.numOctaves);
          const suberr86 = ref3.errors;
          validate3.errors = err81;
          if (!res81) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr86.map((e) => errorMerge(e, "#/properties/numOctaves/$ref", "#/numOctaves")));
            errorCount++;
          }
        }
        if (data.offset !== void 0 && hasOwn(data, "offset")) {
          const err82 = validate3.errors;
          const res82 = ref3(data.offset);
          const suberr87 = ref3.errors;
          validate3.errors = err82;
          if (!res82) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr87.map((e) => errorMerge(e, "#/properties/offset/$ref", "#/offset")));
            errorCount++;
          }
        }
        if (data.opacity !== void 0 && hasOwn(data, "opacity")) {
          const err83 = validate3.errors;
          const res83 = ref3(data.opacity);
          const suberr88 = ref3.errors;
          validate3.errors = err83;
          if (!res83) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr88.map((e) => errorMerge(e, "#/properties/opacity/$ref", "#/opacity")));
            errorCount++;
          }
        }
        if (data.operator !== void 0 && hasOwn(data, "operator")) {
          const err84 = validate3.errors;
          const res84 = ref3(data.operator);
          const suberr89 = ref3.errors;
          validate3.errors = err84;
          if (!res84) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr89.map((e) => errorMerge(e, "#/properties/operator/$ref", "#/operator")));
            errorCount++;
          }
        }
        if (data.order !== void 0 && hasOwn(data, "order")) {
          const err85 = validate3.errors;
          const res85 = ref3(data.order);
          const suberr90 = ref3.errors;
          validate3.errors = err85;
          if (!res85) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr90.map((e) => errorMerge(e, "#/properties/order/$ref", "#/order")));
            errorCount++;
          }
        }
        if (data.orient !== void 0 && hasOwn(data, "orient")) {
          const err86 = validate3.errors;
          const res86 = ref3(data.orient);
          const suberr91 = ref3.errors;
          validate3.errors = err86;
          if (!res86) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr91.map((e) => errorMerge(e, "#/properties/orient/$ref", "#/orient")));
            errorCount++;
          }
        }
        if (data.overflow !== void 0 && hasOwn(data, "overflow")) {
          const err87 = validate3.errors;
          const res87 = ref3(data.overflow);
          const suberr92 = ref3.errors;
          validate3.errors = err87;
          if (!res87) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr92.map((e) => errorMerge(e, "#/properties/overflow/$ref", "#/overflow")));
            errorCount++;
          }
        }
        if (data["paint-order"] !== void 0 && hasOwn(data, "paint-order")) {
          const err88 = validate3.errors;
          const res88 = ref3(data["paint-order"]);
          const suberr93 = ref3.errors;
          validate3.errors = err88;
          if (!res88) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr93.map((e) => errorMerge(e, "#/properties/paint-order/$ref", "#/paint-order")));
            errorCount++;
          }
        }
        if (data.path !== void 0 && hasOwn(data, "path")) {
          const err89 = validate3.errors;
          const res89 = ref3(data.path);
          const suberr94 = ref3.errors;
          validate3.errors = err89;
          if (!res89) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr94.map((e) => errorMerge(e, "#/properties/path/$ref", "#/path")));
            errorCount++;
          }
        }
        if (data.pathLength !== void 0 && hasOwn(data, "pathLength")) {
          const err90 = validate3.errors;
          const res90 = ref3(data.pathLength);
          const suberr95 = ref3.errors;
          validate3.errors = err90;
          if (!res90) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr95.map((e) => errorMerge(e, "#/properties/pathLength/$ref", "#/pathLength")));
            errorCount++;
          }
        }
        if (data.patternContentUnits !== void 0 && hasOwn(data, "patternContentUnits")) {
          const err91 = validate3.errors;
          const res91 = ref3(data.patternContentUnits);
          const suberr96 = ref3.errors;
          validate3.errors = err91;
          if (!res91) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr96.map((e) => errorMerge(e, "#/properties/patternContentUnits/$ref", "#/patternContentUnits")));
            errorCount++;
          }
        }
        if (data.patternTransform !== void 0 && hasOwn(data, "patternTransform")) {
          const err92 = validate3.errors;
          const res92 = ref3(data.patternTransform);
          const suberr97 = ref3.errors;
          validate3.errors = err92;
          if (!res92) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr97.map((e) => errorMerge(e, "#/properties/patternTransform/$ref", "#/patternTransform")));
            errorCount++;
          }
        }
        if (data.patternUnits !== void 0 && hasOwn(data, "patternUnits")) {
          const err93 = validate3.errors;
          const res93 = ref3(data.patternUnits);
          const suberr98 = ref3.errors;
          validate3.errors = err93;
          if (!res93) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr98.map((e) => errorMerge(e, "#/properties/patternUnits/$ref", "#/patternUnits")));
            errorCount++;
          }
        }
        if (data.points !== void 0 && hasOwn(data, "points")) {
          const err94 = validate3.errors;
          const res94 = ref3(data.points);
          const suberr99 = ref3.errors;
          validate3.errors = err94;
          if (!res94) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr99.map((e) => errorMerge(e, "#/properties/points/$ref", "#/points")));
            errorCount++;
          }
        }
        if (data.preserveAlpha !== void 0 && hasOwn(data, "preserveAlpha")) {
          const err95 = validate3.errors;
          const res95 = ref3(data.preserveAlpha);
          const suberr100 = ref3.errors;
          validate3.errors = err95;
          if (!res95) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr100.map((e) => errorMerge(e, "#/properties/preserveAlpha/$ref", "#/preserveAlpha")));
            errorCount++;
          }
        }
        if (data.preserveAspectRatio !== void 0 && hasOwn(data, "preserveAspectRatio")) {
          const err96 = validate3.errors;
          const res96 = ref3(data.preserveAspectRatio);
          const suberr101 = ref3.errors;
          validate3.errors = err96;
          if (!res96) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr101.map((e) => errorMerge(e, "#/properties/preserveAspectRatio/$ref", "#/preserveAspectRatio")));
            errorCount++;
          }
        }
        if (data.primitiveUnits !== void 0 && hasOwn(data, "primitiveUnits")) {
          const err97 = validate3.errors;
          const res97 = ref3(data.primitiveUnits);
          const suberr102 = ref3.errors;
          validate3.errors = err97;
          if (!res97) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr102.map((e) => errorMerge(e, "#/properties/primitiveUnits/$ref", "#/primitiveUnits")));
            errorCount++;
          }
        }
        if (data.r !== void 0 && hasOwn(data, "r")) {
          const err98 = validate3.errors;
          const res98 = ref3(data.r);
          const suberr103 = ref3.errors;
          validate3.errors = err98;
          if (!res98) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr103.map((e) => errorMerge(e, "#/properties/r/$ref", "#/r")));
            errorCount++;
          }
        }
        if (data.radius !== void 0 && hasOwn(data, "radius")) {
          const err99 = validate3.errors;
          const res99 = ref3(data.radius);
          const suberr104 = ref3.errors;
          validate3.errors = err99;
          if (!res99) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr104.map((e) => errorMerge(e, "#/properties/radius/$ref", "#/radius")));
            errorCount++;
          }
        }
        if (data.refX !== void 0 && hasOwn(data, "refX")) {
          const err100 = validate3.errors;
          const res100 = ref3(data.refX);
          const suberr105 = ref3.errors;
          validate3.errors = err100;
          if (!res100) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr105.map((e) => errorMerge(e, "#/properties/refX/$ref", "#/refX")));
            errorCount++;
          }
        }
        if (data.refY !== void 0 && hasOwn(data, "refY")) {
          const err101 = validate3.errors;
          const res101 = ref3(data.refY);
          const suberr106 = ref3.errors;
          validate3.errors = err101;
          if (!res101) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr106.map((e) => errorMerge(e, "#/properties/refY/$ref", "#/refY")));
            errorCount++;
          }
        }
        if (data.result !== void 0 && hasOwn(data, "result")) {
          const err102 = validate3.errors;
          const res102 = ref3(data.result);
          const suberr107 = ref3.errors;
          validate3.errors = err102;
          if (!res102) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr107.map((e) => errorMerge(e, "#/properties/result/$ref", "#/result")));
            errorCount++;
          }
        }
        if (data.rx !== void 0 && hasOwn(data, "rx")) {
          const err103 = validate3.errors;
          const res103 = ref3(data.rx);
          const suberr108 = ref3.errors;
          validate3.errors = err103;
          if (!res103) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr108.map((e) => errorMerge(e, "#/properties/rx/$ref", "#/rx")));
            errorCount++;
          }
        }
        if (data.ry !== void 0 && hasOwn(data, "ry")) {
          const err104 = validate3.errors;
          const res104 = ref3(data.ry);
          const suberr109 = ref3.errors;
          validate3.errors = err104;
          if (!res104) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr109.map((e) => errorMerge(e, "#/properties/ry/$ref", "#/ry")));
            errorCount++;
          }
        }
        if (data.scale !== void 0 && hasOwn(data, "scale")) {
          const err105 = validate3.errors;
          const res105 = ref3(data.scale);
          const suberr110 = ref3.errors;
          validate3.errors = err105;
          if (!res105) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr110.map((e) => errorMerge(e, "#/properties/scale/$ref", "#/scale")));
            errorCount++;
          }
        }
        if (data.seed !== void 0 && hasOwn(data, "seed")) {
          const err106 = validate3.errors;
          const res106 = ref3(data.seed);
          const suberr111 = ref3.errors;
          validate3.errors = err106;
          if (!res106) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr111.map((e) => errorMerge(e, "#/properties/seed/$ref", "#/seed")));
            errorCount++;
          }
        }
        if (data["shape-rendering"] !== void 0 && hasOwn(data, "shape-rendering")) {
          const err107 = validate3.errors;
          const res107 = ref3(data["shape-rendering"]);
          const suberr112 = ref3.errors;
          validate3.errors = err107;
          if (!res107) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr112.map((e) => errorMerge(e, "#/properties/shape-rendering/$ref", "#/shape-rendering")));
            errorCount++;
          }
        }
        if (data.slope !== void 0 && hasOwn(data, "slope")) {
          const err108 = validate3.errors;
          const res108 = ref3(data.slope);
          const suberr113 = ref3.errors;
          validate3.errors = err108;
          if (!res108) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr113.map((e) => errorMerge(e, "#/properties/slope/$ref", "#/slope")));
            errorCount++;
          }
        }
        if (data.specularConstant !== void 0 && hasOwn(data, "specularConstant")) {
          const err109 = validate3.errors;
          const res109 = ref3(data.specularConstant);
          const suberr114 = ref3.errors;
          validate3.errors = err109;
          if (!res109) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr114.map((e) => errorMerge(e, "#/properties/specularConstant/$ref", "#/specularConstant")));
            errorCount++;
          }
        }
        if (data.specularExponent !== void 0 && hasOwn(data, "specularExponent")) {
          const err110 = validate3.errors;
          const res110 = ref3(data.specularExponent);
          const suberr115 = ref3.errors;
          validate3.errors = err110;
          if (!res110) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr115.map((e) => errorMerge(e, "#/properties/specularExponent/$ref", "#/specularExponent")));
            errorCount++;
          }
        }
        if (data.spreadMethod !== void 0 && hasOwn(data, "spreadMethod")) {
          const err111 = validate3.errors;
          const res111 = ref3(data.spreadMethod);
          const suberr116 = ref3.errors;
          validate3.errors = err111;
          if (!res111) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr116.map((e) => errorMerge(e, "#/properties/spreadMethod/$ref", "#/spreadMethod")));
            errorCount++;
          }
        }
        if (data.startOffset !== void 0 && hasOwn(data, "startOffset")) {
          const err112 = validate3.errors;
          const res112 = ref3(data.startOffset);
          const suberr117 = ref3.errors;
          validate3.errors = err112;
          if (!res112) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr117.map((e) => errorMerge(e, "#/properties/startOffset/$ref", "#/startOffset")));
            errorCount++;
          }
        }
        if (data.stdDeviation !== void 0 && hasOwn(data, "stdDeviation")) {
          const err113 = validate3.errors;
          const res113 = ref3(data.stdDeviation);
          const suberr118 = ref3.errors;
          validate3.errors = err113;
          if (!res113) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr118.map((e) => errorMerge(e, "#/properties/stdDeviation/$ref", "#/stdDeviation")));
            errorCount++;
          }
        }
        if (data.stitchTiles !== void 0 && hasOwn(data, "stitchTiles")) {
          const err114 = validate3.errors;
          const res114 = ref3(data.stitchTiles);
          const suberr119 = ref3.errors;
          validate3.errors = err114;
          if (!res114) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr119.map((e) => errorMerge(e, "#/properties/stitchTiles/$ref", "#/stitchTiles")));
            errorCount++;
          }
        }
        if (data["stop-color"] !== void 0 && hasOwn(data, "stop-color")) {
          const err115 = validate3.errors;
          const res115 = ref5(data["stop-color"]);
          const suberr120 = ref5.errors;
          validate3.errors = err115;
          if (!res115) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr120.map((e) => errorMerge(e, "#/properties/stop-color/$ref", "#/stop-color")));
            errorCount++;
          }
        }
        if (data["stop-opacity"] !== void 0 && hasOwn(data, "stop-opacity")) {
          const err116 = validate3.errors;
          const res116 = ref3(data["stop-opacity"]);
          const suberr121 = ref3.errors;
          validate3.errors = err116;
          if (!res116) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr121.map((e) => errorMerge(e, "#/properties/stop-opacity/$ref", "#/stop-opacity")));
            errorCount++;
          }
        }
        if (data.stroke !== void 0 && hasOwn(data, "stroke")) {
          const err117 = validate3.errors;
          const res117 = ref5(data.stroke);
          const suberr122 = ref5.errors;
          validate3.errors = err117;
          if (!res117) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr122.map((e) => errorMerge(e, "#/properties/stroke/$ref", "#/stroke")));
            errorCount++;
          }
        }
        if (data["stroke-dasharray"] !== void 0 && hasOwn(data, "stroke-dasharray")) {
          const err118 = validate3.errors;
          const res118 = ref3(data["stroke-dasharray"]);
          const suberr123 = ref3.errors;
          validate3.errors = err118;
          if (!res118) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr123.map((e) => errorMerge(e, "#/properties/stroke-dasharray/$ref", "#/stroke-dasharray")));
            errorCount++;
          }
        }
        if (data["stroke-dashoffset"] !== void 0 && hasOwn(data, "stroke-dashoffset")) {
          const err119 = validate3.errors;
          const res119 = ref3(data["stroke-dashoffset"]);
          const suberr124 = ref3.errors;
          validate3.errors = err119;
          if (!res119) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr124.map((e) => errorMerge(e, "#/properties/stroke-dashoffset/$ref", "#/stroke-dashoffset")));
            errorCount++;
          }
        }
        if (data["stroke-linecap"] !== void 0 && hasOwn(data, "stroke-linecap")) {
          const err120 = validate3.errors;
          const res120 = ref3(data["stroke-linecap"]);
          const suberr125 = ref3.errors;
          validate3.errors = err120;
          if (!res120) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr125.map((e) => errorMerge(e, "#/properties/stroke-linecap/$ref", "#/stroke-linecap")));
            errorCount++;
          }
        }
        if (data["stroke-linejoin"] !== void 0 && hasOwn(data, "stroke-linejoin")) {
          const err121 = validate3.errors;
          const res121 = ref3(data["stroke-linejoin"]);
          const suberr126 = ref3.errors;
          validate3.errors = err121;
          if (!res121) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr126.map((e) => errorMerge(e, "#/properties/stroke-linejoin/$ref", "#/stroke-linejoin")));
            errorCount++;
          }
        }
        if (data["stroke-miterlimit"] !== void 0 && hasOwn(data, "stroke-miterlimit")) {
          const err122 = validate3.errors;
          const res122 = ref3(data["stroke-miterlimit"]);
          const suberr127 = ref3.errors;
          validate3.errors = err122;
          if (!res122) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr127.map((e) => errorMerge(e, "#/properties/stroke-miterlimit/$ref", "#/stroke-miterlimit")));
            errorCount++;
          }
        }
        if (data["stroke-opacity"] !== void 0 && hasOwn(data, "stroke-opacity")) {
          const err123 = validate3.errors;
          const res123 = ref3(data["stroke-opacity"]);
          const suberr128 = ref3.errors;
          validate3.errors = err123;
          if (!res123) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr128.map((e) => errorMerge(e, "#/properties/stroke-opacity/$ref", "#/stroke-opacity")));
            errorCount++;
          }
        }
        if (data["stroke-width"] !== void 0 && hasOwn(data, "stroke-width")) {
          const err124 = validate3.errors;
          const res124 = ref3(data["stroke-width"]);
          const suberr129 = ref3.errors;
          validate3.errors = err124;
          if (!res124) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr129.map((e) => errorMerge(e, "#/properties/stroke-width/$ref", "#/stroke-width")));
            errorCount++;
          }
        }
        if (data.style !== void 0 && hasOwn(data, "style")) {
          const err126 = validate3.errors;
          const res126 = ref9(data.style);
          const suberr132 = ref9.errors;
          validate3.errors = err126;
          if (!res126) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr132.map((e) => errorMerge(e, "#/properties/style/$ref", "#/style")));
            errorCount++;
          }
        }
        if (data.surfaceScale !== void 0 && hasOwn(data, "surfaceScale")) {
          const err127 = validate3.errors;
          const res127 = ref3(data.surfaceScale);
          const suberr133 = ref3.errors;
          validate3.errors = err127;
          if (!res127) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr133.map((e) => errorMerge(e, "#/properties/surfaceScale/$ref", "#/surfaceScale")));
            errorCount++;
          }
        }
        if (data.systemLanguage !== void 0 && hasOwn(data, "systemLanguage")) {
          const err128 = validate3.errors;
          const res128 = ref3(data.systemLanguage);
          const suberr134 = ref3.errors;
          validate3.errors = err128;
          if (!res128) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr134.map((e) => errorMerge(e, "#/properties/systemLanguage/$ref", "#/systemLanguage")));
            errorCount++;
          }
        }
        if (data.tabindex !== void 0 && hasOwn(data, "tabindex")) {
          const err129 = validate3.errors;
          const res129 = ref3(data.tabindex);
          const suberr135 = ref3.errors;
          validate3.errors = err129;
          if (!res129) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr135.map((e) => errorMerge(e, "#/properties/tabindex/$ref", "#/tabindex")));
            errorCount++;
          }
        }
        if (data.tableValues !== void 0 && hasOwn(data, "tableValues")) {
          const err130 = validate3.errors;
          const res130 = ref3(data.tableValues);
          const suberr136 = ref3.errors;
          validate3.errors = err130;
          if (!res130) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr136.map((e) => errorMerge(e, "#/properties/tableValues/$ref", "#/tableValues")));
            errorCount++;
          }
        }
        if (data.targetX !== void 0 && hasOwn(data, "targetX")) {
          const err131 = validate3.errors;
          const res131 = ref3(data.targetX);
          const suberr137 = ref3.errors;
          validate3.errors = err131;
          if (!res131) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr137.map((e) => errorMerge(e, "#/properties/targetX/$ref", "#/targetX")));
            errorCount++;
          }
        }
        if (data.targetY !== void 0 && hasOwn(data, "targetY")) {
          const err132 = validate3.errors;
          const res132 = ref3(data.targetY);
          const suberr138 = ref3.errors;
          validate3.errors = err132;
          if (!res132) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr138.map((e) => errorMerge(e, "#/properties/targetY/$ref", "#/targetY")));
            errorCount++;
          }
        }
        if (data["text-anchor"] !== void 0 && hasOwn(data, "text-anchor")) {
          const err133 = validate3.errors;
          const res133 = ref3(data["text-anchor"]);
          const suberr139 = ref3.errors;
          validate3.errors = err133;
          if (!res133) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr139.map((e) => errorMerge(e, "#/properties/text-anchor/$ref", "#/text-anchor")));
            errorCount++;
          }
        }
        if (data["text-decoration"] !== void 0 && hasOwn(data, "text-decoration")) {
          const err134 = validate3.errors;
          const res134 = ref3(data["text-decoration"]);
          const suberr140 = ref3.errors;
          validate3.errors = err134;
          if (!res134) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr140.map((e) => errorMerge(e, "#/properties/text-decoration/$ref", "#/text-decoration")));
            errorCount++;
          }
        }
        if (data["text-rendering"] !== void 0 && hasOwn(data, "text-rendering")) {
          const err135 = validate3.errors;
          const res135 = ref3(data["text-rendering"]);
          const suberr141 = ref3.errors;
          validate3.errors = err135;
          if (!res135) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr141.map((e) => errorMerge(e, "#/properties/text-rendering/$ref", "#/text-rendering")));
            errorCount++;
          }
        }
        if (data.textLength !== void 0 && hasOwn(data, "textLength")) {
          const err136 = validate3.errors;
          const res136 = ref3(data.textLength);
          const suberr142 = ref3.errors;
          validate3.errors = err136;
          if (!res136) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr142.map((e) => errorMerge(e, "#/properties/textLength/$ref", "#/textLength")));
            errorCount++;
          }
        }
        if (data.transform !== void 0 && hasOwn(data, "transform")) {
          const err137 = validate3.errors;
          const res137 = ref3(data.transform);
          const suberr143 = ref3.errors;
          validate3.errors = err137;
          if (!res137) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr143.map((e) => errorMerge(e, "#/properties/transform/$ref", "#/transform")));
            errorCount++;
          }
        }
        if (data["transform-origin"] !== void 0 && hasOwn(data, "transform-origin")) {
          const err138 = validate3.errors;
          const res138 = ref3(data["transform-origin"]);
          const suberr144 = ref3.errors;
          validate3.errors = err138;
          if (!res138) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr144.map((e) => errorMerge(e, "#/properties/transform-origin/$ref", "#/transform-origin")));
            errorCount++;
          }
        }
        if (data.type !== void 0 && hasOwn(data, "type")) {
          const err139 = validate3.errors;
          const res139 = ref3(data.type);
          const suberr145 = ref3.errors;
          validate3.errors = err139;
          if (!res139) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr145.map((e) => errorMerge(e, "#/properties/type/$ref", "#/type")));
            errorCount++;
          }
        }
        if (data.values !== void 0 && hasOwn(data, "values")) {
          const err140 = validate3.errors;
          const res140 = ref3(data.values);
          const suberr146 = ref3.errors;
          validate3.errors = err140;
          if (!res140) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr146.map((e) => errorMerge(e, "#/properties/values/$ref", "#/values")));
            errorCount++;
          }
        }
        if (data.viewBox !== void 0 && hasOwn(data, "viewBox")) {
          const err141 = validate3.errors;
          const res141 = ref3(data.viewBox);
          const suberr147 = ref3.errors;
          validate3.errors = err141;
          if (!res141) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr147.map((e) => errorMerge(e, "#/properties/viewBox/$ref", "#/viewBox")));
            errorCount++;
          }
        }
        if (data.visibility !== void 0 && hasOwn(data, "visibility")) {
          const err142 = validate3.errors;
          const res142 = ref3(data.visibility);
          const suberr148 = ref3.errors;
          validate3.errors = err142;
          if (!res142) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr148.map((e) => errorMerge(e, "#/properties/visibility/$ref", "#/visibility")));
            errorCount++;
          }
        }
        if (data.width !== void 0 && hasOwn(data, "width")) {
          const err143 = validate3.errors;
          const res143 = ref3(data.width);
          const suberr149 = ref3.errors;
          validate3.errors = err143;
          if (!res143) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr149.map((e) => errorMerge(e, "#/properties/width/$ref", "#/width")));
            errorCount++;
          }
        }
        if (data["word-spacing"] !== void 0 && hasOwn(data, "word-spacing")) {
          const err144 = validate3.errors;
          const res144 = ref3(data["word-spacing"]);
          const suberr150 = ref3.errors;
          validate3.errors = err144;
          if (!res144) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr150.map((e) => errorMerge(e, "#/properties/word-spacing/$ref", "#/word-spacing")));
            errorCount++;
          }
        }
        if (data["writing-mode"] !== void 0 && hasOwn(data, "writing-mode")) {
          const err145 = validate3.errors;
          const res145 = ref3(data["writing-mode"]);
          const suberr151 = ref3.errors;
          validate3.errors = err145;
          if (!res145) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr151.map((e) => errorMerge(e, "#/properties/writing-mode/$ref", "#/writing-mode")));
            errorCount++;
          }
        }
        if (data.x !== void 0 && hasOwn(data, "x")) {
          const err146 = validate3.errors;
          const res146 = ref3(data.x);
          const suberr152 = ref3.errors;
          validate3.errors = err146;
          if (!res146) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr152.map((e) => errorMerge(e, "#/properties/x/$ref", "#/x")));
            errorCount++;
          }
        }
        if (data.x1 !== void 0 && hasOwn(data, "x1")) {
          const err147 = validate3.errors;
          const res147 = ref3(data.x1);
          const suberr153 = ref3.errors;
          validate3.errors = err147;
          if (!res147) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr153.map((e) => errorMerge(e, "#/properties/x1/$ref", "#/x1")));
            errorCount++;
          }
        }
        if (data.x2 !== void 0 && hasOwn(data, "x2")) {
          const err148 = validate3.errors;
          const res148 = ref3(data.x2);
          const suberr154 = ref3.errors;
          validate3.errors = err148;
          if (!res148) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr154.map((e) => errorMerge(e, "#/properties/x2/$ref", "#/x2")));
            errorCount++;
          }
        }
        if (data.xChannelSelector !== void 0 && hasOwn(data, "xChannelSelector")) {
          const err149 = validate3.errors;
          const res149 = ref3(data.xChannelSelector);
          const suberr155 = ref3.errors;
          validate3.errors = err149;
          if (!res149) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr155.map((e) => errorMerge(e, "#/properties/xChannelSelector/$ref", "#/xChannelSelector")));
            errorCount++;
          }
        }
        if (data.y !== void 0 && hasOwn(data, "y")) {
          const err150 = validate3.errors;
          const res150 = ref3(data.y);
          const suberr156 = ref3.errors;
          validate3.errors = err150;
          if (!res150) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr156.map((e) => errorMerge(e, "#/properties/y/$ref", "#/y")));
            errorCount++;
          }
        }
        if (data.y1 !== void 0 && hasOwn(data, "y1")) {
          const err151 = validate3.errors;
          const res151 = ref3(data.y1);
          const suberr157 = ref3.errors;
          validate3.errors = err151;
          if (!res151) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr157.map((e) => errorMerge(e, "#/properties/y1/$ref", "#/y1")));
            errorCount++;
          }
        }
        if (data.y2 !== void 0 && hasOwn(data, "y2")) {
          const err152 = validate3.errors;
          const res152 = ref3(data.y2);
          const suberr158 = ref3.errors;
          validate3.errors = err152;
          if (!res152) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr158.map((e) => errorMerge(e, "#/properties/y2/$ref", "#/y2")));
            errorCount++;
          }
        }
        if (data.yChannelSelector !== void 0 && hasOwn(data, "yChannelSelector")) {
          const err153 = validate3.errors;
          const res153 = ref3(data.yChannelSelector);
          const suberr159 = ref3.errors;
          validate3.errors = err153;
          if (!res153) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr159.map((e) => errorMerge(e, "#/properties/yChannelSelector/$ref", "#/yChannelSelector")));
            errorCount++;
          }
        }
        if (data.z !== void 0 && hasOwn(data, "z")) {
          const err154 = validate3.errors;
          const res154 = ref3(data.z);
          const suberr160 = ref3.errors;
          validate3.errors = err154;
          if (!res154) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr160.map((e) => errorMerge(e, "#/properties/z/$ref", "#/z")));
            errorCount++;
          }
        }
        for (const key7 of Object.keys(data)) {
          if (key7 !== "alignment-baseline" && key7 !== "amplitude" && key7 !== "azimuth" && key7 !== "baseFrequency" && key7 !== "baseline-shift" && key7 !== "bias" && key7 !== "class" && key7 !== "clipPathUnits" && key7 !== "clip-path" && key7 !== "clip-rule" && key7 !== "color" && key7 !== "color-interpolation" && key7 !== "color-interpolation-filters" && key7 !== "crossorigin" && key7 !== "cx" && key7 !== "cy" && key7 !== "d" && key7 !== "decoding" && key7 !== "diffuseConstant" && key7 !== "direction" && key7 !== "display" && key7 !== "divisor" && key7 !== "dominant-baseline" && key7 !== "dx" && key7 !== "dy" && key7 !== "edgeMode" && key7 !== "elevation" && key7 !== "exponent" && key7 !== "fill" && key7 !== "fill-opacity" && key7 !== "fill-rule" && key7 !== "filter" && key7 !== "filterUnits" && key7 !== "flood-color" && key7 !== "flood-opacity" && key7 !== "font-family" && key7 !== "font-size" && key7 !== "font-size-adjust" && key7 !== "font-style" && key7 !== "font-variant" && key7 !== "font-weight" && key7 !== "fx" && key7 !== "fy" && key7 !== "gradientTransform" && key7 !== "gradientUnits" && key7 !== "height" && key7 !== "href" && key7 !== "id" && key7 !== "image-rendering" && key7 !== "in" && key7 !== "in2" && key7 !== "intercept" && key7 !== "k1" && key7 !== "k2" && key7 !== "k3" && key7 !== "k4" && key7 !== "kernelMatrix" && key7 !== "kernelUnitLength" && key7 !== "lang" && key7 !== "lengthAdjust" && key7 !== "letter-spacing" && key7 !== "lighting-color" && key7 !== "marker-end" && key7 !== "marker-mid" && key7 !== "marker-start" && key7 !== "markerHeight" && key7 !== "markerUnits" && key7 !== "markerWidth" && key7 !== "mask" && key7 !== "maskContentUnits" && key7 !== "maskUnits" && key7 !== "media" && key7 !== "method" && key7 !== "mode" && key7 !== "numOctaves" && key7 !== "offset" && key7 !== "opacity" && key7 !== "operator" && key7 !== "order" && key7 !== "orient" && key7 !== "overflow" && key7 !== "paint-order" && key7 !== "path" && key7 !== "pathLength" && key7 !== "patternContentUnits" && key7 !== "patternTransform" && key7 !== "patternUnits" && key7 !== "points" && key7 !== "preserveAlpha" && key7 !== "preserveAspectRatio" && key7 !== "primitiveUnits" && key7 !== "r" && key7 !== "radius" && key7 !== "refX" && key7 !== "refY" && key7 !== "result" && key7 !== "rx" && key7 !== "ry" && key7 !== "scale" && key7 !== "seed" && key7 !== "shape-rendering" && key7 !== "slope" && key7 !== "specularConstant" && key7 !== "specularExponent" && key7 !== "spreadMethod" && key7 !== "startOffset" && key7 !== "stdDeviation" && key7 !== "stitchTiles" && key7 !== "stop-color" && key7 !== "stop-opacity" && key7 !== "stroke" && key7 !== "stroke-dasharray" && key7 !== "stroke-dashoffset" && key7 !== "stroke-linecap" && key7 !== "stroke-linejoin" && key7 !== "stroke-miterlimit" && key7 !== "stroke-opacity" && key7 !== "stroke-width" && key7 !== "style" && key7 !== "surfaceScale" && key7 !== "systemLanguage" && key7 !== "tabindex" && key7 !== "tableValues" && key7 !== "targetX" && key7 !== "targetY" && key7 !== "text-anchor" && key7 !== "text-decoration" && key7 !== "text-rendering" && key7 !== "textLength" && key7 !== "transform" && key7 !== "transform-origin" && key7 !== "type" && key7 !== "values" && key7 !== "viewBox" && key7 !== "visibility" && key7 !== "width" && key7 !== "word-spacing" && key7 !== "writing-mode" && key7 !== "x" && key7 !== "x1" && key7 !== "x2" && key7 !== "xChannelSelector" && key7 !== "y" && key7 !== "y1" && key7 !== "y2" && key7 !== "yChannelSelector" && key7 !== "z") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key7) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref11 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.type !== void 0 && hasOwn(data, "type"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/type" });
          errorCount++;
        }
        if (!(data.value !== void 0 && hasOwn(data, "value"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/value" });
          errorCount++;
        }
        if (data.type !== void 0 && hasOwn(data, "type")) {
          if (!(data.type === "text")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/type/const", instanceLocation: "#/type" });
            errorCount++;
          }
        }
        if (data.value !== void 0 && hasOwn(data, "value")) {
          let suberr163 = null;
          const sub22 = (() => {
            let errorCount2 = 0;
            if (!(typeof data.value === "string")) {
              if (suberr163 === null)
                suberr163 = [];
              suberr163.push({ keywordLocation: "#/properties/value/anyOf/0/type", instanceLocation: "#/value" });
              errorCount2++;
            } else {
              if (data.value.length > 4096 && stringLength(data.value) > 4096) {
                if (suberr163 === null)
                  suberr163 = [];
                suberr163.push({ keywordLocation: "#/properties/value/anyOf/0/maxLength", instanceLocation: "#/value" });
                errorCount2++;
              }
            }
            return errorCount2 === 0;
          })();
          if (!sub22) {
            const sub23 = (() => {
              let errorCount2 = 0;
              if (!(typeof data.value === "object" && data.value && !Array.isArray(data.value))) {
                if (suberr163 === null)
                  suberr163 = [];
                suberr163.push({ keywordLocation: "#/properties/value/anyOf/1/type", instanceLocation: "#/value" });
                errorCount2++;
              } else {
                if (!(data.value.type !== void 0 && hasOwn(data.value, "type"))) {
                  if (suberr163 === null)
                    suberr163 = [];
                  suberr163.push({ keywordLocation: "#/properties/value/anyOf/1/required", instanceLocation: "#/value/type" });
                  errorCount2++;
                }
                if (!(data.value.name !== void 0 && hasOwn(data.value, "name"))) {
                  if (suberr163 === null)
                    suberr163 = [];
                  suberr163.push({ keywordLocation: "#/properties/value/anyOf/1/required", instanceLocation: "#/value/name" });
                  errorCount2++;
                }
                if (data.value.type !== void 0 && hasOwn(data.value, "type")) {
                  if (!(data.value.type === "variable")) {
                    if (suberr163 === null)
                      suberr163 = [];
                    suberr163.push({ keywordLocation: "#/properties/value/anyOf/1/properties/type/const", instanceLocation: "#/value/type" });
                    errorCount2++;
                  }
                }
                if (data.value.name !== void 0 && hasOwn(data.value, "name")) {
                  if (!(data.value.name === "initial" || data.value.name === "initials")) {
                    if (suberr163 === null)
                      suberr163 = [];
                    suberr163.push({ keywordLocation: "#/properties/value/anyOf/1/properties/name/enum", instanceLocation: "#/value/name" });
                    errorCount2++;
                  }
                }
                for (const key8 of Object.keys(data.value)) {
                  if (key8 !== "type" && key8 !== "name") {
                    if (suberr163 === null)
                      suberr163 = [];
                    suberr163.push({ keywordLocation: "#/properties/value/anyOf/1/additionalProperties", instanceLocation: "#/value/" + pointerPart(key8) });
                    errorCount2++;
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub23) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/value/anyOf", instanceLocation: "#/value" });
              if (suberr163)
                validate3.errors.push(...suberr163);
              errorCount++;
            }
          }
        }
        for (const key9 of Object.keys(data)) {
          if (key9 !== "type" && key9 !== "value") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key9) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref13 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      const err157 = validate3.errors;
      const res157 = ref7(data);
      const suberr165 = ref7.errors;
      validate3.errors = err157;
      if (!res157) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push(...suberr165.map((e) => errorMerge(e, "#/allOf/0/$ref", "#")));
        errorCount++;
      }
      return errorCount === 0;
    };
    const ref12 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.type !== void 0 && hasOwn(data, "type"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/type" });
          errorCount++;
        }
        if (!(data.name !== void 0 && hasOwn(data, "name"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/name" });
          errorCount++;
        }
        if (data.type !== void 0 && hasOwn(data, "type")) {
          if (!(data.type === "component")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/type/const", instanceLocation: "#/type" });
            errorCount++;
          }
        }
        if (data.name !== void 0 && hasOwn(data, "name")) {
          const err158 = validate3.errors;
          const res158 = ref13(data.name);
          const suberr166 = ref13.errors;
          validate3.errors = err158;
          if (!res158) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr166.map((e) => errorMerge(e, "#/properties/name/$ref", "#/name")));
            errorCount++;
          }
        }
        if (data.attributes !== void 0 && hasOwn(data, "attributes")) {
          const err159 = validate3.errors;
          const res159 = ref2(data.attributes);
          const suberr167 = ref2.errors;
          validate3.errors = err159;
          if (!res159) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr167.map((e) => errorMerge(e, "#/properties/attributes/$ref", "#/attributes")));
            errorCount++;
          }
        }
        for (const key10 of Object.keys(data)) {
          if (key10 !== "type" && key10 !== "name" && key10 !== "attributes") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key10) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref14 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.type !== void 0 && hasOwn(data, "type"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/type" });
          errorCount++;
        }
        if (!(data.name !== void 0 && hasOwn(data, "name"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/name" });
          errorCount++;
        }
        if (data.type !== void 0 && hasOwn(data, "type")) {
          if (!(data.type === "element")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/type/const", instanceLocation: "#/type" });
            errorCount++;
          }
        }
        if (data.name !== void 0 && hasOwn(data, "name")) {
          if (!(data.name === "style")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/name/const", instanceLocation: "#/name" });
            errorCount++;
          }
        }
        if (data.attributes !== void 0 && hasOwn(data, "attributes")) {
          const err161 = validate3.errors;
          const res161 = ref2(data.attributes);
          const suberr169 = ref2.errors;
          validate3.errors = err161;
          if (!res161) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr169.map((e) => errorMerge(e, "#/properties/attributes/$ref", "#/attributes")));
            errorCount++;
          }
        }
        if (data.children !== void 0 && hasOwn(data, "children")) {
          if (!Array.isArray(data.children)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/children/type", instanceLocation: "#/children" });
            errorCount++;
          } else {
            if (data.children.length > 64) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/children/maxItems", instanceLocation: "#/children" });
              errorCount++;
            }
            for (let j = 0; j < data.children.length; j++) {
              if (data.children[j] !== void 0 && hasOwn(data.children, j)) {
                if (!(typeof data.children[j] === "object" && data.children[j] && !Array.isArray(data.children[j]))) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/children/items/type", instanceLocation: "#/children/" + j });
                  errorCount++;
                } else {
                  if (!(data.children[j].type !== void 0 && hasOwn(data.children[j], "type"))) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/children/items/required", instanceLocation: "#/children/" + j + "/type" });
                    errorCount++;
                  }
                  if (!(data.children[j].value !== void 0 && hasOwn(data.children[j], "value"))) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/children/items/required", instanceLocation: "#/children/" + j + "/value" });
                    errorCount++;
                  }
                  if (data.children[j].type !== void 0 && hasOwn(data.children[j], "type")) {
                    if (!(data.children[j].type === "text")) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/children/items/properties/type/const", instanceLocation: "#/children/" + j + "/type" });
                      errorCount++;
                    }
                  }
                  if (data.children[j].value !== void 0 && hasOwn(data.children[j], "value")) {
                    const err162 = validate3.errors;
                    const res162 = ref9(data.children[j].value);
                    const suberr170 = ref9.errors;
                    validate3.errors = err162;
                    if (!res162) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push(...suberr170.map((e) => errorMerge(e, "#/properties/children/items/properties/value/$ref", "#/children/" + j + "/value")));
                      errorCount++;
                    }
                  }
                  for (const key11 of Object.keys(data.children[j])) {
                    if (key11 !== "type" && key11 !== "value") {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/children/items/additionalProperties", instanceLocation: "#/children/" + j + "/" + pointerPart(key11) });
                      errorCount++;
                    }
                  }
                }
              }
            }
          }
        }
        for (const key12 of Object.keys(data)) {
          if (key12 !== "type" && key12 !== "name" && key12 !== "attributes" && key12 !== "children") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key12) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref15 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.type !== void 0 && hasOwn(data, "type"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/type" });
          errorCount++;
        }
        if (!(data.name !== void 0 && hasOwn(data, "name"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/name" });
          errorCount++;
        }
        if (data.type !== void 0 && hasOwn(data, "type")) {
          if (!(data.type === "element")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/type/const", instanceLocation: "#/type" });
            errorCount++;
          }
        }
        if (data.name !== void 0 && hasOwn(data, "name")) {
          if (!(data.name === "circle" || data.name === "clipPath" || data.name === "defs" || data.name === "desc" || data.name === "ellipse" || data.name === "feBlend" || data.name === "feColorMatrix" || data.name === "feComponentTransfer" || data.name === "feComposite" || data.name === "feConvolveMatrix" || data.name === "feDiffuseLighting" || data.name === "feDisplacementMap" || data.name === "feDistantLight" || data.name === "feDropShadow" || data.name === "feFlood" || data.name === "feFuncA" || data.name === "feFuncB" || data.name === "feFuncG" || data.name === "feFuncR" || data.name === "feGaussianBlur" || data.name === "feImage" || data.name === "feMerge" || data.name === "feMergeNode" || data.name === "feMorphology" || data.name === "feOffset" || data.name === "fePointLight" || data.name === "feSpecularLighting" || data.name === "feSpotLight" || data.name === "feTile" || data.name === "feTurbulence" || data.name === "filter" || data.name === "g" || data.name === "image" || data.name === "line" || data.name === "linearGradient" || data.name === "marker" || data.name === "mask" || data.name === "metadata" || data.name === "mpath" || data.name === "path" || data.name === "pattern" || data.name === "polygon" || data.name === "polyline" || data.name === "radialGradient" || data.name === "rect" || data.name === "stop" || data.name === "svg" || data.name === "switch" || data.name === "symbol" || data.name === "text" || data.name === "textPath" || data.name === "title" || data.name === "tspan" || data.name === "use" || data.name === "view")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/name/enum", instanceLocation: "#/name" });
            errorCount++;
          }
        }
        if (data.attributes !== void 0 && hasOwn(data, "attributes")) {
          const err164 = validate3.errors;
          const res164 = ref2(data.attributes);
          const suberr172 = ref2.errors;
          validate3.errors = err164;
          if (!res164) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr172.map((e) => errorMerge(e, "#/properties/attributes/$ref", "#/attributes")));
            errorCount++;
          }
        }
        if (data.children !== void 0 && hasOwn(data, "children")) {
          if (!Array.isArray(data.children)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/children/type", instanceLocation: "#/children" });
            errorCount++;
          } else {
            if (data.children.length > 1024) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/children/maxItems", instanceLocation: "#/children" });
              errorCount++;
            }
            for (let k = 0; k < data.children.length; k++) {
              if (data.children[k] !== void 0 && hasOwn(data.children, k)) {
                const err165 = validate3.errors;
                const res165 = ref10(data.children[k]);
                const suberr173 = ref10.errors;
                validate3.errors = err165;
                if (!res165) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr173.map((e) => errorMerge(e, "#/properties/children/items/$ref", "#/children/" + k)));
                  errorCount++;
                }
              }
            }
          }
        }
        for (const key13 of Object.keys(data)) {
          if (key13 !== "type" && key13 !== "name" && key13 !== "attributes" && key13 !== "children") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key13) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref10 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      let suberr162 = null;
      const sub21 = (() => {
        let errorCount2 = 0;
        const err156 = validate3.errors;
        const res156 = ref11(data);
        const suberr164 = ref11.errors;
        validate3.errors = err156;
        if (!res156) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push(...suberr164.map((e) => errorMerge(e, "#/anyOf/0/$ref", "#")));
          errorCount2++;
        }
        return errorCount2 === 0;
      })();
      if (!sub21) {
        const sub24 = (() => {
          let errorCount2 = 0;
          const err160 = validate3.errors;
          const res160 = ref12(data);
          const suberr168 = ref12.errors;
          validate3.errors = err160;
          if (!res160) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr168.map((e) => errorMerge(e, "#/anyOf/1/$ref", "#")));
            errorCount2++;
          }
          return errorCount2 === 0;
        })();
        if (!sub24) {
          const sub25 = (() => {
            let errorCount2 = 0;
            const err163 = validate3.errors;
            const res163 = ref14(data);
            const suberr171 = ref14.errors;
            validate3.errors = err163;
            if (!res163) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push(...suberr171.map((e) => errorMerge(e, "#/anyOf/2/$ref", "#")));
              errorCount2++;
            }
            return errorCount2 === 0;
          })();
          if (!sub25) {
            const sub26 = (() => {
              let errorCount2 = 0;
              const err166 = validate3.errors;
              const res166 = ref15(data);
              const suberr174 = ref15.errors;
              validate3.errors = err166;
              if (!res166) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr174.map((e) => errorMerge(e, "#/anyOf/3/$ref", "#")));
                errorCount2++;
              }
              return errorCount2 === 0;
            })();
            if (!sub26) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/anyOf", instanceLocation: "#" });
              if (suberr162)
                validate3.errors.push(...suberr162);
              errorCount++;
            }
          }
        }
      }
      return errorCount === 0;
    };
    const ref17 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "number")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(0 <= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/minimum", instanceLocation: "#" });
          errorCount++;
        }
        if (!(100 >= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maximum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref18 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.min !== void 0 && hasOwn(data, "min"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/min" });
          errorCount++;
        }
        if (!(data.max !== void 0 && hasOwn(data, "max"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/max" });
          errorCount++;
        }
        if (data.min !== void 0 && hasOwn(data, "min")) {
          if (!(typeof data.min === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/min/type", instanceLocation: "#/min" });
            errorCount++;
          } else {
            if (!(-360 <= data.min)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/min/minimum", instanceLocation: "#/min" });
              errorCount++;
            }
            if (!(360 >= data.min)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/min/maximum", instanceLocation: "#/min" });
              errorCount++;
            }
          }
        }
        if (data.max !== void 0 && hasOwn(data, "max")) {
          if (!(typeof data.max === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/max/type", instanceLocation: "#/max" });
            errorCount++;
          } else {
            if (!(-360 <= data.max)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/max/minimum", instanceLocation: "#/max" });
              errorCount++;
            }
            if (!(360 >= data.max)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/max/maximum", instanceLocation: "#/max" });
              errorCount++;
            }
          }
        }
        if (data.step !== void 0 && hasOwn(data, "step")) {
          if (!(typeof data.step === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/step/type", instanceLocation: "#/step" });
            errorCount++;
          } else {
            if (!(0 < data.step)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/step/exclusiveMinimum", instanceLocation: "#/step" });
              errorCount++;
            }
            if (!(720 >= data.step)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/step/maximum", instanceLocation: "#/step" });
              errorCount++;
            }
          }
        }
        for (const key17 of Object.keys(data)) {
          if (key17 !== "min" && key17 !== "max" && key17 !== "step") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key17) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref19 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.min !== void 0 && hasOwn(data, "min"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/min" });
          errorCount++;
        }
        if (!(data.max !== void 0 && hasOwn(data, "max"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/max" });
          errorCount++;
        }
        if (data.min !== void 0 && hasOwn(data, "min")) {
          if (!(typeof data.min === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/min/type", instanceLocation: "#/min" });
            errorCount++;
          } else {
            if (!(0 <= data.min)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/min/minimum", instanceLocation: "#/min" });
              errorCount++;
            }
            if (!(10 >= data.min)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/min/maximum", instanceLocation: "#/min" });
              errorCount++;
            }
          }
        }
        if (data.max !== void 0 && hasOwn(data, "max")) {
          if (!(typeof data.max === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/max/type", instanceLocation: "#/max" });
            errorCount++;
          } else {
            if (!(0 <= data.max)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/max/minimum", instanceLocation: "#/max" });
              errorCount++;
            }
            if (!(10 >= data.max)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/max/maximum", instanceLocation: "#/max" });
              errorCount++;
            }
          }
        }
        if (data.step !== void 0 && hasOwn(data, "step")) {
          if (!(typeof data.step === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/step/type", instanceLocation: "#/step" });
            errorCount++;
          } else {
            if (!(0 < data.step)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/step/exclusiveMinimum", instanceLocation: "#/step" });
              errorCount++;
            }
            if (!(10 >= data.step)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/step/maximum", instanceLocation: "#/step" });
              errorCount++;
            }
          }
        }
        for (const key18 of Object.keys(data)) {
          if (key18 !== "min" && key18 !== "max" && key18 !== "step") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key18) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref21 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.min !== void 0 && hasOwn(data, "min"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/min" });
          errorCount++;
        }
        if (!(data.max !== void 0 && hasOwn(data, "max"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/max" });
          errorCount++;
        }
        if (data.min !== void 0 && hasOwn(data, "min")) {
          if (!(typeof data.min === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/min/type", instanceLocation: "#/min" });
            errorCount++;
          } else {
            if (!(-1e3 <= data.min)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/min/minimum", instanceLocation: "#/min" });
              errorCount++;
            }
            if (!(1e3 >= data.min)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/min/maximum", instanceLocation: "#/min" });
              errorCount++;
            }
          }
        }
        if (data.max !== void 0 && hasOwn(data, "max")) {
          if (!(typeof data.max === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/max/type", instanceLocation: "#/max" });
            errorCount++;
          } else {
            if (!(-1e3 <= data.max)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/max/minimum", instanceLocation: "#/max" });
              errorCount++;
            }
            if (!(1e3 >= data.max)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/max/maximum", instanceLocation: "#/max" });
              errorCount++;
            }
          }
        }
        if (data.step !== void 0 && hasOwn(data, "step")) {
          if (!(typeof data.step === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/step/type", instanceLocation: "#/step" });
            errorCount++;
          } else {
            if (!(0 < data.step)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/step/exclusiveMinimum", instanceLocation: "#/step" });
              errorCount++;
            }
            if (!(2e3 >= data.step)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/step/maximum", instanceLocation: "#/step" });
              errorCount++;
            }
          }
        }
        for (const key19 of Object.keys(data)) {
          if (key19 !== "min" && key19 !== "max" && key19 !== "step") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key19) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref20 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (data.x !== void 0 && hasOwn(data, "x")) {
          const err172 = validate3.errors;
          const res172 = ref21(data.x);
          const suberr181 = ref21.errors;
          validate3.errors = err172;
          if (!res172) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr181.map((e) => errorMerge(e, "#/properties/x/$ref", "#/x")));
            errorCount++;
          }
        }
        if (data.y !== void 0 && hasOwn(data, "y")) {
          const err173 = validate3.errors;
          const res173 = ref21(data.y);
          const suberr182 = ref21.errors;
          validate3.errors = err173;
          if (!res173) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr182.map((e) => errorMerge(e, "#/properties/y/$ref", "#/y")));
            errorCount++;
          }
        }
        for (const key20 of Object.keys(data)) {
          if (key20 !== "x" && key20 !== "y") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key20) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const pattern15 = new RegExp("^[a-z][a-zA-Z0-9]*(:[a-z][a-zA-Z0-9]*)?$", "u");
    const unique = (array) => {
      if (array.length < 2)
        return true;
      if (array.length === 2)
        return !deepEqual(array[0], array[1]);
      const objects = [];
      const primitives = array.length > 20 ? /* @__PURE__ */ new Set() : null;
      let primitivesCount = 0;
      let pos = 0;
      for (const item of array) {
        if (typeof item === "object") {
          objects.push(item);
        } else if (primitives) {
          primitives.add(item);
          if (primitives.size !== ++primitivesCount)
            return false;
        } else {
          if (array.indexOf(item, pos + 1) !== -1)
            return false;
        }
        pos++;
      }
      for (let i = 1; i < objects.length; i++)
        for (let j = 0; j < i; j++)
          if (deepEqual(objects[i], objects[j]))
            return false;
      return true;
    };
    const deepEqual = (obj, obj2) => {
      if (obj === obj2)
        return true;
      if (!obj || !obj2 || typeof obj !== typeof obj2)
        return false;
      if (obj !== obj2 && typeof obj !== "object")
        return false;
      const proto = Object.getPrototypeOf(obj);
      if (proto !== Object.getPrototypeOf(obj2))
        return false;
      if (proto === Array.prototype) {
        if (!Array.isArray(obj) || !Array.isArray(obj2))
          return false;
        if (obj.length !== obj2.length)
          return false;
        return obj.every((x, i) => deepEqual(x, obj2[i]));
      } else if (proto === Object.prototype) {
        const [keys, keys2] = [Object.keys(obj), Object.keys(obj2)];
        if (keys.length !== keys2.length)
          return false;
        const keyset2 = /* @__PURE__ */ new Set([...keys, ...keys2]);
        return keyset2.size === keys.length && keys.every((key) => deepEqual(obj[key], obj2[key]));
      }
      return false;
    };
    const ref16 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.width !== void 0 && hasOwn(data, "width"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/width" });
          errorCount++;
        }
        if (!(data.height !== void 0 && hasOwn(data, "height"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/height" });
          errorCount++;
        }
        if (!(data.variants !== void 0 && hasOwn(data, "variants"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/variants" });
          errorCount++;
        }
        if (data.width !== void 0 && hasOwn(data, "width")) {
          if (!(typeof data.width === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/width/type", instanceLocation: "#/width" });
            errorCount++;
          } else {
            if (!(1 <= data.width)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/width/minimum", instanceLocation: "#/width" });
              errorCount++;
            }
            if (!(1e6 >= data.width)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/width/maximum", instanceLocation: "#/width" });
              errorCount++;
            }
          }
        }
        if (data.height !== void 0 && hasOwn(data, "height")) {
          if (!(typeof data.height === "number")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/height/type", instanceLocation: "#/height" });
            errorCount++;
          } else {
            if (!(1 <= data.height)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/height/minimum", instanceLocation: "#/height" });
              errorCount++;
            }
            if (!(1e6 >= data.height)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/height/maximum", instanceLocation: "#/height" });
              errorCount++;
            }
          }
        }
        if (data.probability !== void 0 && hasOwn(data, "probability")) {
          const err169 = validate3.errors;
          const res169 = ref17(data.probability);
          const suberr178 = ref17.errors;
          validate3.errors = err169;
          if (!res169) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr178.map((e) => errorMerge(e, "#/properties/probability/$ref", "#/probability")));
            errorCount++;
          }
        }
        if (data.rotate !== void 0 && hasOwn(data, "rotate")) {
          const err170 = validate3.errors;
          const res170 = ref18(data.rotate);
          const suberr179 = ref18.errors;
          validate3.errors = err170;
          if (!res170) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr179.map((e) => errorMerge(e, "#/properties/rotate/$ref", "#/rotate")));
            errorCount++;
          }
        }
        if (data.scale !== void 0 && hasOwn(data, "scale")) {
          const err171 = validate3.errors;
          const res171 = ref19(data.scale);
          const suberr180 = ref19.errors;
          validate3.errors = err171;
          if (!res171) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr180.map((e) => errorMerge(e, "#/properties/scale/$ref", "#/scale")));
            errorCount++;
          }
        }
        if (data.translate !== void 0 && hasOwn(data, "translate")) {
          const err174 = validate3.errors;
          const res174 = ref20(data.translate);
          const suberr183 = ref20.errors;
          validate3.errors = err174;
          if (!res174) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr183.map((e) => errorMerge(e, "#/properties/translate/$ref", "#/translate")));
            errorCount++;
          }
        }
        if (data.variants !== void 0 && hasOwn(data, "variants")) {
          if (!(typeof data.variants === "object" && data.variants && !Array.isArray(data.variants))) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/variants/type", instanceLocation: "#/variants" });
            errorCount++;
          } else {
            if (Object.keys(data.variants).length > 512) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/variants/maxProperties", instanceLocation: "#/variants" });
              errorCount++;
            }
            for (const key21 of Object.keys(data.variants)) {
              const err175 = validate3.errors;
              const res175 = ref7(key21);
              const suberr184 = ref7.errors;
              validate3.errors = err175;
              if (!res175) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr184.map((e) => errorMerge(e, "#/properties/variants/propertyNames/$ref", "#/variants/" + pointerPart(key21))));
                errorCount++;
              }
            }
            for (const key22 of Object.keys(data.variants)) {
              if (!(typeof data.variants[key22] === "object" && data.variants[key22] && !Array.isArray(data.variants[key22]))) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/type", instanceLocation: "#/variants/" + pointerPart(key22) });
                errorCount++;
              } else {
                if (!(data.variants[key22].elements !== void 0 && hasOwn(data.variants[key22], "elements"))) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/required", instanceLocation: "#/variants/" + pointerPart(key22) + "/elements" });
                  errorCount++;
                }
                if (data.variants[key22].elements !== void 0 && hasOwn(data.variants[key22], "elements")) {
                  if (!Array.isArray(data.variants[key22].elements)) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/elements/type", instanceLocation: "#/variants/" + pointerPart(key22) + "/elements" });
                    errorCount++;
                  } else {
                    if (data.variants[key22].elements.length > 1024) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/elements/maxItems", instanceLocation: "#/variants/" + pointerPart(key22) + "/elements" });
                      errorCount++;
                    }
                    for (let l = 0; l < data.variants[key22].elements.length; l++) {
                      if (data.variants[key22].elements[l] !== void 0 && hasOwn(data.variants[key22].elements, l)) {
                        const err176 = validate3.errors;
                        const res176 = ref10(data.variants[key22].elements[l]);
                        const suberr185 = ref10.errors;
                        validate3.errors = err176;
                        if (!res176) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push(...suberr185.map((e) => errorMerge(e, "#/properties/variants/additionalProperties/properties/elements/items/$ref", "#/variants/" + pointerPart(key22) + "elements/" + l)));
                          errorCount++;
                        }
                      }
                    }
                  }
                }
                if (data.variants[key22].weight !== void 0 && hasOwn(data.variants[key22], "weight")) {
                  if (!(typeof data.variants[key22].weight === "number")) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/weight/type", instanceLocation: "#/variants/" + pointerPart(key22) + "/weight" });
                    errorCount++;
                  } else {
                    if (!(0 <= data.variants[key22].weight)) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/weight/minimum", instanceLocation: "#/variants/" + pointerPart(key22) + "/weight" });
                      errorCount++;
                    }
                    if (!(1e6 >= data.variants[key22].weight)) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/weight/maximum", instanceLocation: "#/variants/" + pointerPart(key22) + "/weight" });
                      errorCount++;
                    }
                  }
                }
                if (data.variants[key22].tags !== void 0 && hasOwn(data.variants[key22], "tags")) {
                  if (!Array.isArray(data.variants[key22].tags)) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/tags/type", instanceLocation: "#/variants/" + pointerPart(key22) + "/tags" });
                    errorCount++;
                  } else {
                    const prev15 = errorCount;
                    if (data.variants[key22].tags.length > 32) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/tags/maxItems", instanceLocation: "#/variants/" + pointerPart(key22) + "/tags" });
                      errorCount++;
                    }
                    for (let m = 0; m < data.variants[key22].tags.length; m++) {
                      if (data.variants[key22].tags[m] !== void 0 && hasOwn(data.variants[key22].tags, m)) {
                        if (!(typeof data.variants[key22].tags[m] === "string")) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/tags/items/type", instanceLocation: "#/variants/" + pointerPart(key22) + "tags/" + m });
                          errorCount++;
                        } else {
                          const prev16 = errorCount;
                          if (data.variants[key22].tags[m].length > 129 && stringLength(data.variants[key22].tags[m]) > 129) {
                            if (validate3.errors === null)
                              validate3.errors = [];
                            validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/tags/items/maxLength", instanceLocation: "#/variants/" + pointerPart(key22) + "tags/" + m });
                            errorCount++;
                          }
                          if (errorCount === prev16) {
                            if (!pattern15.test(data.variants[key22].tags[m])) {
                              if (validate3.errors === null)
                                validate3.errors = [];
                              validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/tags/items/pattern", instanceLocation: "#/variants/" + pointerPart(key22) + "tags/" + m });
                              errorCount++;
                            }
                          }
                        }
                      }
                    }
                    if (errorCount === prev15) {
                      if (!unique(data.variants[key22].tags)) {
                        if (validate3.errors === null)
                          validate3.errors = [];
                        validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/properties/tags/uniqueItems", instanceLocation: "#/variants/" + pointerPart(key22) + "/tags" });
                        errorCount++;
                      }
                    }
                  }
                }
                for (const key23 of Object.keys(data.variants[key22])) {
                  if (key23 !== "elements" && key23 !== "weight" && key23 !== "tags") {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/variants/additionalProperties/additionalProperties", instanceLocation: "#/variants/" + pointerPart(key22) + "/" + pointerPart(key23) });
                    errorCount++;
                  }
                }
              }
            }
          }
        }
        for (const key24 of Object.keys(data)) {
          if (key24 !== "width" && key24 !== "height" && key24 !== "probability" && key24 !== "rotate" && key24 !== "scale" && key24 !== "translate" && key24 !== "variants") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key24) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref22 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.extends !== void 0 && hasOwn(data, "extends"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/extends" });
          errorCount++;
        }
        if (data.extends !== void 0 && hasOwn(data, "extends")) {
          const err178 = validate3.errors;
          const res178 = ref13(data.extends);
          const suberr187 = ref13.errors;
          validate3.errors = err178;
          if (!res178) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr187.map((e) => errorMerge(e, "#/properties/extends/$ref", "#/extends")));
            errorCount++;
          }
        }
        for (const key25 of Object.keys(data)) {
          if (key25 !== "extends") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key25) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const pattern16 = new RegExp("^#([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$", "u");
    const ref23 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        const prev17 = errorCount;
        if (data.length > 9 && stringLength(data) > 9) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        if (errorCount === prev17) {
          if (!pattern16.test(data)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/pattern", instanceLocation: "#" });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref0 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data.canvas !== void 0 && hasOwn(data, "canvas"))) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/required", instanceLocation: "#/canvas" });
          errorCount++;
        }
        if (data["$id"] !== void 0 && hasOwn(data, "$id")) {
          if (!(typeof data["$id"] === "string")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/$id/type", instanceLocation: "#/$id" });
            errorCount++;
          } else {
            if (data["$id"].length > 256 && stringLength(data["$id"]) > 256) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/$id/maxLength", instanceLocation: "#/$id" });
              errorCount++;
            }
          }
        }
        if (data["$schema"] !== void 0 && hasOwn(data, "$schema")) {
          if (!(typeof data["$schema"] === "string")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/$schema/type", instanceLocation: "#/$schema" });
            errorCount++;
          } else {
            if (data["$schema"].length > 256 && stringLength(data["$schema"]) > 256) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/$schema/maxLength", instanceLocation: "#/$schema" });
              errorCount++;
            }
          }
        }
        if (data["$comment"] !== void 0 && hasOwn(data, "$comment")) {
          if (!(typeof data["$comment"] === "string")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/$comment/type", instanceLocation: "#/$comment" });
            errorCount++;
          } else {
            if (data["$comment"].length > 4096 && stringLength(data["$comment"]) > 4096) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/$comment/maxLength", instanceLocation: "#/$comment" });
              errorCount++;
            }
          }
        }
        if (data.meta !== void 0 && hasOwn(data, "meta")) {
          if (!(typeof data.meta === "object" && data.meta && !Array.isArray(data.meta))) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/meta/type", instanceLocation: "#/meta" });
            errorCount++;
          } else {
            if (data.meta.license !== void 0 && hasOwn(data.meta, "license")) {
              if (!(typeof data.meta.license === "object" && data.meta.license && !Array.isArray(data.meta.license))) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/meta/properties/license/type", instanceLocation: "#/meta/license" });
                errorCount++;
              } else {
                if (data.meta.license.name !== void 0 && hasOwn(data.meta.license, "name")) {
                  if (!(typeof data.meta.license.name === "string")) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/meta/properties/license/properties/name/type", instanceLocation: "#/meta/license/name" });
                    errorCount++;
                  } else {
                    if (data.meta.license.name.length > 128 && stringLength(data.meta.license.name) > 128) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/meta/properties/license/properties/name/maxLength", instanceLocation: "#/meta/license/name" });
                      errorCount++;
                    }
                  }
                }
                if (data.meta.license.url !== void 0 && hasOwn(data.meta.license, "url")) {
                  const err0 = validate3.errors;
                  const res0 = ref1(data.meta.license.url);
                  const suberr0 = ref1.errors;
                  validate3.errors = err0;
                  if (!res0) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push(...suberr0.map((e) => errorMerge(e, "#/properties/meta/properties/license/properties/url/$ref", "#/meta/license/url")));
                    errorCount++;
                  }
                }
                if (data.meta.license.text !== void 0 && hasOwn(data.meta.license, "text")) {
                  if (!(typeof data.meta.license.text === "string")) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/meta/properties/license/properties/text/type", instanceLocation: "#/meta/license/text" });
                    errorCount++;
                  } else {
                    if (data.meta.license.text.length > 32768 && stringLength(data.meta.license.text) > 32768) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/meta/properties/license/properties/text/maxLength", instanceLocation: "#/meta/license/text" });
                      errorCount++;
                    }
                  }
                }
                for (const key0 of Object.keys(data.meta.license)) {
                  if (key0 !== "name" && key0 !== "url" && key0 !== "text") {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/meta/properties/license/additionalProperties", instanceLocation: "#/meta/license/" + pointerPart(key0) });
                    errorCount++;
                  }
                }
              }
            }
            if (data.meta.creator !== void 0 && hasOwn(data.meta, "creator")) {
              if (!(typeof data.meta.creator === "object" && data.meta.creator && !Array.isArray(data.meta.creator))) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/meta/properties/creator/type", instanceLocation: "#/meta/creator" });
                errorCount++;
              } else {
                if (data.meta.creator.name !== void 0 && hasOwn(data.meta.creator, "name")) {
                  if (!(typeof data.meta.creator.name === "string")) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/meta/properties/creator/properties/name/type", instanceLocation: "#/meta/creator/name" });
                    errorCount++;
                  } else {
                    if (data.meta.creator.name.length > 128 && stringLength(data.meta.creator.name) > 128) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/meta/properties/creator/properties/name/maxLength", instanceLocation: "#/meta/creator/name" });
                      errorCount++;
                    }
                  }
                }
                if (data.meta.creator.url !== void 0 && hasOwn(data.meta.creator, "url")) {
                  const err1 = validate3.errors;
                  const res1 = ref1(data.meta.creator.url);
                  const suberr1 = ref1.errors;
                  validate3.errors = err1;
                  if (!res1) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push(...suberr1.map((e) => errorMerge(e, "#/properties/meta/properties/creator/properties/url/$ref", "#/meta/creator/url")));
                    errorCount++;
                  }
                }
                for (const key1 of Object.keys(data.meta.creator)) {
                  if (key1 !== "name" && key1 !== "url") {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/meta/properties/creator/additionalProperties", instanceLocation: "#/meta/creator/" + pointerPart(key1) });
                    errorCount++;
                  }
                }
              }
            }
            if (data.meta.source !== void 0 && hasOwn(data.meta, "source")) {
              if (!(typeof data.meta.source === "object" && data.meta.source && !Array.isArray(data.meta.source))) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/meta/properties/source/type", instanceLocation: "#/meta/source" });
                errorCount++;
              } else {
                if (data.meta.source.name !== void 0 && hasOwn(data.meta.source, "name")) {
                  if (!(typeof data.meta.source.name === "string")) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/meta/properties/source/properties/name/type", instanceLocation: "#/meta/source/name" });
                    errorCount++;
                  } else {
                    if (data.meta.source.name.length > 128 && stringLength(data.meta.source.name) > 128) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/meta/properties/source/properties/name/maxLength", instanceLocation: "#/meta/source/name" });
                      errorCount++;
                    }
                  }
                }
                if (data.meta.source.url !== void 0 && hasOwn(data.meta.source, "url")) {
                  const err2 = validate3.errors;
                  const res2 = ref1(data.meta.source.url);
                  const suberr2 = ref1.errors;
                  validate3.errors = err2;
                  if (!res2) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push(...suberr2.map((e) => errorMerge(e, "#/properties/meta/properties/source/properties/url/$ref", "#/meta/source/url")));
                    errorCount++;
                  }
                }
                for (const key2 of Object.keys(data.meta.source)) {
                  if (key2 !== "name" && key2 !== "url") {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/meta/properties/source/additionalProperties", instanceLocation: "#/meta/source/" + pointerPart(key2) });
                    errorCount++;
                  }
                }
              }
            }
            for (const key3 of Object.keys(data.meta)) {
              if (key3 !== "license" && key3 !== "creator" && key3 !== "source") {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/meta/additionalProperties", instanceLocation: "#/meta/" + pointerPart(key3) });
                errorCount++;
              }
            }
          }
        }
        if (data.attributes !== void 0 && hasOwn(data, "attributes")) {
          const err155 = validate3.errors;
          const res155 = ref2(data.attributes);
          const suberr161 = ref2.errors;
          validate3.errors = err155;
          if (!res155) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr161.map((e) => errorMerge(e, "#/properties/attributes/$ref", "#/attributes")));
            errorCount++;
          }
        }
        if (data.canvas !== void 0 && hasOwn(data, "canvas")) {
          if (!(typeof data.canvas === "object" && data.canvas && !Array.isArray(data.canvas))) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/canvas/type", instanceLocation: "#/canvas" });
            errorCount++;
          } else {
            if (!(data.canvas.elements !== void 0 && hasOwn(data.canvas, "elements"))) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/canvas/required", instanceLocation: "#/canvas/elements" });
              errorCount++;
            }
            if (!(data.canvas.width !== void 0 && hasOwn(data.canvas, "width"))) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/canvas/required", instanceLocation: "#/canvas/width" });
              errorCount++;
            }
            if (!(data.canvas.height !== void 0 && hasOwn(data.canvas, "height"))) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/canvas/required", instanceLocation: "#/canvas/height" });
              errorCount++;
            }
            if (data.canvas.elements !== void 0 && hasOwn(data.canvas, "elements")) {
              if (!Array.isArray(data.canvas.elements)) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/canvas/properties/elements/type", instanceLocation: "#/canvas/elements" });
                errorCount++;
              } else {
                if (data.canvas.elements.length > 1024) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/canvas/properties/elements/maxItems", instanceLocation: "#/canvas/elements" });
                  errorCount++;
                }
                for (let i = 0; i < data.canvas.elements.length; i++) {
                  if (data.canvas.elements[i] !== void 0 && hasOwn(data.canvas.elements, i)) {
                    const err167 = validate3.errors;
                    const res167 = ref10(data.canvas.elements[i]);
                    const suberr175 = ref10.errors;
                    validate3.errors = err167;
                    if (!res167) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push(...suberr175.map((e) => errorMerge(e, "#/properties/canvas/properties/elements/items/$ref", "#/canvas/elements/" + i)));
                      errorCount++;
                    }
                  }
                }
              }
            }
            if (data.canvas.width !== void 0 && hasOwn(data.canvas, "width")) {
              if (!(typeof data.canvas.width === "number")) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/canvas/properties/width/type", instanceLocation: "#/canvas/width" });
                errorCount++;
              } else {
                if (!(1 <= data.canvas.width)) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/canvas/properties/width/minimum", instanceLocation: "#/canvas/width" });
                  errorCount++;
                }
                if (!(1e6 >= data.canvas.width)) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/canvas/properties/width/maximum", instanceLocation: "#/canvas/width" });
                  errorCount++;
                }
              }
            }
            if (data.canvas.height !== void 0 && hasOwn(data.canvas, "height")) {
              if (!(typeof data.canvas.height === "number")) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/canvas/properties/height/type", instanceLocation: "#/canvas/height" });
                errorCount++;
              } else {
                if (!(1 <= data.canvas.height)) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/canvas/properties/height/minimum", instanceLocation: "#/canvas/height" });
                  errorCount++;
                }
                if (!(1e6 >= data.canvas.height)) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/canvas/properties/height/maximum", instanceLocation: "#/canvas/height" });
                  errorCount++;
                }
              }
            }
            for (const key14 of Object.keys(data.canvas)) {
              if (key14 !== "elements" && key14 !== "width" && key14 !== "height") {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/canvas/additionalProperties", instanceLocation: "#/canvas/" + pointerPart(key14) });
                errorCount++;
              }
            }
          }
        }
        if (data.components !== void 0 && hasOwn(data, "components")) {
          if (!(typeof data.components === "object" && data.components && !Array.isArray(data.components))) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/components/type", instanceLocation: "#/components" });
            errorCount++;
          } else {
            if (Object.keys(data.components).length > 512) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/components/maxProperties", instanceLocation: "#/components" });
              errorCount++;
            }
            for (const key15 of Object.keys(data.components)) {
              const err168 = validate3.errors;
              const res168 = ref7(key15);
              const suberr176 = ref7.errors;
              validate3.errors = err168;
              if (!res168) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr176.map((e) => errorMerge(e, "#/properties/components/propertyNames/$ref", "#/components/" + pointerPart(key15))));
                errorCount++;
              }
            }
            for (const key16 of Object.keys(data.components)) {
              let suberr177 = null;
              const sub27 = (() => {
                let errorCount2 = 0;
                const err177 = validate3.errors;
                const res177 = ref16(data.components[key16]);
                const suberr186 = ref16.errors;
                validate3.errors = err177;
                if (!res177) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr186.map((e) => errorMerge(e, "#/properties/components/additionalProperties/anyOf/0/$ref", "#/components/" + pointerPart(key16))));
                  errorCount2++;
                }
                return errorCount2 === 0;
              })();
              if (!sub27) {
                const sub28 = (() => {
                  let errorCount2 = 0;
                  const err179 = validate3.errors;
                  const res179 = ref22(data.components[key16]);
                  const suberr188 = ref22.errors;
                  validate3.errors = err179;
                  if (!res179) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push(...suberr188.map((e) => errorMerge(e, "#/properties/components/additionalProperties/anyOf/1/$ref", "#/components/" + pointerPart(key16))));
                    errorCount2++;
                  }
                  return errorCount2 === 0;
                })();
                if (!sub28) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/components/additionalProperties/anyOf", instanceLocation: "#/components/" + pointerPart(key16) });
                  if (suberr177)
                    validate3.errors.push(...suberr177);
                  errorCount++;
                }
              }
            }
          }
        }
        if (data.colors !== void 0 && hasOwn(data, "colors")) {
          if (!(typeof data.colors === "object" && data.colors && !Array.isArray(data.colors))) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/colors/type", instanceLocation: "#/colors" });
            errorCount++;
          } else {
            if (Object.keys(data.colors).length > 512) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/colors/maxProperties", instanceLocation: "#/colors" });
              errorCount++;
            }
            for (const key26 of Object.keys(data.colors)) {
              const err180 = validate3.errors;
              const res180 = ref7(key26);
              const suberr189 = ref7.errors;
              validate3.errors = err180;
              if (!res180) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr189.map((e) => errorMerge(e, "#/properties/colors/propertyNames/$ref", "#/colors/" + pointerPart(key26))));
                errorCount++;
              }
            }
            for (const key27 of Object.keys(data.colors)) {
              if (!(typeof data.colors[key27] === "object" && data.colors[key27] && !Array.isArray(data.colors[key27]))) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/properties/colors/additionalProperties/type", instanceLocation: "#/colors/" + pointerPart(key27) });
                errorCount++;
              } else {
                if (!(data.colors[key27].values !== void 0 && hasOwn(data.colors[key27], "values"))) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/properties/colors/additionalProperties/required", instanceLocation: "#/colors/" + pointerPart(key27) + "/values" });
                  errorCount++;
                }
                if (data.colors[key27].values !== void 0 && hasOwn(data.colors[key27], "values")) {
                  if (!Array.isArray(data.colors[key27].values)) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/colors/additionalProperties/properties/values/type", instanceLocation: "#/colors/" + pointerPart(key27) + "/values" });
                    errorCount++;
                  } else {
                    if (data.colors[key27].values.length > 128) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/colors/additionalProperties/properties/values/maxItems", instanceLocation: "#/colors/" + pointerPart(key27) + "/values" });
                      errorCount++;
                    }
                    if (data.colors[key27].values.length < 1) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/colors/additionalProperties/properties/values/minItems", instanceLocation: "#/colors/" + pointerPart(key27) + "/values" });
                      errorCount++;
                    }
                    for (let n = 0; n < data.colors[key27].values.length; n++) {
                      if (data.colors[key27].values[n] !== void 0 && hasOwn(data.colors[key27].values, n)) {
                        const err181 = validate3.errors;
                        const res181 = ref23(data.colors[key27].values[n]);
                        const suberr190 = ref23.errors;
                        validate3.errors = err181;
                        if (!res181) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push(...suberr190.map((e) => errorMerge(e, "#/properties/colors/additionalProperties/properties/values/items/$ref", "#/colors/" + pointerPart(key27) + "values/" + n)));
                          errorCount++;
                        }
                      }
                    }
                  }
                }
                if (data.colors[key27].notEqualTo !== void 0 && hasOwn(data.colors[key27], "notEqualTo")) {
                  if (!Array.isArray(data.colors[key27].notEqualTo)) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/colors/additionalProperties/properties/notEqualTo/type", instanceLocation: "#/colors/" + pointerPart(key27) + "/notEqualTo" });
                    errorCount++;
                  } else {
                    if (data.colors[key27].notEqualTo.length > 64) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push({ keywordLocation: "#/properties/colors/additionalProperties/properties/notEqualTo/maxItems", instanceLocation: "#/colors/" + pointerPart(key27) + "/notEqualTo" });
                      errorCount++;
                    }
                    for (let o = 0; o < data.colors[key27].notEqualTo.length; o++) {
                      if (data.colors[key27].notEqualTo[o] !== void 0 && hasOwn(data.colors[key27].notEqualTo, o)) {
                        const err182 = validate3.errors;
                        const res182 = ref6(data.colors[key27].notEqualTo[o]);
                        const suberr191 = ref6.errors;
                        validate3.errors = err182;
                        if (!res182) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push(...suberr191.map((e) => errorMerge(e, "#/properties/colors/additionalProperties/properties/notEqualTo/items/$ref", "#/colors/" + pointerPart(key27) + "notEqualTo/" + o)));
                          errorCount++;
                        }
                      }
                    }
                  }
                }
                if (data.colors[key27].contrastTo !== void 0 && hasOwn(data.colors[key27], "contrastTo")) {
                  const err183 = validate3.errors;
                  const res183 = ref6(data.colors[key27].contrastTo);
                  const suberr192 = ref6.errors;
                  validate3.errors = err183;
                  if (!res183) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push(...suberr192.map((e) => errorMerge(e, "#/properties/colors/additionalProperties/properties/contrastTo/$ref", "#/colors/" + pointerPart(key27) + "/contrastTo")));
                    errorCount++;
                  }
                }
                for (const key28 of Object.keys(data.colors[key27])) {
                  if (key28 !== "values" && key28 !== "notEqualTo" && key28 !== "contrastTo") {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/properties/colors/additionalProperties/additionalProperties", instanceLocation: "#/colors/" + pointerPart(key27) + "/" + pointerPart(key28) });
                    errorCount++;
                  }
                }
              }
            }
          }
        }
        for (const key29 of Object.keys(data)) {
          if (key29 !== "$id" && key29 !== "$schema" && key29 !== "$comment" && key29 !== "meta" && key29 !== "attributes" && key29 !== "canvas" && key29 !== "components" && key29 !== "colors") {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key29) });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    return ref0;
  })();
  var KEYWORD_MESSAGES = {
    type: "has an invalid type",
    enum: "must be one of the allowed values",
    const: "must equal the expected value",
    pattern: "does not match the required pattern",
    required: "is required but missing",
    additionalProperties: "has an unexpected property",
    propertyNames: "has an invalid property name",
    minimum: "is smaller than allowed",
    maximum: "is larger than allowed",
    exclusiveMinimum: "is smaller than allowed",
    exclusiveMaximum: "is larger than allowed",
    minLength: "is too short",
    maxLength: "is too long",
    minItems: "has too few items",
    maxItems: "has too many items",
    uniqueItems: "has duplicate items",
    minProperties: "has too few properties",
    maxProperties: "has too many properties",
    anyOf: "does not match any allowed variant",
    oneOf: "does not match exactly one allowed variant",
    allOf: "does not match all required schemas",
    not: "matches a disallowed schema"
  };
  function toDetail(error) {
    const keyword = error.keywordLocation.slice(error.keywordLocation.lastIndexOf("/") + 1);
    return {
      instancePath: error.instanceLocation.slice(1),
      schemaPath: error.keywordLocation,
      keyword,
      message: KEYWORD_MESSAGES[keyword] ?? `must satisfy '${keyword}'`
    };
  }
  var StyleValidator = class {
    static validate(data) {
      if (!validate(data)) {
        throw new StyleValidationError((validate.errors ?? []).map(toDetail));
      }
    }
  };

  // node_modules/@dicebear/core/lib/Style/MetaLicense.js
  var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _MetaLicense_data;
  var MetaLicense = class {
    constructor(data) {
      _MetaLicense_data.set(this, void 0);
      __classPrivateFieldSet(this, _MetaLicense_data, data, "f");
    }
    /**
     * Returns the license name (e.g. `"CC BY 4.0"`), or `undefined` when not set.
     */
    name() {
      return __classPrivateFieldGet(this, _MetaLicense_data, "f").name;
    }
    /**
     * Returns the license URL, or `undefined` when not set.
     */
    url() {
      return __classPrivateFieldGet(this, _MetaLicense_data, "f").url;
    }
    /**
     * Returns the full license text, or `undefined` when not set.
     */
    text() {
      return __classPrivateFieldGet(this, _MetaLicense_data, "f").text;
    }
  };
  _MetaLicense_data = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style/MetaCreator.js
  var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _MetaCreator_data;
  var MetaCreator = class {
    constructor(data) {
      _MetaCreator_data.set(this, void 0);
      __classPrivateFieldSet2(this, _MetaCreator_data, data, "f");
    }
    /**
     * Returns the creator's display name, or `undefined` when not set.
     */
    name() {
      return __classPrivateFieldGet2(this, _MetaCreator_data, "f").name;
    }
    /**
     * Returns the creator's homepage URL, or `undefined` when not set.
     */
    url() {
      return __classPrivateFieldGet2(this, _MetaCreator_data, "f").url;
    }
  };
  _MetaCreator_data = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style/MetaSource.js
  var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _MetaSource_data;
  var MetaSource = class {
    constructor(data) {
      _MetaSource_data.set(this, void 0);
      __classPrivateFieldSet3(this, _MetaSource_data, data, "f");
    }
    /**
     * Returns the source name (e.g. the original work title), or `undefined`
     * when not set.
     */
    name() {
      return __classPrivateFieldGet3(this, _MetaSource_data, "f").name;
    }
    /**
     * Returns the URL of the source, or `undefined` when not set.
     */
    url() {
      return __classPrivateFieldGet3(this, _MetaSource_data, "f").url;
    }
  };
  _MetaSource_data = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style/Meta.js
  var __classPrivateFieldSet4 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Meta_data;
  var _Meta_license;
  var _Meta_creator;
  var _Meta_source;
  var Meta = class {
    constructor(data) {
      _Meta_data.set(this, void 0);
      _Meta_license.set(this, void 0);
      _Meta_creator.set(this, void 0);
      _Meta_source.set(this, void 0);
      __classPrivateFieldSet4(this, _Meta_data, data, "f");
    }
    /**
     * Returns the license descriptor, defaulting to an empty object when the
     * style definition omits the field.
     */
    license() {
      __classPrivateFieldSet4(this, _Meta_license, __classPrivateFieldGet4(this, _Meta_license, "f") ?? new MetaLicense(__classPrivateFieldGet4(this, _Meta_data, "f").license ?? {}), "f");
      return __classPrivateFieldGet4(this, _Meta_license, "f");
    }
    /**
     * Returns the creator descriptor, defaulting to an empty object when the
     * style definition omits the field.
     */
    creator() {
      __classPrivateFieldSet4(this, _Meta_creator, __classPrivateFieldGet4(this, _Meta_creator, "f") ?? new MetaCreator(__classPrivateFieldGet4(this, _Meta_data, "f").creator ?? {}), "f");
      return __classPrivateFieldGet4(this, _Meta_creator, "f");
    }
    /**
     * Returns the source descriptor, defaulting to an empty object when the
     * style definition omits the field.
     */
    source() {
      __classPrivateFieldSet4(this, _Meta_source, __classPrivateFieldGet4(this, _Meta_source, "f") ?? new MetaSource(__classPrivateFieldGet4(this, _Meta_data, "f").source ?? {}), "f");
      return __classPrivateFieldGet4(this, _Meta_source, "f");
    }
  };
  _Meta_data = /* @__PURE__ */ new WeakMap(), _Meta_license = /* @__PURE__ */ new WeakMap(), _Meta_creator = /* @__PURE__ */ new WeakMap(), _Meta_source = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style/Element.js
  var __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Element_data;
  var _Element_children;
  var Element = class _Element {
    constructor(data) {
      _Element_data.set(this, void 0);
      _Element_children.set(this, void 0);
      __classPrivateFieldSet5(this, _Element_data, data, "f");
    }
    /**
     * Returns the element type discriminator (`svg`, `text`, `component`, …).
     */
    type() {
      return __classPrivateFieldGet5(this, _Element_data, "f").type;
    }
    /**
     * Returns the element's tag/component name, or `undefined` for elements
     * that don't have one.
     */
    name() {
      return __classPrivateFieldGet5(this, _Element_data, "f").name;
    }
    /**
     * Returns the element's textual value (for `text` elements) or template
     * fragment, or `undefined` when not applicable.
     */
    value() {
      return __classPrivateFieldGet5(this, _Element_data, "f").value;
    }
    /**
     * Returns the element's raw attribute map, or `undefined` when no
     * attributes are defined.
     */
    attributes() {
      return __classPrivateFieldGet5(this, _Element_data, "f").attributes;
    }
    /**
     * Returns the element's children, lazily wrapped as {@link Element}
     * instances on first access.
     */
    children() {
      __classPrivateFieldSet5(this, _Element_children, __classPrivateFieldGet5(this, _Element_children, "f") ?? (__classPrivateFieldGet5(this, _Element_data, "f").children ?? []).map((child) => new _Element(child)), "f");
      return __classPrivateFieldGet5(this, _Element_children, "f");
    }
  };
  _Element_data = /* @__PURE__ */ new WeakMap(), _Element_children = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style/Canvas.js
  var __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet6 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Canvas_data;
  var _Canvas_elements;
  var Canvas = class {
    constructor(data) {
      _Canvas_data.set(this, void 0);
      _Canvas_elements.set(this, void 0);
      __classPrivateFieldSet6(this, _Canvas_data, data, "f");
    }
    /**
     * Returns the canvas width — the `width` value of the SVG `viewBox`.
     */
    width() {
      return __classPrivateFieldGet6(this, _Canvas_data, "f").width;
    }
    /**
     * Returns the canvas height — the `height` value of the SVG `viewBox`.
     */
    height() {
      return __classPrivateFieldGet6(this, _Canvas_data, "f").height;
    }
    /**
     * Returns the top-level elements rendered onto the canvas, lazily wrapped
     * as {@link Element} instances on first access.
     */
    elements() {
      __classPrivateFieldSet6(this, _Canvas_elements, __classPrivateFieldGet6(this, _Canvas_elements, "f") ?? __classPrivateFieldGet6(this, _Canvas_data, "f").elements.map((el) => new Element(el)), "f");
      return __classPrivateFieldGet6(this, _Canvas_elements, "f");
    }
  };
  _Canvas_data = /* @__PURE__ */ new WeakMap(), _Canvas_elements = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style/ComponentTranslate.js
  var __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet7 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _ComponentTranslate_data;
  var ComponentTranslate = class {
    constructor(data) {
      _ComponentTranslate_data.set(this, void 0);
      __classPrivateFieldSet7(this, _ComponentTranslate_data, data, "f");
    }
    x() {
      return __classPrivateFieldGet7(this, _ComponentTranslate_data, "f").x;
    }
    y() {
      return __classPrivateFieldGet7(this, _ComponentTranslate_data, "f").y;
    }
  };
  _ComponentTranslate_data = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style/ComponentVariant.js
  var __classPrivateFieldSet8 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet8 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _ComponentVariant_data;
  var _ComponentVariant_elements;
  var ComponentVariant = class {
    constructor(data) {
      _ComponentVariant_data.set(this, void 0);
      _ComponentVariant_elements.set(this, void 0);
      __classPrivateFieldSet8(this, _ComponentVariant_data, data, "f");
    }
    /**
     * Returns the variant's elements, lazily wrapped as {@link Element}
     * instances on first access.
     */
    elements() {
      __classPrivateFieldSet8(this, _ComponentVariant_elements, __classPrivateFieldGet8(this, _ComponentVariant_elements, "f") ?? __classPrivateFieldGet8(this, _ComponentVariant_data, "f").elements.map((el) => new Element(el)), "f");
      return __classPrivateFieldGet8(this, _ComponentVariant_elements, "f");
    }
    /**
     * Returns the weighted-pick weight for this variant, defaulting to `1`.
     */
    weight() {
      return __classPrivateFieldGet8(this, _ComponentVariant_data, "f").weight ?? 1;
    }
    /**
     * Returns the variant's descriptive tags (e.g. `hairLength:long`), or an
     * empty list when none are authored. Consumed by the `tags` render option
     * to filter the variant pool.
     */
    tags() {
      return __classPrivateFieldGet8(this, _ComponentVariant_data, "f").tags ?? [];
    }
    /**
     * Tests this variant against a single tag-filter token's grammar. With no
     * `value`, it matches a whole category: the bare `category` tag or any
     * `category:value` tag. With a `value`, it matches only the exact
     * `category:value` tag. The resolver composes these checks into the
     * allow/disallow filter structure.
     */
    hasTag(category, value) {
      if (value === void 0) {
        return this.tags().some((tag) => tag === category || tag.startsWith(`${category}:`));
      }
      return this.tags().includes(`${category}:${value}`);
    }
  };
  _ComponentVariant_data = /* @__PURE__ */ new WeakMap(), _ComponentVariant_elements = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style/Component.js
  var __classPrivateFieldSet9 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet9 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Component_instances;
  var _Component_data;
  var _Component_name;
  var _Component_source;
  var _Component_translate;
  var _Component_variants;
  var _Component_asBase;
  var Component = class {
    constructor(name, data, source) {
      _Component_instances.add(this);
      _Component_data.set(this, void 0);
      _Component_name.set(this, void 0);
      _Component_source.set(this, void 0);
      _Component_translate.set(this, void 0);
      _Component_variants.set(this, void 0);
      __classPrivateFieldSet9(this, _Component_data, data, "f");
      __classPrivateFieldSet9(this, _Component_name, name, "f");
      __classPrivateFieldSet9(this, _Component_source, source, "f");
    }
    /**
     * Returns the entry's own name as declared in the style definition. For
     * aliases this is the alias key, not the source component's name (use
     * {@link sourceName} for the canonical user-option key prefix).
     */
    name() {
      return __classPrivateFieldGet9(this, _Component_name, "f");
    }
    /**
     * Returns the source component name when this entry is an alias, or
     * `undefined` for a base component.
     */
    extendsName() {
      return "extends" in __classPrivateFieldGet9(this, _Component_data, "f") ? __classPrivateFieldGet9(this, _Component_data, "f").extends : void 0;
    }
    /**
     * Returns the canonical user-option key prefix: the source component's
     * name when this entry is an alias, otherwise the entry's own name.
     */
    sourceName() {
      return this.extendsName() ?? __classPrivateFieldGet9(this, _Component_name, "f");
    }
    /**
     * Returns the component's intrinsic width in canvas coordinates. For
     * aliases the source component's width is returned.
     */
    width() {
      return __classPrivateFieldGet9(this, _Component_source, "f") ? __classPrivateFieldGet9(this, _Component_source, "f").width() : __classPrivateFieldGet9(this, _Component_instances, "m", _Component_asBase).call(this).width;
    }
    /**
     * Returns the component's intrinsic height in canvas coordinates. For
     * aliases the source component's height is returned.
     */
    height() {
      return __classPrivateFieldGet9(this, _Component_source, "f") ? __classPrivateFieldGet9(this, _Component_source, "f").height() : __classPrivateFieldGet9(this, _Component_instances, "m", _Component_asBase).call(this).height;
    }
    /**
     * Returns the probability (0–100) that this component is rendered.
     * Aliases delegate to the source; defaults to 100 (always visible).
     */
    probability() {
      if (__classPrivateFieldGet9(this, _Component_source, "f")) {
        return __classPrivateFieldGet9(this, _Component_source, "f").probability();
      }
      return __classPrivateFieldGet9(this, _Component_instances, "m", _Component_asBase).call(this).probability ?? 100;
    }
    /**
     * Returns the rotation range, or `undefined` when unset.
     * Aliases delegate to the source.
     */
    rotate() {
      return __classPrivateFieldGet9(this, _Component_source, "f") ? __classPrivateFieldGet9(this, _Component_source, "f").rotate() : __classPrivateFieldGet9(this, _Component_instances, "m", _Component_asBase).call(this).rotate;
    }
    /**
     * Returns the scale range, or `undefined` when unset.
     * Aliases delegate to the source.
     */
    scale() {
      return __classPrivateFieldGet9(this, _Component_source, "f") ? __classPrivateFieldGet9(this, _Component_source, "f").scale() : __classPrivateFieldGet9(this, _Component_instances, "m", _Component_asBase).call(this).scale;
    }
    /**
     * Returns the translate descriptor. Aliases delegate to the source.
     */
    translate() {
      if (__classPrivateFieldGet9(this, _Component_source, "f")) {
        return __classPrivateFieldGet9(this, _Component_source, "f").translate();
      }
      __classPrivateFieldSet9(this, _Component_translate, __classPrivateFieldGet9(this, _Component_translate, "f") ?? new ComponentTranslate(__classPrivateFieldGet9(this, _Component_instances, "m", _Component_asBase).call(this).translate ?? {}), "f");
      return __classPrivateFieldGet9(this, _Component_translate, "f");
    }
    /**
     * Returns a name → {@link ComponentVariant} map for all defined variants.
     * Aliases delegate to the source component's variants.
     */
    variants() {
      if (__classPrivateFieldGet9(this, _Component_source, "f")) {
        return __classPrivateFieldGet9(this, _Component_source, "f").variants();
      }
      __classPrivateFieldSet9(this, _Component_variants, __classPrivateFieldGet9(this, _Component_variants, "f") ?? new Map(Object.entries(__classPrivateFieldGet9(this, _Component_instances, "m", _Component_asBase).call(this).variants).map(([name, data]) => [
        name,
        new ComponentVariant(data)
      ])), "f");
      return __classPrivateFieldGet9(this, _Component_variants, "f");
    }
  };
  _Component_data = /* @__PURE__ */ new WeakMap(), _Component_name = /* @__PURE__ */ new WeakMap(), _Component_source = /* @__PURE__ */ new WeakMap(), _Component_translate = /* @__PURE__ */ new WeakMap(), _Component_variants = /* @__PURE__ */ new WeakMap(), _Component_instances = /* @__PURE__ */ new WeakSet(), _Component_asBase = function _Component_asBase2() {
    return __classPrivateFieldGet9(this, _Component_data, "f");
  };

  // node_modules/@dicebear/core/lib/Style/Color.js
  var __classPrivateFieldSet10 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet10 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Color_data;
  var Color = class {
    constructor(data) {
      _Color_data.set(this, void 0);
      __classPrivateFieldSet10(this, _Color_data, data, "f");
    }
    /**
     * Returns the candidate color values, in definition order.
     */
    values() {
      return __classPrivateFieldGet10(this, _Color_data, "f").values;
    }
    /**
     * Returns the colors that the resolver should avoid picking, or an empty
     * list when the field is unset.
     */
    notEqualTo() {
      return __classPrivateFieldGet10(this, _Color_data, "f").notEqualTo ?? [];
    }
    /**
     * Returns the name of another color that this one should contrast against,
     * or `undefined` when no contrast constraint is defined.
     */
    contrastTo() {
      return __classPrivateFieldGet10(this, _Color_data, "f").contrastTo;
    }
  };
  _Color_data = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Style.js
  var __classPrivateFieldSet11 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet11 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Style_instances;
  var _a;
  var _Style_data;
  var _Style_meta;
  var _Style_canvas;
  var _Style_components;
  var _Style_colors;
  var _Style_validateAliases;
  var _Style_isAlias;
  var Style = class {
    constructor(data) {
      _Style_instances.add(this);
      _Style_data.set(this, void 0);
      _Style_meta.set(this, void 0);
      _Style_canvas.set(this, void 0);
      _Style_components.set(this, void 0);
      _Style_colors.set(this, void 0);
      StyleValidator.validate(data);
      __classPrivateFieldSet11(this, _Style_data, structuredClone(data), "f");
      __classPrivateFieldGet11(this, _Style_instances, "m", _Style_validateAliases).call(this);
    }
    /**
     * Returns the definition's `$id`, or `undefined` when not set.
     */
    id() {
      return __classPrivateFieldGet11(this, _Style_data, "f").$id;
    }
    /**
     * Returns the definition's `$schema` URI, or `undefined` when not set.
     */
    schema() {
      return __classPrivateFieldGet11(this, _Style_data, "f").$schema;
    }
    /**
     * Returns the definition's `$comment`, or `undefined` when not set.
     */
    comment() {
      return __classPrivateFieldGet11(this, _Style_data, "f").$comment;
    }
    /**
     * Returns the {@link Meta} view, lazily constructed on first access.
     */
    meta() {
      __classPrivateFieldSet11(this, _Style_meta, __classPrivateFieldGet11(this, _Style_meta, "f") ?? new Meta(__classPrivateFieldGet11(this, _Style_data, "f").meta ?? {}), "f");
      return __classPrivateFieldGet11(this, _Style_meta, "f");
    }
    /**
     * Returns a deep clone of the root SVG attributes from the definition,
     * defaulting to an empty object.
     */
    attributes() {
      return structuredClone(__classPrivateFieldGet11(this, _Style_data, "f").attributes ?? {});
    }
    /**
     * Returns a deep clone of the underlying definition.
     */
    definition() {
      return structuredClone(__classPrivateFieldGet11(this, _Style_data, "f"));
    }
    /**
     * Returns the {@link Canvas} view, lazily constructed on first access.
     */
    canvas() {
      __classPrivateFieldSet11(this, _Style_canvas, __classPrivateFieldGet11(this, _Style_canvas, "f") ?? new Canvas(__classPrivateFieldGet11(this, _Style_data, "f").canvas), "f");
      return __classPrivateFieldGet11(this, _Style_canvas, "f");
    }
    /**
     * Returns a name → {@link Component} map for all defined components, built
     * lazily on first access.
     */
    components() {
      if (__classPrivateFieldGet11(this, _Style_components, "f")) {
        return __classPrivateFieldGet11(this, _Style_components, "f");
      }
      const entries = Object.entries(__classPrivateFieldGet11(this, _Style_data, "f").components ?? {});
      const map = /* @__PURE__ */ new Map();
      for (const [name, data] of entries) {
        if (!__classPrivateFieldGet11(_a, _a, "m", _Style_isAlias).call(_a, data)) {
          map.set(name, new Component(name, data));
        }
      }
      for (const [name, data] of entries) {
        if (__classPrivateFieldGet11(_a, _a, "m", _Style_isAlias).call(_a, data)) {
          map.set(name, new Component(name, data, map.get(data.extends)));
        }
      }
      __classPrivateFieldSet11(this, _Style_components, map, "f");
      return __classPrivateFieldGet11(this, _Style_components, "f");
    }
    /**
     * Returns a name → {@link Color} map for all defined colors, built lazily
     * on first access.
     */
    colors() {
      __classPrivateFieldSet11(this, _Style_colors, __classPrivateFieldGet11(this, _Style_colors, "f") ?? new Map(Object.entries(__classPrivateFieldGet11(this, _Style_data, "f").colors ?? {}).map(([name, data]) => [
        name,
        new Color(data)
      ])), "f");
      return __classPrivateFieldGet11(this, _Style_colors, "f");
    }
  };
  _a = Style, _Style_data = /* @__PURE__ */ new WeakMap(), _Style_meta = /* @__PURE__ */ new WeakMap(), _Style_canvas = /* @__PURE__ */ new WeakMap(), _Style_components = /* @__PURE__ */ new WeakMap(), _Style_colors = /* @__PURE__ */ new WeakMap(), _Style_instances = /* @__PURE__ */ new WeakSet(), _Style_validateAliases = function _Style_validateAliases2() {
    const components = __classPrivateFieldGet11(this, _Style_data, "f").components;
    if (!components) {
      return;
    }
    const errors = [];
    for (const [name, data] of Object.entries(components)) {
      if (!__classPrivateFieldGet11(_a, _a, "m", _Style_isAlias).call(_a, data)) {
        continue;
      }
      const target = data.extends;
      const targetData = components[target];
      if (!targetData) {
        errors.push({
          instancePath: `/components/${name}/extends`,
          message: `references unknown component "${target}"`
        });
        continue;
      }
      if (__classPrivateFieldGet11(_a, _a, "m", _Style_isAlias).call(_a, targetData)) {
        errors.push({
          instancePath: `/components/${name}/extends`,
          message: `references alias "${target}" \u2014 alias chains are not allowed`
        });
      }
    }
    if (errors.length > 0) {
      throw new StyleValidationError(errors);
    }
  }, _Style_isAlias = function _Style_isAlias2(data) {
    return "extends" in data;
  };

  // node_modules/@dicebear/core/lib/Error/OptionsValidationError.js
  var OptionsValidationError = class extends ValidationError {
    constructor(details) {
      super("Invalid options", details);
      this.name = "OptionsValidationError";
    }
  };

  // node_modules/@dicebear/core/lib/Validator/OptionsValidator.js
  var validate2 = (function() {
    "use strict";
    const stringLength = (string) => /[\uD800-\uDFFF]/.test(string) ? [...string].length : string.length;
    const pointerPart = (s) => /~\//.test(s) ? `${s}`.replace(/~/g, "~0").replace(/\//g, "~1") : s;
    const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    const ref1 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data === "none" || data === "horizontal" || data === "vertical" || data === "both")) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/enum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const errorMerge = ({ keywordLocation, instanceLocation }, schemaBase, dataBase) => ({
      keywordLocation: `${schemaBase}${keywordLocation.slice(1)}`,
      instanceLocation: `${dataBase}${instanceLocation.slice(1)}`
    });
    const pattern0 = new RegExp("^[a-zA-Z0-9_\\-]+( [a-zA-Z0-9_\\-]+)*(, ?[a-zA-Z0-9_\\-]+( [a-zA-Z0-9_\\-]+)*)*$", "u");
    const ref2 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        const prev1 = errorCount;
        if (data.length > 256 && stringLength(data) > 256) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        if (errorCount === prev1) {
          if (!pattern0.test(data)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/pattern", instanceLocation: "#" });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const ref3 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!Number.isInteger(data)) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(1 <= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/minimum", instanceLocation: "#" });
          errorCount++;
        }
        if (!(1e3 >= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maximum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref5 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "number")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(0 <= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/minimum", instanceLocation: "#" });
          errorCount++;
        }
        if (!(10 >= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maximum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref4 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      let suberr9 = null;
      const sub6 = (() => {
        let errorCount2 = 0;
        const err6 = validate3.errors;
        const res6 = ref5(data);
        const suberr10 = ref5.errors;
        validate3.errors = err6;
        if (!res6) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push(...suberr10.map((e) => errorMerge(e, "#/anyOf/0/$ref", "#")));
          errorCount2++;
        }
        return errorCount2 === 0;
      })();
      if (!sub6) {
        const sub7 = (() => {
          let errorCount2 = 0;
          if (!Array.isArray(data)) {
            if (suberr9 === null)
              suberr9 = [];
            suberr9.push({ keywordLocation: "#/anyOf/1/type", instanceLocation: "#" });
            errorCount2++;
          } else {
            if (data.length > 2) {
              if (suberr9 === null)
                suberr9 = [];
              suberr9.push({ keywordLocation: "#/anyOf/1/maxItems", instanceLocation: "#" });
              errorCount2++;
            }
            if (data.length < 0) {
              if (suberr9 === null)
                suberr9 = [];
              suberr9.push({ keywordLocation: "#/anyOf/1/minItems", instanceLocation: "#" });
              errorCount2++;
            }
            for (let l = 0; l < data.length; l++) {
              if (data[l] !== void 0 && hasOwn(data, l)) {
                const err7 = validate3.errors;
                const res7 = ref5(data[l]);
                const suberr11 = ref5.errors;
                validate3.errors = err7;
                if (!res7) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr11.map((e) => errorMerge(e, "#/anyOf/1/items/$ref", "#/" + l)));
                  errorCount2++;
                }
              }
            }
          }
          return errorCount2 === 0;
        })();
        if (!sub7) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/anyOf", instanceLocation: "#" });
          if (suberr9)
            validate3.errors.push(...suberr9);
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref6 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "number")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(0 <= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/minimum", instanceLocation: "#" });
          errorCount++;
        }
        if (!(50 >= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maximum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const pattern1 = new RegExp("^!?[a-z][a-zA-Z0-9]*(:[a-z][a-zA-Z0-9]*)?$", "u");
    const ref7 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        const prev2 = errorCount;
        if (data.length > 130 && stringLength(data) > 130) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        if (errorCount === prev2) {
          if (!pattern1.test(data)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/pattern", instanceLocation: "#" });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const pattern2 = new RegExp("^[a-z][a-zA-Z0-9]*Probability$", "u");
    const pattern3 = new RegExp("^[a-z][a-zA-Z0-9]*Variant$", "u");
    const pattern4 = new RegExp("^[a-z][a-zA-Z0-9]*$", "u");
    const ref8 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        const prev3 = errorCount;
        if (data.length > 64 && stringLength(data) > 64) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxLength", instanceLocation: "#" });
          errorCount++;
        }
        if (errorCount === prev3) {
          if (!pattern4.test(data)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/pattern", instanceLocation: "#" });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const pattern5 = new RegExp("^[a-z][a-zA-Z0-9]*Color$", "u");
    const pattern6 = new RegExp("^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$", "u");
    const ref9 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        const prev4 = errorCount;
        if (errorCount === prev4) {
          if (!pattern6.test(data)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/pattern", instanceLocation: "#" });
            errorCount++;
          }
        }
      }
      return errorCount === 0;
    };
    const pattern7 = new RegExp("^[a-z][a-zA-Z0-9]*ColorFill$", "u");
    const ref10 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "string")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(data === "solid" || data === "linear" || data === "radial")) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/enum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const pattern8 = new RegExp("^[a-z][a-zA-Z0-9]*ColorFillStops$", "u");
    const ref11 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!Number.isInteger(data)) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(2 <= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/minimum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const pattern9 = new RegExp("^[a-z][a-zA-Z0-9]*ColorAngle$", "u");
    const ref13 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "number")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(-360 <= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/minimum", instanceLocation: "#" });
          errorCount++;
        }
        if (!(360 >= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maximum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref12 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      let suberr32 = null;
      const sub21 = (() => {
        let errorCount2 = 0;
        const err22 = validate3.errors;
        const res22 = ref13(data);
        const suberr33 = ref13.errors;
        validate3.errors = err22;
        if (!res22) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push(...suberr33.map((e) => errorMerge(e, "#/anyOf/0/$ref", "#")));
          errorCount2++;
        }
        return errorCount2 === 0;
      })();
      if (!sub21) {
        const sub22 = (() => {
          let errorCount2 = 0;
          if (!Array.isArray(data)) {
            if (suberr32 === null)
              suberr32 = [];
            suberr32.push({ keywordLocation: "#/anyOf/1/type", instanceLocation: "#" });
            errorCount2++;
          } else {
            if (data.length > 2) {
              if (suberr32 === null)
                suberr32 = [];
              suberr32.push({ keywordLocation: "#/anyOf/1/maxItems", instanceLocation: "#" });
              errorCount2++;
            }
            if (data.length < 0) {
              if (suberr32 === null)
                suberr32 = [];
              suberr32.push({ keywordLocation: "#/anyOf/1/minItems", instanceLocation: "#" });
              errorCount2++;
            }
            for (let s = 0; s < data.length; s++) {
              if (data[s] !== void 0 && hasOwn(data, s)) {
                const err23 = validate3.errors;
                const res23 = ref13(data[s]);
                const suberr34 = ref13.errors;
                validate3.errors = err23;
                if (!res23) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr34.map((e) => errorMerge(e, "#/anyOf/1/items/$ref", "#/" + s)));
                  errorCount2++;
                }
              }
            }
          }
          return errorCount2 === 0;
        })();
        if (!sub22) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/anyOf", instanceLocation: "#" });
          if (suberr32)
            validate3.errors.push(...suberr32);
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const pattern10 = new RegExp("^[a-z][a-zA-Z0-9]*ColorOrder$", "u");
    const ref15 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "number")) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        if (!(-1e3 <= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/minimum", instanceLocation: "#" });
          errorCount++;
        }
        if (!(1e3 >= data)) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maximum", instanceLocation: "#" });
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref14 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      let suberr37 = null;
      const sub23 = (() => {
        let errorCount2 = 0;
        const err26 = validate3.errors;
        const res26 = ref15(data);
        const suberr38 = ref15.errors;
        validate3.errors = err26;
        if (!res26) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push(...suberr38.map((e) => errorMerge(e, "#/anyOf/0/$ref", "#")));
          errorCount2++;
        }
        return errorCount2 === 0;
      })();
      if (!sub23) {
        const sub24 = (() => {
          let errorCount2 = 0;
          if (!Array.isArray(data)) {
            if (suberr37 === null)
              suberr37 = [];
            suberr37.push({ keywordLocation: "#/anyOf/1/type", instanceLocation: "#" });
            errorCount2++;
          } else {
            if (data.length > 2) {
              if (suberr37 === null)
                suberr37 = [];
              suberr37.push({ keywordLocation: "#/anyOf/1/maxItems", instanceLocation: "#" });
              errorCount2++;
            }
            if (data.length < 0) {
              if (suberr37 === null)
                suberr37 = [];
              suberr37.push({ keywordLocation: "#/anyOf/1/minItems", instanceLocation: "#" });
              errorCount2++;
            }
            for (let t = 0; t < data.length; t++) {
              if (data[t] !== void 0 && hasOwn(data, t)) {
                const err27 = validate3.errors;
                const res27 = ref15(data[t]);
                const suberr39 = ref15.errors;
                validate3.errors = err27;
                if (!res27) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr39.map((e) => errorMerge(e, "#/anyOf/1/items/$ref", "#/" + t)));
                  errorCount2++;
                }
              }
            }
          }
          return errorCount2 === 0;
        })();
        if (!sub24) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/anyOf", instanceLocation: "#" });
          if (suberr37)
            validate3.errors.push(...suberr37);
          errorCount++;
        }
      }
      return errorCount === 0;
    };
    const ref0 = function validate3(data) {
      validate3.errors = null;
      let errorCount = 0;
      if (!(typeof data === "object" && data && !Array.isArray(data))) {
        if (validate3.errors === null)
          validate3.errors = [];
        validate3.errors.push({ keywordLocation: "#/type", instanceLocation: "#" });
        errorCount++;
      } else {
        const prev0 = errorCount;
        if (Object.keys(data).length > 512) {
          if (validate3.errors === null)
            validate3.errors = [];
          validate3.errors.push({ keywordLocation: "#/maxProperties", instanceLocation: "#" });
          errorCount++;
        }
        for (const key0 of Object.keys(data)) {
          if (key0.length > 128 && stringLength(key0) > 128) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/propertyNames/maxLength", instanceLocation: "#/" + pointerPart(key0) });
            errorCount++;
          }
        }
        if (data.seed !== void 0 && hasOwn(data, "seed")) {
          if (!(typeof data.seed === "string")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/seed/type", instanceLocation: "#/seed" });
            errorCount++;
          } else {
            if (data.seed.length > 1024 && stringLength(data.seed) > 1024) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/seed/maxLength", instanceLocation: "#/seed" });
              errorCount++;
            }
          }
        }
        if (data.size !== void 0 && hasOwn(data, "size")) {
          if (!Number.isInteger(data.size)) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/size/type", instanceLocation: "#/size" });
            errorCount++;
          } else {
            if (!(1 <= data.size)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/size/minimum", instanceLocation: "#/size" });
              errorCount++;
            }
            if (!(4096 >= data.size)) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/size/maximum", instanceLocation: "#/size" });
              errorCount++;
            }
          }
        }
        if (data.idRandomization !== void 0 && hasOwn(data, "idRandomization")) {
          if (!(typeof data.idRandomization === "boolean")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/idRandomization/type", instanceLocation: "#/idRandomization" });
            errorCount++;
          }
        }
        if (data.title !== void 0 && hasOwn(data, "title")) {
          if (!(typeof data.title === "string")) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push({ keywordLocation: "#/properties/title/type", instanceLocation: "#/title" });
            errorCount++;
          } else {
            if (data.title.length > 256 && stringLength(data.title) > 256) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/title/maxLength", instanceLocation: "#/title" });
              errorCount++;
            }
          }
        }
        if (data.flip !== void 0 && hasOwn(data, "flip")) {
          let suberr0 = null;
          const sub0 = (() => {
            let errorCount2 = 0;
            const err0 = validate3.errors;
            const res0 = ref1(data.flip);
            const suberr1 = ref1.errors;
            validate3.errors = err0;
            if (!res0) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push(...suberr1.map((e) => errorMerge(e, "#/properties/flip/anyOf/0/$ref", "#/flip")));
              errorCount2++;
            }
            return errorCount2 === 0;
          })();
          if (!sub0) {
            const sub1 = (() => {
              let errorCount2 = 0;
              if (!Array.isArray(data.flip)) {
                if (suberr0 === null)
                  suberr0 = [];
                suberr0.push({ keywordLocation: "#/properties/flip/anyOf/1/type", instanceLocation: "#/flip" });
                errorCount2++;
              } else {
                if (data.flip.length > 4) {
                  if (suberr0 === null)
                    suberr0 = [];
                  suberr0.push({ keywordLocation: "#/properties/flip/anyOf/1/maxItems", instanceLocation: "#/flip" });
                  errorCount2++;
                }
                if (data.flip.length < 0) {
                  if (suberr0 === null)
                    suberr0 = [];
                  suberr0.push({ keywordLocation: "#/properties/flip/anyOf/1/minItems", instanceLocation: "#/flip" });
                  errorCount2++;
                }
                for (let i = 0; i < data.flip.length; i++) {
                  if (data.flip[i] !== void 0 && hasOwn(data.flip, i)) {
                    const err1 = validate3.errors;
                    const res1 = ref1(data.flip[i]);
                    const suberr2 = ref1.errors;
                    validate3.errors = err1;
                    if (!res1) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push(...suberr2.map((e) => errorMerge(e, "#/properties/flip/anyOf/1/items/$ref", "#/flip/" + i)));
                      errorCount2++;
                    }
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub1) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/flip/anyOf", instanceLocation: "#/flip" });
              if (suberr0)
                validate3.errors.push(...suberr0);
              errorCount++;
            }
          }
        }
        if (data.fontFamily !== void 0 && hasOwn(data, "fontFamily")) {
          let suberr3 = null;
          const sub2 = (() => {
            let errorCount2 = 0;
            const err2 = validate3.errors;
            const res2 = ref2(data.fontFamily);
            const suberr4 = ref2.errors;
            validate3.errors = err2;
            if (!res2) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push(...suberr4.map((e) => errorMerge(e, "#/properties/fontFamily/anyOf/0/$ref", "#/fontFamily")));
              errorCount2++;
            }
            return errorCount2 === 0;
          })();
          if (!sub2) {
            const sub3 = (() => {
              let errorCount2 = 0;
              if (!Array.isArray(data.fontFamily)) {
                if (suberr3 === null)
                  suberr3 = [];
                suberr3.push({ keywordLocation: "#/properties/fontFamily/anyOf/1/type", instanceLocation: "#/fontFamily" });
                errorCount2++;
              } else {
                if (data.fontFamily.length > 128) {
                  if (suberr3 === null)
                    suberr3 = [];
                  suberr3.push({ keywordLocation: "#/properties/fontFamily/anyOf/1/maxItems", instanceLocation: "#/fontFamily" });
                  errorCount2++;
                }
                if (data.fontFamily.length < 0) {
                  if (suberr3 === null)
                    suberr3 = [];
                  suberr3.push({ keywordLocation: "#/properties/fontFamily/anyOf/1/minItems", instanceLocation: "#/fontFamily" });
                  errorCount2++;
                }
                for (let j = 0; j < data.fontFamily.length; j++) {
                  if (data.fontFamily[j] !== void 0 && hasOwn(data.fontFamily, j)) {
                    const err3 = validate3.errors;
                    const res3 = ref2(data.fontFamily[j]);
                    const suberr5 = ref2.errors;
                    validate3.errors = err3;
                    if (!res3) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push(...suberr5.map((e) => errorMerge(e, "#/properties/fontFamily/anyOf/1/items/$ref", "#/fontFamily/" + j)));
                      errorCount2++;
                    }
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub3) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/fontFamily/anyOf", instanceLocation: "#/fontFamily" });
              if (suberr3)
                validate3.errors.push(...suberr3);
              errorCount++;
            }
          }
        }
        if (data.fontWeight !== void 0 && hasOwn(data, "fontWeight")) {
          let suberr6 = null;
          const sub4 = (() => {
            let errorCount2 = 0;
            const err4 = validate3.errors;
            const res4 = ref3(data.fontWeight);
            const suberr7 = ref3.errors;
            validate3.errors = err4;
            if (!res4) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push(...suberr7.map((e) => errorMerge(e, "#/properties/fontWeight/anyOf/0/$ref", "#/fontWeight")));
              errorCount2++;
            }
            return errorCount2 === 0;
          })();
          if (!sub4) {
            const sub5 = (() => {
              let errorCount2 = 0;
              if (!Array.isArray(data.fontWeight)) {
                if (suberr6 === null)
                  suberr6 = [];
                suberr6.push({ keywordLocation: "#/properties/fontWeight/anyOf/1/type", instanceLocation: "#/fontWeight" });
                errorCount2++;
              } else {
                if (data.fontWeight.length > 128) {
                  if (suberr6 === null)
                    suberr6 = [];
                  suberr6.push({ keywordLocation: "#/properties/fontWeight/anyOf/1/maxItems", instanceLocation: "#/fontWeight" });
                  errorCount2++;
                }
                if (data.fontWeight.length < 0) {
                  if (suberr6 === null)
                    suberr6 = [];
                  suberr6.push({ keywordLocation: "#/properties/fontWeight/anyOf/1/minItems", instanceLocation: "#/fontWeight" });
                  errorCount2++;
                }
                for (let k = 0; k < data.fontWeight.length; k++) {
                  if (data.fontWeight[k] !== void 0 && hasOwn(data.fontWeight, k)) {
                    const err5 = validate3.errors;
                    const res5 = ref3(data.fontWeight[k]);
                    const suberr8 = ref3.errors;
                    validate3.errors = err5;
                    if (!res5) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push(...suberr8.map((e) => errorMerge(e, "#/properties/fontWeight/anyOf/1/items/$ref", "#/fontWeight/" + k)));
                      errorCount2++;
                    }
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub5) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/fontWeight/anyOf", instanceLocation: "#/fontWeight" });
              if (suberr6)
                validate3.errors.push(...suberr6);
              errorCount++;
            }
          }
        }
        if (data.scale !== void 0 && hasOwn(data, "scale")) {
          const err8 = validate3.errors;
          const res8 = ref4(data.scale);
          const suberr12 = ref4.errors;
          validate3.errors = err8;
          if (!res8) {
            if (validate3.errors === null)
              validate3.errors = [];
            validate3.errors.push(...suberr12.map((e) => errorMerge(e, "#/properties/scale/allOf/0/$ref", "#/scale")));
            errorCount++;
          }
        }
        if (data.borderRadius !== void 0 && hasOwn(data, "borderRadius")) {
          let suberr13 = null;
          const sub8 = (() => {
            let errorCount2 = 0;
            const err9 = validate3.errors;
            const res9 = ref6(data.borderRadius);
            const suberr14 = ref6.errors;
            validate3.errors = err9;
            if (!res9) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push(...suberr14.map((e) => errorMerge(e, "#/properties/borderRadius/anyOf/0/$ref", "#/borderRadius")));
              errorCount2++;
            }
            return errorCount2 === 0;
          })();
          if (!sub8) {
            const sub9 = (() => {
              let errorCount2 = 0;
              if (!Array.isArray(data.borderRadius)) {
                if (suberr13 === null)
                  suberr13 = [];
                suberr13.push({ keywordLocation: "#/properties/borderRadius/anyOf/1/type", instanceLocation: "#/borderRadius" });
                errorCount2++;
              } else {
                if (data.borderRadius.length > 2) {
                  if (suberr13 === null)
                    suberr13 = [];
                  suberr13.push({ keywordLocation: "#/properties/borderRadius/anyOf/1/maxItems", instanceLocation: "#/borderRadius" });
                  errorCount2++;
                }
                if (data.borderRadius.length < 0) {
                  if (suberr13 === null)
                    suberr13 = [];
                  suberr13.push({ keywordLocation: "#/properties/borderRadius/anyOf/1/minItems", instanceLocation: "#/borderRadius" });
                  errorCount2++;
                }
                for (let m = 0; m < data.borderRadius.length; m++) {
                  if (data.borderRadius[m] !== void 0 && hasOwn(data.borderRadius, m)) {
                    const err10 = validate3.errors;
                    const res10 = ref6(data.borderRadius[m]);
                    const suberr15 = ref6.errors;
                    validate3.errors = err10;
                    if (!res10) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push(...suberr15.map((e) => errorMerge(e, "#/properties/borderRadius/anyOf/1/items/$ref", "#/borderRadius/" + m)));
                      errorCount2++;
                    }
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub9) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/borderRadius/anyOf", instanceLocation: "#/borderRadius" });
              if (suberr13)
                validate3.errors.push(...suberr13);
              errorCount++;
            }
          }
        }
        if (data.tags !== void 0 && hasOwn(data, "tags")) {
          let suberr16 = null;
          const sub10 = (() => {
            let errorCount2 = 0;
            const err11 = validate3.errors;
            const res11 = ref7(data.tags);
            const suberr17 = ref7.errors;
            validate3.errors = err11;
            if (!res11) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push(...suberr17.map((e) => errorMerge(e, "#/properties/tags/anyOf/0/$ref", "#/tags")));
              errorCount2++;
            }
            return errorCount2 === 0;
          })();
          if (!sub10) {
            const sub11 = (() => {
              let errorCount2 = 0;
              if (!Array.isArray(data.tags)) {
                if (suberr16 === null)
                  suberr16 = [];
                suberr16.push({ keywordLocation: "#/properties/tags/anyOf/1/type", instanceLocation: "#/tags" });
                errorCount2++;
              } else {
                if (data.tags.length > 128) {
                  if (suberr16 === null)
                    suberr16 = [];
                  suberr16.push({ keywordLocation: "#/properties/tags/anyOf/1/maxItems", instanceLocation: "#/tags" });
                  errorCount2++;
                }
                if (data.tags.length < 0) {
                  if (suberr16 === null)
                    suberr16 = [];
                  suberr16.push({ keywordLocation: "#/properties/tags/anyOf/1/minItems", instanceLocation: "#/tags" });
                  errorCount2++;
                }
                for (let n = 0; n < data.tags.length; n++) {
                  if (data.tags[n] !== void 0 && hasOwn(data.tags, n)) {
                    const err12 = validate3.errors;
                    const res12 = ref7(data.tags[n]);
                    const suberr18 = ref7.errors;
                    validate3.errors = err12;
                    if (!res12) {
                      if (validate3.errors === null)
                        validate3.errors = [];
                      validate3.errors.push(...suberr18.map((e) => errorMerge(e, "#/properties/tags/anyOf/1/items/$ref", "#/tags/" + n)));
                      errorCount2++;
                    }
                  }
                }
              }
              return errorCount2 === 0;
            })();
            if (!sub11) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/properties/tags/anyOf", instanceLocation: "#/tags" });
              if (suberr16)
                validate3.errors.push(...suberr16);
              errorCount++;
            }
          }
        }
        if (errorCount === prev0) {
          for (const key1 of Object.keys(data)) {
            if (pattern2.test(key1)) {
              if (!(typeof data[key1] === "number")) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Probability$/type", instanceLocation: "#/" + pointerPart(key1) });
                errorCount++;
              } else {
                if (!(0 <= data[key1])) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Probability$/minimum", instanceLocation: "#/" + pointerPart(key1) });
                  errorCount++;
                }
                if (!(100 >= data[key1])) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Probability$/maximum", instanceLocation: "#/" + pointerPart(key1) });
                  errorCount++;
                }
              }
            }
            if (pattern3.test(key1)) {
              let suberr19 = null;
              const sub12 = (() => {
                let errorCount2 = 0;
                const err13 = validate3.errors;
                const res13 = ref8(data[key1]);
                const suberr20 = ref8.errors;
                validate3.errors = err13;
                if (!res13) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr20.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/0/$ref", "#/" + pointerPart(key1))));
                  errorCount2++;
                }
                return errorCount2 === 0;
              })();
              if (!sub12) {
                const sub13 = (() => {
                  let errorCount2 = 0;
                  if (!Array.isArray(data[key1])) {
                    if (suberr19 === null)
                      suberr19 = [];
                    suberr19.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/1/type", instanceLocation: "#/" + pointerPart(key1) });
                    errorCount2++;
                  } else {
                    if (data[key1].length > 128) {
                      if (suberr19 === null)
                        suberr19 = [];
                      suberr19.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/1/maxItems", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    }
                    if (data[key1].length < 0) {
                      if (suberr19 === null)
                        suberr19 = [];
                      suberr19.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/1/minItems", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    }
                    for (let o = 0; o < data[key1].length; o++) {
                      if (data[key1][o] !== void 0 && hasOwn(data[key1], o)) {
                        const err14 = validate3.errors;
                        const res14 = ref8(data[key1][o]);
                        const suberr21 = ref8.errors;
                        validate3.errors = err14;
                        if (!res14) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push(...suberr21.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/1/items/$ref", "#/" + pointerPart(key1) + "/" + o)));
                          errorCount2++;
                        }
                      }
                    }
                  }
                  return errorCount2 === 0;
                })();
                if (!sub13) {
                  const sub14 = (() => {
                    let errorCount2 = 0;
                    if (!(typeof data[key1] === "object" && data[key1] && !Array.isArray(data[key1]))) {
                      if (suberr19 === null)
                        suberr19 = [];
                      suberr19.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/2/type", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    } else {
                      if (Object.keys(data[key1]).length > 512) {
                        if (suberr19 === null)
                          suberr19 = [];
                        suberr19.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/2/maxProperties", instanceLocation: "#/" + pointerPart(key1) });
                        errorCount2++;
                      }
                      if (Object.keys(data[key1]).length < 1) {
                        if (suberr19 === null)
                          suberr19 = [];
                        suberr19.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/2/minProperties", instanceLocation: "#/" + pointerPart(key1) });
                        errorCount2++;
                      }
                      for (const key2 of Object.keys(data[key1])) {
                        const err15 = validate3.errors;
                        const res15 = ref8(key2);
                        const suberr22 = ref8.errors;
                        validate3.errors = err15;
                        if (!res15) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push(...suberr22.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/2/propertyNames/$ref", "#/" + pointerPart(key1) + "/" + pointerPart(key2))));
                          errorCount2++;
                        }
                      }
                      for (const key3 of Object.keys(data[key1])) {
                        if (!(typeof data[key1][key3] === "number")) {
                          if (suberr19 === null)
                            suberr19 = [];
                          suberr19.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/2/additionalProperties/type", instanceLocation: "#/" + pointerPart(key1) + "/" + pointerPart(key3) });
                          errorCount2++;
                        } else {
                          if (!(0 <= data[key1][key3])) {
                            if (suberr19 === null)
                              suberr19 = [];
                            suberr19.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf/2/additionalProperties/minimum", instanceLocation: "#/" + pointerPart(key1) + "/" + pointerPart(key3) });
                            errorCount2++;
                          }
                        }
                      }
                    }
                    return errorCount2 === 0;
                  })();
                  if (!sub14) {
                    if (validate3.errors === null)
                      validate3.errors = [];
                    validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Variant$/anyOf", instanceLocation: "#/" + pointerPart(key1) });
                    if (suberr19)
                      validate3.errors.push(...suberr19);
                    errorCount++;
                  }
                }
              }
            }
            if (pattern5.test(key1)) {
              let suberr23 = null;
              const sub15 = (() => {
                let errorCount2 = 0;
                const err16 = validate3.errors;
                const res16 = ref9(data[key1]);
                const suberr24 = ref9.errors;
                validate3.errors = err16;
                if (!res16) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr24.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*Color$/anyOf/0/$ref", "#/" + pointerPart(key1))));
                  errorCount2++;
                }
                return errorCount2 === 0;
              })();
              if (!sub15) {
                const sub16 = (() => {
                  let errorCount2 = 0;
                  if (!Array.isArray(data[key1])) {
                    if (suberr23 === null)
                      suberr23 = [];
                    suberr23.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Color$/anyOf/1/type", instanceLocation: "#/" + pointerPart(key1) });
                    errorCount2++;
                  } else {
                    if (data[key1].length > 128) {
                      if (suberr23 === null)
                        suberr23 = [];
                      suberr23.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Color$/anyOf/1/maxItems", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    }
                    if (data[key1].length < 0) {
                      if (suberr23 === null)
                        suberr23 = [];
                      suberr23.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Color$/anyOf/1/minItems", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    }
                    for (let p = 0; p < data[key1].length; p++) {
                      if (data[key1][p] !== void 0 && hasOwn(data[key1], p)) {
                        const err17 = validate3.errors;
                        const res17 = ref9(data[key1][p]);
                        const suberr25 = ref9.errors;
                        validate3.errors = err17;
                        if (!res17) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push(...suberr25.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*Color$/anyOf/1/items/$ref", "#/" + pointerPart(key1) + "/" + p)));
                          errorCount2++;
                        }
                      }
                    }
                  }
                  return errorCount2 === 0;
                })();
                if (!sub16) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*Color$/anyOf", instanceLocation: "#/" + pointerPart(key1) });
                  if (suberr23)
                    validate3.errors.push(...suberr23);
                  errorCount++;
                }
              }
            }
            if (pattern7.test(key1)) {
              let suberr26 = null;
              const sub17 = (() => {
                let errorCount2 = 0;
                const err18 = validate3.errors;
                const res18 = ref10(data[key1]);
                const suberr27 = ref10.errors;
                validate3.errors = err18;
                if (!res18) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr27.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFill$/anyOf/0/$ref", "#/" + pointerPart(key1))));
                  errorCount2++;
                }
                return errorCount2 === 0;
              })();
              if (!sub17) {
                const sub18 = (() => {
                  let errorCount2 = 0;
                  if (!Array.isArray(data[key1])) {
                    if (suberr26 === null)
                      suberr26 = [];
                    suberr26.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFill$/anyOf/1/type", instanceLocation: "#/" + pointerPart(key1) });
                    errorCount2++;
                  } else {
                    if (data[key1].length > 128) {
                      if (suberr26 === null)
                        suberr26 = [];
                      suberr26.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFill$/anyOf/1/maxItems", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    }
                    if (data[key1].length < 0) {
                      if (suberr26 === null)
                        suberr26 = [];
                      suberr26.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFill$/anyOf/1/minItems", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    }
                    for (let q = 0; q < data[key1].length; q++) {
                      if (data[key1][q] !== void 0 && hasOwn(data[key1], q)) {
                        const err19 = validate3.errors;
                        const res19 = ref10(data[key1][q]);
                        const suberr28 = ref10.errors;
                        validate3.errors = err19;
                        if (!res19) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push(...suberr28.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFill$/anyOf/1/items/$ref", "#/" + pointerPart(key1) + "/" + q)));
                          errorCount2++;
                        }
                      }
                    }
                  }
                  return errorCount2 === 0;
                })();
                if (!sub18) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFill$/anyOf", instanceLocation: "#/" + pointerPart(key1) });
                  if (suberr26)
                    validate3.errors.push(...suberr26);
                  errorCount++;
                }
              }
            }
            if (pattern8.test(key1)) {
              let suberr29 = null;
              const sub19 = (() => {
                let errorCount2 = 0;
                const err20 = validate3.errors;
                const res20 = ref11(data[key1]);
                const suberr30 = ref11.errors;
                validate3.errors = err20;
                if (!res20) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push(...suberr30.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFillStops$/anyOf/0/$ref", "#/" + pointerPart(key1))));
                  errorCount2++;
                }
                return errorCount2 === 0;
              })();
              if (!sub19) {
                const sub20 = (() => {
                  let errorCount2 = 0;
                  if (!Array.isArray(data[key1])) {
                    if (suberr29 === null)
                      suberr29 = [];
                    suberr29.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFillStops$/anyOf/1/type", instanceLocation: "#/" + pointerPart(key1) });
                    errorCount2++;
                  } else {
                    if (data[key1].length > 2) {
                      if (suberr29 === null)
                        suberr29 = [];
                      suberr29.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFillStops$/anyOf/1/maxItems", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    }
                    if (data[key1].length < 0) {
                      if (suberr29 === null)
                        suberr29 = [];
                      suberr29.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFillStops$/anyOf/1/minItems", instanceLocation: "#/" + pointerPart(key1) });
                      errorCount2++;
                    }
                    for (let r = 0; r < data[key1].length; r++) {
                      if (data[key1][r] !== void 0 && hasOwn(data[key1], r)) {
                        const err21 = validate3.errors;
                        const res21 = ref11(data[key1][r]);
                        const suberr31 = ref11.errors;
                        validate3.errors = err21;
                        if (!res21) {
                          if (validate3.errors === null)
                            validate3.errors = [];
                          validate3.errors.push(...suberr31.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFillStops$/anyOf/1/items/$ref", "#/" + pointerPart(key1) + "/" + r)));
                          errorCount2++;
                        }
                      }
                    }
                  }
                  return errorCount2 === 0;
                })();
                if (!sub20) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorFillStops$/anyOf", instanceLocation: "#/" + pointerPart(key1) });
                  if (suberr29)
                    validate3.errors.push(...suberr29);
                  errorCount++;
                }
              }
            }
            if (pattern9.test(key1)) {
              const err24 = validate3.errors;
              const res24 = ref12(data[key1]);
              const suberr35 = ref12.errors;
              validate3.errors = err24;
              if (!res24) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr35.map((e) => errorMerge(e, "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorAngle$/allOf/0/$ref", "#/" + pointerPart(key1))));
                errorCount++;
              }
            }
            if (pattern10.test(key1)) {
              if (!(typeof data[key1] === "string")) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorOrder$/type", instanceLocation: "#/" + pointerPart(key1) });
                errorCount++;
              } else {
                if (!(data[key1] === "random" || data[key1] === "fixed")) {
                  if (validate3.errors === null)
                    validate3.errors = [];
                  validate3.errors.push({ keywordLocation: "#/patternProperties/^[a-z][a-zA-Z0-9]*ColorOrder$/enum", instanceLocation: "#/" + pointerPart(key1) });
                  errorCount++;
                }
              }
            }
            if (key1 === "rotate") {
              const err25 = validate3.errors;
              const res25 = ref12(data[key1]);
              const suberr36 = ref12.errors;
              validate3.errors = err25;
              if (!res25) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr36.map((e) => errorMerge(e, "#/patternProperties/^rotate$/allOf/0/$ref", "#/" + pointerPart(key1))));
                errorCount++;
              }
            }
            if (key1 === "translateY") {
              const err28 = validate3.errors;
              const res28 = ref14(data[key1]);
              const suberr40 = ref14.errors;
              validate3.errors = err28;
              if (!res28) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr40.map((e) => errorMerge(e, "#/patternProperties/^translateY$/allOf/0/$ref", "#/" + pointerPart(key1))));
                errorCount++;
              }
            }
            if (key1 === "translateX") {
              const err29 = validate3.errors;
              const res29 = ref14(data[key1]);
              const suberr41 = ref14.errors;
              validate3.errors = err29;
              if (!res29) {
                if (validate3.errors === null)
                  validate3.errors = [];
                validate3.errors.push(...suberr41.map((e) => errorMerge(e, "#/patternProperties/^translateX$/allOf/0/$ref", "#/" + pointerPart(key1))));
                errorCount++;
              }
            }
          }
          for (const key4 of Object.keys(data)) {
            if (key4 !== "seed" && key4 !== "size" && key4 !== "idRandomization" && key4 !== "title" && key4 !== "flip" && key4 !== "fontFamily" && key4 !== "fontWeight" && key4 !== "scale" && key4 !== "borderRadius" && key4 !== "tags" && !pattern2.test(key4) && !pattern3.test(key4) && !pattern5.test(key4) && !pattern7.test(key4) && !pattern8.test(key4) && !pattern9.test(key4) && !pattern10.test(key4) && !(key4 === "rotate") && !(key4 === "translateY") && !(key4 === "translateX")) {
              if (validate3.errors === null)
                validate3.errors = [];
              validate3.errors.push({ keywordLocation: "#/additionalProperties", instanceLocation: "#/" + pointerPart(key4) });
              errorCount++;
            }
          }
        }
      }
      return errorCount === 0;
    };
    return ref0;
  })();
  var KEYWORD_MESSAGES2 = {
    type: "has an invalid type",
    enum: "must be one of the allowed values",
    const: "must equal the expected value",
    pattern: "does not match the required pattern",
    required: "is required but missing",
    additionalProperties: "has an unexpected property",
    propertyNames: "has an invalid property name",
    minimum: "is smaller than allowed",
    maximum: "is larger than allowed",
    exclusiveMinimum: "is smaller than allowed",
    exclusiveMaximum: "is larger than allowed",
    minLength: "is too short",
    maxLength: "is too long",
    minItems: "has too few items",
    maxItems: "has too many items",
    uniqueItems: "has duplicate items",
    minProperties: "has too few properties",
    maxProperties: "has too many properties",
    anyOf: "does not match any allowed variant",
    oneOf: "does not match exactly one allowed variant",
    allOf: "does not match all required schemas",
    not: "matches a disallowed schema"
  };
  function toDetail2(error) {
    const keyword = error.keywordLocation.slice(error.keywordLocation.lastIndexOf("/") + 1);
    return {
      instancePath: error.instanceLocation.slice(1),
      schemaPath: error.keywordLocation,
      keyword,
      message: KEYWORD_MESSAGES2[keyword] ?? `must satisfy '${keyword}'`
    };
  }
  var OptionsValidator = class {
    static validate(data) {
      if (!validate2(data)) {
        throw new OptionsValidationError((validate2.errors ?? []).map(toDetail2));
      }
    }
  };

  // node_modules/@dicebear/core/lib/Options.js
  var __classPrivateFieldSet12 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet12 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Options_instances;
  var _Options_data;
  var _Options_tags;
  var _Options_dynamic;
  var _Options_asArray;
  var _Options_toRange;
  var Options = class {
    constructor(data = {}) {
      _Options_instances.add(this);
      _Options_data.set(this, void 0);
      _Options_tags.set(this, void 0);
      OptionsValidator.validate(data);
      __classPrivateFieldSet12(this, _Options_data, structuredClone(data), "f");
    }
    seed() {
      return __classPrivateFieldGet12(this, _Options_data, "f").seed;
    }
    size() {
      return __classPrivateFieldGet12(this, _Options_data, "f").size;
    }
    idRandomization() {
      return __classPrivateFieldGet12(this, _Options_data, "f").idRandomization;
    }
    title() {
      return __classPrivateFieldGet12(this, _Options_data, "f").title;
    }
    flip() {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_asArray).call(this, __classPrivateFieldGet12(this, _Options_data, "f").flip);
    }
    fontFamily() {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_asArray).call(this, __classPrivateFieldGet12(this, _Options_data, "f").fontFamily);
    }
    fontWeight() {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_asArray).call(this, __classPrivateFieldGet12(this, _Options_data, "f").fontWeight);
    }
    scale() {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_toRange).call(this, __classPrivateFieldGet12(this, _Options_data, "f").scale);
    }
    borderRadius() {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_toRange).call(this, __classPrivateFieldGet12(this, _Options_data, "f").borderRadius);
    }
    rotate() {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_toRange).call(this, __classPrivateFieldGet12(this, _Options_data, "f").rotate);
    }
    translateX() {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_toRange).call(this, __classPrivateFieldGet12(this, _Options_data, "f").translateX);
    }
    translateY() {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_toRange).call(this, __classPrivateFieldGet12(this, _Options_data, "f").translateY);
    }
    /**
     * Returns the global `tags` filter as parsed tokens, or an empty array when
     * unset. Each raw token (`category` / `category:value`, optionally
     * `!`-prefixed to disallow) is decoded into `{ category, value?, negated }` so
     * the resolver composes the filter without parsing the grammar itself. An
     * empty list means no tag filtering (classic behavior). Memoized, since the
     * resolver reads it once per component.
     */
    tags() {
      return __classPrivateFieldSet12(this, _Options_tags, __classPrivateFieldGet12(this, _Options_tags, "f") ?? __classPrivateFieldGet12(this, _Options_instances, "m", _Options_asArray).call(this, __classPrivateFieldGet12(this, _Options_data, "f").tags).map((token) => {
        const negated = token.startsWith("!");
        const body = negated ? token.slice(1) : token;
        const sep = body.indexOf(":");
        return sep === -1 ? { category: body, negated } : { category: body.slice(0, sep), value: body.slice(sep + 1), negated };
      }), "f");
    }
    /**
     * Returns the user-set variant constraint for `name` as a weighted map, or
     * `undefined` when `${name}Variant` is unset. A bare string or string list
     * is normalized to a map with each entry weighted `1`.
     */
    componentVariant(name) {
      const raw = __classPrivateFieldGet12(this, _Options_instances, "m", _Options_dynamic).call(this, `${name}Variant`);
      if (raw === void 0) {
        return void 0;
      }
      if (typeof raw === "string") {
        return { [raw]: 1 };
      }
      if (Array.isArray(raw)) {
        return Object.fromEntries(raw.map((v) => [v, 1]));
      }
      return raw;
    }
    componentProbability(name) {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_dynamic).call(this, `${name}Probability`);
    }
    /**
     * Asymmetric on purpose: returns `undefined` (rather than `[]`) when
     * `${name}Color` is unset so the resolver can fall back to the style
     * definition's color values.
     */
    color(name) {
      const raw = __classPrivateFieldGet12(this, _Options_instances, "m", _Options_dynamic).call(this, `${name}Color`);
      return raw === void 0 ? void 0 : __classPrivateFieldGet12(this, _Options_instances, "m", _Options_asArray).call(this, raw);
    }
    colorFill(name) {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_asArray).call(this, __classPrivateFieldGet12(this, _Options_instances, "m", _Options_dynamic).call(this, `${name}ColorFill`));
    }
    colorAngle(name) {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_toRange).call(this, __classPrivateFieldGet12(this, _Options_instances, "m", _Options_dynamic).call(this, `${name}ColorAngle`));
    }
    colorFillStops(name) {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_toRange).call(this, __classPrivateFieldGet12(this, _Options_instances, "m", _Options_dynamic).call(this, `${name}ColorFillStops`));
    }
    colorOrder(name) {
      return __classPrivateFieldGet12(this, _Options_instances, "m", _Options_dynamic).call(this, `${name}ColorOrder`);
    }
  };
  _Options_data = /* @__PURE__ */ new WeakMap(), _Options_tags = /* @__PURE__ */ new WeakMap(), _Options_instances = /* @__PURE__ */ new WeakSet(), _Options_dynamic = function _Options_dynamic2(key) {
    return __classPrivateFieldGet12(this, _Options_data, "f")[key];
  }, _Options_asArray = function _Options_asArray2(value) {
    if (value === void 0) {
      return [];
    }
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  }, _Options_toRange = function _Options_toRange2(value) {
    if (value === void 0) {
      return void 0;
    }
    if (typeof value === "number") {
      return { min: value, max: value };
    }
    if (value.length === 0) {
      return void 0;
    }
    return { min: Math.min(...value), max: Math.max(...value) };
  };

  // node_modules/@dicebear/core/lib/Prng/Fnv1a.js
  var Fnv1a = class _Fnv1a {
    /**
     * Returns the unsigned 32-bit FNV-1a hash of `input`. UTF-16 code units
     * are hashed directly so the result is identical across language ports.
     */
    static hash(input) {
      let hash = 2166136261;
      for (let i = 0; i < input.length; i++) {
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }
      return hash >>> 0;
    }
    /**
     * Returns the FNV-1a hash of `input` as an 8-character lowercase hex string.
     */
    static hex(input) {
      return _Fnv1a.hash(input).toString(16).padStart(8, "0");
    }
  };

  // node_modules/@dicebear/core/lib/Prng/Mulberry32.js
  var __classPrivateFieldSet13 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet13 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Mulberry32_state;
  var UINT32_MAX_PLUS_1 = 2 ** 32;
  var Mulberry32 = class {
    constructor(seed) {
      _Mulberry32_state.set(this, void 0);
      __classPrivateFieldSet13(this, _Mulberry32_state, seed, "f");
    }
    /**
     * Advances the state and returns the next unsigned 32-bit value.
     */
    next() {
      const z = __classPrivateFieldSet13(this, _Mulberry32_state, __classPrivateFieldGet13(this, _Mulberry32_state, "f") + 1831565813 | 0, "f");
      let t = Math.imul(z ^ z >>> 15, z | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return (t ^ t >>> 14) >>> 0;
    }
    /**
     * Advances the state and returns the next value in `[0, 1)`.
     */
    nextFloat() {
      return this.next() / UINT32_MAX_PLUS_1;
    }
    /**
     * Returns the current internal state, useful for snapshotting.
     */
    state() {
      return __classPrivateFieldGet13(this, _Mulberry32_state, "f");
    }
  };
  _Mulberry32_state = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/core/lib/Prng.js
  var __classPrivateFieldSet14 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet14 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Prng_instances;
  var _Prng_seed;
  var _Prng_uniqueByCodePoint;
  var _Prng_compareByCodePoint;
  var Prng = class {
    constructor(seed) {
      _Prng_instances.add(this);
      _Prng_seed.set(this, void 0);
      __classPrivateFieldSet14(this, _Prng_seed, seed, "f");
    }
    /**
     * Picks a single item from `items` deterministically. Returns `undefined`
     * for an empty list. Duplicate values (by string representation) are
     * collapsed before picking so that input order and duplication do not
     * affect the result.
     */
    pick(key, items) {
      if (items.length === 0) {
        return void 0;
      }
      if (items.length === 1) {
        return items[0];
      }
      const unique = __classPrivateFieldGet14(this, _Prng_instances, "m", _Prng_uniqueByCodePoint).call(this, items);
      if (unique.length === 1) {
        return unique[0];
      }
      const sorted = unique.sort(__classPrivateFieldGet14(this, _Prng_instances, "m", _Prng_compareByCodePoint));
      const index = Math.floor(this.getValue(key) * sorted.length);
      return sorted[index];
    }
    /**
     * Picks a key from `weights` proportional to its weight. When all weights
     * are zero, falls back to an unweighted {@link pick}. Returns `undefined`
     * for an empty map.
     */
    weightedPick(key, weights) {
      const keys = Object.keys(weights);
      if (keys.length === 0) {
        return void 0;
      }
      if (keys.length === 1) {
        return keys[0];
      }
      const sorted = keys.sort(__classPrivateFieldGet14(this, _Prng_instances, "m", _Prng_compareByCodePoint));
      const totalWeight = sorted.reduce((sum, k) => sum + weights[k], 0);
      if (totalWeight === 0) {
        return this.pick(key, sorted);
      }
      const threshold = this.getValue(key) * totalWeight;
      let cumulative = 0;
      for (const k of sorted) {
        cumulative += weights[k];
        if (threshold < cumulative) {
          return k;
        }
      }
      return sorted[sorted.length - 1];
    }
    /**
     * Returns `true` with the given probability (0–100, default 50).
     */
    bool(key, likelihood = 50) {
      return this.getValue(key) * 100 < likelihood;
    }
    /**
     * Returns a deterministic float in `range`, rounded to four decimal places.
     * With `range.step > 0`, the result is drawn uniformly from
     * `{ min + i*step | 0 ≤ i ≤ floor((max - min) / step) }`, so both endpoints
     * of an evenly-divisible range are equally likely. Non-positive or absent
     * step means continuous. `min`/`max` are sorted internally, so a reversed
     * pair is tolerated.
     */
    float(key, range) {
      const min = Math.min(range.min, range.max);
      const max = Math.max(range.min, range.max);
      const step = range.step ?? 0;
      let value;
      if (step > 0) {
        const buckets = Math.floor((max - min) / step) + 1;
        const i = Math.floor(this.getValue(key) * buckets);
        value = min + i * step;
      } else {
        value = min + this.getValue(key) * (max - min);
      }
      return Math.round(value * 1e4) / 1e4;
    }
    /**
     * Returns a deterministic integer in `range`. `min`/`max` are sorted
     * internally, so a reversed pair is tolerated. `range.step` is accepted
     * for symmetry with {@link float} but ignored — integers already step by 1.
     */
    integer(key, range) {
      const min = Math.min(range.min, range.max);
      const max = Math.max(range.min, range.max);
      return Math.floor(this.getValue(key) * (max - min + 1)) + min;
    }
    /**
     * Fisher-Yates shuffle with chained Mulberry32 state. Duplicate values
     * (by string representation) are collapsed before shuffling, so a
     * caller's slice off the front cannot accidentally produce a repeated
     * value.
     */
    shuffle(key, items) {
      if (items.length <= 1) {
        return [...items];
      }
      const result = __classPrivateFieldGet14(this, _Prng_instances, "m", _Prng_uniqueByCodePoint).call(this, items).sort(__classPrivateFieldGet14(this, _Prng_instances, "m", _Prng_compareByCodePoint));
      const prng = new Mulberry32(Fnv1a.hash(__classPrivateFieldGet14(this, _Prng_seed, "f") + ":" + key));
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(prng.nextFloat() * (i + 1));
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
      return result;
    }
    /**
     * Returns a single float in `[0, 1)` derived from `seed:key`. The same
     * seed/key pair always produces the same value.
     */
    getValue(key) {
      return new Mulberry32(Fnv1a.hash(__classPrivateFieldGet14(this, _Prng_seed, "f") + ":" + key)).nextFloat();
    }
  };
  _Prng_seed = /* @__PURE__ */ new WeakMap(), _Prng_instances = /* @__PURE__ */ new WeakSet(), _Prng_uniqueByCodePoint = function _Prng_uniqueByCodePoint2(items, keyFn = String) {
    const seen = /* @__PURE__ */ new Set();
    const result = [];
    for (const item of items) {
      const repr = keyFn(item);
      if (!seen.has(repr)) {
        seen.add(repr);
        result.push(item);
      }
    }
    return result;
  }, _Prng_compareByCodePoint = function _Prng_compareByCodePoint2(a, b) {
    const sa = String(a);
    const sb = String(b);
    if (sa < sb) {
      return -1;
    }
    if (sa > sb) {
      return 1;
    }
    return 0;
  };

  // node_modules/@dicebear/core/lib/Utils/Color.js
  var __classPrivateFieldGet15 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _a2;
  var _Color_LINEARIZED;
  var _Color_linearize;
  var Color2 = class {
    /**
     * Normalizes any hex format to 6- or 8-digit lowercase with `#` prefix.
     */
    static toHex(hex) {
      const h = hex.replace(/^#/, "").toLowerCase();
      if (h.length === 3) {
        return "#" + h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      }
      if (h.length === 4) {
        return "#" + h[0] + h[0] + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
      }
      return "#" + h;
    }
    /**
     * Like {@link toHex}, but strips the alpha channel and always returns
     * 6-digit hex.
     */
    static toRgbHex(hex) {
      const h = this.toHex(hex);
      return h.length > 7 ? h.slice(0, 7) : h;
    }
    /**
     * Parses a hex color into an `[r, g, b]` triple of 8-bit channel values.
     */
    static parseHex(hex) {
      const h = this.toHex(hex).slice(1);
      return [
        parseInt(h.slice(0, 2), 16),
        parseInt(h.slice(2, 4), 16),
        parseInt(h.slice(4, 6), 16)
      ];
    }
    /**
     * WCAG 2.1 relative luminance with sRGB linearization.
     *
     * @see https://www.w3.org/WAI/GL/wiki/Relative_luminance
     */
    static luminance(hex) {
      const rgb = this.parseHex(hex);
      const linearR = __classPrivateFieldGet15(this, _a2, "m", _Color_linearize).call(this, rgb[0]);
      const linearG = __classPrivateFieldGet15(this, _a2, "m", _Color_linearize).call(this, rgb[1]);
      const linearB = __classPrivateFieldGet15(this, _a2, "m", _Color_linearize).call(this, rgb[2]);
      return 0.2126 * linearR + 0.7152 * linearG + 0.0722 * linearB;
    }
    /**
     * Returns a new array sorted by descending contrast against the reference
     * color.
     *
     * @see https://www.w3.org/WAI/GL/wiki/Contrast_ratio
     */
    static sortByContrast(candidates, refColor) {
      const refLum = this.luminance(refColor);
      const withRatio = candidates.map((c) => {
        const lum = this.luminance(c);
        const ratio = (Math.max(lum, refLum) + 0.05) / (Math.min(lum, refLum) + 0.05);
        return { color: c, ratio };
      });
      withRatio.sort((a, b) => b.ratio - a.ratio);
      return withRatio.map((e) => e.color);
    }
    /**
     * Returns a new array with excluded colors removed. Falls back to the
     * original candidates when filtering would empty the list.
     */
    static filterNotEqualTo(candidates, excluded) {
      const normalized = new Set(excluded.map((c) => this.toRgbHex(c)));
      const filtered = candidates.filter((c) => !normalized.has(this.toRgbHex(c)));
      return filtered.length > 0 ? filtered : Array.from(candidates);
    }
  };
  _a2 = Color2, _Color_linearize = function _Color_linearize2(channel) {
    return __classPrivateFieldGet15(_a2, _a2, "f", _Color_LINEARIZED)[channel];
  };
  _Color_LINEARIZED = { value: [
    0,
    3035269835488375e-19,
    607053967097675e-18,
    9105809506465125e-19,
    0.00121410793419535,
    0.0015176349177441874,
    0.001821161901293025,
    0.0021246888848418626,
    0.0024282158683907,
    0.0027317428519395373,
    0.003035269835488375,
    0.003346535763899161,
    0.003676507324047436,
    0.004024717018496307,
    0.004391442037410293,
    0.004776953480693729,
    0.005181516702338386,
    0.005605391624202723,
    0.006048833022857055,
    0.006512090792594474,
    0.006995410187265387,
    0.007499032043226175,
    0.008023192985384994,
    0.008568125618069307,
    0.009134058702220787,
    0.009721217320237847,
    0.010329823029626938,
    0.010960094006488246,
    0.011612245179743887,
    0.012286488356915872,
    0.012983032342173012,
    0.013702083047289686,
    0.014443843596092545,
    0.01520851442291271,
    0.01599629336550963,
    0.016807375752887384,
    0.017641954488384078,
    0.018500220128379697,
    0.019382360956935723,
    0.0202885630566524,
    0.021219010376003558,
    0.02217388479338738,
    0.02315336617811041,
    0.024157632448504756,
    0.025186859627361627,
    0.026241221894849898,
    0.027320891639074897,
    0.028426039504420793,
    0.0295568344378088,
    0.030713443732993635,
    0.03189603307301153,
    0.033104766570885055,
    0.03433980680868217,
    0.03560131487502034,
    0.03688945040110004,
    0.0382043715953465,
    0.03954623527673283,
    0.04091519690685319,
    0.042311410620809675,
    0.043735029256973465,
    0.04518620438567554,
    0.0466650863368801,
    0.048171824226889426,
    0.04970656598412723,
    0.05126945837404324,
    0.052860647023180246,
    0.05448027644244237,
    0.05612849004960009,
    0.05780543019106723,
    0.0595112381629812,
    0.06124605423161761,
    0.06301001765316767,
    0.06480326669290577,
    0.06662593864377289,
    0.06847816984440017,
    0.07036009569659588,
    0.07227185068231748,
    0.07421356838014963,
    0.07618538148130785,
    0.07818742180518633,
    0.08021982031446831,
    0.0822827071298148,
    0.08437621154414882,
    0.08650046203654976,
    0.08865558628577294,
    0.09084171118340767,
    0.09305896284668747,
    0.0953074666309647,
    0.09758734714186246,
    0.09989872824711389,
    0.1022417330881013,
    0.10461648409110419,
    0.10702310297826761,
    0.10946171077829933,
    0.1119324278369056,
    0.11443537382697373,
    0.11697066775851084,
    0.11953842798834562,
    0.12213877222960187,
    0.12477181756095049,
    0.12743768043564743,
    0.1301364766903643,
    0.13286832155381798,
    0.13563332965520566,
    0.13843161503245183,
    0.14126329114027164,
    0.14412847085805777,
    0.14702726649759498,
    0.14995978981060856,
    0.15292615199615017,
    0.1559264637078274,
    0.1589608350608804,
    0.16202937563911096,
    0.1651321945016676,
    0.16826940018969075,
    0.1714411007328226,
    0.17464740365558504,
    0.17788841598362914,
    0.18116424424986022,
    0.184474994500441,
    0.18782077230067787,
    0.1912016827407914,
    0.19461783044157582,
    0.19806931955994886,
    0.20155625379439707,
    0.20507873639031693,
    0.20863687014525575,
    0.21223075741405523,
    0.21586050011389923,
    0.21952619972926923,
    0.2232279573168085,
    0.22696587351009836,
    0.23074004852434915,
    0.23455058216100522,
    0.238397573812271,
    0.24228112246555486,
    0.24620132670783548,
    0.25015828472995344,
    0.25415209433082675,
    0.2581828529215958,
    0.26225065752969623,
    0.26635560480286247,
    0.2704977910130658,
    0.27467731206038465,
    0.2788942634768104,
    0.2831487404299921,
    0.2874408377269175,
    0.29177064981753587,
    0.2961382707983211,
    0.3005437944157765,
    0.3049873140698863,
    0.30946892281750854,
    0.31398871337571754,
    0.31854677812509186,
    0.32314320911295075,
    0.3277780980565422,
    0.33245153634617935,
    0.33716361504833037,
    0.341914424908661,
    0.3467040563550296,
    0.35153259950043936,
    0.3564001441459435,
    0.3613067797835095,
    0.3662525955988395,
    0.3712376804741491,
    0.37626212299090644,
    0.3813260114325301,
    0.386429433787049,
    0.39157247774972326,
    0.39675523072562685,
    0.40197777983219574,
    0.4072402119017367,
    0.41254261348390375,
    0.4178850708481375,
    0.4232676699860717,
    0.4286904966139067,
    0.4341536361747489,
    0.4396571738409188,
    0.44520119451622786,
    0.45078578283822346,
    0.45641102318040466,
    0.4620769996544071,
    0.467783796112159,
    0.47353149614800955,
    0.4793201831008268,
    0.4851499400560704,
    0.4910208498478356,
    0.4969329950608704,
    0.5028864580325687,
    0.5088813208549338,
    0.5149176653765214,
    0.5209955732043543,
    0.5271151257058131,
    0.5332764040105052,
    0.5394794890121071,
    0.5457244613701866,
    0.5520114015120001,
    0.5583403896342679,
    0.5647115057049292,
    0.5711248294648731,
    0.5775804404296506,
    0.5840784178911641,
    0.5906188409193369,
    0.5972017883637634,
    0.6038273388553378,
    0.6104955708078648,
    0.6172065624196511,
    0.6239603916750761,
    0.6307571363461468,
    0.6375968739940326,
    0.6444796819705821,
    0.6514056374198242,
    0.6583748172794486,
    0.665387298282272,
    0.6724431569576875,
    0.6795424696330938,
    0.6866853124353134,
    0.6938717612919899,
    0.7011018919329731,
    0.7083757798916868,
    0.7156935005064807,
    0.7230551289219693,
    0.7304607400903537,
    0.7379104087727308,
    0.7454042095403874,
    0.7529422167760779,
    0.7605245046752924,
    0.7681511472475071,
    0.7758222183174236,
    0.7835377915261935,
    0.7912979403326302,
    0.799102738014409,
    0.8069522576692516,
    0.8148465722161012,
    0.8227857543962835,
    0.8307698767746546,
    0.83879901174074,
    0.846873231509858,
    0.8549926081242338,
    0.8631572134541023,
    0.8713671191987973,
    0.8796223968878317,
    0.8879231178819663,
    0.8962693533742664,
    0.9046611743911496,
    0.9130986517934192,
    0.9215818562772946,
    0.9301108583754237,
    0.938685728457888,
    0.9473065367331999,
    0.9559733532492861,
    0.9646862478944651,
    0.9734452903984125,
    0.9822505503331171,
    0.9911020971138298,
    1
  ] };

  // node_modules/@dicebear/core/lib/Error/CircularColorReferenceError.js
  var CircularColorReferenceError = class extends Error {
    constructor(chain) {
      const path = chain.join(" \u2192 ");
      super(`Circular color reference: ${path}`);
      this.name = "CircularColorReferenceError";
      this.chain = chain;
    }
  };

  // node_modules/@dicebear/core/lib/StyleOptions.js
  var COLOR_ORDER_RANDOM = "random";
  var COLOR_ORDER_FIXED = "fixed";

  // node_modules/@dicebear/core/lib/Resolver.js
  var __classPrivateFieldSet15 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet16 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Resolver_instances;
  var _Resolver_style;
  var _Resolver_options;
  var _Resolver_prng;
  var _Resolver_colorResolving;
  var _Resolver_result;
  var _Resolver_tagFilterCache;
  var _Resolver_probability;
  var _Resolver_isVisible;
  var _Resolver_variantWeights;
  var _Resolver_tagFilter;
  var _Resolver_tagFilteredNames;
  var _Resolver_resolveColor;
  var _Resolver_order;
  var _Resolver_colorFillStops;
  var _Resolver_memoFloat;
  var _Resolver_memo;
  var Resolver = class {
    constructor(style, options) {
      _Resolver_instances.add(this);
      _Resolver_style.set(this, void 0);
      _Resolver_options.set(this, void 0);
      _Resolver_prng.set(this, void 0);
      _Resolver_colorResolving.set(this, []);
      _Resolver_result.set(this, {});
      _Resolver_tagFilterCache.set(this, void 0);
      __classPrivateFieldSet15(this, _Resolver_style, style, "f");
      __classPrivateFieldSet15(this, _Resolver_options, options, "f");
      __classPrivateFieldSet15(this, _Resolver_prng, new Prng(this.seed()), "f");
    }
    seed() {
      return __classPrivateFieldGet16(this, _Resolver_options, "f").seed() ?? "";
    }
    size() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, "size", () => __classPrivateFieldGet16(this, _Resolver_options, "f").size());
    }
    idRandomization() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, "idRandomization", () => __classPrivateFieldGet16(this, _Resolver_options, "f").idRandomization() ?? false);
    }
    title() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, "title", () => __classPrivateFieldGet16(this, _Resolver_options, "f").title());
    }
    flip() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, "flip", () => __classPrivateFieldGet16(this, _Resolver_prng, "f").pick("flip", __classPrivateFieldGet16(this, _Resolver_options, "f").flip()) ?? "none");
    }
    fontFamily() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, "fontFamily", () => __classPrivateFieldGet16(this, _Resolver_prng, "f").pick("fontFamily", __classPrivateFieldGet16(this, _Resolver_options, "f").fontFamily()) ?? "system-ui");
    }
    fontWeight() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, "fontWeight", () => __classPrivateFieldGet16(this, _Resolver_prng, "f").pick("fontWeight", __classPrivateFieldGet16(this, _Resolver_options, "f").fontWeight()) ?? 400);
    }
    scale() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, "scale", __classPrivateFieldGet16(this, _Resolver_options, "f").scale(), 1);
    }
    borderRadius() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, "borderRadius", __classPrivateFieldGet16(this, _Resolver_options, "f").borderRadius(), 0);
    }
    rotate() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, "rotate", __classPrivateFieldGet16(this, _Resolver_options, "f").rotate(), 0);
    }
    translateX() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, "translateX", __classPrivateFieldGet16(this, _Resolver_options, "f").translateX(), 0);
    }
    translateY() {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, "translateY", __classPrivateFieldGet16(this, _Resolver_options, "f").translateY(), 0);
    }
    /**
     * Selects a variant for the given component. The pool the PRNG draws from is
     * built from the per-component `${name}Variant` option and the global `tags`
     * filter (see {@link #variantWeights}). Only variants that exist in the style
     * definition are considered.
     */
    variant(name) {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, `${name}Variant`, () => {
        const component = __classPrivateFieldGet16(this, _Resolver_style, "f").components().get(name);
        if (!component || !__classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_isVisible).call(this, name, component)) {
          return void 0;
        }
        return __classPrivateFieldGet16(this, _Resolver_prng, "f").weightedPick(`${name}Variant`, __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_variantWeights).call(this, component));
      });
    }
    color(name) {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, `${name}Color`, () => __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_resolveColor).call(this, name));
    }
    colorFill(name) {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, `${name}ColorFill`, () => __classPrivateFieldGet16(this, _Resolver_prng, "f").pick(`${name}ColorFill`, __classPrivateFieldGet16(this, _Resolver_options, "f").colorFill(name)) ?? "solid");
    }
    colorAngle(name) {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, `${name}ColorAngle`, __classPrivateFieldGet16(this, _Resolver_options, "f").colorAngle(name), 0);
    }
    colorOrder(name) {
      return __classPrivateFieldGet16(this, _Resolver_options, "f").colorOrder(name) ?? COLOR_ORDER_RANDOM;
    }
    /**
     * Picks the rotate/translateX/translateY/scale values for a single
     * component. Memoized per `name`, so the four values land in
     * {@link resolved} as `${name}Rotate` / `${name}TranslateX` /
     * `${name}TranslateY` / `${name}Scale` for downstream introspection.
     */
    componentTransform(name) {
      const component = __classPrivateFieldGet16(this, _Resolver_style, "f").components().get(name);
      return {
        rotate: __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, `${name}Rotate`, component?.rotate(), 0),
        translateX: __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, `${name}TranslateX`, component?.translate().x(), 0),
        translateY: __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, `${name}TranslateY`, component?.translate().y(), 0),
        scale: __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memoFloat).call(this, `${name}Scale`, component?.scale(), 1)
      };
    }
    /**
     * Returns an informational snapshot of every value the resolver picked.
     * Includes top-level options (scale/rotate/translate/…), per-component
     * variants/probabilities/colors, and per-component transform picks. The
     * raw seed is deliberately excluded.
     *
     * The snapshot is NOT a round-trip-able options object — extra keys like
     * `${name}Rotate` are not part of {@link StyleOptions} and feeding the
     * snapshot back into a new {@link Avatar} is not supported. Callers that
     * need to reproduce an avatar should pass the original `seed` and
     * user-supplied options.
     *
     * The returned object aliases the internal cache; callers that need
     * isolation (e.g. {@link Avatar.toJSON}) clone it themselves.
     */
    resolved() {
      return __classPrivateFieldGet16(this, _Resolver_result, "f");
    }
  };
  _Resolver_style = /* @__PURE__ */ new WeakMap(), _Resolver_options = /* @__PURE__ */ new WeakMap(), _Resolver_prng = /* @__PURE__ */ new WeakMap(), _Resolver_colorResolving = /* @__PURE__ */ new WeakMap(), _Resolver_result = /* @__PURE__ */ new WeakMap(), _Resolver_tagFilterCache = /* @__PURE__ */ new WeakMap(), _Resolver_instances = /* @__PURE__ */ new WeakSet(), _Resolver_probability = function _Resolver_probability2(component) {
    const raw = __classPrivateFieldGet16(this, _Resolver_options, "f").componentProbability(component.sourceName());
    return raw ?? component.probability();
  }, _Resolver_isVisible = function _Resolver_isVisible2(name, component) {
    return __classPrivateFieldGet16(this, _Resolver_prng, "f").bool(`${name}Probability`, __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_probability).call(this, component));
  }, _Resolver_variantWeights = function _Resolver_variantWeights2(component) {
    const variants = component.variants();
    const named = __classPrivateFieldGet16(this, _Resolver_options, "f").componentVariant(component.sourceName());
    const weights = {};
    const names = named ? Object.keys(named) : __classPrivateFieldGet16(this, _Resolver_options, "f").tags().length > 0 ? __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_tagFilteredNames).call(this, variants) : variants.keys();
    for (const name of names) {
      const variant = variants.get(name);
      if (variant !== void 0) {
        weights[name] = named ? named[name] : variant.weight();
      }
    }
    return weights;
  }, _Resolver_tagFilter = function _Resolver_tagFilter2() {
    if (__classPrivateFieldGet16(this, _Resolver_tagFilterCache, "f")) {
      return __classPrivateFieldGet16(this, _Resolver_tagFilterCache, "f");
    }
    const allows = /* @__PURE__ */ new Map();
    const bares = /* @__PURE__ */ new Set();
    const disallows = [];
    const bareDisallows = /* @__PURE__ */ new Set();
    for (const { category, value, negated } of __classPrivateFieldGet16(this, _Resolver_options, "f").tags()) {
      if (negated) {
        disallows.push({ category, value });
        if (value === void 0) {
          bareDisallows.add(category);
        }
      } else if (value !== void 0) {
        const values = allows.get(category) ?? [];
        values.push(value);
        allows.set(category, values);
      } else {
        bares.add(category);
      }
    }
    __classPrivateFieldSet15(this, _Resolver_tagFilterCache, {
      // Materialize the allow groups once, not on every variant.
      allowGroups: [...allows],
      bares,
      disallows,
      bareDisallows
    }, "f");
    return __classPrivateFieldGet16(this, _Resolver_tagFilterCache, "f");
  }, _Resolver_tagFilteredNames = function _Resolver_tagFilteredNames2(variants) {
    const { allowGroups, bares, disallows, bareDisallows } = __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_tagFilter).call(this);
    const required = [...bares].filter((category) => {
      if (bareDisallows.has(category)) {
        return false;
      }
      for (const variant of variants.values()) {
        if (variant.hasTag(category)) {
          return true;
        }
      }
      return false;
    });
    const names = [];
    for (const [name, variant] of variants) {
      const allowed = allowGroups.every(([category, values]) => !variant.hasTag(category) || values.some((value) => variant.hasTag(category, value))) && required.every((category) => variant.hasTag(category));
      const disallowed = disallows.some(({ category, value }) => variant.hasTag(category, value));
      if (allowed && !disallowed) {
        names.push(name);
      }
    }
    return names;
  }, _Resolver_resolveColor = function _Resolver_resolveColor2(name) {
    const userColors = __classPrivateFieldGet16(this, _Resolver_options, "f").color(name);
    const styleColor = __classPrivateFieldGet16(this, _Resolver_style, "f").colors().get(name);
    const source = userColors ?? styleColor?.values() ?? [];
    let candidates = source.map((c) => Color2.toHex(c));
    const fixed = this.colorOrder(name) === COLOR_ORDER_FIXED;
    const verbatim = userColors !== void 0 && fixed;
    const fill = this.colorFill(name);
    const stops = fill === "solid" ? 1 : __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_colorFillStops).call(this, name, verbatim ? candidates.length : 2);
    if (!styleColor) {
      return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_order).call(this, name, candidates, fixed, verbatim).slice(0, stops);
    }
    if (__classPrivateFieldGet16(this, _Resolver_colorResolving, "f").includes(name)) {
      throw new CircularColorReferenceError(__classPrivateFieldGet16(this, _Resolver_colorResolving, "f").concat(name));
    }
    __classPrivateFieldGet16(this, _Resolver_colorResolving, "f").push(name);
    const contrastTo = styleColor.contrastTo();
    const notEqualTo = styleColor.notEqualTo();
    try {
      if (contrastTo && !verbatim) {
        const refColor = this.color(contrastTo)[0];
        if (refColor) {
          candidates = Color2.sortByContrast(candidates, refColor);
        }
      }
      if (notEqualTo.length > 0) {
        const excluded = [];
        for (const ref of notEqualTo) {
          for (const color of this.color(ref)) {
            excluded.push(color);
          }
        }
        candidates = Color2.filterNotEqualTo(candidates, excluded);
      }
    } finally {
      __classPrivateFieldGet16(this, _Resolver_colorResolving, "f").pop();
    }
    const ordered = contrastTo ? candidates : __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_order).call(this, name, candidates, fixed, verbatim);
    return ordered.slice(0, stops);
  }, _Resolver_order = function _Resolver_order2(name, candidates, fixed, verbatim) {
    if (!fixed) {
      return __classPrivateFieldGet16(this, _Resolver_prng, "f").shuffle(`${name}Color`, candidates);
    }
    if (verbatim) {
      return candidates;
    }
    return Array.from(new Set(candidates)).sort();
  }, _Resolver_colorFillStops = function _Resolver_colorFillStops2(name, fallback) {
    const range = __classPrivateFieldGet16(this, _Resolver_options, "f").colorFillStops(name);
    return range ? __classPrivateFieldGet16(this, _Resolver_prng, "f").integer(`${name}ColorFillStops`, range) : fallback;
  }, _Resolver_memoFloat = function _Resolver_memoFloat2(key, range, fallback) {
    return __classPrivateFieldGet16(this, _Resolver_instances, "m", _Resolver_memo).call(this, key, () => range ? __classPrivateFieldGet16(this, _Resolver_prng, "f").float(key, range) : fallback);
  }, _Resolver_memo = function _Resolver_memo2(key, compute) {
    if (key in __classPrivateFieldGet16(this, _Resolver_result, "f")) {
      return __classPrivateFieldGet16(this, _Resolver_result, "f")[key];
    }
    const value = compute();
    __classPrivateFieldGet16(this, _Resolver_result, "f")[key] = value;
    return value;
  };

  // node_modules/@dicebear/core/lib/Utils/Initials.js
  var Initials = class {
    /**
     * Returns one or two uppercase initials for the given seed. By default
     * strips `@...` so email addresses yield a single initial instead of being
     * treated as two words.
     */
    static fromSeed(seed, discardAtSymbol = true) {
      let input = seed;
      if (discardAtSymbol) {
        input = seed.replace(/@.*/s, "");
      }
      input = input.replace(/[`´'ʼ]/g, "");
      const matches = input.match(/(\p{L}[\p{L}\p{M}]*)/gu);
      if (!matches) {
        return discardAtSymbol ? this.fromSeed(seed, false) : "";
      }
      if (matches.length === 1) {
        const match = matches[0].match(/^(?:\p{L}\p{M}*){1,2}/u);
        return match ? match[0].toUpperCase() : "";
      }
      const first = matches[0].match(/^(?:\p{L}\p{M}*)/u);
      const last = matches[matches.length - 1].match(/^(?:\p{L}\p{M}*)/u);
      if (!first || !last) {
        return "";
      }
      return (first[0] + last[0]).toUpperCase();
    }
  };

  // node_modules/@dicebear/core/lib/Utils/Xml.js
  var __classPrivateFieldGet17 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _a3;
  var _Xml_entities;
  var _Xml_pattern;
  var Xml = class {
    /**
     * Returns `value` with the five XML predefined entities escaped.
     */
    static escape(value) {
      return value.replace(__classPrivateFieldGet17(_a3, _a3, "f", _Xml_pattern), (ch) => __classPrivateFieldGet17(_a3, _a3, "f", _Xml_entities)[ch]);
    }
  };
  _a3 = Xml;
  _Xml_entities = { value: {
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;"
  } };
  _Xml_pattern = { value: new RegExp(`[${Object.keys(__classPrivateFieldGet17(_a3, _a3, "f", _Xml_entities)).join("")}]`, "g") };

  // node_modules/@dicebear/core/lib/Utils/License.js
  var License = class {
    /**
     * Returns a single-line attribution string suitable for `<title>` or
     * `<desc>` content. Returns an empty string when no attribution data is
     * available.
     */
    static text(meta) {
      const sourceName = meta.source().name();
      const sourceUrl = meta.source().url();
      const creatorName = meta.creator().name();
      const licenseName = meta.license().name();
      const licenseUrl = meta.license().url();
      if (!sourceName && !creatorName && !licenseName) {
        return "";
      }
      let title = sourceName ? `\u201C${sourceName}\u201D` : "Design";
      if (sourceUrl) {
        title += ` (${sourceUrl})`;
      }
      const creator = `\u201C${creatorName ?? "Unknown"}\u201D`;
      let result = "";
      if (licenseName !== "MIT" && creatorName !== "DiceBear" && sourceName) {
        result += "Remix of ";
      }
      result += `${title} by ${creator}`;
      if (licenseName) {
        result += `, licensed under \u201C${licenseName}\u201D`;
        if (licenseUrl) {
          result += ` (${licenseUrl})`;
        }
      }
      return result;
    }
    /**
     * Builds an embedded `<metadata>` block with Dublin Core terms describing
     * the style's source, creator, license, and rights statement. Returns an
     * empty string when no metadata fields are populated.
     */
    static xml(meta) {
      const title = meta.source().name();
      const creatorName = meta.creator().name();
      const sourceUrl = meta.source().url();
      const licenseUrl = meta.license().url();
      const rights = this.text(meta);
      if (!title && !creatorName && !sourceUrl && !licenseUrl && !rights) {
        return "";
      }
      const fields = [];
      if (title) {
        fields.push(`<dc:title>${Xml.escape(title)}</dc:title>`);
      }
      if (creatorName) {
        fields.push(`<dc:creator>${Xml.escape(creatorName)}</dc:creator>`);
      }
      if (sourceUrl) {
        fields.push(`<dc:source xsi:type="dcterms:URI">${Xml.escape(sourceUrl)}</dc:source>`);
      }
      if (licenseUrl) {
        fields.push(`<dcterms:license xsi:type="dcterms:URI">${Xml.escape(licenseUrl)}</dcterms:license>`);
      }
      if (rights) {
        fields.push(`<dc:rights>${Xml.escape(rights)}</dc:rights>`);
      }
      return `<metadata xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"><rdf:RDF><rdf:Description>${fields.join("")}</rdf:Description></rdf:RDF></metadata>`;
    }
  };

  // node_modules/@dicebear/core/lib/Utils/Number.js
  var Number2 = class {
    static format(value) {
      if (value !== value) {
        return "NaN";
      }
      if (value === Infinity) {
        return "Infinity";
      }
      if (value === -Infinity) {
        return "-Infinity";
      }
      let scaled = Math.round(value * 1e5);
      const sign = scaled < 0 ? "-" : "";
      scaled = Math.abs(scaled);
      const integerPart = Math.floor(scaled / 1e5);
      const fraction = String(scaled % 1e5).padStart(5, "0").replace(/0+$/, "");
      return `${sign}${integerPart}${fraction ? `.${fraction}` : ""}`;
    }
  };

  // node_modules/@dicebear/core/lib/Renderer.js
  var __classPrivateFieldSet16 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet18 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Renderer_instances;
  var _Renderer_style;
  var _Renderer_resolver;
  var _Renderer_defs;
  var _Renderer_cachedSeedHash;
  var _Renderer_cachedInitials;
  var _Renderer_applyFlip;
  var _Renderer_applyScale;
  var _Renderer_applyBorderRadius;
  var _Renderer_applyRotate;
  var _Renderer_applyTranslate;
  var _Renderer_renderBackground;
  var _Renderer_randomizeIds;
  var _Renderer_renderElements;
  var _Renderer_renderElement;
  var _Renderer_renderSvgElement;
  var _Renderer_renderTextElement;
  var _Renderer_renderComponentElement;
  var _Renderer_buildTransforms;
  var _Renderer_renderAttributes;
  var _Renderer_resolveAttributeValue;
  var _Renderer_resolveColorReference;
  var _Renderer_buildGradientDef;
  var _Renderer_resolveValue;
  var _Renderer_resolveVariable;
  var _Renderer_initials;
  var _Renderer_hashSeed;
  var Renderer = class {
    constructor(style, resolver) {
      _Renderer_instances.add(this);
      _Renderer_style.set(this, void 0);
      _Renderer_resolver.set(this, void 0);
      _Renderer_defs.set(this, /* @__PURE__ */ new Map());
      _Renderer_cachedSeedHash.set(this, void 0);
      _Renderer_cachedInitials.set(this, void 0);
      __classPrivateFieldSet16(this, _Renderer_style, style, "f");
      __classPrivateFieldSet16(this, _Renderer_resolver, resolver, "f");
    }
    /**
     * Builds the complete SVG document for the avatar.
     */
    render() {
      const canvas = __classPrivateFieldGet18(this, _Renderer_style, "f").canvas();
      const background = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderBackground).call(this, canvas);
      let body = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderElements).call(this, canvas.elements());
      body = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_applyScale).call(this, body, canvas);
      body = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_applyFlip).call(this, body, canvas);
      body = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_applyRotate).call(this, body, canvas);
      body = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_applyTranslate).call(this, body, canvas);
      body = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_applyBorderRadius).call(this, `${background}${body}`, canvas);
      const metadata = License.xml(__classPrivateFieldGet18(this, _Renderer_style, "f").meta());
      const defs = __classPrivateFieldGet18(this, _Renderer_defs, "f").size > 0 ? `<defs>${Array.from(__classPrivateFieldGet18(this, _Renderer_defs, "f").values()).join("")}</defs>` : "";
      const size = __classPrivateFieldGet18(this, _Renderer_resolver, "f").size();
      const title = __classPrivateFieldGet18(this, _Renderer_resolver, "f").title();
      const escapedTitle = title !== void 0 ? Xml.escape(title) : void 0;
      const attrs = [
        'xmlns="http://www.w3.org/2000/svg"',
        `viewBox="0 0 ${Number2.format(canvas.width())} ${Number2.format(canvas.height())}"`
      ];
      const rootAttributes = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderAttributes).call(this, __classPrivateFieldGet18(this, _Renderer_style, "f").attributes());
      if (rootAttributes) {
        attrs.push(rootAttributes.trimStart());
      }
      if (escapedTitle !== void 0) {
        attrs.push('role="img"', `aria-label="${escapedTitle}"`);
      } else {
        attrs.push('aria-hidden="true"');
      }
      if (size !== void 0) {
        const sizeValue = Number2.format(size);
        attrs.push(`width="${sizeValue}"`, `height="${sizeValue}"`);
      }
      const titleElement = escapedTitle !== void 0 ? `<title>${escapedTitle}</title>` : "";
      let svg = `<svg ${attrs.join(" ")}><!-- Generated by DiceBear (https://www.dicebear.com) -->${metadata}${defs}${titleElement}${body}</svg>`;
      if (__classPrivateFieldGet18(this, _Renderer_resolver, "f").idRandomization()) {
        svg = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_randomizeIds).call(this, svg);
      }
      return svg;
    }
  };
  _Renderer_style = /* @__PURE__ */ new WeakMap(), _Renderer_resolver = /* @__PURE__ */ new WeakMap(), _Renderer_defs = /* @__PURE__ */ new WeakMap(), _Renderer_cachedSeedHash = /* @__PURE__ */ new WeakMap(), _Renderer_cachedInitials = /* @__PURE__ */ new WeakMap(), _Renderer_instances = /* @__PURE__ */ new WeakSet(), _Renderer_applyFlip = function _Renderer_applyFlip2(body, canvas) {
    const flip = __classPrivateFieldGet18(this, _Renderer_resolver, "f").flip();
    if (flip === "none") {
      return body;
    }
    const w = Number2.format(canvas.width());
    const h = Number2.format(canvas.height());
    let transform;
    switch (flip) {
      case "horizontal":
        transform = `translate(${w}, 0) scale(-1, 1)`;
        break;
      case "vertical":
        transform = `translate(0, ${h}) scale(1, -1)`;
        break;
      case "both":
        transform = `translate(${w}, ${h}) scale(-1, -1)`;
        break;
    }
    return `<g transform="${transform}">${body}</g>`;
  }, _Renderer_applyScale = function _Renderer_applyScale2(body, canvas) {
    const scale = __classPrivateFieldGet18(this, _Renderer_resolver, "f").scale();
    if (scale === 1) {
      return body;
    }
    const cx = canvas.width() / 2;
    const cy = canvas.height() / 2;
    return `<g transform="translate(${Number2.format(cx)}, ${Number2.format(cy)}) scale(${Number2.format(scale)}) translate(${Number2.format(-cx)}, ${Number2.format(-cy)})">${body}</g>`;
  }, _Renderer_applyBorderRadius = function _Renderer_applyBorderRadius2(body, canvas) {
    const radius = __classPrivateFieldGet18(this, _Renderer_resolver, "f").borderRadius();
    const id = `clip-${__classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_hashSeed).call(this)}`;
    const rx = Number2.format(radius / 100 * canvas.width());
    const ry = Number2.format(radius / 100 * canvas.height());
    __classPrivateFieldGet18(this, _Renderer_defs, "f").set(id, `<clipPath id="${id}"><rect width="${Number2.format(canvas.width())}" height="${Number2.format(canvas.height())}" rx="${rx}" ry="${ry}"/></clipPath>`);
    return `<g clip-path="url(#${id})">${body}</g>`;
  }, _Renderer_applyRotate = function _Renderer_applyRotate2(body, canvas) {
    const rotate = __classPrivateFieldGet18(this, _Renderer_resolver, "f").rotate();
    if (rotate === 0) {
      return body;
    }
    const cx = canvas.width() / 2;
    const cy = canvas.height() / 2;
    return `<g transform="rotate(${Number2.format(rotate)}, ${Number2.format(cx)}, ${Number2.format(cy)})">${body}</g>`;
  }, _Renderer_applyTranslate = function _Renderer_applyTranslate2(body, canvas) {
    const tx = __classPrivateFieldGet18(this, _Renderer_resolver, "f").translateX();
    const ty = __classPrivateFieldGet18(this, _Renderer_resolver, "f").translateY();
    if (tx === 0 && ty === 0) {
      return body;
    }
    const x = Number2.format(tx / 100 * canvas.width());
    const y = Number2.format(ty / 100 * canvas.height());
    return `<g transform="translate(${x}, ${y})">${body}</g>`;
  }, _Renderer_renderBackground = function _Renderer_renderBackground2(canvas) {
    const colors = __classPrivateFieldGet18(this, _Renderer_resolver, "f").color("background");
    if (colors.length === 0) {
      return "";
    }
    return `<rect width="${Number2.format(canvas.width())}" height="${Number2.format(canvas.height())}" fill="${Xml.escape(__classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_resolveColorReference).call(this, "background"))}"/>`;
  }, _Renderer_randomizeIds = function _Renderer_randomizeIds2(svg) {
    const suffix = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    const ids = /* @__PURE__ */ new Set();
    for (const match of svg.matchAll(/\bid="([^"]+)"/g)) {
      ids.add(match[1]);
    }
    if (ids.size === 0) {
      return svg;
    }
    const escaped = Array.from(ids, (id) => id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const pattern = new RegExp(`(id="|url\\(#|href="#)(${escaped.join("|")})("|\\))`, "g");
    return svg.replace(pattern, (_, prefix, id, end) => `${prefix}${id}-${suffix}${end}`);
  }, _Renderer_renderElements = function _Renderer_renderElements2(elements) {
    return elements.map((el) => __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderElement).call(this, el)).join("");
  }, _Renderer_renderElement = function _Renderer_renderElement2(element) {
    switch (element.type()) {
      case "element":
        return __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderSvgElement).call(this, element);
      case "text":
        return __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderTextElement).call(this, element);
      case "component":
        return __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderComponentElement).call(this, element);
    }
  }, _Renderer_renderSvgElement = function _Renderer_renderSvgElement2(element) {
    const name = element.name();
    if (!name) {
      return "";
    }
    if (name === "defs") {
      for (const child of element.children()) {
        const rendered = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderElement).call(this, child);
        if (rendered.length > 0) {
          const id = child.attributes()?.id;
          const key = typeof id === "string" ? id : `_${__classPrivateFieldGet18(this, _Renderer_defs, "f").size}`;
          __classPrivateFieldGet18(this, _Renderer_defs, "f").set(key, rendered);
        }
      }
      return "";
    }
    const attrs = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderAttributes).call(this, element.attributes());
    const children = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderElements).call(this, element.children());
    if (children.length === 0) {
      if (element.children().length > 0 && element.attributes()?.id === void 0) {
        return "";
      }
      return `<${name}${attrs}/>`;
    }
    return `<${name}${attrs}>${children}</${name}>`;
  }, _Renderer_renderTextElement = function _Renderer_renderTextElement2(element) {
    const value = element.value();
    return value !== void 0 ? Xml.escape(__classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_resolveValue).call(this, value)) : "";
  }, _Renderer_renderComponentElement = function _Renderer_renderComponentElement2(element) {
    const componentName = element.name();
    if (typeof componentName !== "string") {
      return "";
    }
    const variantName = __classPrivateFieldGet18(this, _Renderer_resolver, "f").variant(componentName);
    if (!variantName) {
      return "";
    }
    const component = __classPrivateFieldGet18(this, _Renderer_style, "f").components().get(componentName);
    if (!component) {
      return "";
    }
    const variant = component.variants().get(variantName);
    if (!variant) {
      return "";
    }
    const id = `${component.sourceName()}-${variantName}-${__classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_hashSeed).call(this)}`;
    if (!__classPrivateFieldGet18(this, _Renderer_defs, "f").has(id)) {
      const body = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderElements).call(this, variant.elements());
      __classPrivateFieldGet18(this, _Renderer_defs, "f").set(id, `<g id="${id}">${body}</g>`);
    }
    const transforms = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_buildTransforms).call(this, component);
    const userAttributes = element.attributes();
    let mergedAttributes = userAttributes;
    if (transforms.length > 0) {
      const userTransform = userAttributes?.transform;
      const allParts = typeof userTransform === "string" && userTransform.length > 0 ? [userTransform, ...transforms] : transforms;
      mergedAttributes = { ...userAttributes, transform: allParts.join(" ") };
    }
    const attrs = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_renderAttributes).call(this, mergedAttributes);
    return `<use${attrs} href="#${id}"/>`;
  }, _Renderer_buildTransforms = function _Renderer_buildTransforms2(component) {
    const { rotate, translateX, translateY, scale } = __classPrivateFieldGet18(this, _Renderer_resolver, "f").componentTransform(component.name());
    if (translateX === 0 && translateY === 0 && rotate === 0 && scale === 1) {
      return [];
    }
    const transforms = [];
    const cx = component.width() / 2;
    const cy = component.height() / 2;
    const cxValue = Number2.format(cx);
    const cyValue = Number2.format(cy);
    if (translateX !== 0 || translateY !== 0) {
      const x = Number2.format(translateX / 100 * component.width());
      const y = Number2.format(translateY / 100 * component.height());
      transforms.push(`translate(${x}, ${y})`);
    }
    if (rotate !== 0) {
      transforms.push(`rotate(${Number2.format(rotate)}, ${cxValue}, ${cyValue})`);
    }
    if (scale !== 1) {
      transforms.push(`translate(${cxValue}, ${cyValue}) scale(${Number2.format(scale)}) translate(${Number2.format(-cx)}, ${Number2.format(-cy)})`);
    }
    return transforms;
  }, _Renderer_renderAttributes = function _Renderer_renderAttributes2(attributes) {
    if (!attributes) {
      return "";
    }
    const parts = [];
    for (const [key, value] of Object.entries(attributes)) {
      if (value === void 0) {
        continue;
      }
      parts.push(`${key}="${Xml.escape(__classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_resolveAttributeValue).call(this, value))}"`);
    }
    if (parts.length === 0) {
      return "";
    }
    return ` ${parts.join(" ")}`;
  }, _Renderer_resolveAttributeValue = function _Renderer_resolveAttributeValue2(value) {
    if (typeof value === "string") {
      return value;
    }
    if (value.type === "color") {
      return __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_resolveColorReference).call(this, value.name);
    }
    return __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_resolveVariable).call(this, value.name);
  }, _Renderer_resolveColorReference = function _Renderer_resolveColorReference2(name) {
    const colors = __classPrivateFieldGet18(this, _Renderer_resolver, "f").color(name);
    const fill = __classPrivateFieldGet18(this, _Renderer_resolver, "f").colorFill(name);
    if (fill === "solid" || colors.length <= 1) {
      return colors[0] ?? "none";
    }
    return __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_buildGradientDef).call(this, name, colors, fill);
  }, _Renderer_buildGradientDef = function _Renderer_buildGradientDef2(name, colors, fill) {
    const rotation = __classPrivateFieldGet18(this, _Renderer_resolver, "f").colorAngle(name);
    const id = `${name}-color-${__classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_hashSeed).call(this)}`;
    const tag = fill === "linear" ? "linearGradient" : "radialGradient";
    const rotateAttr = rotation !== 0 ? ` gradientTransform="rotate(${Number2.format(rotation)}, 0.5, 0.5)"` : "";
    const stops = colors.map((color, i) => {
      const offset = Number2.format(i / (colors.length - 1) * 100);
      return `<stop offset="${offset}%" stop-color="${Xml.escape(color)}"/>`;
    });
    __classPrivateFieldGet18(this, _Renderer_defs, "f").set(id, `<${tag} id="${id}"${rotateAttr}>${stops.join("")}</${tag}>`);
    return `url(#${id})`;
  }, _Renderer_resolveValue = function _Renderer_resolveValue2(value) {
    if (typeof value === "string") {
      return value;
    }
    if (value.type === "variable") {
      return __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_resolveVariable).call(this, value.name);
    }
    return "";
  }, _Renderer_resolveVariable = function _Renderer_resolveVariable2(name) {
    switch (name) {
      case "initial": {
        const first = __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_initials).call(this).codePointAt(0);
        return first !== void 0 ? String.fromCodePoint(first) : "";
      }
      case "initials":
        return __classPrivateFieldGet18(this, _Renderer_instances, "m", _Renderer_initials).call(this);
      case "fontWeight":
        return Number2.format(__classPrivateFieldGet18(this, _Renderer_resolver, "f").fontWeight());
      case "fontFamily":
        return __classPrivateFieldGet18(this, _Renderer_resolver, "f").fontFamily();
    }
  }, _Renderer_initials = function _Renderer_initials2() {
    return __classPrivateFieldSet16(this, _Renderer_cachedInitials, __classPrivateFieldGet18(this, _Renderer_cachedInitials, "f") ?? Initials.fromSeed(__classPrivateFieldGet18(this, _Renderer_resolver, "f").seed()), "f");
  }, _Renderer_hashSeed = function _Renderer_hashSeed2() {
    return __classPrivateFieldSet16(this, _Renderer_cachedSeedHash, __classPrivateFieldGet18(this, _Renderer_cachedSeedHash, "f") ?? Fnv1a.hex((__classPrivateFieldGet18(this, _Renderer_style, "f").meta().source().name() ?? "") + ":" + __classPrivateFieldGet18(this, _Renderer_resolver, "f").seed()), "f");
  };

  // node_modules/@dicebear/core/lib/Avatar.js
  var __classPrivateFieldSet17 = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet19 = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Avatar_svg;
  var _Avatar_resolvedOptions;
  var definitionInputWarned = false;
  var Avatar = class {
    /**
     * Pass a {@link Style} instance. Passing a raw style definition is
     * deprecated and will be removed in v11; wrap it with `new Style(...)` and
     * reuse the instance across avatars.
     */
    constructor(styleInput, optionsInput) {
      _Avatar_svg.set(this, void 0);
      _Avatar_resolvedOptions.set(this, void 0);
      if (!(styleInput instanceof Style) && !definitionInputWarned) {
        definitionInputWarned = true;
        console.warn("[DiceBear] Passing a style definition to `new Avatar()` is deprecated and will be removed in v11. Wrap it in a Style first: `new Avatar(new Style(definition), options)`.");
      }
      const style = styleInput instanceof Style ? styleInput : new Style(styleInput);
      const options = new Options(optionsInput);
      const resolver = new Resolver(style, options);
      __classPrivateFieldSet17(this, _Avatar_svg, new Renderer(style, resolver).render(), "f");
      __classPrivateFieldSet17(this, _Avatar_resolvedOptions, resolver.resolved(), "f");
    }
    /**
     * Returns the rendered SVG markup.
     */
    toString() {
      return __classPrivateFieldGet19(this, _Avatar_svg, "f");
    }
    /**
     * Returns the avatar as a JSON-serializable object containing the SVG and
     * the fully resolved options used to render it.
     */
    toJSON() {
      return {
        svg: __classPrivateFieldGet19(this, _Avatar_svg, "f"),
        options: structuredClone(__classPrivateFieldGet19(this, _Avatar_resolvedOptions, "f"))
      };
    }
    /**
     * Returns the SVG encoded as a `data:image/svg+xml` URI.
     */
    toDataUri() {
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(__classPrivateFieldGet19(this, _Avatar_svg, "f"))}`;
    }
  };
  _Avatar_svg = /* @__PURE__ */ new WeakMap(), _Avatar_resolvedOptions = /* @__PURE__ */ new WeakMap();

  // node_modules/@dicebear/styles/dist/avataaars.min.json
  var avataaars_min_default = { $id: "https://cdn.hopjs.net/npm/@dicebear/styles@10.6.0/dist/avataaars.min.json", $schema: "https://cdn.hopjs.net/npm/@dicebear/schema@1.4.0/dist/definition.min.json", $comment: "This file was generated by the DiceBear Exporter for Figma. https://www.figma.com/community/plugin/1005765655729342787", meta: { license: { name: "Free for personal and commercial use", url: "https://avataaars.com/", text: "Remix of \u201EAvataaars\u201D (https://avataaars.com/) by \u201EPablo Stanley\u201D, licensed under \u201EFree for personal and commercial use\u201D (https://avataaars.com/)" }, creator: { name: "Pablo Stanley", url: "https://twitter.com/pablostanley" }, source: { name: "Avataaars", url: "https://avataaars.com/" } }, canvas: { elements: [{ name: "path", type: "element", attributes: { d: "M140 36a56 56 0 0 0-56 56v6.17A12 12 0 0 0 74 110v14a12 12 0 0 0 10.3 11.88A56 56 0 0 0 116 180.6V199h-4a72 72 0 0 0-72 72v9h200v-9a72 72 0 0 0-72-72h-4v-18.38a56 56 0 0 0 31.7-44.73A12 12 0 0 0 206 124v-14a12 12 0 0 0-10-11.83V92a56 56 0 0 0-56-56", fill: { type: "color", name: "skin" } } }, { name: "path", type: "element", attributes: { d: "M116 180.61v8a56 56 0 0 0 24 5.39 56 56 0 0 0 24-5.39v-8a56 56 0 0 1-24 5.39 56 56 0 0 1-24-5.39", fill: "black", "fill-opacity": ".1" } }, { name: "clothes", type: "component", attributes: { transform: "translate(40 184.7)" } }, { name: "mouth", type: "component", attributes: { transform: "translate(94 140)" } }, { name: "nose", type: "component", attributes: { transform: "translate(128 130)" } }, { name: "eyes", type: "component", attributes: { transform: "translate(98 98)" } }, { name: "eyebrows", type: "component", attributes: { transform: "translate(91.86 82)" } }, { name: "top", type: "component", attributes: { transform: "translate(8)" } }, { name: "facialHair", type: "component", attributes: { transform: "translate(81 98)" } }, { name: "accessories", type: "component", attributes: { transform: "translate(75.77 46)" } }], width: 280, height: 280 }, attributes: { fill: "none", "shape-rendering": "auto" }, components: { accessories: { width: 130.47, height: 92.94, probability: 10, variants: { eyepatch: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M88.63.78c-3.08-3.09-6.28 3.86-7.77 5.65-3.61 4.32-7.09 8.75-10.76 13.02-7.25 8.43-14.43 16.92-21.63 25.4-1.1 1.28-.96 1.4-2.4 1.54-.95.08-2.27-.4-3.26-.46a29 29 0 0 0-8.14.9c-5.35 1.17-11.01 3.1-15.65 6.07-1.22.78-2 1.7-3.32 1.94-1.15.2-2.67-.21-3.84-.32-2.09-.2-5.09-1.05-7.13-.6-2.6.55-3.58 3.7-.94 5.08 2 1.06 6 .48 8.21.64 2.57.2 1.8.06 1.42 2.52-.52 3.54.35 7.49 1.84 10.72 3.46 7.5 13.04 15.46 21.77 14.72 7.28-.6 13.67-7.19 16.66-13.5a31 31 0 0 0 2.74-10.47c.2-2.27.1-4.67-.56-6.87a17 17 0 0 0-1.38-3.2c-.44-.8-2.4-2.64-2.52-3.44-.23-1.56 4.19-5.73 5.03-6.78Q63 36 68.92 28.6q5.82-7.33 11.77-14.52C82.5 11.9 91.54 3.7 88.6.78", fill: { type: "color", name: "accessories" } } }] }, kurt: { elements: [{ name: "path", type: "element", attributes: { d: "M65.23 54.11c-11.03 0-12.63-9.08-35.33-10.37C7.22 42.72.05 49.44 0 54.11c.05 4.3-1.12 15.45 13.6 28.52 14.77 15.51 29.9 10.25 35.33 5.18 5.44-2.34 11.64-23.35 16.3-23.33s10.87 21 16.3 23.33c5.43 5.07 20.57 10.33 35.34-5.18 14.72-13.07 13.55-24.23 13.59-28.52-.04-4.66-7.21-11.4-29.9-10.37-22.7 1.29-24.29 10.37-35.33 10.37", fill: "black", "fill-opacity": ".1" } }, { name: "path", type: "element", attributes: { d: "M65.23 52.11c-11.03 0-12.63-9.08-35.33-10.37C7.22 40.72.05 47.44 0 52.11c.05 4.3-1.12 15.45 13.6 28.52 14.77 15.51 29.9 10.25 35.33 5.18 5.44-2.34 11.64-23.35 16.3-23.33s10.87 21 16.3 23.33c5.43 5.07 20.57 10.33 35.34-5.18 14.72-13.07 13.55-24.23 13.59-28.52-.04-4.66-7.21-11.4-29.9-10.37-22.7 1.29-24.29 10.37-35.33 10.37", fill: { type: "color", name: "accessories" } } }, { name: "path", type: "element", attributes: { d: "M27.19 46.93c14.26-.29 27.55 7.9 27.17 15.55-.22 5.05-2.93 22.83-19.02 23.33-16.1.5-24.8-17.79-24.46-25.92.2-3.51 2.05-12.67 16.3-12.96m76.1 0c-14.26-.29-27.56 7.9-27.18 15.55.22 5.05 2.94 22.83 19.03 23.33s24.8-17.79 24.46-25.92c-.2-3.51-2.06-12.67-16.31-12.96", fill: "#2F383B" } }] }, prescription01: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M105.95 49.49c4.66.16 8 .88 10.54 4.52 3 .15 6.23.37 8.95 1.63 3.4 1.56 3.91 5.1-.36 5.6a20 20 0 0 1-5.55-.46l-.18-.03-.34-.06c1.1 9.46-6.2 20.87-14.23 24.35C93.83 89.8 81.57 84.53 75.77 75c-2.63-4.3-4.15-10.51-4.47-15.86q-.63-.31-1.23-.67-.57-.34-1.12-.61c-2-.98-5.34-1.1-7.5 0q-.51.26-1.04.58-.64.38-1.32.72C58.77 64.5 57.25 70.7 54.63 75c-5.8 9.53-18.07 14.8-29.04 10.04-8.06-3.48-15.37-14.9-14.26-24.35q-.18-.01-.34.03l-.19.03c-1.83.33-3.69.66-5.55.45-4.26-.5-3.74-4.03-.36-5.6 2.74-1.25 5.98-1.47 9-1.62 2.54-3.63 5.88-4.36 10.54-4.52l23.3-.46c5.18-.14 9.71 0 11.02 4.6a19 19 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.84-4.77 11.03-4.63zM81.9 56.27c-2.37.03-3.49.42-3.9 2.9-.4 2.5 0 5.31.48 7.78.72 3.77 1.92 7.46 4.7 10.22a16 16 0 0 0 8.32 4.34l.96.16c.63.1 1.23.18.72.13l-.1-.01h-.06.16c3.72.4 7.7.32 10.8-2.04 3.54-2.7 5.96-6.95 7.03-11.2.62-2.48 1.93-8.42-.46-10.4-2.74-2.28-28.64-1.88-28.64-1.88m-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.72 3.77-1.92 7.46-4.7 10.22a16 16 0 0 1-8.33 4.35l-.96.15c-.64.1-1.25.19-.68.13-3.73.4-7.74.32-10.84-2.05-3.54-2.7-5.96-6.95-7.02-11.2-.62-2.48-1.93-8.42.46-10.4 2.74-2.28 28.63-1.87 28.63-1.87m-10.93 25.5", fill: "black", "fill-opacity": ".1" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M105.95 47.49c4.66.16 8 .88 10.54 4.52 3 .15 6.23.37 8.95 1.63 3.4 1.56 3.91 5.1-.36 5.6a20 20 0 0 1-5.55-.46l-.18-.03-.34-.06c1.1 9.46-6.2 20.87-14.23 24.35C93.83 87.8 81.57 82.53 75.77 73c-2.63-4.3-4.15-10.51-4.47-15.86q-.63-.31-1.23-.67-.57-.34-1.12-.61c-2-.98-5.34-1.1-7.5 0q-.51.26-1.04.58-.64.38-1.32.72C58.77 62.5 57.25 68.7 54.63 73c-5.8 9.53-18.07 14.8-29.04 10.04-8.06-3.48-15.37-14.9-14.26-24.35q-.18-.01-.34.03l-.19.03c-1.83.33-3.69.66-5.55.45-4.26-.5-3.74-4.03-.36-5.6 2.74-1.25 5.98-1.47 9-1.62 2.54-3.63 5.88-4.36 10.54-4.52l23.3-.46c5.18-.14 9.71 0 11.02 4.6a19 19 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.84-4.77 11.03-4.63zM81.9 54.27c-2.37.03-3.49.42-3.9 2.9-.4 2.5 0 5.31.48 7.78.72 3.77 1.92 7.46 4.7 10.22a16 16 0 0 0 8.32 4.34l.96.16c.63.1 1.23.18.72.13l-.1-.01h-.06.16c3.72.4 7.7.32 10.8-2.04 3.54-2.7 5.96-6.95 7.03-11.2.62-2.48 1.93-8.42-.46-10.4-2.74-2.28-28.64-1.88-28.64-1.88m-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.72 3.77-1.92 7.46-4.7 10.22a16 16 0 0 1-8.33 4.35l-.96.15c-.64.1-1.25.19-.68.13-3.73.4-7.74.32-10.84-2.05-3.54-2.7-5.96-6.95-7.02-11.2-.62-2.48-1.93-8.42.46-10.4 2.74-2.28 28.63-1.87 28.63-1.87m-10.93 25.5", fill: { type: "color", name: "accessories" } } }] }, prescription02: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M32.73 48C11.44 48 3.88 53.1 3.2 53.77a2.9 2.9 0 0 0-2.96 2.89v2.88c0 1.6 1.33 2.9 2.96 2.9 0 0 5.9 0 5.9 2.87q0 .65.19.68a63 63 0 0 0-.05 2.5c0 12.82 8.32 20.5 22.25 20.5h2.73c14.72 0 25-8.45 25-20.5q0-2.28-.17-4.48l1.59-.77q.86-.43 1.89-.64c1.85-.38 3.95-.22 5.99.28.73.18 1.26.35 1.5.45l1.38.55q-.2 2.26-.18 4.6c0 12.84 8.32 20.5 22.25 20.5h2.75c14.72 0 25-8.43 25-20.5q0-2.32-.17-4.56c1.73-1.5 6.22-1.5 6.22-1.5a2.9 2.9 0 0 0 2.95-2.9v-2.88c0-1.6-1.32-2.89-2.95-2.89-.7-.67-8.26-5.77-29.55-5.77h-2.97q-2.68 0-4.97.2c-9.54.53-14.68 2.14-19.92 4.7a17 17 0 0 1-4.56.86 17 17 0 0 1-4.8-.9l-.43-.2v-.02c-4.94-2.42-8.43-4.13-20.78-4.55a61 61 0 0 0-3.6-.1zm-19.5 21.5c0-8.66 0-15.5 19.39-15.5h3.23c19.38 0 19.38 6.84 19.38 15.5 0 9.13-8.63 15.5-21 15.5H31.2c-14.85 0-17.97-8.43-17.97-15.5m62 0c0-8.66 0-15.5 19.39-15.5h3.23c19.38 0 19.38 6.84 19.38 15.5 0 9.13-8.63 15.5-21 15.5H93.2c-14.85 0-17.97-8.43-17.97-15.5", fill: "black", "fill-opacity": ".1" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M32.73 46C11.44 46 3.88 51.1 3.2 51.77a2.9 2.9 0 0 0-2.96 2.89v2.88c0 1.6 1.33 2.9 2.96 2.9 0 0 5.9 0 5.9 2.87q0 .67.19.71a63 63 0 0 0-.05 2.51c0 12.83 8.32 20.5 22.25 20.5h2.73c14.72 0 25-8.44 25-20.5q0-2.27-.17-4.47l1.59-.77q.86-.43 1.89-.64c1.85-.38 3.95-.22 5.99.28.73.18 1.26.35 1.5.45l1.38.55q-.2 2.26-.18 4.6c0 12.85 8.32 20.51 22.25 20.51h2.75c14.72 0 25-8.43 25-20.5q0-2.32-.17-4.56c1.73-1.51 6.22-1.51 6.22-1.51a2.9 2.9 0 0 0 2.95-2.89V54.7c0-1.6-1.32-2.89-2.95-2.89-.7-.67-8.26-5.77-29.55-5.77h-2.97q-2.68 0-4.97.2c-9.54.54-14.68 2.15-19.92 4.7a17 17 0 0 1-4.56.87 17 17 0 0 1-4.8-.9l-.43-.2c-4.94-2.44-8.43-4.15-20.78-4.57a61 61 0 0 0-3.6-.1zm-19.5 21.5c0-8.66 0-15.5 19.39-15.5h3.23c19.38 0 19.38 6.84 19.38 15.5 0 9.13-8.63 15.5-21 15.5H31.2c-14.85 0-17.97-8.43-17.97-15.5m62 0c0-8.66 0-15.5 19.39-15.5h3.23c19.38 0 19.38 6.84 19.38 15.5 0 9.13-8.63 15.5-21 15.5H93.2c-14.85 0-17.97-8.43-17.97-15.5", fill: { type: "color", name: "accessories" } } }] }, round: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M34.23 92a24 24 0 0 1-22.96-31H4.73a2.5 2.5 0 0 1 0-5h8q.34 0 .66.09a24 24 0 0 1 42.26 1.06A11.4 11.4 0 0 1 65.1 52c4 0 7.54 2.14 9.6 5.4a24 24 0 0 1 42.37-1.31q.31-.1.66-.1h8a2.5 2.5 0 1 1 0 5h-6.53a24 24 0 1 1-46.6 2.84c-.1-4.37-3.45-7.83-7.5-7.83-3.74 0-6.9 2.94-7.43 6.83q.56 2.51.56 5.17a24 24 0 0 1-24 24m0-4a20 20 0 1 0 0-40 20 20 0 0 0 0 40m82-20a20 20 0 1 1-40 0 20 20 0 0 1 40 0", fill: "black", "fill-opacity": ".1" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M34.23 90a24 24 0 0 1-22.96-31H4.73a2.5 2.5 0 0 1 0-5h8q.34 0 .66.09a24 24 0 0 1 42.26 1.06A11.4 11.4 0 0 1 65.1 50c4 0 7.54 2.14 9.6 5.4a24 24 0 0 1 42.37-1.31q.31-.1.66-.1h8a2.5 2.5 0 1 1 0 5h-6.53a24 24 0 1 1-46.6 2.84c-.1-4.37-3.45-7.83-7.5-7.83-3.74 0-6.9 2.94-7.43 6.83q.56 2.51.56 5.17a24 24 0 0 1-24 24m0-4a20 20 0 1 0 0-40 20 20 0 0 0 0 40m82-20a20 20 0 1 1-40 0 20 20 0 0 1 40 0", fill: { type: "color", name: "accessories" } } }] }, sunglasses: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M105.95 49.49c4.66.16 8 .88 10.54 4.52 3 .15 6.22.37 8.94 1.63 3.4 1.56 3.91 5.1-.36 5.6a20 20 0 0 1-5.55-.46l-.18-.03-.34-.06c1.11 9.46-6.19 20.87-14.22 24.35C93.83 89.8 81.57 84.53 75.77 75c-2.63-4.3-4.15-10.51-4.47-15.86q-.63-.31-1.23-.67-.57-.34-1.12-.61c-2-.98-5.34-1.1-7.5 0q-.51.26-1.04.58-.64.38-1.32.72C58.77 64.5 57.25 70.7 54.63 75c-5.8 9.53-18.07 14.8-29.04 10.04-8.07-3.48-15.38-14.9-14.27-24.35q-.18-.02-.34.02l-.19.03c-1.83.33-3.69.66-5.55.45-4.26-.5-3.74-4.03-.36-5.6 2.74-1.25 5.98-1.47 9-1.62 2.54-3.63 5.88-4.36 10.54-4.52l23.3-.46c5.18-.14 9.71 0 11.02 4.6a19 19 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.84-4.77 11.03-4.63zM81.9 56.27c-2.37.03-3.49.42-3.9 2.9-.4 2.5 0 5.31.48 7.78.72 3.77 1.92 7.46 4.7 10.22a16 16 0 0 0 8.32 4.34l.96.16c.63.1 1.23.18.72.13 3.72.4 7.7.3 10.8-2.05 3.54-2.7 5.96-6.95 7.03-11.2.62-2.48 1.93-8.42-.46-10.4-2.74-2.28-28.64-1.88-28.64-1.88m-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.72 3.77-1.92 7.46-4.7 10.22a16.2 16.2 0 0 1-9.3 4.5c-.63.1-1.24.19-.67.13-3.73.4-7.74.32-10.84-2.05-3.54-2.7-5.96-6.95-7.02-11.2-.62-2.48-1.93-8.42.46-10.4 2.74-2.28 28.63-1.87 28.63-1.87m-10.93 25.5", fill: "black", "fill-opacity": ".1" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M49.24 53.28c2.51.02 3.7.45 4.13 3.11.43 2.7.01 5.74-.49 8.4-.76 4.06-2.03 8.04-4.98 11a17 17 0 0 1-8.8 4.69c-.34.07-3.16.47-1.43.27-4.04.47-8.42.45-11.8-2.17-3.74-2.9-6.3-7.5-7.43-12.07-.66-2.63-2.04-9.03.5-11.2 2.9-2.42 30.3-2 30.3-2", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M49.24 53.28c2.51.02 3.7.45 4.13 3.11.43 2.7.01 5.74-.49 8.4-.76 4.06-2.03 8.04-4.98 11a17 17 0 0 1-8.8 4.69c-.34.07-3.16.47-1.43.27-4.04.47-8.42.45-11.8-2.17-3.74-2.9-6.3-7.5-7.43-12.07-.66-2.63-2.04-9.03.5-11.2 2.9-2.42 30.3-2 30.3-2", fill: "url(#accessoriesSunglasses-a)", style: "mix-blend-mode:screen" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M81.15 53.27c-2.5.03-3.7.45-4.12 3.12-.44 2.7-.02 5.73.48 8.4.77 4.06 2.04 8.03 4.99 11a17 17 0 0 0 8.8 4.69c.33.07 3.16.47 1.42.26 4.05.47 8.43.45 11.8-2.16 3.74-2.9 6.3-7.5 7.43-12.07.66-2.64 2.05-9.04-.48-11.17-2.9-2.46-30.32-2.03-30.32-2.03", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M81.15 53.27c-2.5.03-3.7.45-4.12 3.12-.44 2.7-.02 5.73.48 8.4.77 4.06 2.04 8.03 4.99 11a17 17 0 0 0 8.8 4.69c.33.07 3.16.47 1.42.26 4.05.47 8.43.45 11.8-2.16 3.74-2.9 6.3-7.5 7.43-12.07.66-2.64 2.05-9.04-.48-11.17-2.9-2.46-30.32-2.03-30.32-2.03", fill: "url(#accessoriesSunglasses-b)", style: "mix-blend-mode:screen" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M105.95 47.49c4.66.16 8 .88 10.54 4.52 3 .15 6.22.37 8.94 1.63 3.4 1.56 3.91 5.1-.36 5.6a20 20 0 0 1-5.55-.46l-.18-.03-.34-.06c1.11 9.46-6.19 20.87-14.22 24.35C93.83 87.8 81.57 82.53 75.77 73c-2.63-4.3-4.15-10.51-4.47-15.86q-.63-.31-1.23-.67-.57-.34-1.12-.61c-2-.98-5.34-1.1-7.5 0q-.51.26-1.04.58-.64.38-1.32.72C58.77 62.5 57.25 68.7 54.63 73c-5.8 9.53-18.07 14.8-29.04 10.04-8.07-3.48-15.38-14.9-14.27-24.35q-.18-.02-.34.02l-.19.03c-1.83.33-3.69.66-5.55.45-4.26-.5-3.74-4.03-.36-5.6 2.74-1.25 5.98-1.47 9-1.62 2.54-3.63 5.88-4.36 10.54-4.52l23.3-.46c5.18-.14 9.71 0 11.02 4.6a19 19 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.84-4.77 11.03-4.63zM81.9 54.27c-2.37.03-3.49.42-3.9 2.9-.4 2.5 0 5.31.48 7.78.72 3.77 1.92 7.46 4.7 10.22a16 16 0 0 0 8.32 4.34l.96.16c.63.1 1.23.18.72.13 3.72.4 7.7.3 10.8-2.05 3.54-2.7 5.96-6.95 7.03-11.2.62-2.48 1.93-8.42-.46-10.4-2.74-2.28-28.64-1.88-28.64-1.88m-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.72 3.77-1.92 7.46-4.7 10.22a16.2 16.2 0 0 1-9.3 4.5c-.63.1-1.24.19-.67.13-3.73.4-7.74.32-10.84-2.05-3.54-2.7-5.96-6.95-7.02-11.2-.62-2.48-1.93-8.42.46-10.4 2.74-2.28 28.63-1.87 28.63-1.87m-10.93 25.5", fill: { type: "color", name: "accessories" } } }, { name: "defs", type: "element", children: [{ name: "linearGradient", type: "element", attributes: { id: "accessoriesSunglasses-a", x1: "22.79", y1: "53.25", x2: "22.79", y2: "72.8", gradientUnits: "userSpaceOnUse" }, children: [{ name: "stop", type: "element", attributes: { "stop-color": "white", "stop-opacity": ".5" } }, { name: "stop", type: "element", attributes: { offset: "1", "stop-opacity": ".5" } }] }, { name: "linearGradient", type: "element", attributes: { id: "accessoriesSunglasses-b", x1: "76.85", y1: "53.25", x2: "76.85", y2: "80.98", gradientUnits: "userSpaceOnUse" }, children: [{ name: "stop", type: "element", attributes: { "stop-color": "white", "stop-opacity": ".5" } }, { name: "stop", type: "element", attributes: { offset: ".71", "stop-opacity": ".5" } }] }] }] }, wayfarers: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M33.48 48c-21.12 0-28.63 5.17-29.32 5.86a2.93 2.93 0 0 0-2.93 2.93v2.92a2.93 2.93 0 0 0 2.93 2.93s5.87 0 5.87 2.93q0 .3.03.45-.04 1.23-.04 2.48c0 12.84 8.3 20.5 22.18 20.5h2.75c14.68 0 24.93-8.43 24.93-20.5q0-2.17-.15-4.28l1.45-.73q.86-.42 1.88-.64a13.4 13.4 0 0 1 5.94.28q1.1.3 1.5.46l1.25.5a51 51 0 0 0-.16 4.4c0 12.81 8.29 20.5 22.18 20.5h2.75c14.68 0 24.93-8.46 24.93-20.5q0-1.28-.05-2.5.03-.18.04-.46c0-2.93 5.86-2.93 5.86-2.93 1.62 0 2.93-1.3 2.93-2.93v-2.9a2.93 2.93 0 0 0-2.93-2.93c-.69-.69-8.19-5.86-29.32-5.86h-2.93q-2.74 0-5.08.21c-9.38.56-14.46 2.2-19.63 4.76-.54.2-2.38.8-4.53.88a17 17 0 0 1-4.77-.92l-.42-.2c-4.9-2.46-8.35-4.19-20.55-4.62q-1.73-.1-3.66-.1zm-1.11 5.86h1.11q3.66 0 6.48.1C54 54.8 54 60.91 54 68.5c0 8.62-7.84 14.64-19.06 14.64H32.2c-13.49 0-16.32-7.96-16.32-14.64 0-8 0-14.37 16.5-14.64m26.1 4.36.1.03-.08.03zm14.51 0-.07.03.05.02zm16.7-4.12a125 125 0 0 1 9.41-.24c16.48.27 16.48 6.63 16.48 14.64 0 8.62-7.84 14.64-19.06 14.64h-2.75c-13.49 0-16.32-7.96-16.32-14.64 0-7.25 0-13.15 12.24-14.4", fill: "black", "fill-opacity": ".1" } }, { name: "path", type: "element", attributes: { d: "M34.95 84.07c13.75 0 22-7.87 22-17.57s-1.3-17.57-20.55-17.57h-2.93c-19.24 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.25 17.57z", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { d: "M34.95 84.07c13.75 0 22-7.87 22-17.57s-1.3-17.57-20.55-17.57h-2.93c-19.24 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.25 17.57z", fill: "url(#accessoriesWayfarers-a)", style: "mix-blend-mode:screen" } }, { name: "path", type: "element", attributes: { d: "M96.52 84.07c13.75 0 22-7.87 22-17.57s-1.3-17.57-20.54-17.57h-2.93c-19.25 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.25 17.57z", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { d: "M96.52 84.07c13.75 0 22-7.87 22-17.57s-1.3-17.57-20.54-17.57h-2.93c-19.25 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.25 17.57z", fill: "url(#accessoriesWayfarers-b)", style: "mix-blend-mode:screen" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M33.48 46c-21.12 0-28.63 5.17-29.32 5.86a2.93 2.93 0 0 0-2.93 2.93v2.92a2.93 2.93 0 0 0 2.93 2.93s5.87 0 5.87 2.93q0 .3.03.45-.04 1.23-.04 2.48c0 12.84 8.3 20.5 22.18 20.5h2.75c14.68 0 24.93-8.43 24.93-20.5q0-2.17-.15-4.28l1.45-.73q.86-.42 1.88-.64a13.4 13.4 0 0 1 5.94.28q1.1.29 1.5.46l1.25.5a51 51 0 0 0-.16 4.4c0 12.81 8.29 20.5 22.18 20.5h2.75c14.68 0 24.93-8.46 24.93-20.5q0-1.28-.05-2.5.03-.17.04-.46c0-2.93 5.86-2.93 5.86-2.93 1.62 0 2.93-1.3 2.93-2.93v-2.9a2.93 2.93 0 0 0-2.93-2.93c-.69-.69-8.19-5.86-29.32-5.86h-2.93q-2.74 0-5.08.21c-9.38.56-14.46 2.2-19.63 4.76-.54.2-2.38.8-4.53.88a17 17 0 0 1-4.77-.92l-.42-.2c-4.9-2.46-8.35-4.19-20.55-4.62q-1.73-.1-3.66-.1zm-1.11 5.86h1.11q3.66 0 6.48.1C54 52.8 54 58.91 54 66.5c0 8.62-7.84 14.64-19.06 14.64H32.2c-13.49 0-16.32-7.96-16.32-14.64 0-8 0-14.37 16.5-14.64m26.1 4.36.1.03-.08.03zm14.51 0-.07.03.05.02zm16.7-4.12a125 125 0 0 1 9.41-.24c16.48.27 16.48 6.63 16.48 14.64 0 8.62-7.84 14.64-19.06 14.64h-2.75c-13.49 0-16.32-7.96-16.32-14.64 0-7.25 0-13.15 12.24-14.4", fill: { type: "color", name: "accessories" } } }, { name: "defs", type: "element", children: [{ name: "linearGradient", type: "element", attributes: { id: "accessoriesWayfarers-a", x1: "74.52", y1: "48.93", x2: "74.52", y2: "84.07", gradientUnits: "userSpaceOnUse" }, children: [{ name: "stop", type: "element", attributes: { "stop-color": "white", "stop-opacity": ".5" } }, { name: "stop", type: "element", attributes: { offset: ".71", "stop-opacity": ".5" } }] }, { name: "linearGradient", type: "element", attributes: { id: "accessoriesWayfarers-b", x1: "74.52", y1: "48.93", x2: "74.52", y2: "84.07", gradientUnits: "userSpaceOnUse" }, children: [{ name: "stop", type: "element", attributes: { "stop-color": "white", "stop-opacity": ".5" } }, { name: "stop", type: "element", attributes: { offset: ".71", "stop-opacity": ".5" } }] }] }] } } }, clothes: { width: 200, height: 95.31, variants: { blazerAndShirt: { elements: [{ name: "path", type: "element", attributes: { d: "M100.5 37.13c18.5 0 33.5-9.61 33.5-21.48q0-.52-.04-1.05A72 72 0 0 1 200 86.36v8.95H0v-8.95a72 72 0 0 1 67.05-71.83q-.05.55-.05 1.12c0 11.87 15 21.48 33.5 21.48", fill: "#E6E6E6" } }, { name: "path", type: "element", attributes: { d: "M100.5 44.07c21.89 0 39.63-12.05 39.63-26.92q0-.9-.08-1.79-3-.51-6.1-.76.06.52.05 1.05c0 11.87-15 21.48-33.5 21.48S67 27.52 67 15.65q0-.57.05-1.12-3.08.2-6.08.67-.1.97-.1 1.95c0 14.87 17.74 26.92 39.63 26.92", fill: "black", "fill-opacity": ".16" } }, { name: "path", type: "element", attributes: { d: "M68.78 14.43 69 13.3c-2.96.06-6 1-6 1l-.42.67A72 72 0 0 0 0 86.36v8.95h74s-10.7-51.56-5.24-80.8zM126 95.3s11-53 5-82c2.96.06 6 1 6 1l.42.67A72 72 0 0 1 200 86.36v8.95z", fill: { type: "color", name: "clothes" } } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M69 13.3c-6 29 5 82 5 82H58l-14-36 6-9-6-6 19-30s3.04-.94 6-1m62 0c6 29-5 82-5 82h16l14-36-6-9 6-6-19-30s-3.04-.94-6-1", fill: "black", "fill-opacity": ".15" } }, { name: "path", type: "element", attributes: { d: "m151.42 71.07.87-2.24 6.27-4.7a4 4 0 0 1 4.85.05l6.6 5.13z", fill: "#E6E6E6" } }] }, blazerAndSweater: { elements: [{ name: "path", type: "element", attributes: { d: "M100 42.36c14.91 0 27-11.2 27-25q0-1.53-.2-3h1.2a72 72 0 0 1 72 72v8.95H0v-8.95a72 72 0 0 1 72-72h1.2q-.2 1.47-.2 3c0 13.8 12.09 25 27 25", fill: "#E6E6E6" } }, { name: "path", type: "element", attributes: { d: "M68.78 14.43 69 13.3c-2.96.06-6 1-6 1l-.42.67A72 72 0 0 0 0 86.36v8.95h74s-10.7-51.56-5.24-80.8zM126 95.3s11-53 5-82c2.96.06 6 1 6 1l.42.67A72 72 0 0 1 200 86.36v8.95z", fill: { type: "color", name: "clothes" } } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M69 13.3c-6 29 5 82 5 82H58l-14-36 6-9-6-6 19-30s3.04-.94 6-1m62 0c6 29-5 82-5 82h16l14-36-6-9 6-6-19-30s-3.04-.94-6-1", fill: "black", "fill-opacity": ".15" } }, { name: "path", type: "element", attributes: { d: "M76 6.84c-6.77 4.6-11 11.12-11 18.35 0 7.4 4.43 14.06 11.48 18.67l5.94-4.68 4.58.33-1-3.15.08-.06C79.98 33.16 76 28 76 22.18zm48 15.34c0 5.83-3.98 10.98-10.08 14.12l.08.06-1 3.15 4.58-.33 5.94 4.68C130.57 39.26 135 32.6 135 25.2c0-7.23-4.23-13.75-11-18.35z", fill: "#F2F2F2" } }, { name: "path", type: "element", attributes: { d: "m151.42 71.07.87-2.24 6.27-4.7a4 4 0 0 1 4.85.05l6.6 5.13z", fill: "#E6E6E6" } }] }, collarAndSweater: { elements: [{ name: "path", type: "element", attributes: { d: "M68.37 14.45A28 28 0 0 1 76 6.88v15.3C76 28 79.98 33.16 86.08 36.3l-.08.06.9 2.87c3.89 2 8.35 3.13 13.1 3.13s9.21-1.14 13.1-3.13l.9-2.87-.08-.06C120.02 33.16 124 28 124 22.18V7.58a27 27 0 0 1 6.6 6.82A72 72 0 0 1 200 86.36v8.95H0v-8.95a72 72 0 0 1 68.37-71.91", fill: { type: "color", name: "clothes" } } }, { name: "path", type: "element", attributes: { d: "M76 6.88c-6.77 4.6-11 11.17-11 18.45 0 7.4 4.36 14.06 11.3 18.67l6.12-4.82 4.58.33-1-3.15.08-.06C79.98 33.16 76 28 76 22.18zm48 15.3c0 5.83-3.98 10.98-10.08 14.12l.08.06-1 3.15 4.58-.33 5.65 4.45c6.63-4.6 10.77-11.1 10.77-18.3 0-6.92-3.82-13.19-10-17.74z", fill: "white", "fill-opacity": ".75" } }] }, graphicShirt: { elements: [{ name: "path", type: "element", attributes: { d: "M100.5 39.3c18.5 0 33.5-9.62 33.5-21.5q0-1.64-.38-3.23A72 72 0 0 1 200 86.36v8.95H0v-8.95A72 72 0 0 1 67.4 14.5a14 14 0 0 0-.4 3.3c0 11.88 15 21.5 33.5 21.5", fill: { type: "color", name: "clothes" } } }, { name: "clothesGraphic", type: "component", attributes: { transform: "translate(45 44.3)" } }] }, hoodie: { elements: [{ name: "path", type: "element", attributes: { d: "M76 0C60.48 3.7 48.9 10.83 45.23 19.45A72 72 0 0 0 0 86.3v9h200v-9a72 72 0 0 0-45.23-66.86C151.1 10.83 139.52 3.69 124 0v17.3a24 24 0 1 1-48 0z", fill: { type: "color", name: "clothes" } } }, { name: "path", type: "element", attributes: { d: "M70 48.64a67 67 0 0 1-7-2.81V95.3h7zm60 0a67 67 0 0 0 7-2.81V83.8a3.5 3.5 0 1 1-7 0z", fill: "#F4F4F4" } }, { name: "path", type: "element", attributes: { d: "M155.62 19.8a72 72 0 0 1 10.83 5.62c-1.34 15.5-30.58 27.89-66.45 27.89 30.93 0 56-13.44 56-30q0-1.79-.38-3.52m-111.24.01a17 17 0 0 0-.38 3.5c0 16.57 25.07 30 56 30-35.87 0-65.1-12.38-66.45-27.88a72 72 0 0 1 10.83-5.63", fill: "black", "fill-opacity": ".16" } }] }, overall: { elements: [{ name: "path", type: "element", attributes: { d: "M164 23.94V95.3H36V23.94a72 72 0 0 1 26-8.95v44.28h76V15a72 72 0 0 1 26 8.94", fill: { type: "color", name: "clothes" } } }, { name: "path", type: "element", attributes: { d: "M54 68.3a5 5 0 1 1-10 0 5 5 0 0 1 10 0m102 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0", fill: "#F4F4F4" } }] }, shirtCrewNeck: { elements: [{ name: "path", type: "element", attributes: { d: "M100.5 37.13c18.5 0 33.5-9.61 33.5-21.48q0-.52-.04-1.05A72 72 0 0 1 200 86.36v8.95H0v-8.95a72 72 0 0 1 67.05-71.83q-.05.55-.05 1.12c0 11.87 15 21.48 33.5 21.48", fill: { type: "color", name: "clothes" } } }, { name: "path", type: "element", attributes: { d: "M100.5 44.07c21.89 0 39.63-12.05 39.63-26.92q0-.9-.08-1.79-3-.52-6.1-.76.06.52.05 1.05c0 11.87-15 21.48-33.5 21.48S67 27.52 67 15.65q0-.57.05-1.13-3.08.21-6.08.68-.1.97-.1 1.95c0 14.87 17.74 26.92 39.63 26.92", fill: "black", "fill-opacity": ".08" } }] }, shirtScoopNeck: { elements: [{ name: "path", type: "element", attributes: { d: "M100.5 51.13c27.34 0 49.5-13.2 49.5-29.48q0-2.04-.46-4A72 72 0 0 1 200 86.35v8.95H0v-8.95A72 72 0 0 1 51.53 17.3a18 18 0 0 0-.53 4.34c0 16.28 22.16 29.48 49.5 29.48", fill: { type: "color", name: "clothes" } } }] }, shirtVNeck: { elements: [{ name: "path", type: "element", attributes: { d: "M60.68 15.24A72 72 0 0 0 0 86.36v8.95h200v-8.95a72 72 0 0 0-60.68-71.12 24 24 0 0 1-7.56 13.6l-29.08 26.23a4 4 0 0 1-5.36 0L68.24 28.84a24 24 0 0 1-7.56-13.6", fill: { type: "color", name: "clothes" } } }] } } }, clothesGraphic: { width: 109.68, height: 42, variants: { bat: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M87.69 12.4c-1.4-6.43-6.2-10.15-12.5-11.58-2.53-.58-10.92-2.4-9.61 2.4.6 2.18.26 3.97-1.55 5.77-1.77 1.76-5.24 2.2-6.96-.01-1.47-1.9.43-4.72-.72-6.57-.44-.71-1.21-1.08-2.03-.73-1.14.5-.53 1.56-1.07 2.32-.85 1.2-1.24.83-2-.37-.49-.76-.02-1.58-1.26-1.9-1.43-.37-1.9.83-2.03 1.92-.08.69.32 1.8.34 2.5.03 1.35-.1 3.31-.73 4.52-1.12 2.14-2.7 1.45-4.38.1-1.98-1.6-2.56-3.39-2.18-5.82.46-2.92.3-5.71-3.28-3.9a33.5 33.5 0 0 0-12.59 11.93c-2.44 4.02-4.36 8.9-2.2 13.48 2.21 4.67 5.86 8.69 10.97 9.88 1.32.3 5.1 1.81 6.34.55 1.95-1.96-2.54-3.78-3.43-4.97-1.26-1.7-2.34-4.92-.96-6.83 1.76-2.48 3.6-1.1 5.05.6 1.13 1.34 2.75 4.81 4.5 2.01 1.21-1.93 1.1-5.1 4.4-3.72 4.78 1.97 4.9 11.11 5.76 15.3.37 1.81 2.04 4.05 3.47 1.51.8-1.39.37-4.4.22-5.85-.3-2.99-1.08-5.92-.1-8.88.55-1.7 2-4.16 4.12-2.84 1.73 1.06 1 5.81 3.35 5.8 2.07 0 1.5-3.79 2.6-5.04 1.69-1.9 4.92-1 5.92 1.24 1.33 3.03-2.2 5.13-2.05 7.8.16 2.58 3.5 1.57 4.9.91 2.86-1.35 5.09-3.85 6.66-6.57 2.4-4.19 4.13-10.2 3.08-15.02", fill: "white" } }] }, bear: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M76.74 16.44a17 17 0 0 1 2.15 7.86v.22c-.1 10.22-13.6 16.85-22.48 17.35q-.95.05-1.89.05h-.01c-10.08 0-19.56-4.55-22.54-14.85a14 14 0 0 1-.52-3.81c0-3.36 1.12-6.83 3.15-9.4q.38-.45.83-.88c.37-.36.74-.72 1-1.1.47-.71.64-.7.67-.75.02-.04-.09-.15-.18-.98-.06-.5-.22-.93-.38-1.37a5 5 0 0 1-.41-1.88c.05-2.4 1.76-5.08 4.05-5.95a6 6 0 0 1 3.96.08c.6.2 1.18.67 1.75 1.13s1.13.9 1.64 1.04c.97.24 2.83-.14 4.47-.47.96-.2 1.84-.38 2.44-.4a34 34 0 0 1 4.2-.04c.27.01.72.11 1.2.23.84.2 1.8.4 2.23.27.45-.13.92-.5 1.4-.9s.98-.85 1.5-1a9 9 0 0 1 3.2-.48c2.34.13 5 1.18 6 3.42.8 1.8.24 3.3-.34 4.87q-.31.8-.55 1.62c-.2.7-.31.85-.3.96.03.12.2.21.55.83.07.13.34.44.6.74l.42.48c.8.97 1.57 2 2.19 3.08M58.3 35.97c3.07 2.96 6.67-1.57 7.15-4.38.84-10.07-15.07-8.75-19.23-3-2.1 2.9-.61 6.8 2.58 8.2 1.4.62 2.58.92 3.58-.04.8-.76 1.03-3.52.5-4.27-.3-.39-.67-.5-1.05-.6-.55-.16-1.1-.32-1.35-1.29-.57-2.17 1.8-2.5 3.3-2.62l.97-.1c1.69-.2 4.05-.48 5.03.5 1.3 1.33.26 2.35-.83 3.42-1.21 1.18-2.47 2.42-.65 4.18M48.72 15.5c-.59-.97-1.75-1.21-2.73-.77-1.82.83-.96 3.52.75 3.75 1.62.2 2.78-1.6 1.98-2.96m15.23.88c-.86 3-5.64-.38-2.94-2.3 1.55-1.1 3.45.5 2.94 2.3", fill: "white" } }] }, cumbia: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10.27 29.13c3.28-.56 5.73-3.55 5.18-6.79-.46-2.72-1.74-.34-2.97.86-1.34 1.3-2.45 2.57-4.54 2.05-3.6-.9-4.86-5.4-3.84-8.48a6 6 0 0 1 3.48-3.7c1.85-.74 3.2.1 4.75 1.1.28.19 1.73 1.37 2 1.25.45-.21.1-2.43.04-2.73a4.8 4.8 0 0 0-2.62-3.23C8.4 7.82 4.23 9.94 2.1 12.5c-4.88 5.9-.91 18.17 8.17 16.62m8.41-6.22c.51 3.48 2.99 6.5 6.96 6.36 4.28-.16 6.06-4.1 7-7.5.97-3.4 2.06-7.67.67-11.08-.42-1.03-.68-2.38-1.71-1.53-1.26 1.03-1.41 4.04-1.52 5.44-.2 2.65-.78 9.97-4.1 10.95-4.18 1.22-4.05-5.85-4-7.98.03-1.9.24-3.73-.35-5.58-.3-1-.59-2.44-1.53-1.64-1.29 1.1-1.45 3.83-1.54 5.33a36 36 0 0 0 .13 7.23m19.09 2.85c.2.4.63 1.4 1.02 1.67.95.67-.05.71.8-.05.82-.73 1.13-2.72 1.26-3.67.38-2.96-.12-6.1-.09-9.1 1.02 2.22 1.58 4.6 2.39 6.88.55 1.58 1.4 4.8 3.65 4.75 2.5-.05 2.6-3.14 2.9-4.82a71 71 0 0 1 1.7-7.04c.1 3.91-1.4 11 2.1 13.92a50 50 0 0 0 1.5-4.4c.26-1.7.1-3.45.1-5.15.09-3.6.76-8-.3-11.5-.29-1.14-.94-2.27-2.37-2.24-1.83.04-2.24 2-2.7 3.3a114 114 0 0 0-3.35 10.94c-.54-1.68-5.33-16.42-8.8-10.9-.54.9-.3 2.22-.32 3.2-.04 1.87-.15 3.75-.2 5.63-.06 2.84-.4 5.9.8 8.58M62.1 12.71c.72-.14 5.74-1.73 5.52-.14-.22 1.68-4.63 3.31-5.81 3.88 0-1.2-.24-2.44-.65-3.57zm5.72-.64c-.03-.04 0 0 0 0m.12 8.34c2.27 1.22 1.3 3.42-.43 4.6-.63.56-6.5 1.9-6.49 1.76.18-1.7-.26-5 1-6 1.3-1.05 4.5-.82 5.94-.27m.06-8.01s.01.03 0 0M58 29.33c.23.55.86 1.91 1.57 1.94.86.04.8-1.04.93-1.7 3.44 1.72 8.5-.05 10.9-3.03a6.15 6.15 0 0 0-2.57-9.74c2.1-1.7 4.02-5.4 1.25-7.5a7.7 7.7 0 0 0-8.12-.3c-2.74 1.72-3.85 5.83-4.1 9-.25 3.42-1.15 8.14.14 11.34m18.11-8.4c.07 2.07-.15 4.3.33 6.3.17.72.44 1.52.76 2.17.61 1.2.31 1.06 1.03.37 2.18-2.08 1.21-8.58 1.16-11.25-.04-2.08.06-4.28-.5-6.28-.17-.56-1.13-3.35-1.67-3.3-.8.1-1.37 3.94-1.42 4.7-.15 2.4.23 4.9.31 7.3m18.7.56c-1.58-.14-3.62.07-5.12.56.7-1.9 1.48-4.05 2.24-5.8q.7-1.6 1.5-3.22c1.27 2.68 1.98 5.82 2.82 8.66q-.7-.12-1.44-.2m5.44.72c-.73-2.77-1.58-5.53-2.43-8.27-.54-1.75-1.13-3.92-2.6-5.17-4.2-3.56-6.56 5.85-7.6 8.23-.97 2.3-2.2 4.65-2.84 7.07a10 10 0 0 0-.24 3.63c.2 1.52 0 1.74 1.3.9 1-.62 1.4-1.78 2.22-2.55.14-.14.22-.68.4-.76.18-.1 1.5.25 1.8.27 2.18.17 4.72-.2 6.72-1.03.2.86 1.63 5.98 2.98 5.79.6-.08.96-3.06 1-3.54.08-1.55-.36-3.05-.75-4.54m9.11-13.7c-.26-1.2-.8-3.3-1.84-2.12-1.4 1.6-1.1 5.18-1.1 7.19-.03 1.45-1.56 12.06.55 11.88-.1-.01.84-1.68.98-1.93a12 12 0 0 0 1.32-4.72c.37-3.24.8-7.12.1-10.3M108.2 29.4c-2.23-2.73-6.3.66-5.04 3.38 1.73 3.7 7.33-.57 5.04-3.38m-13.3 4.23c-2.9-.73-6.3-.24-9.25-.15-3.08.1-6.16.27-9.24.36-6.57.2-13.13.1-19.7.04-12.38-.1-24.86.7-37.32.17-2.67-.12-5.54-.72-8.2-.2-.72.13-3 .53-3.32 1.25-.34.76 1.4 1.56 2.33 1.96 2.41 1.04 5.32.86 7.9.96 2.92.12 5.9.06 8.81 0 12.07-.3 24.1-1.35 36.18-1.18 6.97.1 13.93.04 20.9 0 3.32 0 7 .53 10.27-.06.55-.1 3.76-.85 3.8-1.83.03-.46-2.8-1.23-3.12-1.32", fill: "white" } }] }, deer: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M71.76 14.26c1.6-.18 4.79-.55 5.2.98.3 1.09-1.16 2.07-2.26 2.8q-.52.36-.85.61l-.16.14a26 26 0 0 1-4.66 3.41 13 13 0 0 1-2.93 1.08c-.28.07-.43.11-.55.2-.15.11-.23.3-.43.74l-.03.08c-.45 1-.73 2.18-1 3.36a23 23 0 0 1-.81 2.95c-1.7 4.46-5.77 14.8-12.27 10.26-1.7-1.2-2.78-3.3-3.75-5.24l-.6-1.2a44 44 0 0 1-3.39-8.24q-.14-.54-.2-.92c-.14-.68-.2-1.04-.93-1.5-.37-.23-.9-.36-1.4-.5q-.55-.11-.99-.28a17 17 0 0 1-4.08-2.44c-1.24-.97-6.11-4.95-2.14-5.7 1.8-.33 4.16-.2 6-.11h.07c2.03.1 4.07.57 5.88 1.54h.01c.9.48 1.22.66 1.54.65.2 0 .38-.08.68-.18q.35-.14.98-.33c-3.32-1.12-6.65-3-8.89-5.78-1.2-1.5-4-7.65-1.9-9.06 1.8-1.2 2.42 2 2.88 4.4.2.97.36 1.8.56 2.17 1.24 2.13 3.28 3.23 5.32 4.33q.88.47 1.72.96a12.5 12.5 0 0 1-3.67-5.86l-.08-.3c-.31-1.14-.9-3.28-.44-4.2.5-1.03 1.73-1.1 2.42-.21.41.53.48 1.52.54 2.4q.04.69.13 1.2a8.6 8.6 0 0 0 2 4.03 11 11 0 0 0 5.65 3.73c5.13 1.26 6.92-4.1 7.61-8.25q.06-.37.08-.81c.05-.93.11-2 .97-2.36 1.37-.6 1.9.74 1.94 1.78.09 2.3-1.06 5.85-2.17 7.84 2.8-1.73 5-4.48 5.9-7.7.1-.36.15-.9.2-1.45.1-1.2.21-2.58.97-3.04 1.54-.92 2.02.92 1.97 2.02-.32 6.52-5.3 12.44-11.49 14.07l.55.28c.95.5.98.53 2.3-.25q1.36-.8 2.84-1.24c1.47-.45 3.05-.68 4.58-.81zm-12.9 9.36c-.07 3.27-3.24 3.04-2.82.1.32-2.32 3.68-2.24 2.82-.1m-1.93 9.02c-.5 1.56-4.33 2.12-3.9-.17.37-1.95 4.56-2.03 3.9.17M51.7 26c-2.82 0-1.9-4.87 1-3.86 2.27.8 1.33 3.86-1 3.86", fill: "white" } }] }, diamond: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M63.78 28.74a320 320 0 0 1-7.34 7.82c1-3.56 1.74-7.58 3.2-10.96.43-.96.1-1.08.94-1.5.6-.3 2.07.05 2.8.07 1.56.04 3.15.19 4.7-.05q-2.19 2.27-4.3 4.62M48.52 32.8c-2.7-3.28-5.39-6.57-8.66-9.32 1.29.14 2.7-.04 3.96.2 1.94.4 1.83 1 2.82 2.97a99 99 0 0 1 4.05 8.82q-1.08-1.35-2.17-2.67m-9.1-12.53c.96-1.58 1.14-2.98 2.92-3.78 2.06-.94 5.3-.74 7.49-.92-1.37 1.52-3.04 3.1-3.6 5.12a9.5 9.5 0 0 0-3.68-4.17c-.21-.1 1.16 4.55 1.34 4.87-1.72-.1-3.52-.4-5.22-.1zm16.4-5.01q2.4.04 4.74.42c-1.26 1.67-1.64 3.63-2.1 5.63-.47-2.26-2.2-4.36-3.73-6.05zm-3.5 1.07c.24-.16 4.46 5.09 5.07 5.56-3.31 0-6.62-.17-9.92-.32 1.9-1.48 3.02-3.68 4.86-5.24m2.7 17.1q-.58 2.03-1.22 4.05c-1.56-4.74-3.86-9.2-6.01-13.68q5.01.15 10.02.26c-.82 3.16-1.87 6.24-2.8 9.37m7.22-17.46a36 36 0 0 1 3.87 4.44l1.26 1.65c-2.23-.23-4.54-.13-6.78-.15.5-2.06 1.1-4.01.58-6.13zm7.65 5.6c-2.16-2.66-4.37-7.25-7.86-8.06-3.48-.8-7.55-.45-11.08-.22-3.07.2-8.08-.2-10.8 1.59-1.39.92-2.42 3-2.9 4.55-.44 1.4.27 2.28-1.25 2.28-.1 0 2.5 3.68 2.81 3.97a78 78 0 0 1 6.46 6.6c2.83 3.37 5.4 8.33 9.14 9.73-.68-.34 2.8-2.97 3.21-3.42q3.18-3.42 6.38-6.83c1.94-2.07 4.05-4.03 5.93-6.15 1.43-1.62 1.44-2.17-.04-4.02M36 13c.04.01-.9-2.05-.83-1.92a6 6 0 0 0-1.73-1.73c-.74-.5-4.3-1.1-4.44-1.35 1.5 2.65 4.17 4.13 7 5m15.36-4.8q.25.98.79 1.8c.07.08.86-4.18.85-4.55C53 4.83 52.6 1 51.8 1c-1.33 0-.67 6.47-.45 7.2M77.97 6c-3 0-9.68 5.85-8.9 9a3 3 0 0 0 .4-.33c1.27-1.02 2.72-2.02 4-3.2.9-.85 1.98-1.61 2.8-2.54.1-.1 2-2.93 1.7-2.93", fill: "white" } }] }, hola: { elements: [{ name: "path", type: "element", attributes: { d: "M63.84 16q-.43.98-.82 1.95L63 18l2-.16A19 19 0 0 0 63.84 16m-10.62.3c.2-.06.42-.13.7-.3.15.42.26 3.29-1.35 2.98-.92-.18-.5-1.77-.25-2.1.34-.41.6-.49.9-.58", fill: "white" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M74.64 15.95C73.46 10.68 70.6 6.97 66.18 4c-3.35-2.25-6.5-2.23-10.46-1.75a24 24 0 0 0-9.2 2.94c-5.04 2.89-7.92 6.74-8.6 12.54-.28 2.33-.33 5.1.5 7.32.48 1.3 1.34 2.34 2.25 3.36.15.17.5.47.86.79.6.52 1.26 1.1 1.28 1.29.12.86-2.2 3.4-2.89 4.15l-.12.14c-.23.25-.73.6-1.3.99-1.02.7-2.25 1.55-2.43 2.2-.83 2.93 5.83 1.89 7.45 1.63a37 37 0 0 0 4.62-.98q1.06-.3 2.07-.72c.56-.23 1.17-.7 1.78-1.16.7-.52 1.38-1.03 1.97-1.2a6 6 0 0 1 2.1.02c.6.07 1.2.14 1.7.1a26 26 0 0 0 4.5-.88 19 19 0 0 0 7.05-3.84c4.42-3.76 6.6-9.24 5.33-15m-5.13 7c-.62.15-1.36-1.25-1.08-1.73.77-1.34 2.16 1.42 1.08 1.72m-2.22-9.38c-.27 1.1.12 2.95.4 4.05.04.36.4.47.7.43.55-.08.45-.56.36-.97q-.05-.24-.06-.4c.04-.75.11-2.64-.17-3.32-.5-1.26-.97-1.02-1.27.21m-.65 8.33c-.58.34-.86-.29-1.05-.74q-.08-.2-.16-.32a1.4 1.4 0 0 1-.29-.72c0-.18-.02-.22-.58-.39-1.77-.52-1.8.7-1.84 1.94 0 .72-.03 1.45-.39 1.84-1.78 1.91-.58-3.68-.37-4.68l.03-.1.12-.67c.34-1.95 1.02-5.85 2.67-3.1.5.8 2.7 6.5 1.87 6.98m-10.37-.95c.6.6 3.7.22 4.02-.34.68-1.18-1.85-.85-2.78-.73l-.29.03q.08-1.12.21-2.27c.12-1.05.24-2.1.23-3.15v-.17c.02-.62.06-1.94-.96-1.2-.34.24-.33 1.18-.33 1.81v.46c-.02.23-.08.6-.15 1.02-.24 1.51-.6 3.87.04 4.54m-.77-2.78c-1.43 5.73-6.98 2.64-4.5-1.7.46-.8.83-.99 1.41-1.27q.32-.14.75-.4.07-.05.06-.27c0-.27.01-.65.42-.64 1.76.03 2.18 2.93 1.85 4.28m-7 .83c-.04.88-.14 3.31.97 3.01.76-.19.54-9.97-.33-9.97-.92 0-.75 1.78-.6 3.33.1 1 .2 1.91-.04 2.17-.1.12-.5.1-.84.06h-.4c-1.15.2-1.9.08-2.25-.6-.1-.2-.1-.7-.1-1.3 0-1.33-.02-2.96-1.15-1.5l.03 2.2q.5 1.08-.38 1.32c-.02.3.16.58.28.77q.11.16.12.24.02.24 0 .67c-.09 1.26-.2 3.54.91 3.4.71-.08.5-2.28.37-3.42l-.05-.6.91.03c.86.04 1.73.08 2.56-.03z", fill: "white" } }] }, pizza: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M65.93 24.4c-4.08 1.37-8.55 3.31-10.9 7.06-1.85 2.95-1.97-.45-4.55.6-2.5 1.02-1.82 5.22-2.73 7.3-.7-1.2-1.05-2.52-1.94-3.6a7 7 0 0 0 1.81-1.73c.16-.32-4.79.35-5.07.43-1.4.4-2.74.77-4.09 1.43a79 79 0 0 0 1.96-3q.31-1.01 1.11 0c.75.04 1.18.36 1.96.18 2.92-.66 3.85-6.22.25-5.98a93 93 0 0 0 4.26-8.8c.5 4.28 6.08 2.8 7.72.52 2.14-3-.6-8.66-4.49-8.11.58-1.38 1.17-2.77 1.65-4.18 1.1 1.6 3 2.39 4.54 3.45a18 18 0 0 1 4.16 4c2.4 3.15 3.8 7 6.22 10.06q-.96.06-1.87.36m9-4.4c-.62-5.78-5.14-11.63-9.43-15.21-2.55-2.12-10.24-7.4-13.3-3.33 2.46 1.06 5.2 1.32 7.64 2.48 3.32 1.57 5.92 4.16 8.17 7.05 3.14 4.05 7.97 12.28.48 14.39.5-.34.8-.71 1.2-1.31-1-.23-.6-1.88-.97-2.95-.4-1.25-1.2-2.47-1.89-3.6a57 57 0 0 0-3.5-5.16A24 24 0 0 0 57.4 7c-.9-.58-1.77-1.1-2.81-1.4-1.35-.4-.91.08-1.28-1.15-.23-.78-.02-1.77-.25-2.6-1.97 1.66-2.6 4.06-3.5 6.39-1.01 2.68-2.12 5.33-3.2 8-2.63 6.53-6.02 12.39-9.88 18.24-.67 1.02-2.17 2.95-1.1 4.17.97 1.1 2.34.3 3.4-.13 1.43-.6 3.38-2.17 4.93-1.35 2 1.05 1.05 4.98 4.2 4.83 3.13-.16 2.54-5.28 3.54-7.32 2.3 1.68 4.18.64 5.58-1.61 1.63-2.61 3.77-3.66 6.5-4.94 1.13-.52 3.05-1.94 4.2-2.12.98-.1 1.9.9 3.2.88 3.1-.11 4.39-4.25 4.02-6.85", fill: "white" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M53.54 22.83c-2.43-.44-5.8-.07-6.03 3.16-.14 1.97 1.4 3.85 3.08 4.66 5.12 2.5 9.1-6.69 2.95-7.82m9.8-3.67c-.65-.7-1.7-1.24-2.68-1 .31-.2.57-.6.87-.83-3.16-2.29-5.14 3.47-3.35 5.74 2.72 3.44 8.04-.76 5.16-3.91", fill: "white" } }] }, resist: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M105.57 29.07c-3.09-.66-5.2 3.54-1.92 4.79 2.82 1.07 4.85-4.15 1.9-4.79M104.21 26c3.65 0 2.3-5.98 2.31-7.97.02-2.13 1.55-8.6-.89-9.73-4.21-1.97-3.06 6.33-3.03 7.97.03 1.82.16 3.72-.23 5.5-.35 1.59-1.13 4.23 1.83 4.23M99.06 9.97c-1.08-.62-2.8-.32-3.99-.37-1.35-.06-2.69-.2-4.03-.3-2.18-.15-4.96-.56-7.12-.06-1.23.28-2.34 1.22-1.76 2.6.62 1.5 2.3 1.1 3.58 1.04.58-.04 2.03-.3 2.6-.1 1 .36.58-.1.8 1.08.35 1.8.14 4 .13 5.83q-.03 4.78-.1 9.54c-.03 1.23-.45 2.63.75 3.45 1 .68 2.22.22 2.74-.8.5-1 .02-3.06-.03-4.2-.07-1.34-.14-2.67-.1-4.02.1-3.58.28-7.16.37-10.75.94.05 1.92.02 2.85.15.69.1 1.67.53 2.33.5 1.9-.1 2.69-2.59.98-3.59m-28.34 6.84c-.08-.64-.01-.05 0 0m-.03-.27q0 .01 0 0m1.43-3.1c3.4-3.99 4.58 4.33 7.24 4 4.26-.58-.94-6.97-2.67-7.79-3.51-1.68-6.6.08-8.27 3.26-2.1 4-.77 6.7 3.26 8.45 1.47.63 7.03 2.52 5.53 4.96-.76 1.22-3.53 1.32-4.7 1.08-2.3-.48-1.91-2.08-3.1-3.57-1-1.34-3-.95-3.3.78-.25 1.36 1.17 3.42 2.1 4.38 2.25 2.26 6.05 2.44 8.9 1.4 4.39-1.57 4.92-5.7 1.8-8.9-1.74-1.87-3.93-2.4-6.1-3.49-2.65-1.29-2.16-2.39-.6-4.64m-10.45 15.2c-.56-4.83-.7-9.72-.78-14.57-.03-1.52.7-5.2-1.45-5.83-2.92-.9-2.53 2.7-2.47 4.16.2 4.92.84 9.8 1.07 14.7.07 1.57-.43 4.58 1.83 4.96 2.75.43 2-2.12 1.8-3.4m-9.28-15.9a6.74 6.74 0 0 0-10.1-.75c-2.06 2.06-3.37 6.92-1.4 9.4 2.12 2.7 7.35.34 8.72 3.4 1.68 3.73-2.73 5.14-5.07 2.65-.85-.9-.66-2.45-1.9-3-1.77-.8-2.87.92-2.52 2.35.85 3.5 4.65 5.4 8.1 5.27 3.77-.12 5.4-2.97 5.16-6.4-.33-4.73-3.98-5.47-8-6-1.7-.2-1.9-.2-1.8-1.94.13-2.12 1.37-4.57 4-4.07 2.1.4 2.3 3.57 4.44 3.72 3.5.24 1.26-3.43.37-4.62M34.72 28.46c-1.34.32-2.96.1-4.33.07-1.05-.02-4.57.43-5.26-.3-.76-.8-.5-3.24-.54-4.28-.05-1.45-.4-1.67.87-2 .75-.2 1.9-.1 2.68-.13 1.52-.07 3.47.2 4.93-.09 1.37-.28 2.5-1.75 1.25-3-.88-.9-2.54-.42-3.63-.4-2.03.06-4.07.05-6.1.08 0-1.56-.1-3.13 0-4.69 2.84.11 5.8.83 8.66.71 1.44-.08 3.04-1 2.3-2.74-.62-1.5-2.52-1.3-3.84-1.35q-2.5-.1-4.97-.17c-1.23-.04-3-.44-4.17.1-2.37 1.14-1.56 5.02-1.49 7.12.08 2.67.08 5.27.17 7.96.1 2.43-.04 5.64 2.85 6.32s6.24.03 9.2.18c1.2.05 2.85.4 3.44-1 .57-1.35-.73-2.77-2.14-2.42M11.4 13.91c2.33.5 2.95 3.01 3.03 5.15.05 1.46.18 1.37-1 1.74-1.2.37-2.92.17-4.14.12-2.54-.11-2.24-.28-2.29-2.95 0-.62-.47-3.5-.1-3.91.47-.53 3.83-.2 4.5-.15m5.09 14.84a52 52 0 0 0-4.13-4.29c2.17-.06 4.5-.47 5.28-2.82.65-1.98.09-5-.67-6.87a7 7 0 0 0-5.62-4.48c-1.8-.25-6.28-.67-7.62.7-1.46 1.52-.45 5.66-.36 7.5.16 3.28.05 6.53-.15 9.8-.07 1.05-.6 2.78-.05 3.73a1.98 1.98 0 0 0 2.96.49c1-.84.53-1.87.47-2.95-.1-1.68.09-3.4.19-5.08 1.6 1.3 3.25 2.59 4.76 4.02 1.49 1.4 2.56 3.2 3.99 4.62 1 1 2.82 1.43 3.33-.45.44-1.6-1.57-2.95-2.45-3.97", fill: "white" } }] }, skull: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M65.28 18.93c-.3 2.78-5.7 4.27-7.67 2.45-.91-.84-.93-2.58-1.13-3.7a49 49 0 0 1-.75-6.43c-.06-1.32-.4-2.38 1.04-2.58.89-.12 1.8.47 2.52.93 2.42 1.58 6.3 6.14 5.96 9.33m-12.4-5.85c.3 2.82 1.32 7.73-.93 10.1-2.02 2.12-6.16.02-6.79-2.47-.77-3.1 2.28-6.78 4.15-8.87.58-.64 1.85-2.4 2.84-1.82.4.23.7 2.61.74 3.06m1.44 11.03c.66-1.53 6.92 3.01 3.96 5.18-.48.35-4.16 1.46-4.86.94-1.48-1.1.43-4.97.91-6.12m19.01-7.58C72.89 1.05 53.08-3.3 42.49 5.5c-4.06 3.38-6.4 7.5-6.5 12.78-.1 4.47.63 8.7 4.04 11.77 1.48 1.33 2.46 2.15 3.25 3.97.82 1.9 1.2 4.33 2.74 5.83.85.83 2.09 1.5 3.26.96 2.17-.98 1.47-3.98 2.13-5.65 2.04 4.97 7.21 6.55 8.15.25 1.03 1.82 3.72 4.2 5.7 2.2.81-.8.93-2.14 1.07-3.22.25-1.9-.18-2.66 1.36-3.97 4.03-3.45 5.77-8.67 5.63-13.9", fill: "white" } }] }, skullOutline: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M72.34 17.04a9 9 0 0 1-1 2.99c-.71 1.21-2.02 1.7-2.78 2.82-1.19 1.75.4 4.27-.78 5.83-1.27 1.68-4.14.67-5.26 2.9-1.18 2.35.53 5.49-.95 7.83-1.47-.37-1.92-5.9-4.19-2.37-1.45 2.25-.47 3.47-2.64.23-.76-1.12-1.62-2.13-3.1-1.4-1.04.53-1.26 2.85-2.21 3.1-2.33.6-2.42-5.62-3.21-6.8a2.8 2.8 0 0 0-1.62-1.28c-.67-.2-1.87.22-2.43-.1-1.04-.59-1.18-2.55-1.22-3.6-.07-1.93.58-3.91.04-5.83-.45-1.61-1.89-2.6-2.36-4.18C36.1 8.64 47.68 3.9 54.3 3.63c7.74-.3 19.04 4.22 18.04 13.4m1.83-5.32c-1.45-3.44-4.65-6.17-7.91-8q-2.4-1.36-5.09-1.95c-1.64-.36-3.55-.12-5.12-.58C54.73.81 53.9-.05 52.35 0c-2.11.07-4.31 1.17-6.16 2.09-3.66 1.8-6.77 4.15-8.73 7.74-2.1 3.86-1.9 7.36.35 10.95 2.15 3.44-.97 8.27 2.17 11.53 1.32 1.37 2.62.37 3.87 1.03.96.5.92 3.46 1.19 4.33 1.2 3.9 5.5 5.4 7.5 1.2.94 2.34 4.66 4.75 6.39 1.68 1.08 1.4 2.95 2 4.38.8 1.35-1.14 1.5-3.76 1.56-5.35.06-1.24-.5-2.77.46-3.66 1.04-.98 3.2-.57 4.37-1.84 1.34-1.45.78-3.14.89-4.87.1-1.75.4-1.3 1.7-2.56 2.9-2.8 3.38-7.8 1.88-11.35", fill: "white" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M50.42 28.12c2.02-1.82 1.6-7.4 1.42-9.96-.31-4.86-3.35-3.4-5.2-.38-1.4 2.3-4.77 6-3.26 8.88 1.2 2.3 5.18 3.13 7.04 1.46m13.38-8.85c-1.04-1.92-1.43-2.2-2.66-3.78-.8-1-1.9-2.8-3.4-2.44-2.59.62-1.53 6.6-1.5 8.4.02 1.36-.28 2.76.85 3.73 1.15.98 3.05.9 4.44.7 4.26-.65 4.06-3.27 2.26-6.6m-8.55 12.55c-.28-.04.08-.36.12-.59.19.62.33.65-.12.6m1.04-4.32c-2.61-2.77-7.57 6.4-4.08 7.43.8.23 1.4-.37 2.16-.47 1.1-.16 2.02.48 2.97-.53 1.5-1.58.2-5.1-1.05-6.43", fill: "white" } }] } } }, eyebrows: { width: 96.27, height: 24, variants: { angry: { elements: [{ name: "path", type: "element", attributes: { d: "M7.75 15.18c4.24-5.76 6.88-5.48 13.31-.62l.67.5c4.83 3.67 7.12 4.94 10.4 4.94a2 2 0 0 0 0-4c-2.06 0-3.9-1.02-7.98-4.12l-.68-.52C19.71 8.53 17.51 7.3 14.77 7c-3.68-.4-7.05 1.48-10.24 5.83a2 2 0 1 0 3.22 2.36m80.78 0c-4.24-5.77-6.88-5.49-13.32-.63l-.67.5c-4.82 3.67-7.1 4.94-10.4 4.94a2 2 0 0 1 0-4c2.06 0 3.9-1.02 7.99-4.12l.67-.52C76.56 8.53 78.76 7.3 81.5 7c3.68-.4 7.06 1.48 10.25 5.83a2 2 0 1 1-3.22 2.36", fill: "black", "fill-opacity": ".6" } }] }, angryNatural: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.43 5.01a7.2 7.2 0 0 0-6.44 2.43c-.6.73-1.55 2.48-1.5 3.42 0 .35.22.37 1.12.6 1.64.38 4.5-1.13 6.35-1 2.59.2 5.05 1.4 7.29 2.69 3.84 2.2 8.35 6.84 13.09 6.6.35-.02 5.42-1.74 4.4-2.72-.31-.49-3.02-1.13-3.5-1.36-2.16-1.09-4.36-2.45-6.43-3.72C21.28 9.18 16.86 5.6 11.42 5m73.62.01c2.37-.27 4.86.5 6.43 2.43.59.73 1.55 2.48 1.5 3.42 0 .35-.22.37-1.12.6-1.64.38-4.5-1.13-6.35-1-2.58.2-5.05 1.4-7.28 2.69-3.84 2.2-8.36 6.84-13.1 6.6-.35-.02-5.42-1.74-4.4-2.72.3-.49 3.03-1.13 3.5-1.36 2.17-1.09 4.36-2.45 6.44-3.72C75.19 9.18 79.6 5.6 85.04 5", fill: "black", "fill-opacity": ".6" } }] }, default: { elements: [{ name: "path", type: "element", attributes: { d: "M7.77 17.16c3.91-5.51 14.64-8.6 23.89-6.33a2 2 0 0 0 .95-3.88c-10.73-2.64-23.16.94-28.1 7.9a2 2 0 0 0 3.3 2.3m80.73.01c-3.9-5.5-14.64-8.6-23.9-6.33a2 2 0 0 1-.94-3.88c10.74-2.64 23.17.94 28.1 7.9a2 2 0 0 1-3.25 2.3", fill: "black", "fill-opacity": ".6" } }] }, defaultNatural: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18.68 6.15c-5.8.27-15.2 4.49-14.95 10.34 0 .15.3.24.43.1 2.75-2.97 22.31-5.96 29.2-4.37.63.14 1.11-.48.71-.93-3.42-3.82-10.17-5.4-15.39-5.15m59.91 0c5.8.27 15.2 4.49 14.95 10.34 0 .15-.29.24-.42.1-2.76-2.97-22.32-5.96-29.2-4.37-.64.14-1.12-.48-.72-.93 3.42-3.84 10.2-5.42 15.4-5.17", fill: "black", "fill-opacity": ".6" } }] }, flatNatural: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M30.8 11.1c-5 .35-9.93.08-14.92-.13-3.83-.16-7.72-.68-11.37 1-.7.33-4.53 2.29-4.45 3.36.08.85 3.94 2.2 4.64 2.44 3.66 1.29 7.18.9 10.95.66 4.63-.27 9.23-.07 13.86-.2 3.18-.1 7.98-.63 9.5-4.4.48-1.14.1-3.42-.34-4.66-.2-.5-.72-.69-1.13-.4a15 15 0 0 1-6.68 2.32m34.67 0c4.99.36 9.9.09 14.9-.12 3.83-.16 7.72-.68 11.38 1 .7.33 4.53 2.29 4.44 3.36-.07.85-3.94 2.2-4.63 2.44-3.67 1.29-7.18.9-10.96.66-4.62-.27-9.23-.07-13.86-.2-3.11-.1-7.91-.63-9.45-4.4-.47-1.14-.1-3.42.36-4.66.18-.5.72-.69 1.12-.4a15 15 0 0 0 6.7 2.32", fill: "black", "fill-opacity": ".6" } }] }, frownNatural: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M28.5 6.88c-1.96 2.9-5.54 4.64-8.73 5.68-3.94 1.29-18.55 3.38-15.11 11.35.05.12.22.12.27 0 1.15-2.65 17.46-5.12 18.97-5.7 4.45-1.71 8.4-5.5 9.16-10.55.36-2.31-.63-6.05-1.54-7.55-.1-.18-.38-.13-.43.07-.36 1.33-1.4 4.97-2.58 6.7m39.28 0c1.97 2.9 5.54 4.64 8.74 5.68 3.96 1.29 18.57 3.38 15.13 11.35a.15.15 0 0 1-.28 0c-1.15-2.65-17.46-5.12-18.97-5.7-4.44-1.71-8.4-5.5-9.16-10.55-.35-2.31.64-6.05 1.55-7.55.1-.18.37-.13.43.07.35 1.33 1.4 4.97 2.57 6.7", fill: "black", "fill-opacity": ".6" } }] }, raisedExcited: { elements: [{ name: "path", type: "element", attributes: { d: "M8.11 17.13C9.61 7.6 22.2 1.1 31.31 5.3a2 2 0 0 0 1.66-3.63C21.5-3.63 6.07 4.33 4.17 16.5a2 2 0 1 0 3.94.63m80.05 0C86.66 7.6 74.08 1.1 64.97 5.3a2 2 0 0 1-1.67-3.63c11.5-5.3 26.9 2.66 28.81 14.83a2 2 0 0 1-3.95.63", fill: "black", "fill-opacity": ".6" } }] }, raisedExcitedNatural: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "m14.9 1.58.91-.4C21.06-.9 29-.03 33.86 2.3c.57.27.18 1.15-.4 1.1C18.54 2.27 8.5 11.56 5.08 17.86c-.1.18-.4.2-.48.03C2.3 12.56 9.05 3.9 14.9 1.58m66.47 0-.91-.4C75.22-.9 67.27-.03 62.4 2.3c-.56.27-.18 1.15.4 1.1 14.93-1.14 24.98 8.15 28.4 14.45.1.18.4.2.47.03 2.3-5.32-4.45-13.98-10.3-16.3", fill: "black", "fill-opacity": ".6" } }] }, sadConcerned: { elements: [{ name: "path", type: "element", attributes: { d: "M30.17 5.6c-1.48 8.38-14.1 14.17-23.24 10.42a2.04 2.04 0 0 0-2.63 1c-.44.97.03 2.1 1.05 2.5 11.44 4.7 26.83-2.37 28.76-13.3a1.9 1.9 0 0 0-1.64-2.2 2 2 0 0 0-2.3 1.57m35.93 0c1.5 8.39 14.1 14.18 23.25 10.43 1.01-.41 2.2.03 2.62 1s-.03 2.1-1.04 2.5c-11.45 4.7-26.84-2.37-28.77-13.3a1.9 1.9 0 0 1 1.65-2.2 2 2 0 0 1 2.32 1.57", fill: "black", "fill-opacity": ".6" } }] }, sadConcernedNatural: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "m23.37 20.42-.91.4c-5.24 2.09-13.2 1.21-18.06-1.12-.56-.27-.18-1.15.4-1.1 14.92 1.14 24.97-8.15 28.38-14.45.1-.18.4-.2.48-.03 2.31 5.32-4.45 13.98-10.3 16.3m49.54 0 .9.4c5.26 2.09 13.2 1.2 18.06-1.12.57-.27.18-1.15-.4-1.1-14.92 1.14-24.96-8.15-28.38-14.45-.1-.18-.4-.2-.48-.03-2.3 5.32 4.45 13.98 10.3 16.3", fill: "black", "fill-opacity": ".6" } }] }, unibrowNatural: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M88.26 7.6c1.46.56 9.19 6.43 7.86 9.16a.8.8 0 0 1-1.29.22 11 11 0 0 0-1.7-1.2c-5.11-2.83-11.3-1.92-16.74-.9-6.12 1.14-12.1 3.48-18.38 2.67-2.04-.26-6.08-1.22-7.63-2.96-.47-.53-.06-1.38.64-1.43 1.44-.11 2.86-.86 4.33-1.28 3.65-1.03 7.4-1.56 11.11-2.3 6.62-1.3 15.17-4.52 21.8-2", fill: "#DADADA" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M50.9 12.76c-1.17.04-2.8 3.56-.56 3.68 2.23.11 1.73-3.72.56-3.68m-3.76.04q0-.01 0 0M8.02 7.56c-1.47.56-9.2 6.43-7.87 9.16.24.5.9.6 1.3.22.54-.52 1.57-1.11 1.7-1.18 5.1-2.84 11.3-1.93 16.73-.91 6.12 1.15 12.1 3.49 18.4 2.68 2.03-.26 6.07-1.22 7.6-2.96.48-.53.08-1.38-.62-1.43-1.44-.11-2.86-.86-4.33-1.28-3.65-1.03-7.4-1.56-11.12-2.3-6.62-1.3-15.17-4.52-21.8-2", fill: "#DADADA" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M47.1 11.79c1.18.04 2.77 4.5.54 4.67-2.24.18-1.7-4.71-.53-4.67", fill: "#DADADA" } }] }, upDown: { elements: [{ name: "path", type: "element", attributes: { d: "M7.73 14.16c4.5-6.32 14.01-9.5 23.75-6.36a2 2 0 1 0 1.23-3.81c-11.4-3.7-22.74.1-28.24 7.85a2 2 0 1 0 3.26 2.32m80.78 7c-3.91-5.51-14.64-8.6-23.89-6.33a2 2 0 0 1-.95-3.88c10.73-2.64 23.16.94 28.1 7.9a2 2 0 0 1-3.26 2.3", fill: "black", "fill-opacity": ".6" } }] }, upDownNatural: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "m14.9 1.58.91-.4C21.06-.9 29-.03 33.86 2.3c.57.27.18 1.15-.4 1.1C18.54 2.27 8.5 11.56 5.08 17.86c-.1.18-.4.2-.48.03C2.3 12.56 9.05 3.9 14.9 1.58m64.23 10.49c5.76.77 14.75 5.8 14 11.6-.03.2-.32.26-.44.1-2.49-3.2-21.7-7.87-28.72-6.9-.64.1-1.06-.57-.62-.98 3.74-3.54 10.62-4.52 15.78-3.82", fill: "black", "fill-opacity": ".6" } }] } } }, eyes: { width: 84, height: 36.27, variants: { closed: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.16 19.55C4.01 23.35 8.16 26 13 26c4.81 0 8.96-2.63 10.82-6.4.55-1.13-.24-2.05-1.03-1.37a15 15 0 0 1-9.8 3.43c-3.73 0-7.12-1.24-9.55-3.23-.9-.73-1.82.01-1.28 1.12m58 0c1.85 3.8 6 6.45 10.84 6.45 4.81 0 8.96-2.63 10.82-6.4.55-1.13-.24-2.05-1.03-1.37a15 15 0 0 1-9.8 3.43c-3.76 0-7.15-1.24-9.58-3.23-.9-.73-1.82.01-1.28 1.12", fill: "black", "fill-opacity": ".6" } }] }, cry: { elements: [{ name: "path", type: "element", attributes: { d: "M11 19s-6 7.27-6 11.27a6 6 0 1 0 12 0c0-4-6-11.27-6-11.27", fill: "#92D9FF" } }, { name: "path", type: "element", attributes: { d: "M22 14a6 6 0 1 1-12 0 6 6 0 0 1 12 0m52 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", fill: "black", "fill-opacity": ".6" } }] }, default: { elements: [{ name: "path", type: "element", attributes: { d: "M22 14a6 6 0 1 1-12 0 6 6 0 0 1 12 0m52 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", fill: "black", "fill-opacity": ".6" } }] }, eyeRoll: { elements: [{ name: "path", type: "element", attributes: { d: "M30 14a14 14 0 1 1-28 0 14 14 0 0 1 28 0m52 0a14 14 0 1 1-28 0 14 14 0 0 1 28 0", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M22 6a6 6 0 1 1-12 0 6 6 0 0 1 12 0m52 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", fill: "black", "fill-opacity": ".7" } }] }, happy: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.16 14.45C4.01 10.65 8.16 8 13 8c4.81 0 8.96 2.63 10.82 6.4.55 1.13-.24 2.05-1.03 1.37a15 15 0 0 0-9.8-3.43c-3.73 0-7.12 1.24-9.55 3.23-.9.73-1.82-.01-1.28-1.12m58 0C62.01 10.65 66.16 8 71 8c4.81 0 8.96 2.63 10.82 6.4.55 1.13-.24 2.05-1.03 1.37a15 15 0 0 0-9.8-3.43c-3.76 0-7.15 1.24-9.58 3.23-.9.73-1.82-.01-1.28-1.12", fill: "black", "fill-opacity": ".6" } }] }, hearts: { elements: [{ name: "path", type: "element", attributes: { d: "M21.96 2c-2.55 0-5.08 1.98-6.46 3.82C14.1 3.98 11.6 2 9.04 2 3.55 2 0 5.33 0 9.64c0 5.73 4.41 9.13 9.04 12.74 1.66 1.23 4.78 4.4 5.17 5.1.4.68 2.13.7 2.62 0 .47-.73 3.5-3.87 5.16-5.1 4.63-3.6 9.04-7 9.04-12.74C31 5.34 27.46 2 21.97 2m53 0c-2.55 0-5.08 1.98-6.46 3.82C67.1 3.98 64.6 2 62.04 2 56.54 2 53 5.33 53 9.64c0 5.73 4.41 9.13 9.04 12.74 1.66 1.23 4.78 4.4 5.17 5.1.38.68 2.1.7 2.58 0 .48-.73 3.5-3.87 5.17-5.1 4.63-3.6 9.04-7 9.04-12.74C84 5.34 80.45 2 74.96 2", fill: "#FF5353", "fill-opacity": ".8" } }] }, side: { elements: [{ name: "path", type: "element", attributes: { d: "M13 8c-4.84 0-9 2.65-10.84 6.45-.54 1.1.39 1.85 1.28 1.12a15 15 0 0 1 9.8-3.22 6 6 0 1 0 10.7 2.8 2 2 0 0 0-.12-.74l-.15-.38a6 6 0 0 0-1.64-2.48C19.9 9.32 16.5 8 13 8m58 0c-4.84 0-9 2.65-10.84 6.45-.54 1.1.39 1.85 1.28 1.12a15 15 0 0 1 9.8-3.22 6 6 0 1 0 10.7 2.8 2 2 0 0 0-.12-.74l-.15-.38a6 6 0 0 0-1.64-2.48C77.9 9.32 74.5 8 71 8", fill: "black", "fill-opacity": ".6" } }] }, squint: { elements: [{ name: "path", type: "element", attributes: { d: "M30 12.73c0 4.26-6.27 7.72-14 7.72S2 17 2 12.73 8.27 5 16 5s14 3.46 14 7.73m52 0c0 4.26-6.27 7.72-14 7.72S54 17 54 12.73 60.27 5 68 5s14 3.46 14 7.73", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M18.82 20.3a25 25 0 0 1-5.64 0 6 6 0 1 1 5.64 0m52 0a25 25 0 0 1-5.64 0 6 6 0 1 1 5.64 0", fill: "black", "fill-opacity": ".7" } }] }, surprised: { elements: [{ name: "path", type: "element", attributes: { d: "M30 14a14 14 0 1 1-28 0 14 14 0 0 1 28 0m52 0a14 14 0 1 1-28 0 14 14 0 0 1 28 0", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M22 14a6 6 0 1 1-12 0 6 6 0 0 1 12 0m52 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0", fill: "black", "fill-opacity": ".7" } }] }, wink: { elements: [{ name: "path", type: "element", attributes: { d: "M22 14a6 6 0 1 1-12 0 6 6 0 0 1 12 0", fill: "black", "fill-opacity": ".6" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M56.6 16.96c1.59-3.92 5.55-6.86 10.37-7.2 4.8-.33 9.12 2 11.24 5.64.63 1.1-.1 2.06-.93 1.43-2.6-1.93-6.15-3-10-2.73a15 15 0 0 0-9.33 3.9c-.84.79-1.81.11-1.35-1.03", fill: "black", "fill-opacity": ".6" } }] }, winkWacky: { elements: [{ name: "circle", type: "element", attributes: { cx: "68", cy: "14", r: "12", fill: "white" } }, { name: "circle", type: "element", attributes: { cx: "68", cy: "14", r: "6", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.16 17.45C4.01 13.65 8.16 11 13 11c4.81 0 8.96 2.63 10.82 6.4.55 1.13-.24 2.05-1.03 1.37a15 15 0 0 0-9.8-3.43c-3.73 0-7.12 1.24-9.55 3.23-.9.73-1.82-.01-1.28-1.12", fill: "black", "fill-opacity": ".6" } }] }, xDizzy: { elements: [{ name: "path", type: "element", attributes: { d: "M20.5 22.7 15 17.2l-5.5 5.5c-.4.4-1.1.4-1.6 0l-1.6-1.6c-.4-.4-.4-1.1 0-1.6l5.5-5.5-5.5-5.5c-.4-.5-.4-1.2 0-1.6l1.6-1.6c.4-.4 1.1-.4 1.6 0l5.5 5.5 5.5-5.5c.4-.4 1.1-.4 1.6 0l1.6 1.6c.4.4.4 1.1 0 1.6L18.2 14l5.5 5.5c.4.4.4 1.1 0 1.6l-1.6 1.6c-.4.4-1.1.4-1.6 0m54 0L69 17.2l-5.5 5.5c-.4.4-1.1.4-1.6 0l-1.6-1.6c-.4-.4-.4-1.1 0-1.6l5.5-5.5-5.5-5.5c-.4-.5-.4-1.2 0-1.6l1.6-1.6c.4-.4 1.1-.4 1.6 0l5.5 5.5 5.5-5.5c.4-.4 1.1-.4 1.6 0l1.6 1.6c.4.4.4 1.1 0 1.6L72.2 14l5.5 5.5c.4.4.4 1.1 0 1.6l-1.6 1.6c-.4.4-1.1.4-1.6 0", fill: "black", "fill-opacity": ".6" } }] } } }, facialHair: { width: 121, height: 120, probability: 10, variants: { beardLight: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M77.43 72.17c-2.52 2.3-5.2 3.32-8.58 2.6-.58-.12-2.95-4.54-8.85-4.54s-8.27 4.42-8.85 4.54c-3.39.72-6.07-.3-8.58-2.6-4.72-4.31-8.65-10.26-6.3-16.75 1.24-3.38 3.24-7.1 6.88-8.17 3.9-1.15 9.35 0 13.26-.8a8.6 8.6 0 0 0 3.6-1.45 9 9 0 0 0 3.57 1.46c3.92.78 9.38-.36 13.27.79 3.64 1.07 5.64 4.79 6.87 8.17 2.36 6.49-1.57 12.44-6.3 16.75M116.08 0c-3.4 8.4-2.1 18.86-2.72 27.68-.52 7.16-2.02 17.9-8.39 22.53-3.25 2.37-9.18 6.35-13.43 5.24-2.93-.76-3.24-9.16-7.08-12.3a22.4 22.4 0 0 0-15.31-4.9c-2.37.11-7.17.1-9.15 1.91-1.98-1.82-6.78-1.8-9.15-1.9a22.4 22.4 0 0 0-15.3 4.9c-3.85 3.13-4.16 11.53-7.1 12.3-4.24 1.1-10.17-2.88-13.42-5.25-6.37-4.62-7.87-15.37-8.4-22.53C6.02 18.86 7.34 8.4 3.93 0c-1.66 0-.57 16.13-.57 16.13v20.36c.04 15.28 9.59 38.17 30.76 46.9 5.18 2.14 16.89 5.6 25.89 5.6 8.98.02 20.71-3.12 25.9-5.26 21.15-8.73 30.7-31.96 30.74-47.23V16.13S117.74 0 116.08 0", fill: { type: "color", name: "facialHair" } } }] }, beardMajestic: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M41.18 51.74c2.18-1.64 15.23-2.26 17.58-3.65q1.09-.65 1.74-1.31.65.67 1.74 1.3c2.35 1.4 15.4 2.02 17.58 3.66 2.21 1.65 3.82 5.44 3.65 8.4-.22 3.57-4.1 12.06-13.8 13.04a12.3 12.3 0 0 0-9.17-3.87 12.3 12.3 0 0 0-9.17 3.87c-9.7-.98-13.58-9.47-13.8-13.03-.17-2.97 1.44-6.76 3.65-8.41M120.85 30c-.38-5.97-1.57-11.85-2.62-17.71-.28-1.58-1.8-12.3-2.5-12.3-.23 9.1-1.03 18.09-2.06 27.15-.3 2.7-.63 5.42-.84 8.13-.18 2.2.13 4.85-.4 6.98-.68 2.7-4.08 5.23-6.73 6.16-6.6 2.33-12.1-7.3-17.74-10.12-7.32-3.66-19.9-4.53-27.38.24-7.64-4.77-20.22-3.9-27.54-.24C27.4 41.11 21.9 50.74 15.3 48.41c-2.65-.93-6.05-3.46-6.73-6.16-.53-2.13-.22-4.78-.4-6.98-.2-2.71-.53-5.42-.84-8.13A308 308 0 0 1 5.27 0c-.7 0-2.22 10.7-2.5 12.29C1.72 18.15.53 24.03.14 29.99q-.58 9.18 1.33 18.17.91 4.3 2.05 8.54c.83 3.15-.32 9.27.05 12.5.7 6.1 3.58 18 6.81 23.25 1.56 2.54 3.4 4.12 5.44 6.17 1.96 1.97 2.78 5.02 4.9 7.12 3.96 3.9 9.73 6.23 15.65 6.8 5.3 4.5 14.14 7.46 24.13 7.46 10 0 18.82-2.95 24.13-7.46 5.92-.57 11.69-2.9 15.64-6.8 2.13-2.1 2.95-5.15 4.91-7.12 2.05-2.05 3.88-3.63 5.44-6.17 3.23-5.25 6.1-17.15 6.8-23.26.38-3.22-.77-9.34.06-12.5q1.14-4.22 2.05-8.53c1.25-6 1.73-12.06 1.33-18.17", fill: { type: "color", name: "facialHair" } } }] }, beardMedium: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M60.5 67.84c-11.5.38-16.64 5.88-20.5.29-2.91-4.2-1.7-11.26 1.01-15.23 3.86-5.65 9.1-2.92 14.95-3.56 1.6-.18 3.2-.62 4.54-1.34a13 13 0 0 0 4.55 1.34c5.85.64 11.08-2.09 14.94 3.56 2.72 3.97 3.93 11.03 1.03 15.23-3.87 5.6-9-.67-20.52-.29M116.4 0c-3.43 14.07-5 28.43-7.5 42.67q-.76 4.46-1.68 8.88c-.12.62-.25 2.92-.86 3.21-1.85.9-5.62-3.8-6.63-4.87-2.53-2.67-5.05-5.36-8.13-7.45a43.7 43.7 0 0 0-21.13-7.32c-3.18-.25-7.47.18-10.47 2-3-1.82-7.3-2.25-10.47-2-7.6.6-14.9 3.1-21.13 7.32-3.09 2.1-5.6 4.78-8.13 7.45-1 1.06-4.78 5.76-6.63 4.87-.6-.29-.74-2.6-.86-3.2q-.9-4.44-1.7-8.89C8.62 28.43 7.04 14.07 3.62 0c-1 0-1.87 18.75-1.98 20.5-.46 7.09-.98 14.03-.3 21.13 1.16 12.24 2.37 27.6 11.7 36.96 8.44 8.45 20.68 10.22 31.24 15.55 1.36.69 3.16 1.54 5.1 2.23C51.44 97.93 55.5 99 60.18 99c4.91 0 9.15-1.17 11.08-2.86 1.7-.65 3.27-1.39 4.48-2 10.56-5.33 22.8-7.1 31.24-15.55 9.33-9.36 10.54-24.72 11.7-36.96.68-7.1.16-14.04-.3-21.14-.1-1.77-.98-20.5-1.98-20.5", fill: { type: "color", name: "facialHair" } } }] }, moustacheFancy: { elements: [{ name: "path", type: "element", attributes: { d: "M60 43.3c6.8-3.59 16.42-4.15 21.61-2.17a32 32 0 0 1 4.84 2.55c4.13 2.47 8.55 5.12 14.91 3.15.37-.12.73.2.62.58-1.37 4.5-9 7.6-11.6 7.7-6.2.24-11.75-2.26-17.13-4.7-4.44-2-8.77-3.95-13.25-4.25-4.48.3-8.8 2.26-13.25 4.26-5.38 2.43-10.92 4.93-17.13 4.69-2.6-.1-10.23-3.2-11.6-7.7-.1-.37.25-.7.62-.58 6.36 1.97 10.78-.68 14.9-3.15a32 32 0 0 1 4.85-2.55c5.2-1.98 14.82-1.42 21.6 2.17", fill: { type: "color", name: "facialHair" } } }] }, moustacheMagnum: { elements: [{ name: "path", type: "element", attributes: { d: "M60 40.94c2.5-3.34 12.27-4.75 19.27-3.48 9.66 1.76 13.75 12.3 12.51 14.22-.77 1.19-2.48.8-4.26.38a15 15 0 0 0-2.4-.43c-1.5-.09-3.34.22-5.45.57-4.98.82-11.37 1.88-17.62-1.51A6 6 0 0 1 60 48.8a6 6 0 0 1-2.05 1.86c-6.25 3.4-12.65 2.33-17.63 1.5-2.1-.34-3.96-.65-5.44-.56-.76.05-1.6.24-2.4.43-1.78.4-3.5.8-4.26-.38-1.24-1.91 2.85-12.46 12.5-14.22 7.01-1.27 16.78.14 19.28 3.48", fill: { type: "color", name: "facialHair" } } }] } } }, mouth: { width: 92, height: 38, variants: { concerned: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M27.12 23.87a19 19 0 0 1 37.77.09c.08.77-.77 2.04-1.85 2.04H29.1c-1.1 0-2.1-1.18-1.98-2.13", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { d: "M61.59 26H30.4A11 11 0 0 1 46 19.2 11 11 0 0 1 61.6 26", fill: "#FF4F6D" } }, { name: "path", type: "element", attributes: { d: "M58.57 11.75A5 5 0 0 1 57 12H36q-1.22-.02-2.24-.53A19 19 0 0 1 46 7c4.82 0 9.22 1.8 12.57 4.75", fill: "white" } }] }, default: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M32 9a14 14 0 1 0 28 0", fill: "black", "fill-opacity": ".7" } }] }, disbelief: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M32 23a14 14 0 1 1 28 0", fill: "black", "fill-opacity": ".7" } }] }, eating: { elements: [{ name: "path", type: "element", attributes: { d: "M20 20.24q2.05.75 4.4.76c5.31 0 9.81-3.15 11.29-7.49 2.47 2.16 6.17 3.53 10.31 3.53s7.84-1.37 10.31-3.53C57.8 17.85 62.3 21 67.61 21q2.34-.01 4.4-.76h-.19c-6.33 0-11.8-4.9-11.8-10.56 0-4.18 2.32-7.72 5.7-9.68-5.5.8-9.74 5-9.9 10.1a17.6 17.6 0 0 1-9.8 2.8 17.5 17.5 0 0 1-9.8-2.8C36 5 31.8.8 26.3 0a11.2 11.2 0 0 1 5.68 9.68c0 5.66-5.47 10.57-11.8 10.57z", fill: "black", "fill-opacity": ".6", opacity: ".6" } }, { name: "path", type: "element", attributes: { d: "M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18m74 0a9 9 0 1 0 0-18 9 9 0 0 0 0 18", fill: "#FF4646", "fill-opacity": ".2" } }] }, grimace: { elements: [{ name: "rect", type: "element", attributes: { x: "14", y: "1", width: "64", height: "26", rx: "13", fill: "black", "fill-opacity": ".6" } }, { name: "rect", type: "element", attributes: { x: "16", y: "3", width: "60", height: "22", rx: "11", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M16.18 12H24V3.41A11 11 0 0 1 27 3h1v9h9V3h4v9h9V3h4v9h9V3h2q1.02 0 2 .18V12h8.82l.05.28v3.44l-.05.28H67v8.82q-.98.18-2 .18h-2v-9h-9v9h-4v-9h-9v9h-4v-9h-9v9h-1a11 11 0 0 1-3-.41V16h-7.82a11 11 0 0 1 0-4", fill: "#E6E6E6" } }] }, sad: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M32.06 21.72C32.7 14.7 38.7 10 46 10c7.34 0 13.36 4.75 13.95 11.85.03.38-.87.67-1.32.45Q50.32 18.14 46 18.14q-4.27 0-12.45 4.07c-.5.25-1.53-.07-1.5-.49", fill: "black", "fill-opacity": ".7" } }] }, screamOpen: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M26 32.86C27.14 18.88 30.24 7 46 7s18.92 11.94 20 26c.08 1.12-.83 2-1.96 2-6.69 0-9.37-2-18.05-2-8.7 0-13.26 2-17.9 2-1.17 0-2.2-.74-2.1-2.14", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { d: "M59.02 11.57Q58.1 12 57 12H36c-.98 0-1.9-.28-2.67-.77C36.23 8.57 40.28 7 46 7c5.95 0 10.1 1.7 13.02 4.57", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M61.8 34.92a44 44 0 0 1-5.54-.82c-2.73-.53-5.65-1.1-10.27-1.1-5.01 0-8.65.66-11.73 1.23-1.45.26-2.77.5-4.06.65A11 11 0 0 1 46 27.2a11 11 0 0 1 15.8 7.72", fill: "#FF4F6D" } }] }, serious: { elements: [{ name: "rect", type: "element", attributes: { x: "34", y: "12", width: "24", height: "6", rx: "3", fill: "black", "fill-opacity": ".7" } }] }, smile: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M27.12 9.13a19 19 0 0 0 37.77-.09c.08-.77-.77-2.04-1.85-2.04H29.1C28 7 27 8.18 27.12 9.13", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { d: "M62 7H31a5 5 0 0 0 5 5h21a5 5 0 0 0 5-5", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M58.7 21.14A11 11 0 0 0 46 19.2a10.95 10.95 0 0 0-12.7 1.94A19 19 0 0 0 46 26c4.88 0 9.33-1.84 12.7-4.86", fill: "#FF4F6D" } }] }, tongue: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 9.6C22.41 19.24 33.06 27 46 27c12.97 0 23.65-7.82 25-18.26.1-.4-.22-1.74-2.17-1.74H23.17c-1.79 0-2.3 1.24-2.17 2.6", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { d: "M62 7H31a5 5 0 0 0 5 5h21a5 5 0 0 0 5-5", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M35 17.5v9a11.5 11.5 0 1 0 23 0v-9c0-1.93-2.91-3.5-6.5-3.5-2.01 0-3.8.5-5 1.26a9.5 9.5 0 0 0-5-1.26c-3.59 0-6.5 1.57-6.5 3.5", fill: "#FF4F6D" } }] }, twinkle: { elements: [{ name: "path", type: "element", attributes: { d: "M32 10c0 5.37 6.16 9 14 9s14-3.63 14-9c0-1.1-.95-2-2-2-1.3 0-1.87.9-2 2-1.24 2.94-4.32 4.72-10 5-5.68-.28-8.76-2.06-10-5-.13-1.1-.7-2-2-2-1.05 0-2 .9-2 2", fill: "black", "fill-opacity": ".6" } }] }, vomit: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M26 24.4C27.14 13.9 30.24 5 46 5s18.92 8.96 20 19.5c.08.84-.83 1.5-1.96 1.5-6.69 0-9.37-1.5-18.05-1.5-8.7 0-13.25 1.5-17.9 1.5-1.16 0-2.2-.55-2.1-1.6", fill: "black", "fill-opacity": ".7" } }, { name: "path", type: "element", attributes: { d: "M59.86 9.1c-.8.57-1.8.9-2.86.9H36c-1.3 0-2.49-.5-3.38-1.31C35.56 6.39 39.8 5 46 5c6.54 0 10.9 1.54 13.86 4.1", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M34 19a6 6 0 0 0-6 6v7a6 6 0 0 0 12 0v-2h.08a6 6 0 0 1 11.84 0H52a6 6 0 0 0 12 0v-5a6 6 0 0 0-6-6z", fill: "#7BB24B" } }, { name: "path", type: "element", attributes: { d: "M64 25a6 6 0 0 0-6-6H34a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0v-2h.08a6 6 0 0 1 11.84 0H52a6 6 0 0 0 12 0z", fill: "#88C553" } }] } } }, nose: { width: 24, height: 8, variants: { default: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0 0c0 4.42 5.37 8 12 8s12-3.58 12-8", fill: "black", "fill-opacity": ".16" } }] } } }, top: { width: 260, height: 280, probability: 100, variants: { bigHair: { elements: [{ name: "path", type: "element", attributes: { d: "M43.83 105.6q-.59-2.4-1.13-4.92c-1.95-9.23-2.95-20.22 2.89-39.67-6.9 22.99-4.25 34.15-1.76 44.58 1.23 5.2 2.43 10.2 2.37 16.4v-.02c.06-6.2-1.14-11.21-2.37-16.4m173.55 8.64c-.13.4-.16.8-.18 1.23zm-.33 2.58q-.18 1.63-.23 3.35c-29.04-10.76-54.94-29.62-70.32-51.55-12.1 15.62-31.96 23.04-51.63 30.4-17.38 6.5-34.62 12.95-46.2 24.95l1.1-1.5c11-14.6 28.75-21.88 46.7-29.24 18.81-7.71 37.81-15.5 49.38-31.9 15.4 24.12 41.82 44.67 71.16 55.65z", fill: "black", "fill-opacity": ".16" } }, { name: "path", type: "element", attributes: { d: "M31 280h1v-9a72 72 0 0 1 72-72h4v-18.39a56 56 0 0 1-31.8-45.74A12 12 0 0 1 66 123v-13q0-1.2.22-2.32c9.12-5.82 19.65-10.13 30.24-14.48 18.81-7.71 37.82-15.5 49.39-31.9 11.95 18.7 30.55 35.3 52.02 46.9q.13.89.13 1.8v13a12 12 0 0 1-10.2 11.87A56 56 0 0 1 156 180.6V199h4a72 72 0 0 1 72 72v9c24.41-13.94 15.86-33.21 6.28-48.46a303 303 0 0 0-4.07-6.27c-3.48-5.25-6.45-9.74-7.2-12.97q-.16-.7-.18-1.3c-.14-4.62 3.14-7.84 7.16-11.78 6.22-6.08 14.18-13.9 14.01-31.22-.51-15.83-9.8-22.25-18.1-28-6.93-4.78-13.17-9.1-13.1-18q0-2.72.25-5.2c.11-.4.13-.82.15-1.24v-.1c.45-3.44 1.2-6.62 1.98-9.87 2.55-10.72 5.3-22.23-2.38-46.6-2.9-9.11-6.97-16.5-12.1-22.45-14.12-16.42-36.35-22.04-64.9-23.3q-3.82-.16-7.8-.22V13h-1c-43.08.77-73.16 9.54-84.8 46-7.67 24.36-4.93 35.87-2.37 46.6 1.23 5.19 2.43 10.2 2.37 16.4.03 3.75-1.06 6.7-2.85 9.2-2.46 3.43-6.23 6.04-10.24 8.8-8.3 5.75-17.6 12.17-18.1 28-.15 17.33 7.8 25.14 14.03 31.22 4.03 3.94 7.32 7.16 7.17 11.78-.08 3.26-3.4 8.27-7.38 14.27-10.54 15.9-25.7 38.8 2.2 54.73", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M49.58 122.45c22.54-29.92 73.49-29.13 96.09-61.15 15.4 24.1 41.82 44.65 71.16 55.63.3-.86.08-1.85.37-2.7 2.15-14.14 9.14-24.37-.58-55.23-11.63-36.46-41.71-45.23-84.8-45.98l-1-.02c-43.08.77-73.16 9.54-84.8 46-11.38 36.16.17 44 0 63a15 15 0 0 1-2.85 9.2c.19.4 4.16-5.76 6.4-8.75", fill: "white", "fill-opacity": ".2" } }] }, bob: { elements: [{ name: "path", type: "element", attributes: { d: "M39 145c-.62-30.84 28.32-95.2 39-108 7.92-9.5 29.7-17.45 54-17s46.86 5.81 55 16c12.32 15.43 37.87 74.08 38 109 .1 24.8-9.54 49.66-23 51-7.6.76-17.26-.23-28.86-1.4-5.3-.55-11.02-1.13-17.14-1.6v-12.4a56 56 0 0 0 32-50.6v-28.44a130 130 0 0 1-26.9-19.88c3.35 6.24 7.19 11.9 11.51 16.2-30.54-8.59-51.7-26.16-64.35-39.94C102.4 69.02 91.97 85.24 76 97.57V130a56 56 0 0 0 32 50.61v13.14c-6.94.95-13.4 2.16-19.35 3.27-10.85 2.02-19.98 3.73-27.26 2.98-14.22-1.47-21.88-30.2-22.38-55", fill: { type: "color", name: "hair" } } }] }, bun: { elements: [{ name: "path", type: "element", attributes: { d: "M150.12 28.28c3.06-2.97 4.88-6.71 4.88-10.78C155 7.84 144.7 0 132 0s-23 7.84-23 17.5c0 4.1 1.85 7.86 4.94 10.84q-1.48.33-2.9.69c-15.1 3.8-24.02 14.62-31.68 30.62a68 68 0 0 0-6.34 25.83 34 34 0 0 0 1.25 10.22c.33 1.2 2.15 5.39 2.65 2 .1-.66-.07-1.47-.24-2.27q-.2-.84-.26-1.6c-.08-1.56 0-3.15.1-4.72q.29-4.4 1.66-8.59c1.33-3.98 3.02-8.3 5.6-11.67.97-1.25 1.88-2.7 2.88-4.27 5.63-8.9 13.68-21.6 45.34-22.9 34.3-1.42 46.78 21.66 51.2 29.87q.58 1.06.98 1.75c2.67 4.53 2.78 9.75 2.9 14.91.05 2.71.1 5.41.54 8 .47 2.84 1.54 2.78 2.13.23 1-4.33 1.47-8.83 1.15-13.28-.72-10.05-4.4-36.45-24.6-48.15a66 66 0 0 0-16.18-6.73", fill: { type: "color", name: "hair" } } }] }, curly: { elements: [{ name: "path", type: "element", attributes: { d: "M66 105.02c11.38-.72 24.68-14.4 31.98-33.94A179 179 0 0 0 131 74c12.55 0 24.31-1.16 34.45-3.2 7.38 19.96 21.01 33.87 32.55 34.24V88a66 66 0 0 0-38-59.78A184 184 0 0 0 131 26c-9.2 0-17.99.63-26.01 1.76A66 66 0 0 0 66 88z", fill: "black", "fill-opacity": ".16" } }, { name: "path", type: "element", attributes: { d: "M72 192a48 48 0 0 0 13.6-1.95 72 72 0 0 0 13.68 9.1A73 73 0 0 1 104 199h4v-18.39a56 56 0 0 1-31.8-45.74A12 12 0 0 1 66 123v-13a12 12 0 0 1 10-11.83v-.75c8.46-5.38 16.75-16.36 21.98-30.34A179 179 0 0 0 131 70c12.55 0 24.31-1.16 34.45-3.2 5.31 14.37 13.87 25.6 22.55 30.9v.46q.66.1 1.29.29a24 24 0 0 0 3.23 1.47A12 12 0 0 1 198 110v13a12 12 0 0 1-10.2 11.87A56 56 0 0 1 156 180.6V199h4q2.38 0 4.72.15a72 72 0 0 0 13.69-9.1 48 48 0 0 0 45.19-82.18 44 44 0 0 0-28.37-69.28A44.02 44.02 0 0 0 132 15.9a44.02 44.02 0 0 0-63.23 22.7 44 44 0 0 0-28.37 69.27A48 48 0 0 0 72 192", fill: { type: "color", name: "hair" } } }] }, curvy: { elements: [{ name: "path", type: "element", attributes: { d: "M88.4 84.2c-4.88 1.3-9.65 2.78-14.4 4.34-11.13 3.64-6.68-6.1-3-14.04l111.79-9.52c6 7.33 24.8 41 7.1 27-3.1-2.45-9.6-4.45-12.7-7.27-2.37-2.12-5.19-1.78-6.3-4.48l-2.56.9a375 375 0 0 1-11.97-4.12l-.56-.97-1.67.63-9.13-.33c-2.62-.03-13.72.22-16.27.43 0 0-1.23-.93-2.94-2.69l-1.35 3.22s-11.93 1.8-14.09 1.96l-1.06-1.95-2.74 2.97c-3.9.9-13.84 2.83-18.3 4.01", fill: "black", "fill-opacity": ".16" } }, { name: "path", type: "element", attributes: { d: "M47.6 123.04c-5.7-17.86 2.75-37.13 11.12-47.27 1.48-1.8 3.06-5.1 5.06-9.3 8.34-17.47 23.9-50.05 69.8-50.27 49.93-.24 59.75 36.02 63.66 50.43 1.64 6.08 4.55 11.6 7.38 17.21 4 8 8.4 16.74 9.9 23.05 1.09 4.54 1.7 9.05 1.17 13.7-.12 1.06-1.08 4.22-.48 4.85.54.57 1.88 1.15 3.1 1.67 9 3.9 16.1 10.4 19.8 19.62 4.7 11.72-1 25.47-11.26 32.17-1.4.9-.74 2.7-.76 4.1a74 74 0 0 1-4.33 23.5c-1.42 3.94-3.17 7.92-6.53 10.98-2.85 2.58-6.94 4.42-10.86 5.52-1.35.38-1.33.78-1.41 1.17-1.15 5.76 2.7 13.12 4.6 18.56 1.5 4.29 3 8.59 3.8 13 1.18 6.42-3.02 27.82-14.12 22.8 5.52-2.64 5.76-8.26 3.88-9.84-4.34-3.62-11.76-1.59-16.9-.74-3.7.61-7.63 1.25-11.15.43a31 31 0 0 1-10.6-4.84c-17.65-13.97-13.84-37.04 1.07-64.4l-.55-.03c-1.1.04-1.67 0-3 0h-4v-18.4a56 56 0 0 0 32-50.62V92q0-2.21-.15-4.38a68 68 0 0 0-3.66-1.86c-2.58-1.24-5.24-2.53-6.91-4.05a10 10 0 0 0-3-1.76c-1.4-.6-2.62-1.14-3.28-2.72l-2.55.9a374 374 0 0 1-11.97-4.12l-.55-.97-1.67.63-9.12-.33c-2.63-.03-13.73.22-16.28.43 0 0-1.23-.93-2.94-2.69l-1.33 3.22s-11.92 1.8-14.08 1.96l-1.06-1.95-2.74 2.97c-1.43.33-3.66.8-6.13 1.31-4.3.9-9.34 1.95-12.17 2.7a248 248 0 0 0-11.93 3.53Q76 88.3 76 92v38a56 56 0 0 0 32 50.61V199h-4a72 72 0 0 0-16.4 1.87l-.32.5c-4.78 6.95-13.87 12.39-17.46 19.5-1.47 2.9.19 7.82 1.66 10.55 3.2 5.9 11.15 8.66 19.52 7.33-2.53 2.12-7.55 3.82-10.95 3.94-4.63.17-10.3-1.62-14.26-3.58.6 3.7 2.68 5.72 4.62 8.7-5.52-.28-10.88-7.06-12.68-12.05-2.2 4.51-3.44 16.64-2.35 20.03-14.14-6.34-25.13-19.44-24.3-35.66.54-10.56 7.15-18.9 9.48-28.9.46-1.96.14-2.38-1.05-3.94l-.05-.07c-4.38-5.73-9.62-10.69-12.43-17.48-2.54-6.13-2.63-13.18-.64-19.5 2.2-7.08 9.06-14.16 14.84-20.14a106 106 0 0 0 6.37-6.95", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { d: "m163.5 199.2.26-.06s4.44-9.02 11.25-17.38c-1.33-10.43 5.86-23.71 5.86-23.71l-.35-.08A56.3 56.3 0 0 1 156 180.62V199h4c1.32 0 1.88.04 3 .1l.54.04zm-82.23-45.46-.14.06c6.02 9.99 13.63 36.95 6.55 46.66l.25.34A72 72 0 0 1 104 199h4v-18.39a56.2 56.2 0 0 1-26.73-26.87", fill: "black", "fill-opacity": ".24" } }, { name: "path", type: "element", attributes: { d: "M117.38 50.37c1.51-1.85 2.89-3.83 3.5-6.16.23-.8.47-1.7.89-2.3a92 92 0 0 0-12.3 15.7c.77-1 2.73-2 3.76-2.9a35 35 0 0 0 4.15-4.24m53.12-8.4c-.3 3.5.47 6.93.63 10.4 0-.35.34-.93.65-1.48a7 7 0 0 0 .92-4.42c-.14-1-.55-1.95-1.07-2.85-.2-.36-1.12-1.33-1.12-1.66m-115.1 78.4a89 89 0 0 0 4.46 18c2.06 5.71 4.42 11.45 7.8 16.68 3.17 4.87 6.93 9.42 9.96 14.36-.46-.55-1.22-1.17-1.9-1.73-.5-.4-.94-.76-1.2-1.05-3.23-3.39-5.82-7.19-8.3-11.03-3.24-5.07-5.68-10.58-7.8-16.08-4.13-10.78-8.3-23.85-4.7-35.24-.2.77.5 2.43.6 3.2.63 4.26.49 8.6 1.08 12.87m-1.64-16.17-.02.1zm23.86 65.23c.5.58.35.56 0 0m-9.77-4.4c-2.46-3.53-5.05-7.15-7.09-10.9-1.78-3.26-3.05-6.84-5.3-9.84-.31-.44-.71-.97-.8-1.32.69 6.15 3.46 12.74 7.74 17.3 1.56 1.66 4.1 3.03 5.45 4.76m-4.78 6.28c3.55 3.82 6.94 7.76 9.45 12.18 1.75 3.07 3.22 6.64 3.46 10.21.04.53.08 1.2.2 1.57-2.22-4.29-3.91-8.83-6.55-12.94-2.6-4.05-5.95-7.78-9.44-11.28-3.7-3.7-7.41-7.18-9.4-11.85a25.5 25.5 0 0 1-1.99-12.55c.12 1.24.86 2.82 1.54 4.28 1.47 3.14 2.07 6.6 3.67 9.7 2.13 4.08 5.96 7.24 9.17 10.68m-4.86 2.86c-.5-.5-2.4-1.7-2.75-2.3l-.03-.07.03.06c.7 1.5 1.48 2.92 2.22 4.4 1.53 3.08 3.7 5.71 5.93 8.4l1.08 1.3c-.8-1.02-1.02-3.29-1.53-4.5a21 21 0 0 0-4.94-7.33M48 180.52a84 84 0 0 0 3.73 5.02c1.9 2.43 3.8 4.86 5.26 7.5 2.83 5.2 4.07 10.81 4.32 16.55.12 2.7.12 5.46-.25 8.16-.24 1.77-.54 3.6-1.22 5.25-.25.6-.54 1.32-.63 1.84-.06-2.32-.03-4.64 0-6.95.13-8.2.25-16.3-4.02-23.99-1.58-2.83-3.68-5.4-5.78-7.99a90 90 0 0 1-3.9-5.02c-2.78-3.96-5.5-7.85-7.72-12.08 1.36 1.72 3.8 3.07 5.32 4.77 1.9 2.13 3.35 4.58 4.9 6.9m11.2 44.33c-.1.53 0 .4 0 0M49.54 204l.02-1.5c0 .5.82 1.51 1.04 2.03a14.4 14.4 0 0 1 .09 11.32c-1.9 4.9-4.9 9.25-8.64 13.3.83-1.09 1.35-2.6 1.85-4.06 1.01-2.94 2.6-5.62 3.8-8.49 1.7-4.01 1.74-8.32 1.82-12.6m-8.6 17.2a9.5 9.5 0 0 0 2.24-4.13c.2-.9-.4-2.68 0-3.38a14 14 0 0 0-1.85 3.64c-.19.69.01 3.32-.39 3.87M83.86 64.32a63 63 0 0 0 9.77-11.2 35 35 0 0 0 3.22-5.6c.13-.28.3-.87.48-1.54.3-1.1.65-2.4 1.04-2.97-2.7 2.9-4.84 6-7.03 9.17-1.45 2.12-2.99 4.18-4.34 6.37-.36.58-.68 1.35-1.03 2.14-.59 1.37-1.22 2.83-2.1 3.63m-1.03-8.63c.14-.62.27-1.22.47-1.57.75-1.32 1.9-2.45 3.18-3.41-.4.3-.6 1.2-.8 2-.2.57-.3 1.08-.5 1.36A16 16 0 0 1 82 57.8c.36-.35.56-1.22.74-2.04M82 57.82l.03-.01zm120.78 92.81c.6-3.33 1.24-6.84 2.93-9.84a45 45 0 0 1 2.6-3.98q.73-1.04 1.35-2.12c.66-1.16 1.46-2.56 2.26-3.03-4.16 2.43-7.42 5.54-9.16 9.64a14 14 0 0 0-1.09 6.38c.08 1.57.76 3.24.77 4.77q.13-.92.32-1.85M201 130.48a23 23 0 0 1-1 3.63 25 25 0 0 1-1.77 3.8c-.43.78-1.98 2.35-1.98 3.18-.09-4.9 1.73-9.33 5.17-13.25-.38.65-.28 2.03-.42 2.74m-.8 35.23c2.28-.03 4.82 2.52 6.51 4.22 2.5 2.43 5.2 4.56 7.2 7.3l.1.07v-.07c-.68-.97-.7-2.75-1.23-3.86-.72-1.5-1.82-2.9-3.06-4.13-2.32-2.3-5.77-4.07-9.42-3.55m-.81 10.38c-.17-.05-1.77-.5-2.27-.34.6-.26 1.3-.57 1.94-.65 4.28-.56 9.5 3.15 10.07 6.73-.47-1.23-3.02-2.24-4.17-2.85-1.82-.97-3.56-2.14-5.54-2.87m-2.28-.34-.06.03.04-.02zm4.1 8.15a7.6 7.6 0 0 0-3.8-.13c-.47.13-1.44.42-1.56.39 2.82.67 5.47.99 8.4.92-.44 0-1.16-.34-1.84-.66-.47-.22-.9-.43-1.21-.5m-11.22 13.85q-.2 0 0 0m0 0c4.26-.22 9.25.4 13.3 1.42a22 22 0 0 1 5.7 2.3c1.4.8 3.94 1.93 4.88 3.13-3.75-6.43-11.86-9.78-20.17-8.12-1.06.22-2.67 1.2-3.7 1.29m1.74 12.5c3.22.42 6.54-.07 9.76-.44 1.39-.16 3.04-.87 4.39-.51a24 24 0 0 0-8.4-1.17c-2.93.13-5.9 1.06-8.6 2.03.69-.2 1.82-.06 2.85.07m-13.4 10.4c-.06 2.23-.04 4.52.1 6.74.25 3.97 2.55 7.44 5.93 10.08a32 32 0 0 0 4.33 2.72c2.5 1.39 5 2.76 6.63 5.1a10.5 10.5 0 0 1 .82 10.36 5 5 0 0 0-.51 1.58v-.05c.03-3.87.07-8.36-2.64-11.6-1.6-1.91-3.87-3.11-6.16-4.31a27 27 0 0 1-4.68-2.82c-3.3-2.64-5.8-6.1-6.35-9.98-.45-3.13-.23-8.58 2.98-10.73-.6.44-.48 2.34-.5 2.89m.55-2.93-.07.03zM176 242.75l.08.08zm11.15 12.85c-.2-5.11-3.7-8.96-7.94-11.34-.6-.34-2.6-.93-3.13-1.43 2.96 3.24 6.32 6.2 8.96 9.73.46.6 2.06 2.3 2.1 3.04m.04.03v-.03zm41.04-101.75a12 12 0 0 1 2.67 3.7 12.6 12.6 0 0 1 .6 10c.15-.52-.14-1.47-.37-2.22-.55-1.76-1.07-3.5-1.76-5.22-1.2-2.91-2.15-5.64-4.2-8.2.55.67 2.33 1.3 3.06 1.93m-50.02-105a5.7 5.7 0 0 1-.95 3.75c.1-.2-.12-1.1-.28-1.84-.34-1.46-.14-2.95-.04-4.46 0 .64 1.18 1.77 1.3 2.57m-51.6 1.26a8.5 8.5 0 0 1-3.3 2.78c.59-.33 1.1-2 1.55-2.55.73-.94 1.63-1.84 2.58-2.63-.2.22-.6 2.05-.82 2.4", fill: "white", "fill-opacity": ".6" } }] }, dreads: { elements: [{ name: "path", type: "element", attributes: { d: "M241.14 168.86c4.83 6.8 11.1 14 12.24 22.06.45 3.2.7 16.23-7.54 11.43-.27 4.36-.97 4.98.34 9.2.88 2.86 2.08 8.62-3.87 8.1 2.26 6.17 5.88 14.76 2.48 21.16-5.58 10.51-11.89-2.74-13.57-7.49.1 3.28-3.42 9.2-7.84 4.63.35 5.42 2.52 13.78-.66 18.86-6.16 9.85-12.97-2.62-13.2-7.9-1.11 3.56-.28 12.14-7.6 10.15-6.32-1.71-4.03-10.09-2.8-13.87-2.02 3.56-4.5 8.85-4.88 12.87-.34 3.45 2.94 11.57-5.55 10.05-6.52-1.17-6.76-10.9-6.65-15.18.1-3.48 3.46-11.43 1.18-14.25-12.73 5.34.6 23.3-10.95 27.3-3.84 1.32-7.04-1.18-8.32-4.64q.6-2.55-2.28-2.6c-1.2-1.49-2-1.44-2.8-3.66-2.31-6.52 2.2-15.19 5.43-21-3.35 3.05-6.05 7.25-9.7 9.91-2.45 1.8-6.08 2.31-8.37-.17-2.52-2.73-.14-5.34 1.21-7.82 3-5.49 7.73-8.68 12.67-13.08 4.36-3.85 8.22-8.18 12.04-12.37 2.57-2.8 5.01-5.8 7.06-8.97A72 72 0 0 0 160 199h-4v-18.39a56.2 56.2 0 0 0 25.8-24.98c.1-3.28.28-7.1.47-11.2.54-12.09 1.19-26.4.48-35.34l-.2-2.58c-1.12-14.36-1.8-23.03-12-36.06-4.56-5.83-13.18-7.67-21.72-9.5-8.09-1.73-16.1-3.45-20.51-8.5-4.13 4.77-10.14 7.31-16.74 8.98q-2.18.54-4.34.96c-4.98 1.03-9.7 2-13.08 5.6-7.8 8.32-11.23 13.88-13.62 24.26A117 117 0 0 0 78 126.83q.18 2.82.32 5.69c.35 7.1.71 14.32 2.9 21.1a56.2 56.2 0 0 0 26.78 27V199h-4q-1.66 0-3.28.07c.67 3.44 1.09 6.93.81 10.34-.4 5-1.34 9.66-.85 14.7 1.04 10.55 5.41 20.5 9.02 30.55 1.73 4.82 9.36 10.49 6.23 14.46s-13.81-5.47-16.2-10.05c-2.44-4.66-4.65-9.4-7.18-14.03 1.48 6.46 2.77 13.1 4.8 19.4 1.36 4.29 3.43 10.74-2.28 11.96-8.95 1.9-9.3-12.58-10.18-16.9-1.47-7.2-3.1-9.98-5.5-16.97-.49 5.34.34 10.9-.8 16.2-.7 3.19-4.37 5.83-6.57 8.53-7.53 9.28-9.32-6.28-11.23-10.55-3.3 2.4-10.5 7.16-14.9 4.14-3.26-2.23-1.2-6.27-.44-9.03 1.22-4.44 1.94-8.84-1.3-12.86-3.1 3-9.93 4.75-13.89 1.88-5-3.63-.62-8.94 1.63-12.7 4.33-7.26 4.07-15.87 5.44-23.94.46-2.7 1.06-6.26.3-8.12-1.1-2.68-2.3-2.7-4.74-2.1-3.45.87-6.29 2.8-6.87 5.58-.84 4.03 3.57 5.62 3.93 9.12.77 7.55-8.7 4-11.53.62-6.95-8.36-1.26-18.23 4.21-25.56 1.87-2.5 2.4-3.22 2.02-6.48-.77-6.41-2.5-12.18-1.88-18.72.86-8.97 4.3-17.44 9.35-24.82 3.46-5.06 5.3-9.45 5.8-15.57 1.4-17.4 7.31-35.28 15.04-50.74 3.97-7.93 7.96-16.5 14.83-22.4 2.23-1.91 6.24-2.8 8.17-4.65 3.56-3.43.44-9.5 4.95-13.4 3.78-3.24 8.17-2.16 12.28-3.92 4.21-1.81 5.11-7.42 10.21-8.61 5.16-1.2 9.29 2.18 13.66 3.8 6.43 2.38 10.45 1.69 16.76-.3l.08-.03c4.2-1.33 6.95-2.2 10.89.1 2.52 1.5 4.5 5.95 7.62 6.37 3.8.52 9.14-3.04 13.35-2.9 6.45.2 9.6 4.24 12.25 8.55 1.55 2.5 4.4 3.67 6.1 6.15.62.9 1.24 1.8 2.13 2.6 6.31 5.78 14.58 10.26 21.37 15.69 12.66 10.15 15.66 23.88 16.48 37.83.67 11.18-.36 24.3 6.75 34.3 3.71 5.23 7.82 9.74 10.02 15.86.78 2.19 1.85 5.2.51 7.12-1.8 2.58-6.36 2.6-8.3.14-1.9 5.87 4.56 14.35 8.02 19.22", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { d: "M181.5 156.2c-.07 3 0 5.98.38 8.86.33 2.5.84 4.91 1.34 7.31 1.13 5.33 2.23 10.56 1.3 16.27-.75 4.53-2.73 8.87-5.36 12.94A72 72 0 0 0 160 199h-4v-18.39a56.2 56.2 0 0 0 25.5-24.4m-80.78 42.86c-.36-1.85-.8-3.68-1.23-5.48-2.14-8.82-6.42-16.63-10.77-24.55a256 256 0 0 1-5.56-10.53 37 37 0 0 1-1.95-4.89 56.2 56.2 0 0 0 26.8 27V199h-4q-1.63 0-3.25.07", fill: "black", "fill-opacity": ".24" } }, { name: "path", type: "element", attributes: { d: "M101.48 33.5c-1.67 0-12.16 4.75-8.24 6.16 2.4.86 12.5-6.15 8.24-6.15m68.57 13.85q-1.27.56.04 1.07 1.27-.57-.04-1.07m24.46 18.24a27 27 0 0 0-1.37-2.76c-.89-1.27-6.24-8.4-2.47-7.5 2.08.48 4.9 6.17 6.15 8.74.78 1.57 4.28 7.12.72 6.75-.63-.07-1.95-2.92-3.03-5.23m8.51 45.15c-.15-1.17.25-4.76-2.46-3.42-1.8.9.67 11.72.82 13.13l.46 3.95v.03c.6 6.07 1.42 12.1 1.33 18.23 0 .76-1.2 6.66 1.55 5.4 1.46-.66.78-8.74.57-11.2-.74-8.72-1.1-17.46-2.27-26.12m-138.66 11.5c.08 1.58-.7 9.75 1.43 9.8 1.83.04 1.24-8.4 1-11.83-.08-1.08-.08-11.14-2.1-9.9-2.35 1.4-.49 9.51-.37 11.93M72.8 180c0-1.43.82-14.45-1.9-11.38-1.37 1.54-.48 7.02-.35 8.88.05.7-.52 2.86.41 3.19.76.26 1.83.32 1.84-.7m-25.68 13.17c1.93-.05.14-37.83-2.82-37.79-2.08.03 1.36 37.83 2.82 37.8m2.23 19.35c-2.4 0-1.95 8.46-.54 9.13 2.14 1.03 3.23-9.13.54-9.13m15.24 3.54c.02 1.05-1.18 1.07-1.98.74-.72-.3-.63-2.31-.58-3.49.05-1.1-.15-2.2-.3-3.29-.5-3.38-1.27-8.48.03-9.65 1.98-1.78 2.02.17 2.55 1.5 1.56 3.9.2 10.03.28 14.19m137.43-46.47c-2.53-.5-3.85 8.1-2.7 9.01 1.92 1.53 5.35-8.49 2.7-9.01m-.26 37.8c-1.14-.23-9.44 15.73-8.76 16.63 1.3 1.72 12.83-15.82 8.75-16.64m-20.42 7.38c-1.78-.8-9.33 10.75-7.4 11.62 1.75.78 9.56-10.65 7.4-11.62m42.1-43.31c-2.16 0-2.06 11.82-.4 12.56 1.7.78 2.94-12.56.4-12.56M82.51 54.2c1.26-.65 5.45-.87 3.1 1.29-2 1.84-9.53 12.51-12.12 12.62-4.22.18 2.6-7.24 4.76-9.6 1.33-1.45 2.5-3.41 4.26-4.32m-24.26 29.8c-2.18-.44-5.83 10.26-4.56 11.55 1.93 1.95 7.01-11.07 4.56-11.56M80.4 201.85c.48-2.6 2.38-.2 2.8 1.14.4 1.34 4.62 11.08 3.56 12.36-1.63 1.97-2.34-1.37-2.9-2.57-1.31-2.83-3.92-8.43-3.46-10.93M75 225.82c-2.31 0-2.04 9.8-.68 10.38 2.12.9 3.48-10.38.67-10.38m156.82-21.94a58 58 0 0 1 4.98 13.57c.14.6 2.06 5.56-.66 4.84-1.56-.41-1.8-4.78-2.2-6.1a33 33 0 0 0-2.58-5.56c-1.41-2.63-2.85-5.31-3.06-7.64-.33-3.9 1.84-2.42 3.52.89m-14.72 13.07c-2.13 0-2.24 10.77-.9 11.4 1.86.88 3.62-11.4.9-11.4m6.16-88.3c1.58-.4-3.4-13.32-5.18-13.18-2.7.22 2.78 13.8 5.18 13.18m-26.82 56.1q-1.27.57.05 1.07 1.27-.57-.05-1.07m-24.21 55.24c.79 0 1.12-1.23-.06-1.25-.77 0-1.18 1.25.06 1.25m-98.54-55.36c.03-1.9-2.46-.5-2.45 1.1.03 3.21 2.4 1.75 2.45-1.1m-6.16-47.75c-.8 0-1.13 1.24.05 1.27.78 0 1.2-1.27-.05-1.27m-20.74 62.56c-.1 0 1.53-1.99 1.6-.05.07 1.47-1.31.06-1.6.05M52.6 98.06c-2.37 0-2.02 5.76-.51 6.13 2.52.61 2.86-6.13.5-6.13m12.62 124.27c-2.28 0-2.44 7.8-.86 8.3 2.45.75 3.24-8.3.86-8.3m-18.75 5.6q-1.3.6.04 1.1 1.3-.58-.04-1.1m170 3.35c-2.32 0-2.23 9.56-.8 10.2 1.98.9 3.48-10.2.8-10.2m-23.51 8.88c-2.4-.48-3.68 7.4-2.55 8.3 1.85 1.45 5.02-7.8 2.55-8.3m-20.48 7.29c-2 0-1.5 3.58-.36 4.1 2.02.93 2.62-4.1.41-4.1", fill: "white", "fill-opacity": ".3" } }] }, dreads01: { elements: [{ name: "g", type: "element", attributes: { fill: { type: "color", name: "hair" } }, children: [{ name: "path", type: "element", attributes: { d: "M186.7 56.12c.9 3.25 2.17 11.95-.06 14.84-.75.96-5.84-1.74-7.97-2.92l-3.53-1.96c-14.92-8.32-19.74-11-45.9-10.62-28.11.4-47.37 13.58-48.46 14.93-.75.93-1.71 3.44-2.5 10.41-.25 2.2-.32 4.97-.4 7.71-.14 5.98-.3 11.8-2.25 11.8-2.44-.01-2.97-23.78-1.92-33.21q.06-.55.18-1.23c.23-1.4.5-3.13.16-4.11-.16-.44-.54-.7-.94-1-.62-.42-1.26-.87-1.08-2.02.2-1.3 1.1-1.42 1.97-1.55.57-.08 1.13-.16 1.5-.56 1.13-1.23.46-1.87-.31-2.6-.46-.43-.95-.9-1.12-1.53-.63-2.36 1.03-3.1 2.69-3.83l.38-.17c.69-.3 1.1-.42 1.42-.5.6-.15.85-.21 1.89-1.35-2.14-1.56-2.9-3.7 0-4.83.57-.22 1.53-.2 2.5-.2 1.2.02 2.4.03 2.95-.37.15-.11.24-.53.33-.9.06-.27.1-.5.18-.6 1.35-1.93 1.23-3.4 1.08-5.4l-.07-.92c-.13-2.04-.11-3.9 2.33-4.11 1-.08 1.9.4 2.77.86.54.29 1.08.58 1.64.73.87.23 1.1.43 1.32.43.19 0 .37-.15.96-.55 1.18-.82 1.3-2.05 1.43-3.3.1-1.08.22-2.18 1.04-3 1.58-1.6 2.8-.64 4 .3.64.5 1.28 1 1.96 1.1 2.55.36 3.06-1.06 3.62-2.6.32-1 .69-2.05 1.69-2.67 1.84-1.15 2.65-.05 3.44 1 .5.69.98 1.34 1.7 1.4 1 .09 2.52-1.1 3.85-2.13a12 12 0 0 1 2.1-1.44c2.28-.93 3.92.07 5.59 1.08 1.4.86 2.83 1.73 4.65 1.44l.83-.13c2.24-.37 3.1-.51 5.45.96a4.2 4.2 0 0 0 3.74.69c.6-.12 1.3-.25 2.26-.26 1.1 0 1.98.5 2.83.99.7.4 1.36.79 2.13.87.42.04.84-.16 1.26-.36s.84-.4 1.3-.38c1.83.09 2.69 1.49 3.55 2.87.65 1.08 1.32 2.15 2.44 2.66 1.62.72 3.44.24 5.17-.21.79-.2 1.55-.4 2.28-.5 3.96-.46 3.27 1.97 2.55 4.56a11 11 0 0 0-.6 3.26c1.15.27 2.3-.15 3.46-.57 1.1-.4 2.18-.8 3.27-.6 3.4.58 2.25 4.02 1.44 6.45l-.08.2c.65 0 1.55-.2 2.57-.41 2.85-.6 6.6-1.41 7.77 1.13.47 1.05 0 2.3-.44 3.54a7 7 0 0 0-.6 2.4c.01 1.54.7 2.9 1.4 4.28.44.9.9 1.82 1.16 2.78" } }, { name: "path", type: "element", attributes: { d: "m185.36 73.6.47.33c1.76.99 3.15 10.9 3.22 14.69.04 2.34.08 11.25-2.4 10.48-.75-.23-1.9-4.95-2.06-7.72s-1.74-12.16-4.14-16.49q-.2-.36-.53-.8c-.65-.96-1.44-2.12-.92-2.76.72-.88 1.43-.57 2.26-.2l.44.18c.87.35 2.77 1.68 3.66 2.3" } }] }] }, dreads02: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M217.2 107.16a12.2 12.2 0 0 1-6.25-5.56 10 10 0 0 1 1.95-.13c2.27-.02 5.15-.04 4.62-2.87-.57-2.98-5.4-2.07-7.28-1.6a6 6 0 0 1 2.12-.62c1.49-.25 3-.51 3.3-2.33.54-3.18-3.28-3.08-5.07-2.4-.26-2.12 2-3.9 4.14-5.55 1.25-.97 2.45-1.9 3.08-2.85q.2-.3.43-.55c.47-.53.86-.97.3-2.08-1.15-2.35-3.94.32-5.33 1.66l-.37.43c.87-1.63 3.31-8.4 2.94-10.13-.53-2.52-2.33-2.6-3.77-.56-.62.88-.94 2.65-1.23 4.26-.15.81-.29 1.58-.45 2.16-.88-.65-1.4-.7-1.7-.74-.44-.04-.5-.05-.56-1.45-.04-1.02.8-2.7 1.56-4.16.4-.8.8-1.54.97-2.09l.3-.8c.52-1.37 1.23-3.19.64-4.24-1.78-3.15-3.48 1.17-3.94 2.65-.5-2.14.5-3.97 1.53-5.88.6-1.13 1.24-2.3 1.57-3.55.54-2.05 1.97-7.58-.5-8.56s-2.52 2.12-2.54 4.66c0 .93-.02 1.8-.15 2.34l-.03.13c-.37 1.57-.92 3.97-2.1 4.71-.18.11-2.83.34-2.96.2-1.1-1.29.42-3.53 1.74-5.49.76-1.13 1.46-2.17 1.55-2.87.22-1.73-.44-2.82-2.06-2.92-.46-.03-1.09.36-1.59.7-.4.24-.74.45-.9.41-1.06-.23-.35-3.82.18-6.5.2-1.04.38-1.94.42-2.46.15-2-.1-7.17-3.48-4.79l.16-2.06c.15-1.95.3-3.86.57-5.83.05-.37.18-.73.3-1.08.3-.97.61-1.86-.69-2.69-2.16-1.36-3.36 1.5-3.85 3.17-.26.9-.27 1.93-.28 2.95-.04 2.3-.07 4.45-2.87 4.52-3.34.07-2.59-2.42-1.84-4.99.3-1 .6-2 .65-2.88.12-1.74-1-6.42-3.27-3.26-.53.7-.64 2.5-.74 4.2a14 14 0 0 1-.34 2.9c-.56-.25-.37-1.4-.17-2.6s.4-2.45-.08-2.96c-1.5-1.64-2.82-.36-3.94.72-.4.4-.8.8-1.18.97l-.08-1.22-.16-3.12c-.03-.7.1-1.69.22-2.74.28-2.15.58-4.58-.34-5.6-2.33-2.59-3.82.43-4.5 2.53q-.15.43-.25.85c-.45 1.56-.83 2.93-2.98 3.15.08-1.09-.28-2.69-.65-4.37-.54-2.43-1.12-5-.39-6.35.27-.5.67-.59 1.07-.68.42-.1.85-.2 1.1-.8.83-1.9-.5-2.7-1.98-2.77-4.18-.18-3.8 3.31-3.47 6.58.22 2.04.42 4-.5 4.9-.55-.5-.54-1.03-.52-1.6.01-.6.03-1.24-.55-1.99-1.2-1.6-3.16-1.46-4.9-.73 0-.3.05-.93.15-1.72.41-3.49 1.2-10.26-3.24-6.09-.8.8-.99 1.88-1.17 2.95-.12.7-.23 1.37-.5 1.95-.7 1.45-2.4 3.6-3.35 4.78-.47-1.92.16-4.26.7-6.22l.12-.45c.12-.45.46-1.2.85-2.07.84-1.84 1.9-4.2 1.53-5.17-1.27-3.38-4.63.5-6.52 2.68-.45.51-.8.94-1.05 1.15-1.58 1.4-7.88 6.04-9.9 4.64-.32-.23-.36-.74-.4-1.3-.05-.65-.1-1.38-.62-1.83-.48-.37-2.48-.57-3.06-.5.36-1.5-.34-3.44-2.05-2.9-1.23.34-1.45 1.54-1.67 2.72-.16.88-.33 1.75-.9 2.25-1.5 1.3-3.18.3-4.85-.68-1.15-.68-2.3-1.36-3.4-1.3q.13-.5.4-1.28c.85-2.44 2.23-6.45-1.8-4.87-1.24.5-2.12 3.35-2.44 4.54q-.2.82-.32 1.42c-.4 1.82-.5 2.32-3.18 3.03.1-.63.1-1.3.1-1.98 0-1.25 0-2.53.55-3.54q.23-.44.7-1.04c1.15-1.53 2.8-3.7-.25-4.05-3.78-.39-4.26 4.7-4.6 8.2-.08.9-.16 1.7-.28 2.25-4.12-2.5-6.86.96-9.33 4.07l-.15.2c.45-1.43 1.56-15.57-2.96-11.25-.84.8-.53 1.84-.24 2.87.14.55.3 1.1.27 1.6-.08 1.3-.5 2.43-1 3.62A25 25 0 0 1 95 17.1q-.45.6-.7 1c-.33.45-.49.7-.7.73s-.48-.17-1.04-.6l-.38-.3c-2.43-1.88-3.58-6.63-3.46-9.53q0-.55.1-1.2c.22-2.24.5-5.2-2.5-4.35s-2.05 6.15-1.5 9.2l.2 1.26c.4 2.7.65 5.43.2 8.17-2.3-2.36-3.1.87-3.6 2.97-.16.63-.28 1.16-.42 1.4-.7 1.26-1.84 2.07-2.98 2.86q-.7.48-1.36 1c-.42-1.47.28-2.83.93-4.1.6-1.15 1.14-2.23.84-3.27-1.1-3.87-4.1.93-5.1 2.55l-.2.32c-.25.37-.7 1.42-1.2 2.6-.8 1.85-1.73 4.03-2.17 4.33-1.03.7-7.6-2.53-8.28-3.14-.55-.5-.76-1.45-.97-2.38-.25-1.1-.5-2.22-1.34-2.6-4.72-2.2-1.93 5.72-1 7.36a24.3 24.3 0 0 1 2.94 14.5 6.4 6.4 0 0 1-2.4-2.07 6 6 0 0 1-.88-2.53c-.2-.96-.36-1.88-.94-2.46-3.3-3.28-3.68 2.88-3.4 4.8.32 2.35 1.2 3.66 2.2 5.13.51.76 1.06 1.57 1.57 2.6.94 1.9.37 4.07-.2 6.23a26 26 0 0 0-.62 2.9c-3.43-3.3-18.2-.55-14.4 4.5 1.17 1.55 2.47.44 3.8-.7.93-.8 1.87-1.6 2.8-1.55 4.11.22 6.25 5.3 5.98 8.84-.5-1.9-2.42-3.76-3.75-1.44-.8 1.4.32 3.67 1.1 5.25l.28.57c-.9-.44-5.37-2.52-6.25-2.16-3.44 1.4 1.3 4.15 2.54 4.7 4.22 1.79 6.9 3.85 8.2 8.92a3.7 3.7 0 0 1-2.3-1.7c-.3-.43-.62-.88-1.25-1.34-.95-.7-1.4-.7-1.96-.73a4 4 0 0 1-1.13-.14l-.07-.02c-2.36-.61-5.4-1.41-8.04-.31-1.97.82-5.3 3.3-5.9 5.65-.77 2.87.84 3.6 2.9 2.14a10 10 0 0 0 2.08-2.23c1.1-1.45 2.12-2.82 4.5-2.73a6.6 6.6 0 0 1 4.64 2.33c.44.53.8 1.2 1.14 1.85.3.57.6 1.15.98 1.64.28.38.75.82 1.23 1.27.74.68 1.5 1.4 1.74 2 1.3 3.3-.87 6.26-2.63 8.67l-.45.63c-.42-.55-3.47-1.76-4.1-1.88-2.94-.56-4.04.8-2.2 3.52.3.45.8.77 1.29 1.08.43.28.85.55 1.15.9.37.46.66 1.04.94 1.62.27.54.54 1.08.88 1.53.92 1.24 2 2.08 3.1 2.94q.83.64 1.68 1.4c-.33.2-.46 0-.6-.18-.12-.17-.25-.34-.5-.24-.2.07-.47.04-.75 0-.3-.04-.6-.08-.87 0-.47.16-.64.68-.8 1.15-.1.36-.22.7-.45.8-1.9.75-3.84-.6-5.7-1.87-1.34-.94-2.64-1.85-3.9-1.92-1.6-.08-2.96 1-2.2 3.03.46 1.13 2.06 1.85 3.27 2.4l.8.35c3.23 1.65 6.47 2.87 9.94 1.6a14.7 14.7 0 0 0 9.68 3.7c-2 1-4 2.22-4.7 4.7a12 12 0 0 1-.9-1.16c-1.4-1.96-3.52-4.9-4.74-1.31-1.04 3.1 3.73 6.87 5.93 8.27a17 17 0 0 1-7.28.59q-.46-.06-1.04-.25c-1.4-.43-3.06-.92-2.2 2 1.13 3.83 7.6 2.37 10.13 1.62-1.78 1.5-9.56 11.7-2.8 9.38.95-.33 1.53-1.34 2.13-2.4.77-1.35 1.58-2.77 3.28-2.98 2.48-.3 3.38 1.37 4.4 3.28.44.8.9 1.62 1.48 2.37.4.5 1.3 1.2 2.28 1.98 1.58 1.24 3.3 2.6 3.17 3.28-.1.46-.72.82-1.4 1.2-.77.45-1.6.93-1.9 1.63-.62 1.56-.34 2.76.54 4.09 1.17 1.78 3.1 2.4 4.92 3q.87.3 1.67.62c3.17 1.3 4.3 2.86 5.73 6.2-2.5.13-9.62 7.37-5.26 8.66 1.12.33 1.35-.25 1.6-.9.12-.3.24-.6.45-.87l.55-1.02.27-.52q.7-1.8 1.52-.22c.07-.02.47.08.9.18.4.09.87.2 1.04.22 1.2.07 2.1-.53 3.03-1.15q.6-.4 1.24-.75.48-.2.94-.35c.69-.22 1.34-.42 1.87-1.23-.1.13.56-2.5.57-2.54.13-.3.38-.45.63-.6.25-.13.5-.28.68-.63a55.8 55.8 0 0 1-15.5-34.47 12 12 0 0 1-8.3-11.28v-13a12 12 0 0 1 7.5-11.13c.53.38 1.27 0 1.5-.84-.46-1.5 3.3-27.85 13-34.87 3.62-2.44 23-2.62 42.31-2.6 19.1 0 38.11.18 41.69 2.6 9.7 7.02 13.46 33.37 13 34.87.23.84.97 1.22 1.5.84A12 12 0 0 1 196 110v13a12 12 0 0 1-8.17 11.38 55.7 55.7 0 0 1-11.07 29.28q.31 1.2.55 2.5c.18 1.1.23 2.14.28 3.15.1 2.04.2 3.94 1.37 5.95q.3.48.66.86c.33.38.66.76.86 1.28.16.44.2 1.05.25 1.68.1 1.4.2 2.92 1.7 2.92 3.1 0 1.37-5.97.6-7.38q-.45-.8-.82-1.41c-1.03-1.74-1.63-2.74-1.57-5.64 1.75 1.16 7.53 3.38 9.45 2.32 3.5-1.94-2.69-3.9-5.83-4.89a12 12 0 0 1-1.6-.56c.63-.63 1.3-1.14 1.97-1.66a14 14 0 0 0 3.22-3.1q.37-.52.73-1.1c1.01-1.6 2.1-3.3 3.82-3.39.4-.09 1.04.3 1.77.6 1.46.7 3.24 1.54 3.94.2.82-1.4-.18-1.9-1.07-2.34q-.46-.19-.78-.43c-.54-.45-.94-.57-1.19-.65-.45-.12-.5-.13-.27-1.48 1.1 1.17 2.8.43 3.25-1 .3-.93-.16-1.47-.56-1.96-.28-.34-.55-.66-.54-1.07 0 .4.83-5.1.7-4.93.85-1.12 3.8-.8 5.34-.63h.07c2.13.24 2.17.31 3.03 2.02l.22.42c.88 1.72 3.2 5.18 3.7.64.13-1.06-.86-3.38-1.44-4.32a5 5 0 0 0-1.6-1.33c-.6-.37-1.13-.7-1.32-1.1-.48-.94.08-2.47.68-4.12.6-1.6 1.22-3.33.96-4.73.3.12.73.7 1.23 1.38 1.3 1.75 3 4.07 3.96.22.33-1.26-1-3.24-2.27-5.1-1.48-2.2-2.86-4.28-1.24-4.79 2.29-.73 4.6 2.22 5.25 4.04.2.56.27 1.37.35 2.22.12 1.2.24 2.48.72 3.14 3.03 4.21 3.4-2.74 3.16-4.57-.56-4.02-2-6.98-5.63-8.5 1.14-1.42 0-2.58-.91-3.53l-.37-.37c.55-.6 2.22-.75 4-.9 3.13-.29 6.62-.6 5.2-3.43-.4-.76-1.53-1.08-2.5-1.34q-.55-.14-.96-.3M58.5 138.8q0-.2-.36.1z", fill: { type: "color", name: "hair" } } }] }, frida: { elements: [{ name: "path", type: "element", attributes: { d: "M76 98.17v-.23l.08.06c1.7-27.45 17.84-33.2 32.51-38.41 10.53-3.75 20.3-7.22 23.4-18.25 3.12 11.03 12.89 14.5 23.42 18.25 14.67 5.22 30.82 10.96 32.5 38.41l.1-.06v.23a12 12 0 0 1 9.88 10.22 16.4 16.4 0 0 0 2.97-16.92 16.5 16.5 0 0 0-2.46-25.86 16.5 16.5 0 0 0-10.62-23.04q.22-1.5.22-3.07a20.5 20.5 0 0 0-27.95-19.1A20.47 20.47 0 0 0 132 15.53a20.47 20.47 0 0 0-28.05 4.87 20.5 20.5 0 0 0-27.73 22.16A16.5 16.5 0 0 0 65.2 64.7a16.5 16.5 0 0 0-2.51 28.07 16.5 16.5 0 0 0 3.4 15.62A12 12 0 0 1 76 98.17m.2 36.7c-3.85-.58-7.11-3-8.85-6.34a16.5 16.5 0 0 0 8.2 25.71 16.52 16.52 0 0 0 14.76 20.72A16.5 16.5 0 0 0 108 184.8v-4.2a56 56 0 0 1-31.8-45.74m79.8 45.75v4.2q1.22.2 2.5.19a16.5 16.5 0 0 0 15.19-10.04 16.5 16.5 0 0 0 14.76-20.71 16.5 16.5 0 0 0 8.2-25.72c-1.74 3.34-5 5.76-8.86 6.34a56 56 0 0 1-31.81 45.73", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M169.13 28.36q-.6.18-1.14.45-.25-.75-.62-1.48c3.72-3.63 5.25-9.54 5.25-9.54s-1.16.2-3.1.64c-.27.04-3.78.6-8.24 2.31-.8-.58-1.54-1.04-2.1-1.38.52-2.93 1.68-12.56-4.46-16.11-6.1-3.54-13.8 2.2-16.12 4.14l-.7-.42c-3.07-1.77-10.77-5.35-16.05-.23-5.64 5.46-2.3 14-1.04 16.7l-.53.53-.1-.11a7.1 7.1 0 0 0-8.07-1.52l-2.13.93-1.38-1.88a7.24 7.24 0 0 0-8.29-2.54 7.1 7.1 0 0 0-4.8 6.05l-.27 2.32-2.32.25a7.1 7.1 0 0 0-6.05 4.81 7.2 7.2 0 0 0 .83 6.53q-.7-.2-1.5-.2-.56.02-1.24.26.42-.6.6-1.13a5.2 5.2 0 0 0-9.96-3.04q-.15.55-.14 1.27-.44-.58-.9-.91a5.2 5.2 0 0 0-5.96 8.52q.46.31 1.16.53-.68.23-1.14.56a5.17 5.17 0 0 0-1.02 7.29 5.16 5.16 0 0 0 7.28 1.02q.44-.34.86-.93 0 .71.2 1.25a5.2 5.2 0 0 0 9.82-3.39 4 4 0 0 0-.62-1.1q.7.24 1.25.24a5.2 5.2 0 0 0 3.36-1.32 7.2 7.2 0 0 0 2.13 4.44 7.15 7.15 0 0 0 8.06 1.52l2.13-.93 1.38 1.88q.43.58.94 1.05-.78.77-1.64 1.44c-.47-.3-1.12-.7-1.92-1.06a12 12 0 0 0-13.25 1.82C83.62 61.47 82 67.7 82 67.7s7.37 4.17 15.26.42c5.9-2.8 6.53-7.22 6.48-9.26q1.18-.96 2.26-2.07a7.3 7.3 0 0 0 5.72.36 7.1 7.1 0 0 0 4.8-6.05l.26-2.32 2.32-.26a7.1 7.1 0 0 0 5.3-3.24c2.57.32 4.97.13 6.2 0 .99 1.87 3.82 6.7 7.88 9.05a9 9 0 0 0 5.07 1.33c6.9-.36 9.92-10 10.67-12.92.64-.09 1.6-.24 2.7-.5a7.4 7.4 0 0 0 .16 8.24 7.4 7.4 0 0 0 5.93 3.16q.8 0 1.78-.3-.6.82-.88 1.58a7.4 7.4 0 0 0 13.65 5.65l.34.62c-.71 1.48-3.8 8.96 5.53 12.36 6.77 2.46 13.45-1.15 13.5-1.17 0 0-2.07-9.48-9.46-12.55a7.4 7.4 0 0 0 3.7-7.5 7.4 7.4 0 0 0-2.87-4.87 6 6 0 0 0-1.62-.8q.97-.3 1.65-.76a7.4 7.4 0 0 0-8.5-12.12q-.65.47-1.26 1.3 0-1.03-.2-1.8a7.4 7.4 0 0 0-3.6-4.38 7.4 7.4 0 0 0-5.65-.54m-4.1 10.84-.72-.22.4-.3q.14.25.33.52m14.36 20.08.48.33q-.54.26-.93.52-.5-.9-.8-1.65.03-.26.03-.53a6 6 0 0 0 1.22 1.33M91.2 42.12l-.12-.32.2.15z", fill: "black", "fill-opacity": ".2" } }, { name: "path", type: "element", attributes: { d: "M178.03 58.94s-4.98 8.83 5.4 12.6c6.8 2.48 13.5-1.16 13.5-1.16s-2.16-9.9-9.97-12.75c-6.1-2.22-8.93 1.3-8.93 1.3", fill: "#5DD362" } }, { name: "path", type: "element", attributes: { d: "M196.93 70.38s-2.16-9.9-9.97-12.75c-4.07-1.48-6.7-.4-8.02.5-1.36-2.4-1.47-4.18-1.45-4.25.03-.3-.2-.53-.46-.63-.07-.02-.2-.07-.3-.03-.39 0-.67.37-.66.75 0 .23.35 4.54 4.63 8.83 6.05 6.6 16.23 7.58 16.23 7.58", fill: "#42BC53" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M165.22 27c5.28-3.06 7.4-11.2 7.4-11.2s-7.38-4.18-15.26-.43-6.37 10.37-6.37 10.37 6.61 5.65 14.23 1.25", fill: "#5DD362" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M147 29.43c.05.08.1.17.24.2.42.34 1.09.3 1.42-.12a24 24 0 0 1 3.26-3.13c1.97 1.4 7.33 4.1 13.3.64 5.28-3.06 7.4-11.2 7.4-11.2s-1.16.2-3.1.63c-.54.07-14.38 2.3-22.36 11.87a1 1 0 0 0-.16 1.13", fill: "#42BC53" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M89.4 54.5C84.1 57.55 82 65.7 82 65.7s7.37 4.17 15.26.42 6.36-10.37 6.36-10.37-6.6-5.65-14.23-1.25", fill: "#5DD362" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M107.61 52.06c-.05-.08-.1-.17-.23-.2-.42-.34-1.1-.3-1.43.12a24 24 0 0 1-3.26 3.16c-1.97-1.41-7.32-4.1-13.3-.64-5.28 3.05-7.4 11.2-7.4 11.2s1.16-.2 3.1-.64c.54-.07 14.39-2.3 22.37-11.87.3-.3.35-.8.15-1.16", fill: "#42BC53" } }, { name: "path", type: "element", attributes: { d: "M67.58 49.96a5.17 5.17 0 0 1 1.02-7.29q.47-.33 1.14-.56a4 4 0 0 1-1.16-.53 5.2 5.2 0 0 1 5.96-8.52q.46.33.9.91-.01-.71.14-1.27a5.16 5.16 0 0 1 6.5-3.45 5.2 5.2 0 0 1 3.45 6.5q-.17.53-.59 1.12.68-.23 1.25-.25a5.2 5.2 0 0 1 .18 10.4q-.57 0-1.25-.2.43.56.62 1.1a5.2 5.2 0 1 1-9.83 3.38 4 4 0 0 1-.2-1.25q-.4.58-.85.93a5.17 5.17 0 0 1-7.28-1.02", fill: "#4ACAD3" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M80.82 37.64a1.44 1.44 0 1 0-2.76-.84c-.23.76.23 4.18.23 4.18s2.3-2.58 2.53-3.34m2.24 5.8a1.44 1.44 0 1 0-.05-2.9c-.8.02-3.9 1.52-3.9 1.52s3.16 1.4 3.95 1.38M77 41.42s-1.74-2.98-2.4-3.44a1.44 1.44 0 1 0-1.65 2.37c.65.45 4.05 1.07 4.05 1.07m3.08 6.84a1.44 1.44 0 0 0 .9-1.84c-.26-.75-2.65-3.25-2.65-3.25s-.35 3.44-.1 4.2a1.44 1.44 0 0 0 1.85.9m-5.32-1.97c.64-.48 2.27-3.52 2.27-3.52s-3.37.73-4 1.2a1.44 1.44 0 1 0 1.73 2.32", fill: "white" } }, { name: "path", type: "element", attributes: { d: "m116.53 49.1.25-2.32 2.32-.26a7.1 7.1 0 0 0 6.05-4.8 7.2 7.2 0 0 0-2.55-8.29l-1.87-1.38.93-2.13c1.23-2.8.65-5.9-1.52-8.06a7.1 7.1 0 0 0-8.06-1.52l-2.13.93-1.38-1.88a7.24 7.24 0 0 0-8.29-2.54 7.1 7.1 0 0 0-4.8 6.05l-.26 2.32-2.32.25a7.1 7.1 0 0 0-6.05 4.81 7.2 7.2 0 0 0 1.67 7.53q.4.4.87.76l1.88 1.38-.93 2.13a7.15 7.15 0 0 0 1.52 8.06 7.15 7.15 0 0 0 8.06 1.52l2.13-.93 1.38 1.88a7.2 7.2 0 0 0 8.29 2.54 7.1 7.1 0 0 0 4.8-6.05", fill: "#FDB599" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M108.88 41.2a1.44 1.44 0 1 1-2.78.74c-.2-.77-.1-5.94-.1-5.94s-2.5 4.53-3.06 5.1a1.44 1.44 0 0 1-2.03-2.05c.56-.56 5.1-3.05 5.1-3.05s-5.15.1-5.92-.1a1.44 1.44 0 0 1 .75-2.78c.77.2 5.19 2.88 5.19 2.88s-2.67-4.42-2.87-5.2a1.44 1.44 0 1 1 2.78-.74c.2.77.1 5.94.1 5.94s2.5-4.53 3.06-5.1a1.44 1.44 0 0 1 2.04 2.05c-.56.56-5.1 3.05-5.1 3.05s5.17-.1 5.94.1a1.44 1.44 0 1 1-.75 2.78c-.8-.2-5.22-2.88-5.22-2.88s2.67 4.42 2.88 5.2", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M189.76 55.82a7.36 7.36 0 0 0-1.46-10.36 6 6 0 0 0-1.62-.8q.97-.3 1.65-.76a7.4 7.4 0 0 0-8.5-12.12q-.65.46-1.26 1.3.01-1.03-.2-1.8a7.4 7.4 0 0 0-3.6-4.38 7.4 7.4 0 0 0-10.55 8.7q.24.76.82 1.6a6 6 0 0 0-1.77-.36 7.4 7.4 0 0 0-.26 14.8q.8 0 1.78-.3-.6.82-.88 1.58a7.4 7.4 0 0 0 14 4.81 6 6 0 0 0 .26-1.78q.6.83 1.22 1.33a7.4 7.4 0 0 0 5.49 1.42 7.4 7.4 0 0 0 4.88-2.88", fill: "#F7D30C" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M170.9 38.3a2.05 2.05 0 1 1 3.94-1.2c.33 1.08-.33 5.94-.33 5.94s-3.27-3.66-3.6-4.74m-3.18 8.25a2.06 2.06 0 1 1 .07-4.11c1.13.02 5.56 2.15 5.56 2.15s-4.5 1.97-5.63 1.96m8.62-2.88s2.47-4.24 3.4-4.9a2.06 2.06 0 1 1 2.36 3.38c-.93.65-5.76 1.52-5.76 1.52m-4.38 9.73a2.06 2.06 0 0 1-1.27-2.6c.37-1.08 3.76-4.63 3.76-4.63s.5 4.89.13 5.96a2.06 2.06 0 0 1-2.62 1.27m7.57-2.8c-.9-.67-3.23-5-3.23-5s4.8 1.05 5.7 1.73a2.06 2.06 0 1 1-2.47 3.28", fill: "white" } }, { name: "path", type: "element", attributes: { d: "M168.14 31.55c1.82-6.99-6-12.42-8.95-14.19.5-2.93 1.67-12.56-4.47-16.11-6.1-3.54-13.8 2.2-16.12 4.14l-.7-.42c-3.07-1.77-10.77-5.35-16.05-.23-5.64 5.46-2.3 14-1.04 16.7-2.13 2-8.36 8.59-5.79 15.58a8.6 8.6 0 0 0 3.9 4.54c4.02 2.34 9.59 1.96 11.7 1.7 1.01 1.89 3.84 6.72 7.9 9.07a9 9 0 0 0 5.07 1.33c6.9-.36 9.92-10 10.67-12.92 2.86-.4 12.09-2.2 13.92-9.2", fill: "#FF7398" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M141.76 25.6s3.69 8.2.36 8.71-1.46-8.59-1.46-8.59-7.11 6-8.15 3.03 7.7-4.05 7.7-4.05-7.96-4.7-5.36-6.83c2.59-2.15 6.2 6.1 6.2 6.1s1.95-8.93 4.83-7.27-3.86 7.82-3.86 7.82 8.88-1 8.37 2.35c-.5 3.34-8.6-1.27-8.6-1.27", fill: "white" } }, { name: "rect", type: "element", attributes: { x: "190", y: "129", width: "2", height: "39", rx: "1", fill: "#E6E6E6" } }, { name: "path", type: "element", attributes: { d: "M201 166h-9.43l6.43-17h-11l-6 21h8.64L185 189z", fill: "#9177FF" } }] }, frizzle: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M89.91 55.36h84.18c18.24-10.53 21.67-29.2 8.76-45.43-3.21-4.04-8.76 11.75-25.82 12.72s-15.42-6.3-33.57-3.58c-18.15 2.73-16.15 17.3-28 20.8-11.84 3.5-5.55 15.5-5.55 15.5", fill: { type: "color", name: "hair" } } }] }, fro: { elements: [{ name: "path", type: "element", attributes: { d: "M93.7 69.39c-4.62 24.47-16 42.72-25.74 41a8 8 0 0 1-1.96-.63V89a66 66 0 0 1 28.4-54.24q.72 3.6 1.05 7.77a263 263 0 0 1 36.9-2.44c13.27 0 25.67.85 36.22 2.34q.33-4.1 1.05-7.67A65.9 65.9 0 0 1 198 89v20.76q-.94.46-1.95.63c-9.72 1.72-21.09-16.48-25.73-40.9a261 261 0 0 1-37.97 2.57c-14.3 0-27.6-1-38.65-2.7", fill: "black", "fill-opacity": ".16" } }, { name: "path", type: "element", attributes: { d: "M132 0c-11.21 0-21.9 2.2-31.69 6.18Q98.93 6 97.5 6c-6.7 0-12.77 3.07-17.2 8.06-18.04.93-33.46 13.3-40.77 30.9C31.5 49.56 26 59.04 26 70q0 .87.05 1.73A62 62 0 0 0 16 106c0 7.33 1.21 14.34 3.43 20.78Q19 129.32 19 132c0 9.45 4.1 17.81 10.38 22.88C36.74 172.68 52.6 185 71 185q2.25 0 4.44-.24C80.9 189.9 87.88 193 95.5 193c4.44 0 8.67-1.05 12.5-2.95v-9.44a56 56 0 0 1-31.8-45.74A12 12 0 0 1 66 123v-13c0-1.72.36-3.36 1.02-4.84q.46.15.94.23c9.73 1.72 21.12-16.53 25.74-41a260 260 0 0 0 38.65 2.7c14.02 0 27.06-.96 37.97-2.6 4.64 24.4 16.01 42.6 25.73 40.9q.48-.1.94-.25a12 12 0 0 1 1 4.83v13a12 12 0 0 1-10.2 11.87 56 56 0 0 1-31.81 45.74v9.44a28 28 0 0 0 12.5 2.95c7.62 0 14.6-3.1 20.06-8.24q2.19.24 4.44.24c18.39 0 34.26-12.32 41.62-30.12 6.3-5.05 10.4-13.4 10.4-22.85q0-2.68-.43-5.22A64 64 0 0 0 248 106a62 62 0 0 0-10.05-34.27q.06-.87.05-1.73c0-10.96-5.5-20.44-13.53-25.04-7.31-17.6-22.73-29.97-40.77-30.9C179.27 9.07 173.2 6 166.5 6q-1.43 0-2.81.18A84 84 0 0 0 132 0", fill: { type: "color", name: "hair" } } }] }, froBand: { elements: [{ name: "path", type: "element", attributes: { d: "M249 70.5q0 1.2-.1 2.37A57.7 57.7 0 0 1 260 107c0 7.16-1.3 14.01-3.67 20.34q.67 2.98.67 6.16c0 9.79-4.93 18.42-12.45 23.56a53.5 53.5 0 0 1-53.86 29.63A36.4 36.4 0 0 1 167.5 195c-4.02 0-7.88-.65-11.5-1.85v-12.54a56 56 0 0 0 31.8-45.74A12 12 0 0 0 198 123v-13a12 12 0 0 0-10-11.83V92a56 56 0 0 0-2.22-15.68l1.37 12.87-11.34-24-45.13-19.52-30.12 10.56-21.5 20.2-.04-2.61A56 56 0 0 0 76 92v6.17A12 12 0 0 0 66 110v13a12 12 0 0 0 10.2 11.87A56 56 0 0 0 108 180.6v10.94A36 36 0 0 1 92.5 195a36.4 36.4 0 0 1-23.19-8.31q-2.86.3-5.81.31a53.5 53.5 0 0 1-48.05-29.94 28.5 28.5 0 0 1-11.78-29.72A58 58 0 0 1 0 107a57.7 57.7 0 0 1 11.1-34.13 28.5 28.5 0 0 1 16-28.04 55 55 0 0 1 47.55-31.78 28.4 28.4 0 0 1 26.6-7.24A84 84 0 0 1 132 0a84 84 0 0 1 29.4 5.3q2.01-.3 4.1-.3a28.4 28.4 0 0 1 19.85 8.05 55 55 0 0 1 47.55 31.78A28.5 28.5 0 0 1 249 70.5", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { d: "M187.37 98.98q.62-3.84.63-7.83C188 62.35 162.7 39 131.5 39S75 62.35 75 91.15q0 4 .63 7.82c4.1-25.09 27.55-44.32 55.87-44.32s51.78 19.23 55.87 44.33", fill: "#92D9FF" } }] }, hat: { elements: [{ name: "path", type: "element", attributes: { d: "M187.32 138.76C226.9 129.26 254 109.87 254 87.5c0-23.5-29.92-43.72-72.8-52.63l-.31-1.43A40 40 0 0 0 141.82 2h-18.64A40 40 0 0 0 84.1 33.44l-.27 1.21C40.4 43.45 10 63.8 10 87.5c0 22.37 27.1 41.76 66.68 51.26q-.3-1.92-.47-3.9A12 12 0 0 1 66.01 123v-13a12 12 0 0 1 10.01-11.83V92c0-8 1.68-15.62 4.7-22.51 8.61-15.69 92.74-16.49 102.66.16A56 56 0 0 1 188 92v6.17A12 12 0 0 1 198 110v13a12 12 0 0 1-10.2 11.87 56 56 0 0 1-.48 3.9", fill: { type: "color", name: "hat" } } }, { name: "path", type: "element", attributes: { d: "M188 92.74c3.85-3.25 6-6.9 6-10.74 0-6.08-5.38-11.65-14.32-15.98a12 12 0 0 1 3.68 3.63A56 56 0 0 1 188 92zm-31.74-33.75a144 144 0 0 0-24.26-2c-8.98 0-17.52.78-25.22 2.17 15.16-2.2 34.11-2.3 49.48-.17m-72.57 7.34C75.12 70.63 70 76.07 70 82c0 3.85 2.15 7.49 6 10.74V92c0-8 1.68-15.62 4.7-22.51a10 10 0 0 1 2.99-3.16", fill: "black", "fill-opacity": ".5" } }] }, hijab: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M65 77.34Q64 83.03 64 89v48q0 1.46.06 2.9L64 142c.14 3.68-1.86 11.8-4.34 21.9-3.88 15.77-8.94 36.4-8.94 52.55 0 13.01 1.98 22.84 3.89 32.3 1.97 9.78 3.86 19.16 3.39 31.25h47s-.95-13.2-2.47-26.36c10.05 10.2 22.82 16.84 39.05 16.84 70.55 0 77.62-53.83 77.62-65.24 0-6.04-4.32-10.88-8.39-15.44-3.6-4.05-7.02-7.87-7-12.1 0-4.35 1.02-7.4 2.07-10.52 1.12-3.33 2.27-6.75 2.27-11.96 0-5.82-1.43-7.5-2.9-9.25a10.7 10.7 0 0 1-2.8-5.62c-.87-4.54-1.86-14.32-2.45-20.77V89A68 68 0 0 0 65.04 77.08L65 77zM132 53c-30.1 0-55 24.4-55 54.5v23c0 30.1 24.9 54.5 55 54.5s55-24.4 55-54.5v-23c0-30.1-24.9-54.5-55-54.5", fill: { type: "color", name: "hat" } } }, { name: "path", type: "element", attributes: { d: "M192.93 104.96A61 61 0 0 0 194 93.5c0-33.97-27.76-61.5-62-61.5S70 59.53 70 93.5q.01 5.89 1.07 11.46a61 61 0 0 1 121.86 0", fill: "white", "fill-opacity": ".5" } }, { name: "path", type: "element", attributes: { d: "M77.07 104.69q-.07 1.4-.07 2.81v23c0 30.1 24.9 54.5 55 54.5s55-24.4 55-54.5v-23q0-1.41-.07-2.81 1.06 5.25 1.07 10.81v23a54.5 54.5 0 0 1-54.5 54.5h-3A54.5 54.5 0 0 1 76 138.5v-23q.01-5.56 1.07-10.81m108.98 89.45c-4.39 6.9-17.9 13.66-34.65 16.62-16.74 2.95-31.75 1.22-38.23-3.76q.03.4.1.78c1.7 9.69 19.42 14.67 39.57 11.12s35.1-14.3 33.38-23.99q-.06-.38-.17-.77m11.6 15.35c-2.63 9.6-14.86 20.2-31.55 26.28-16.68 6.07-32.87 5.8-41.06.15q.14.5.32 1c4.53 12.44 24.47 16.6 44.55 9.3s32.67-23.32 28.15-35.75z", fill: "black", "fill-opacity": ".16", opacity: ".9" } }] }, longButNotTooLong: { elements: [{ name: "path", type: "element", attributes: { d: "M49 90.5c0 4.55 1.7 8.64 4.85 10.77.9.61 2.47.93 4.15 1.07V182a8 8 0 0 0 8 8h42v-9.39a56 56 0 0 1-31.8-45.74A12 12 0 0 1 66 123v-13a12 12 0 0 1 3.87-8.83c11.54-2.61 24.1-7.53 36.47-14.67 12.13-7 22.5-15.24 30.48-23.75a87 87 0 0 1-12.45 20.78q19-8.28 25.9-26.63.56 1.38 1.17 2.76c10.26 23.03 27.88 39.36 45.77 44.74.5 2.11.79 4.08.79 5.6v13a12 12 0 0 1-10.2 11.87A56 56 0 0 1 156 180.6v9.4h18a32 32 0 0 0 32-32v-54.12q0-.1-.03-.28c-.07-5.64-.28-18.87-.6-21.37A74 74 0 0 0 131.99 18c-36.08 0-66.14 25.83-73 60-5.54 0-10 5.6-10 12.5", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { d: "M151.44 59.66c11.94 26.81 33.86 44.53 54.56 46.5V92A74 74 0 0 0 59.32 78H59c-5.52 0-10 5.6-10 12.5 0 6.48 3.95 11.81 9 12.44v.15l.95-.1H59a8 8 0 0 0 1.9-.24c13.8-1.77 29.78-7.23 45.44-16.27 12.13-7 22.5-15.25 30.48-23.76a87 87 0 0 1-12.45 20.78q19-8.28 25.9-26.63.56 1.38 1.17 2.76", fill: "white", "fill-opacity": ".08" } }] }, miaWallace: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M68.03 76.21q19.4-49.6 41.03-49.6c.54 0 29.25-.23 48.05-.35C177.77 35.59 192 55.3 192 78.1V93h-82.94l-2.8-23.18-3.9 23.18H68V78.11q0-.95.03-1.9", fill: "black", "fill-opacity": ".16" } }, { name: "path", type: "element", attributes: { d: "M39 145c-.09-18.98 30.32-97.2 41-110 7.92-9.5 27.7-15.45 52-15s44.86 3.81 53 14c12.32 15.43 40.09 92.02 40 111-.1 21.27-9.62 33.59-18.6 45.22A293 293 0 0 0 202 196c-10.28-2.66-27.85-5.18-46-6.68v-8.7A56 56 0 0 0 188 130V92q0-2.02-.14-4h-76.8l-2.8-21.44-3.9 21.44H76.14Q76 89.98 76 92v38a56 56 0 0 0 32 50.61v8.7c-18.15 1.5-35.72 4.03-46 6.69q-2.14-2.88-4.39-5.78c-9-11.62-18.5-23.95-18.61-45.22", fill: { type: "color", name: "hair" } } }] }, shaggy: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M87.18 37.86c5.14-3.84 11.22-7.12 17.56-8.38 6.45-1.28 10.36-1.6 16.7-.07 1.64.39 2.2.78 3.63-.15 1.2-.8 9.66-9.5 35.42-4.66 26.03 4.88 33.77 44.08 43.42 45.57 3.5.53 7.8-.39 7.92-2.53 3.96 6.03 5 14 3.33 21.07-1.45 6.1-4.5 11.8-10 15.14-4.72 2.87-11.25 4.12-16.7 3.6a22 22 0 0 1-7.04-1.78c-2.76-1.2-4.96-3.4-7.67-4.54a54 54 0 0 0 9.18 6.42c1.64.9 3.3 1.53 5.11 2.02 1.24.34 3.76 1.48 4.96 1.18-7.8 1.4-15.16.18-22.32-3.16a52 52 0 0 1-9.2-5.48c-2.83-2.13-6.09-4.3-8.3-7.1.93 1.2-.7-.6-.92-.8q-.9-.94-1.78-1.9-1.52-1.63-2.93-3.38-3.02-3.72-5.5-7.8c-1.69-2.76-8.37-13.87-10.39-16.5a195 195 0 0 0 6.41 16.93c-4.7-1.47-9.28-5.54-12.3-9.34a29.5 29.5 0 0 1-6.1-14.66c-3.83 10.41-12.79 18.63-22.03 24.3 2-3.74 5.05-6.9 7.05-10.69-9.2 9.33-24.57 13.9-28.6 27.58-1.03-4.76-4.35-8.58-5.34-13.43-1.1-5.4-1.9-11.1-1.73-16.62.4-12.24 8.64-23.72 18.16-30.82", fill: { type: "color", name: "hair" } } }] }, shaggyMullet: { elements: [{ name: "path", type: "element", attributes: { d: "M176.75 37.86c9.52 7.1 17.76 18.58 18.16 30.82.17 5.5-.62 11.23-1.73 16.62-.5 2.46-1.6 4.66-2.7 6.85-1.07 2.12-2.13 4.24-2.64 6.58-2.63-8.93-10.09-13.97-17.5-19-3.96-2.66-7.9-5.33-11.1-8.58 1.02 1.93 2.3 3.7 3.6 5.46 1.23 1.7 2.47 3.4 3.45 5.22-9.24-5.66-18.2-13.88-22.03-24.3a29.5 29.5 0 0 1-6.1 14.67c-3.02 3.8-7.59 7.87-12.3 9.34 2.43-5.5 4.5-11.21 6.4-16.92-1.78 2.31-7.2 11.29-9.6 15.23l-.77 1.26a74 74 0 0 1-10.47 13.35c-.5.53-1.42 1.52-.67.54-1.85 2.35-4.45 4.26-6.9 6.07l-1.4 1.04a52 52 0 0 1-9.2 5.48c-7.1 3.31-14.38 4.54-22.1 3.2.9.1 2.34-.4 3.52-.82a20 20 0 0 1 1.22-.4c1.8-.5 3.47-1.12 5.11-2.02a54 54 0 0 0 9.18-6.42c-1.37.58-2.6 1.42-3.84 2.27-1.23.83-2.46 1.67-3.83 2.27-2.28 1-4.54 1.53-7.03 1.77-5.46.53-12-.72-16.72-3.6-5.5-3.32-8.54-9.04-9.99-15.13-1.68-7.06-.63-15.04 3.33-21.07.13 2.14 4.43 3.06 7.92 2.53 3.77-.59 6.95-6.52 10.9-13.93C77.11 44.7 85.2 29.57 100.44 25.6c19.96-5.2 34.21 3.87 35.42 4.66 1.22.78 1.8.63 2.93.32l.64-.17c6.35-1.47 13.26-2.16 19.7-.87 6.35 1.26 12.43 4.54 17.57 8.38M70.92 110.78l.21.04zm7.1 45.42q1.2-2.3 2.32-4.6a56.2 56.2 0 0 0 27.68 29v9.01a54 54 0 0 1-7.73 2c-9 1.63-34.32-3.52-45.44-11.97-.85-.65-.42-1.92.67-2 11.66-.8 17.63-12.13 22.4-21.2zm78 26.85v-2.44c6.95-3.3 13.11-8 18.13-13.71.71 2.24 1.75 4.33 3.43 5.79 1.32 1.14 3.48 1.12 5.34 1.1h1.2q2.5.1 5.02-.01c.83-.03 1.2 1.02.53 1.5l-.4.26a39 39 0 0 1-3.24 1.82 29 29 0 0 1-7.98 2.73q-2.89.5-5.66.18a10 10 0 0 0 1.7 1.94c1.41 1.22 3.72 1.2 5.7 1.19h1.28q2.69.09 5.36-.02c.9-.04 1.3 1.09.57 1.6q-.2.16-.42.28-1.68 1.05-3.47 1.94a31 31 0 0 1-8.52 2.92c-5.5.97-10.86-.18-15.19-3.7a25 25 0 0 1-3.38-3.37", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { d: "M80.32 151.6q-1.12 2.3-2.31 4.6l-.1.18c-4.73 9.08-10.7 20.42-22.4 21.22-1.05.07-1.5 1.34-.63 1.99 11.12 8.45 36.43 13.6 45.44 11.98a54 54 0 0 0 7.73-1.96v-8.95a56.2 56.2 0 0 1-27.68-29m75.67 29v2.43a25 25 0 0 0 3.38 3.36c4.33 3.53 9.7 4.68 15.2 3.71a31 31 0 0 0 8.51-2.92 42 42 0 0 0 3.9-2.23c.72-.5.32-1.64-.57-1.6q-2.67.1-5.35.01h-1.3c-1.97.01-4.28.03-5.7-1.2a10 10 0 0 1-1.7-1.93q2.78.33 5.67-.18a29 29 0 0 0 7.98-2.73 39 39 0 0 0 3.64-2.08c.68-.48.3-1.53-.53-1.5a70 70 0 0 1-5.02.02h-1.2c-1.85.01-4.01.03-5.33-1.1-1.7-1.47-2.72-3.56-3.43-5.8a56 56 0 0 1-18.14 13.7", fill: "black", "fill-opacity": ".16" } }] }, shavedSides: { elements: [{ name: "path", type: "element", attributes: { d: "m174.83 55.92-.03.02q1.14 1.32 2.19 2.7a55.7 55.7 0 0 1 11 33.36v5.5a54.3 54.3 0 0 0-17.4-39.93c-11.58 3.77-49.58 14.27-77.63.42A54.4 54.4 0 0 0 76 97.5V92c0-12.5 4.1-24.04 11.01-33.35q1.07-1.41 2.22-2.75l-.02-.02A55.9 55.9 0 0 1 132.01 36a55.9 55.9 0 0 1 42.81 19.92", fill: "black", "fill-opacity": ".16" } }, { name: "path", type: "element", attributes: { d: "M91.54 53.29A55.8 55.8 0 0 0 76 92v6.16a12 12 0 0 0-6.49 3.34l.7-17.37a46 46 0 0 1 17.37-34.17c-2.2-3.84-1.45-10.33 7.8-13.1 5.07-1.5 7.57-5.08 10.24-8.88 3.5-5 7.27-10.37 17.48-11.92 9.87-1.5 13.23-.88 17.05-.18 3.13.57 6.58 1.2 14.2.76 9.85-.57 16.86-4 21.43-6.22 3.26-1.6 5.27-2.58 6.17-1.47 15.42 18.9 6.97 33.8-6.2 41.96A45.9 45.9 0 0 1 192 86v13.6q-1.84-1.07-4-1.43V92a55.8 55.8 0 0 0-16-39.19c-7.76 2.75-50.39 16.55-80.46.48m131.07 172.76c3.06 5.6 4.05 11.12 3.5 16.38A72 72 0 0 0 160 199h-4v-18.39a56 56 0 0 0 31.8-45.74c1.5-.23 2.93-.74 4.2-1.47v20.7c0 20.77 11.47 39.79 22.15 57.47 2.97 4.93 5.88 9.75 8.46 14.48M67.7 146.5l.66-16.35a12 12 0 0 0 7.85 4.72A56 56 0 0 0 108 180.6V199h-4c-11.2 0-21.8 2.56-31.25 7.12-2.99-18.29-4.3-38.68-5.05-59.62", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M89.88 52.36c33.22 19.3 83.37 0 83.37 0 14.53-7.77 25.08-23.32 8.7-43.4-2.17-2.66-10.7 6.72-27.6 7.7-16.9.97-13.27-3.31-31.25-.59-17.97 2.73-15.99 17.3-27.72 20.8s-9.8 13-5.5 15.5", fill: "white", "fill-opacity": ".2" } }] }, shortCurly: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M192.77 70.77a63 63 0 0 0-1.52-9.86 52 52 0 0 0-2.5-7.49c-.6-1.48-2.02-3.52-2.19-5.13-.16-1.57 1.07-3.32 1.33-5.16.21-1.8.2-3.66-.2-5.44-.83-4.06-3.6-7.81-7.85-8.85-.95-.23-2.97.06-3.64-.5-.77-.63-1.3-2.8-2-3.67-2-2.47-5.1-4.07-8.37-3.51-2.4.4-1.03.9-2.84-.51-1-.8-1.75-2-2.73-2.85a25 25 0 0 0-4.9-3.28 51 51 0 0 0-14.85-4.91c-9.28-1.52-19.2-.2-28.2 2.22a75 75 0 0 0-13.14 4.74c-1.78.87-2.8 1.58-4.67 1.8-2.93.37-5.4.35-8.18 1.59-8.54 3.82-12.39 12.69-9.06 21.17a15 15 0 0 0 2.82 4.59c1.52 1.68 2.07 1.35.76 3.28a53 53 0 0 0-4.96 9.17C72.36 66.58 71.77 76.04 72 85c.08 3.13.22 6.3.71 9.42.22 1.34.28 3.87 1.3 4.87.51.5 1.24.78 1.96.58 1.7-.47 1.12-1.73 1.16-2.9.2-5.88-.08-11.08 1.32-16.9a44 44 0 0 1 5-12.03 72 72 0 0 1 9.8-13.35c.92-1.01 1.12-1.41 2.35-1.5.93-.04 2.3.6 3.2.8 2 .5 4 .99 6.03 1.3 3.74.6 7.45.66 11.22.54 7.43-.23 14.88-.75 22.1-2.62 4.77-1.24 9.01-3.47 13.6-5.1.07-.04 1.22-.85 1.42-.82.28.04 1.97 1.82 2.26 2.05 2.23 1.74 4.67 2.48 7.07 3.83 2.97 1.66.1-.72 1.73 1.36.48.6.72 1.72 1.1 2.4 1.22 2.2 2.9 4.1 4.93 5.63 1.95 1.47 4.89 2.18 5.89 4.1.76 1.47 1.02 3.48 1.64 5.06 1.63 4.13 3.78 7.99 5.93 11.88 1.73 3.14 3.62 5.89 3.8 9.47.08 1.25-1.11 8.74 1.79 6.46.43-.34 1.35-4.15 1.54-4.8.77-2.63 1.05-5.38 1.4-8.1.69-5.37.92-10.5.46-15.9", fill: { type: "color", name: "hair" } } }] }, shortFlat: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M179.15 39.92c-2.76-2.82-5.96-5.21-9.08-7.61q-1.04-.79-2.06-1.6c-.15-.12-1.72-1.24-1.9-1.66-.4-.99-.1-.22-.1-1.4.1-1.5 3.2-5.73.9-6.7-1-.43-2.8.7-3.73 1.08a60 60 0 0 1-5.73 1.9c.92-1.85 2.7-5.57-.64-4.58-2.6.78-5.04 2.77-7.65 3.7.86-1.4 4.32-5.8 1.2-6.05-.98-.07-3.8 1.75-4.86 2.14a56 56 0 0 1-9.63 2.51c-11.2 2.02-24.3 1.45-34.65 6.54-8 3.93-15.88 10.03-20.5 17.8-4.44 7.48-6.1 15.67-7.03 24.25-.7 6.3-.74 12.8-.42 19.12.1 2.07.34 11.61 3.34 8.72 1.5-1.44 1.5-7.25 1.87-9.22.75-3.91 1.47-7.85 2.72-11.64 2.2-6.68 4.8-13.8 10.3-18.4 3.53-2.94 6-6.93 9.4-9.9 1.5-1.35.35-1.2 2.8-1.03q2.44.16 4.9.2c3.8.1 7.6.08 11.4.1 7.63 0 15.24.1 22.89-.3 3.4-.2 6.8-.3 10.17-.6 1.9-.2 5.25-1.4 6.8-.5 1.43.84 2.9 3.61 3.94 4.75 2.4 2.67 5.3 4.72 8.12 6.92 5.9 4.57 8.86 10.33 10.65 17.48 1.8 7.13 1.3 13.75 3.5 20.76.38 1.24 1.4 3.36 2.67 1.46.25-.36.2-2.3.2-3.42 0-4.52 1.13-7.9 1.12-12.46-.06-13.83-.5-31.87-10.85-42.44", fill: { type: "color", name: "hair" } } }] }, shortRound: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M166.3 35c-20.18-11.7-40.17-9.78-55.26-5.97-15.1 3.8-24.02 14.62-31.68 30.62a68 68 0 0 0-6.34 25.83 34 34 0 0 0 1.25 10.22c.33 1.2 2.15 5.39 2.65 2 .17-1.12-.44-2.67-.5-3.86-.08-1.57 0-3.16.11-4.73q.28-4.4 1.65-8.59c1.33-3.98 3.02-8.3 5.6-11.67 6.4-8.33 17.5-8.8 26.3-13.39-.78 1.4-3.7 3.68-2.7 5.27.7 1.1 3.37.76 4.64.72 3.35-.1 6.72-.67 10.02-1.14a72 72 0 0 0 15-4.1c4.02-1.5 8.61-2.88 11.63-6.07a69 69 0 0 0 17.4 13c5.62 2.88 14.68 4.32 18.11 10.16 4.07 6.9 2.2 15.4 3.44 22.9.47 2.85 1.54 2.79 2.13.24 1-4.33 1.47-8.83 1.15-13.28-.72-10.05-4.4-36.45-24.6-48.15", fill: { type: "color", name: "hair" } } }] }, shortWaved: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M182.68 38.95c5.4-4.95 6.7-14.99 3.64-21.5-3.77-8-11.42-9-18.75-5.48-6.9 3.31-13.06 4.42-20.62 2.81-7.26-1.54-14.14-4.26-21.65-4.7-12.32-.74-24.3 3.83-32.7 13.05a36 36 0 0 0-4.11 5.8c-.98 1.63-2.08 3.38-2.5 5.26-.2.9.18 3.1-.27 3.83-.48.8-2.3 1.52-3.07 2.1a25 25 0 0 0-4.18 4.05c-2.66 3.22-4.13 6.59-5.37 10.57-4.1 13.25-4.45 29 .86 42 .7 1.74 2.9 5.36 4.18 1.64.26-.73-.33-3.19-.33-3.93 0-2.72 1.5-20.73 8.05-30.82 2.13-3.28 11.97-15.58 13.98-15.68 1.07 1.7 11.88 12.51 39.94 11.24 12.66-.59 22.4-6.28 24.74-8.74 1.03 5.53 13 13.81 14.82 17.22 5.26 9.85 6.43 30.3 8.44 30.27s3.45-5.24 3.87-6.23c3.07-7.38 3.6-16.64 3.26-24.56-.42-10.2-4.63-21.23-12.23-28.22", fill: { type: "color", name: "hair" } } }] }, sides: { elements: [{ name: "path", type: "element", attributes: { d: "M69 97c0 4 .92 5.07 6 5 3.25-.05 3.44-6 3.65-12.59.14-4.37.29-9.03 1.35-12.41.62-4.43-1.82-3.17-3-1-3.96 4.78-8 15.34-8 21m126 0c0 4-.92 5.07-6 5-3.25-.05-3.44-6-3.65-12.59-.14-4.37-.29-9.03-1.35-12.41-.62-4.43 1.82-3.17 3-1 3.96 4.78 8 15.34 8 21", fill: { type: "color", name: "hair" } } }] }, straight01: { elements: [{ name: "path", type: "element", attributes: { d: "M66 113c10.86-22.7 34.67-31.6 55.44-39.36 13.32-4.97 25.39-9.48 32-16.86 2.22 2.02 4.75 4.05 7.41 6.2C171.06 71.16 183.2 80.91 188 98v.17a12 12 0 0 1 9.81 9.72V86.04q0-1.94-.15-3.84c4.54-17-3.1-37.78-12.66-47.2-9.48-8.82-22.3-12.32-30.95-8.48C142.45 8.98 108.9 13.24 89 28c-13.22 9.8-24.79 25.72-27.84 45.75A46 46 0 0 0 60 84.05v88.5c-.2 31.5-7.4 82.49-21 90.45 62.36 16.8 71.93-38.15 69-82v-.39a56 56 0 0 1-31.8-45.74A12 12 0 0 1 66 123zm90 67.61a56 56 0 0 0 31.8-45.74 12 12 0 0 0 10.01-9.76v1.36A100 100 0 0 0 208.79 172l26.95 52.71a37.8 37.8 0 0 1-3.94 40.76A72 72 0 0 0 160 199h-4z", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { d: "M66 113c10.86-22.7 34.67-31.6 55.44-39.36 13.32-4.97 25.39-9.48 32-16.86 2.22 2.02 4.75 4.05 7.41 6.2 10.19 8.17 22.3 17.9 27.11 34.9-4.57-14.04-15.75-21.22-25.6-27.55-3.21-2.06-6.28-4.03-8.93-6.12-6.6 6.4-18.67 10.32-32 14.64C100.68 85.58 76.87 93.3 66 113", fill: "black", "fill-opacity": ".16" } }] }, straight02: { elements: [{ name: "path", type: "element", attributes: { d: "M156 180.61V199h4a71.7 71.7 0 0 1 46 16.6V92a74 74 0 0 0-148 0v183.72A28 28 0 0 0 82 248v-45.58a72 72 0 0 1 22-3.42h4v-18.39a56.2 56.2 0 0 1-26-25.36V93.27a150 150 0 0 0 28.34-12.77c15.4-8.9 28.1-19.56 36.73-30.1 1.76 5.2 4.1 10.4 7.04 15.48 8.8 15.2 21.15 26.35 33.9 32.04v.25q.6.1 1.2.26 1.17.48 2.34.9A12 12 0 0 1 198 110v13a12 12 0 0 1-10.22 11.87A56 56 0 0 1 156 180.6", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { d: "M156 199v-18.39a56 56 0 0 0 31.8-45.74A12 12 0 0 0 198 123v-13a12 12 0 0 0-6.5-10.66 45 45 0 0 0 14.5 2.8v113.47A71.7 71.7 0 0 0 160 199zm-74 3.42v-47.17a56.2 56.2 0 0 0 26 25.36V199h-4c-7.67 0-15.07 1.2-22 3.42m106-104.5v.25q.6.1 1.18.26z", fill: "black", "fill-opacity": ".27" } }] }, straightAndStrand: { elements: [{ name: "path", type: "element", attributes: { d: "M132 18a74 74 0 0 0-74 74v96c0 8.56 1.45 16.78 4.13 24.42A71.7 71.7 0 0 1 104 199h4v-18.39a56 56 0 0 1-31.8-45.74A12 12 0 0 1 66 123v-13a12 12 0 0 1 .46-3.3c17.13-6.02 33.75-21.94 43.59-44.04l1.18-2.76q6.87 18.34 25.89 26.64a87 87 0 0 1-12.45-20.79c7.98 8.5 18.35 16.74 30.48 23.75 14.33 8.27 28.91 13.56 41.87 15.75q.96 2.2.98 4.75v13a12 12 0 0 1-10.2 11.87A56 56 0 0 1 156 180.6V199h4a71.7 71.7 0 0 1 41.88 13.42A74 74 0 0 0 206 188V92a74 74 0 0 0-74-74", fill: { type: "color", name: "hair" } } }, { name: "path", type: "element", attributes: { d: "M110.05 62.66C98.59 88.39 77.95 105.75 58 108.84v4c19.95-3.1 40.59-20.45 52.05-46.18l1.18-2.76q6.87 18.35 25.89 26.63a78 78 0 0 1-4.62-6.26q-15.27-8.35-21.27-24.37a99 99 0 0 1-1.18 2.76m18.45 10.98a137 137 0 0 0 26.65 19.86c17.75 10.25 35.9 15.9 50.85 16.78v-4c-14.95-.87-33.1-6.54-50.85-16.78-12.13-7-22.5-15.24-30.48-23.75a98 98 0 0 0 3.83 7.89", fill: "black", "fill-opacity": ".16" } }] }, theCaesar: { elements: [{ name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M75 98c.35 1.49 1.67 1.22 2 0-.46-1.55 3.3-28.75 13-36 3.62-2.52 23-4.77 42.31-4.75 19.1 0 38.11 2.26 41.69 4.75 9.7 7.25 13.46 34.45 13 36 .33 1.22 1.65 1.49 2 0 .72-10.3 0-63.73-57-63S74.28 87.7 75 98", fill: { type: "color", name: "hair" } } }] }, theCaesarAndSidePart: { elements: [{ name: "path", type: "element", attributes: { d: "M77 98c-.33 1.22-1.65 1.49-2 0-.72-10.3 0-62.27 57-63s57.72 52.7 57 63c-.35 1.49-1.67 1.22-2 0 .46-1.55-3.3-28.75-13-36-1.76-1.22-7.25-2.39-14.64-3.26L163 50l-6.98 8.38c-7.03-.7-15.36-1.13-23.7-1.13C113 57.23 93.62 59.48 90 62c-9.7 7.25-13.46 34.45-13 36", fill: { type: "color", name: "hair" } } }] }, turban: { elements: [{ name: "path", type: "element", attributes: { d: "M189.47 97.5q1.51-3.62 1.53-7.5c0-18.23-26.41-33-59-33-32.58 0-59 14.77-59 33q.02 3.88 1.53 7.5C80.6 82.89 104.03 72 132 72s51.4 10.89 57.47 25.5", fill: "#EDECE3" } }, { name: "path", type: "element", attributes: { d: "M48 94.32C47.93 133.5 77 141 77 141c-5.44-49.55 23.54-65.15 46.53-77.53 2.94-1.58 5.78-3.11 8.44-4.65a310 310 0 0 0 8.48 4.68C163.43 75.87 192.42 91.48 187 141c0 0 29.07-8.46 29-46.68C215.92 47.15 163.85 3 134 3q-1 0-2 .09-1-.1-2-.09c-29.93 0-81.92 44.15-82 91.32", fill: { type: "color", name: "hat" } } }, { name: "path", type: "element", attributes: { d: "M48.01 95.9c.7 37.8 29 45.1 29 45.1s-29.05-7.07-29-43.97zm28.32 33.78c.15-37.86 26.18-51.05 47.2-61.71 11-5.58 20.64-10.47 24.47-17.83 4.13-7.25 5.39-13.94 4.65-19.67A39 39 0 0 1 148 44.54c-3.83 7.82-13.47 13-24.47 18.93-21.14 11.38-47.35 25.49-47.2 66.21", fill: "black", "fill-opacity": ".16" } }] }, winterHat02: { elements: [{ name: "path", type: "element", attributes: { d: "M196 168h-2v56.06a9 9 0 1 0 2 0zm-126 8h-2v56.06a9 9 0 1 0 2 0z", fill: "#F4F4F4" } }, { name: "circle", type: "element", attributes: { cx: "132", cy: "20", r: "20", fill: "#F4F4F4" } }, { name: "path", type: "element", attributes: { d: "M92.45 77.53h79.1c6.08 0 9.82 2.93 9.82 9V166c0 30.46 22.63 30.41 22.63 10.92v-73.86C204 68.8 186.77 21 132 21s-72 47.8-72 82.05v73.86c0 19.5 22.63 19.54 22.63-10.92V86.53c0-6.07 3.73-9 9.82-9", fill: { type: "color", name: "hat" } } }, { name: "path", type: "element", attributes: { d: "M197.67 67H66.33c9.1-24.5 28.93-46 65.67-46s56.58 21.5 65.67 46", fill: "black", "fill-opacity": ".2" } }, { name: "path", type: "element", attributes: { d: "M90.2 33.73 101.5 50 114 32H92.66q-1.25.84-2.46 1.73M171.34 32H151l12.5 18 10.95-15.77q-1.5-1.15-3.11-2.23M132.5 50 120 32h25z", fill: "white", "fill-opacity": ".5" } }, { name: "path", type: "element", attributes: { d: "M98 59 85.5 41 73 59zm31 0-12.5-18L104 59zm18.5-18L160 59h-25zM191 59l-12.5-18L166 59z", fill: "black", "fill-opacity": ".5" } }] }, winterHat03: { elements: [{ name: "circle", type: "element", attributes: { cx: "132", cy: "20", r: "20", fill: "#F4F4F4" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M66 78a66 66 0 1 1 132 0v5H66z", fill: { type: "color", name: "hat" } } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M63 69.77a7 7 0 0 1 3.05-5.96c7.8-5.17 30.42-17.8 66.02-17.8s58.14 12.63 65.9 17.82a7 7 0 0 1 3.03 5.95v30.2c0 3.3-3.9 5.38-6.78 3.75C183.84 97.82 162.1 88 132.8 88a133.6 133.6 0 0 0-63.17 15.98c-2.85 1.56-6.63-.5-6.63-3.75z", fill: "black", "fill-opacity": ".1" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M63 67.77a7 7 0 0 1 3.05-5.96c7.8-5.17 30.42-17.8 66.02-17.8s58.14 12.63 65.9 17.82a7 7 0 0 1 3.03 5.95v30.2c0 3.3-3.9 5.38-6.78 3.75C183.84 95.82 162.1 86 132.8 86a133.6 133.6 0 0 0-63.17 15.98c-2.85 1.56-6.63-.5-6.63-3.75z", fill: "#F4F4F4" } }] }, winterHat04: { elements: [{ name: "path", type: "element", attributes: { d: "M66 65c0-8.16 1.6-15.95 4.5-23.06-3.86-8.95-8.33-22.96-3.86-32.82 8-2.43 17.8 1.33 25.63 5.73A60.7 60.7 0 0 1 127 4h10c12.91 0 24.9 4.01 34.75 10.86 7.84-4.4 17.66-8.17 25.67-5.74 4.47 9.88-.03 23.94-3.9 32.88A61 61 0 0 1 198 65v8H66z", fill: { type: "color", name: "hat" } } }, { name: "path", type: "element", attributes: { d: "M193.52 42c3.87-8.94 8.37-23 3.9-32.88-8-2.43-17.83 1.34-25.66 5.74A61 61 0 0 1 193.52 42M92.27 14.85c-7.83-4.4-17.63-8.16-25.63-5.73-4.47 9.86 0 23.87 3.87 32.82 4.5-11 12.12-20.4 21.76-27.1", fill: "black", "fill-opacity": ".24" } }, { name: "path", type: "element", attributes: { d: "M189.2 33.42c1.99-6 3.5-12.86 1.49-16.1-2.67-1.16-7.59.47-12.4 2.77a61 61 0 0 1 10.9 13.33M85.66 20.14c-4.92-2.38-10-4.11-12.73-2.93-2.06 3.33-.42 10.47 1.64 16.59a61 61 0 0 1 11.1-13.66", fill: "white", "fill-opacity": ".3" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M63 69.77a7 7 0 0 1 3.05-5.96c7.8-5.16 30.42-17.8 66.02-17.8s58.14 12.64 65.9 17.83a7 7 0 0 1 3.03 5.95v30.2c0 3.3-3.9 5.38-6.78 3.75C183.84 97.82 162.1 88 132.8 88a133.6 133.6 0 0 0-63.17 15.98c-2.85 1.56-6.63-.5-6.63-3.75z", fill: "black", "fill-opacity": ".1" } }, { name: "path", type: "element", attributes: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M63 67.77a7 7 0 0 1 3.05-5.96c7.8-5.16 30.42-17.8 66.02-17.8s58.14 12.64 65.9 17.83a7 7 0 0 1 3.03 5.95v30.2c0 3.3-3.9 5.38-6.78 3.75C183.84 95.82 162.1 86 132.8 86a133.6 133.6 0 0 0-63.17 15.98c-2.85 1.56-6.63-.5-6.63-3.75z", fill: "#F4F4F4" } }] }, winterHat1: { elements: [{ name: "path", type: "element", attributes: { d: "M85.67 68H63v112.91a4.1 4.1 0 0 0 4.09 4.1 18.6 18.6 0 0 0 18.58-18.6zM201 68h-22.67v112.91a4.1 4.1 0 0 0 4.09 4.1 18.6 18.6 0 0 0 18.58-18.6z", fill: "#F4F4F4" } }, { name: "path", type: "element", attributes: { d: "M62 64a44 44 0 0 1 44-44h52a44 44 0 0 1 44 44v104.6a16.4 16.4 0 0 1-16.4 16.4 3.6 3.6 0 0 1-3.6-3.6V74H82v94.6A16.4 16.4 0 0 1 65.6 185a3.6 3.6 0 0 1-3.6-3.6z", fill: { type: "color", name: "hat" } } }, { name: "rect", type: "element", attributes: { x: "73", y: "52", width: "118", height: "36", rx: "8", fill: "black", "fill-opacity": ".1" } }, { name: "rect", type: "element", attributes: { x: "73", y: "50", width: "118", height: "36", rx: "8", fill: "#F4F4F4" } }] } } } }, colors: { accessories: { notEqualTo: ["background"], values: ["#262e33", "#65c9ff", "#5199e4", "#25557c", "#e6e6e6", "#929598", "#3c4f5c", "#b1e2ff", "#a7ffc4", "#ffdeb5", "#ffafb9", "#ffffb1", "#ff488e", "#ff5c5c", "#ffffff"] }, clothes: { notEqualTo: ["background", "skin"], values: ["#262e33", "#65c9ff", "#5199e4", "#25557c", "#e6e6e6", "#929598", "#3c4f5c", "#b1e2ff", "#a7ffc4", "#ffafb9", "#ffffb1", "#ff488e", "#ff5c5c", "#ffffff"] }, facialHair: { notEqualTo: ["background", "skin"], values: ["#a55728", "#2c1b18", "#b58143", "#d6b370", "#724133", "#4a312c", "#f59797", "#ecdcbf", "#c93305", "#e8e1e1"] }, hair: { notEqualTo: ["background"], values: ["#a55728", "#2c1b18", "#b58143", "#d6b370", "#724133", "#4a312c", "#f59797", "#ecdcbf", "#c93305", "#e8e1e1"] }, hat: { notEqualTo: ["background", "skin"], values: ["#262e33", "#65c9ff", "#5199e4", "#25557c", "#e6e6e6", "#929598", "#3c4f5c", "#b1e2ff", "#a7ffc4", "#ffdeb5", "#ffafb9", "#ffffb1", "#ff488e", "#ff5c5c", "#ffffff"] }, skin: { notEqualTo: ["background"], values: ["#614335", "#d08b5b", "#ae5d29", "#edb98a", "#ffdbb4", "#fd9841", "#f8d25c"] } } };

  // coach/state.js
  var COACH_STORAGE_KEY = "speakup-profile-v1";
  var OLD_HAIR_STYLE = { "curly-bob": "curly", "side-braid": "sides", pixie: "shortCurly", "long-wavy": "longButNotTooLong", "combed-back": "shortWaved", "side-part": "theCaesarAndSidePart", "bald-tuften": "shortFlat", "short-crop": "shortRound", "wild-tufts": "frizzle" };
  var OLD_GLASSES = { square: "prescription02", none: "none", round: "round", sunglasses: "sunglasses" };
  var OLD_CLOTHES = { blazer: "blazerAndShirt", cardigan: "collarAndSweater", sweater: "collarAndSweater", hoodie: "hoodie", shirt: "shirtCrewNeck" };
  var OLD_SKIN_TONES = { "#edc39c": "#edb98a", "#d99d76": "#d08b5b", "#bd805e": "#ae5d29" };
  var OLD_BASES = { grandma: "woman", grandpa: "man", woman: "woman", man: "man" };
  var VALID = {
    hair: new Set(coachOptionsFor("hair", "woman").concat(coachOptionsFor("hair", "man")).map((part) => part.id)),
    glasses: new Set(coachOptionsFor("glasses").map((part) => part.id)),
    hats: new Set(coachOptionsFor("hats").map((part) => part.id)),
    eyes: new Set(coachOptionsFor("eyes").map((part) => part.id)),
    mouth: new Set(coachOptionsFor("mouth").map((part) => part.id)),
    brows: new Set(coachOptionsFor("brows").map((part) => part.id)),
    facialHair: new Set(coachOptionsFor("facialHair", "man").map((part) => part.id)),
    neck: new Set(coachOptionsFor("neckwear").map((part) => part.id))
  };
  function defaultCoachConfig() {
    return withLegacyFields({
      version: 3,
      base: "woman",
      skin: COACH_PALETTE.skin[1],
      hair: { style: HAIR_DEFAULTS.woman, color: "#5a4035" },
      glasses: { style: "prescription02", color: COACH_PALETTE.glasses[0] },
      top: { style: "blazerAndShirt", color: "#0058be", pattern: "solid" },
      neck: { style: "scarf", color: COACH_PALETTE.green },
      hat: { style: "none", color: COACH_PALETTE.blue },
      face: { eyes: "default", mouth: "smile", brows: "default", facialHair: "none" },
      accessories: []
    });
  }
  function normalizeCoachConfig(input = {}) {
    const raw = input && typeof input === "object" ? input : {};
    const defaults = defaultCoachConfig();
    const base = OLD_BASES[raw.base] || OLD_BASES[raw.character] || defaults.base;
    const rawHair = raw.hair && typeof raw.hair === "object" ? raw.hair : {};
    const oldHairColor = typeof raw.hair === "string" ? raw.hair : raw.hairColor;
    const hairColor = validColor(rawHair.color || oldHairColor, COACH_PALETTE.hair) || defaults.hair.color;
    const oldHairStyle = OLD_HAIR_STYLE[rawHair.style] || rawHair.style;
    const hairChoices = new Set(coachOptionsFor("hair", base).map((part) => part.id));
    const hairStyle = hairChoices.has(oldHairStyle) ? oldHairStyle : HAIR_DEFAULTS[base];
    const rawGlasses = raw.glasses && typeof raw.glasses === "object" ? raw.glasses : {};
    const rawTop = raw.top && typeof raw.top === "object" ? raw.top : {};
    const rawNeck = raw.neck && typeof raw.neck === "object" ? raw.neck : {};
    const rawHat = raw.hat && typeof raw.hat === "object" ? raw.hat : {};
    const rawFace = raw.face && typeof raw.face === "object" ? raw.face : {};
    const oldGlasses = rawGlasses.style || (typeof raw.glasses === "string" ? raw.glasses : defaults.glasses.style);
    const oldTop = rawTop.style || defaults.top.style;
    const mappedTop = OLD_CLOTHES[oldTop] || oldTop;
    const topChoices = new Set(coachOptionsFor("clothes", base).map((part) => part.id));
    const accessories = Array.isArray(raw.accessories) ? [...new Set(raw.accessories.filter((item) => typeof item === "string" && coachOptionsFor("extras", base).some((part) => part.id === item) && item !== "none"))].slice(0, 3) : [];
    return withLegacyFields({
      ...defaults,
      ...raw,
      version: 3,
      base,
      skin: OLD_SKIN_TONES[String(raw.skin || "").toLowerCase()] || validColor(raw.skin, COACH_PALETTE.skin) || defaults.skin,
      hair: { style: hairStyle, color: hairColor },
      glasses: {
        style: VALID.glasses.has(OLD_GLASSES[oldGlasses] || oldGlasses) ? OLD_GLASSES[oldGlasses] || oldGlasses : "none",
        color: validColor(rawGlasses.color, COACH_PALETTE.glasses) || defaults.glasses.color
      },
      top: {
        style: topChoices.has(mappedTop) ? mappedTop : defaults.top.style,
        color: validColor(rawTop.color || raw.shirt, COACH_PALETTE.clothes) || defaults.top.color,
        pattern: ["solid", "stripes", "checks", "dots"].includes(rawTop.pattern) ? rawTop.pattern : "solid"
      },
      neck: {
        style: VALID.neck.has(rawNeck.style || raw.accessory) ? rawNeck.style || raw.accessory : defaults.neck.style,
        color: validColor(rawNeck.color, COACH_PALETTE.clothes) || defaults.neck.color
      },
      hat: {
        style: VALID.hats.has(rawHat.style) ? rawHat.style : "none",
        color: validColor(rawHat.color, COACH_PALETTE.clothes) || defaults.hat.color
      },
      face: {
        eyes: VALID.eyes.has(rawFace.eyes) ? rawFace.eyes : defaults.face.eyes,
        mouth: VALID.mouth.has(rawFace.mouth) ? rawFace.mouth : defaults.face.mouth,
        brows: VALID.brows.has(rawFace.brows) ? rawFace.brows : defaults.face.brows,
        facialHair: base === "man" && VALID.facialHair.has(rawFace.facialHair) ? rawFace.facialHair : "none"
      },
      accessories
    });
  }
  function validColor(value, allowed) {
    if (typeof value !== "string" || !/^#[\da-f]{6}$/i.test(value)) return null;
    return allowed && !allowed.includes(value.toLowerCase()) ? null : value.toLowerCase();
  }
  function withLegacyFields(config) {
    const normalized = { ...config };
    const base = COACH_BASES.includes(normalized.base) ? normalized.base : "woman";
    const hair = typeof normalized.hair === "object" ? normalized.hair : { style: HAIR_DEFAULTS[base], color: COACH_PALETTE.hair[1] };
    const glasses = typeof normalized.glasses === "object" ? normalized.glasses : { style: "none", color: COACH_PALETTE.glasses[0] };
    const top = typeof normalized.top === "object" ? normalized.top : { style: "blazerAndShirt", color: normalized.shirt || "#0058be", pattern: "solid" };
    const neck = typeof normalized.neck === "object" ? normalized.neck : { style: normalized.accessory || "scarf", color: "#168c91" };
    return { ...normalized, base, character: base, hair: { ...hair }, glasses: { ...glasses }, top, neck, hairColor: hair.color, shirt: top.color, accessory: neck.style };
  }
  function readSavedCoachConfig() {
    try {
      const profile = JSON.parse(localStorage.getItem(COACH_STORAGE_KEY) || "null");
      return normalizeCoachConfig(profile?.mascot || {});
    } catch {
      return defaultCoachConfig();
    }
  }
  function saveCoachConfig(config) {
    const normalized = normalizeCoachConfig(config);
    try {
      const profile = JSON.parse(localStorage.getItem(COACH_STORAGE_KEY) || "{}") || {};
      localStorage.setItem(COACH_STORAGE_KEY, JSON.stringify({ ...profile, mascot: normalized }));
    } catch {
    }
    return normalized;
  }

  // coach/render.js
  var avatarStyle = new Style(avataaars_min_default);
  var ink = COACH_PALETTE.ink;
  function renderCoachSvg(input, { title = "SpeakUp coach" } = {}) {
    const config = normalizeCoachConfig(input);
    const customHat = ["beret", "sun-hat", "fedora"].includes(config.hat.style);
    const topVariant = config.hat.style === "none" || customHat ? config.hair.style : config.hat.style;
    const topColor = config.hat.style === "none" ? config.hair.color : config.hat.color;
    const customGlasses = ["cat-eye", "monocle"].includes(config.glasses.style);
    const face = config.face;
    const clothingVariant = config.top.style;
    const svg = new Avatar(avatarStyle, {
      seed: `speakup-${config.base}`,
      size: 280,
      idRandomization: true,
      topProbability: 100,
      topVariant: [topVariant],
      topColor: [topColor],
      hairColor: [config.hair.color],
      accessoriesProbability: config.glasses.style === "none" || customGlasses ? 0 : 100,
      accessoriesVariant: ["none", "cat-eye", "monocle"].includes(config.glasses.style) ? ["round"] : [config.glasses.style],
      accessoriesColor: [config.glasses.color],
      clothesVariant: [clothingVariant],
      clothesColor: [config.top.color],
      skinColor: [config.skin],
      eyesVariant: [face.eyes],
      mouthVariant: [face.mouth],
      eyebrowsVariant: [face.brows],
      facialHairProbability: config.base === "man" && face.facialHair !== "none" ? 100 : 0,
      facialHairVariant: [face.facialHair === "none" ? "beardLight" : face.facialHair],
      facialHairColor: [config.hair.color]
    }).toString();
    const additions = `${patternLayer(config)}${neckwearLayer(config)}${clothesDetailLayer(config)}${accessoryLayer(config)}${hatLayer(config)}${glassesLayer(config)}`;
    const accessibleTitle = escapeXml(title);
    return svg.replace('aria-hidden="true"', `role="img" aria-label="${accessibleTitle}"`).replace("<!-- Generated by DiceBear (https://www.dicebear.com) -->", `<title>${accessibleTitle}</title>`).replace("</svg>", `${additions}</svg>`);
  }
  function coachSvgDataUri(config, { title = "" } = {}) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(renderCoachSvg(config, { title }))}`;
  }
  function patternLayer(config) {
    const pattern = config.top.pattern;
    if (pattern === "solid") return "";
    const patternColor = contrastColor(config.top.color);
    const strokes = pattern === "stripes" ? Array.from({ length: 7 }, (_, index) => `<path d="M${92 + index * 16} 218v66"/>`).join("") : pattern === "checks" ? `<path d="M93 220v58m22-58v58m22-58v58m22-58v58m22-58v58M85 232h110m-110 22h110m-110 22h110"/>` : Array.from({ length: 15 }, (_, index) => `<circle cx="${98 + index % 5 * 20}" cy="${229 + Math.floor(index / 5) * 18}" r="2.4"/>`).join("");
    return `<defs><clipPath id="coach-pattern-clip"><path d="M67 215c8-14 23-25 42-30l31 22 31-22c20 6 35 17 42 30l8 65H59z"/></clipPath></defs><g fill="none" stroke="${patternColor}" stroke-opacity=".4" stroke-width="2.4" stroke-linecap="round" clip-path="url(#coach-pattern-clip)">${strokes}</g>`;
  }
  function neckwearLayer(config) {
    const color = config.neck.color;
    const line = `stroke="${ink}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;
    const details = {
      none: "",
      tie: `<path d="m124 190 16 8 16-8-4 14 6 42-18 18-18-18 6-42z" fill="${color}" ${line}/><path d="m124 190 16 8 16-8" fill="none" ${line}/>`,
      "bow-tie": `<path d="m121 193 15 4-2 12-17-3zm38 0-15 4 2 12 17-3z" fill="${color}" ${line}/><circle cx="140" cy="201" r="4" fill="${contrastColor(color)}" ${line}/>`,
      scarf: `<path d="M112 183c5 12 15 18 28 18s23-6 28-18l-7 22h-42z" fill="${color}" ${line}/><path d="m156 202 7 35-13-6-2-27" fill="${color}" ${line}/>`,
      bandana: `<path d="m113 186 13-5 14 10 14-10 13 5-8 18h-38z" fill="${color}" ${line}/><path d="m140 191-7 12h14z" fill="${contrastColor(color)}"/>`,
      ascot: `<path d="m126 184 14 10 14-10-4 17 8 25-18 18-18-18 8-25z" fill="${color}" ${line}/><path d="m126 184 14 10 14-10" fill="none" ${line}/>`,
      pearls: Array.from({ length: 9 }, (_, index) => {
        const x = 112 + index * 7;
        const y = 190 + Math.round(Math.abs(index - 4) * 1.4);
        return `<circle cx="${x}" cy="${y}" r="3.2" fill="#fffefd" ${line}/>`;
      }).join("")
    }[config.neck.style];
    return details ? `<g aria-hidden="true">${details}</g>` : "";
  }
  function clothesDetailLayer() {
    return "";
  }
  function accessoryLayer(config) {
    return config.accessories.map((id, index) => {
      const tint = [COACH_PALETTE.yellow, COACH_PALETTE.red, COACH_PALETTE.blue][index % 3];
      const x = index === 0 ? 170 : index === 1 ? 106 : 140;
      const y = index === 0 ? 218 : index === 1 ? 230 : 250;
      const line = `stroke="${ink}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;
      const shapes = {
        brooch: `<circle cx="${x}" cy="${y}" r="8" fill="${tint}" ${line}/><circle cx="${x}" cy="${y}" r="3" fill="#fffefd"/>`,
        "star-pin": `<path d="m${x} ${y - 9} 2.8 6 6.2.8-4.5 4.3 1.1 6.2-5.6-3-5.6 3 1.1-6.2-4.5-4.3 6.2-.8z" fill="${tint}" ${line}/>`,
        medal: `<path d="m${x - 4} ${y - 13} 4 9 4-9" fill="${tint}" ${line}/><circle cx="${x}" cy="${y + 1}" r="7" fill="${COACH_PALETTE.yellow}" ${line}/><path d="m${x} ${y - 3} 1.2 2.6 2.8.3-2 1.9.5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-1.9 2.8-.3z" fill="${COACH_PALETTE.red}"/>`,
        flower: `<g ${line}><circle cx="${x}" cy="${y}" r="3" fill="${COACH_PALETTE.yellow}"/><circle cx="${x}" cy="${y - 6}" r="4" fill="${COACH_PALETTE.red}"/><circle cx="${x + 6}" cy="${y}" r="4" fill="${COACH_PALETTE.red}"/><circle cx="${x}" cy="${y + 6}" r="4" fill="${COACH_PALETTE.red}"/><circle cx="${x - 6}" cy="${y}" r="4" fill="${COACH_PALETTE.red}"/></g>`,
        "pocket-square": `<path d="M${x - 9} ${y - 5}h18v15l-9-5-9 5z" fill="${tint}" ${line}/>`,
        earrings: `<g ${line}><circle cx="98" cy="112" r="4" fill="${tint}"/><circle cx="182" cy="112" r="4" fill="${tint}"/></g>`,
        badge: `<rect x="${x - 12}" y="${y - 9}" width="24" height="18" rx="3" fill="#fffefd" ${line}/><path d="M${x - 7} ${y - 3}h14M${x - 7} ${y + 2}h8" stroke="${tint}" stroke-width="2" stroke-linecap="round"/>`,
        chain: `<path d="M${x - 13} ${y - 8}q13 19 26 0m-26 0q-5 6 0 11m26-11q5 6 0 11" fill="none" stroke="${tint}" stroke-width="3" stroke-linecap="round"/>`
      }[id];
      return shapes || "";
    }).join("");
  }
  function hatLayer(config) {
    if (!["beret", "sun-hat", "fedora"].includes(config.hat.style)) return "";
    const color = config.hat.color;
    const line = `stroke="${ink}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
    const shapes = {
      beret: `<path d="M83 66c1-25 22-42 55-42 28 0 49 14 55 37-30-8-73-7-110 5z" fill="${color}" ${line}/><path d="M137 25q6-10 15-8" fill="none" ${line}/><path d="M89 61q42-16 96-4" fill="none" stroke="${contrastColor(color)}" stroke-width="2" stroke-linecap="round"/>`,
      "sun-hat": `<path d="M99 51c4-22 18-34 41-34s37 12 41 34l5 8H94z" fill="${color}" ${line}/><path d="M68 59q72-16 144 0-4 15-72 17-68-2-72-17z" fill="${color}" ${line}/><path d="M103 54q37-9 74 0" fill="none" stroke="${contrastColor(color)}" stroke-width="2.5"/>`,
      fedora: `<path d="M100 52q7-28 40-28t40 28l4 9H96z" fill="${color}" ${line}/><path d="M73 61q67-14 134 0-4 12-67 13-63-1-67-13z" fill="${color}" ${line}/><path d="M101 54h78" fill="none" stroke="${contrastColor(color)}" stroke-width="4"/>`
    }[config.hat.style];
    return `<g aria-hidden="true">${shapes}</g>`;
  }
  function glassesLayer(config) {
    const color = config.glasses.color;
    const line = `fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`;
    if (config.glasses.style === "cat-eye") {
      return `<g aria-hidden="true" ${line}><path d="M56 61q21-12 48-3l-4 20q-9 12-25 10-18-2-19-27z"/><path d="M224 61q-21-12-48-3l4 20q9 12 25 10 18-2 19-27z"/><path d="M104 62q22-13 32-2m12 0q10-11 32 2"/></g>`;
    }
    if (config.glasses.style === "monocle") {
      return `<g aria-hidden="true" ${line}><circle cx="88" cy="70" r="22"/><path d="M104 88q13 21 2 38"/></g>`;
    }
    return "";
  }
  function contrastColor(hex) {
    const rgb = hex.slice(1).match(/.{2}/g).map((part) => parseInt(part, 16));
    return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3 > 150 ? ink : "#fffefd";
  }
  function escapeXml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);
  }

  // coach/export.js
  function download(url, filename) {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function downloadCoachSvg(config) {
    const svg = renderCoachSvg(config, { title: "My SpeakUp coach" });
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
    download(url, "speakup-coach.svg");
  }
  function downloadCoachPng(config) {
    const svg = renderCoachSvg(config, { title: "My SpeakUp coach" });
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 960;
      canvas.height = 960;
      const context = canvas.getContext("2d");
      if (!context) {
        URL.revokeObjectURL(url);
        return;
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) download(URL.createObjectURL(blob), "speakup-coach.png");
        URL.revokeObjectURL(url);
      }, "image/png");
    };
    image.onerror = () => URL.revokeObjectURL(url);
    image.src = url;
  }

  // coach/ui.js
  var iconSet = {
    "users-round": UsersRound,
    scissors: Scissors,
    smile: FaceSlightlySmiling,
    glasses: Glasses,
    shirt: Shirt,
    badge: Badge,
    "hat-glasses": HatGlasses,
    sparkles: Sparkles,
    shuffle: Shuffle,
    "rotate-ccw": RotateCcw,
    "undo-2": Undo2,
    "redo-2": Redo2,
    download: Download,
    check: Check,
    "chevron-down": ChevronDown
  };
  var preview = document.querySelector("#profileMascot");
  var customizer = document.querySelector("#mascotCustomizer");
  if (preview && customizer) {
    let rememberChange = function() {
      undoStack.push(JSON.stringify(config));
      if (undoStack.length > maxHistory) undoStack.shift();
      redoStack.length = 0;
    }, update = function(next, { remember = true } = {}) {
      if (remember) rememberChange();
      config = saveCoachConfig(normalizeCoachConfig(next));
      render();
      window.dispatchEvent(new CustomEvent("speakup:coach-change", { detail: { config } }));
    }, applyChoice = function(path, value, target = config) {
      const next = JSON.parse(JSON.stringify(target));
      const keys = path.split(".");
      const leaf = keys.pop();
      const parent = keys.reduce((result, key) => result[key], next);
      parent[leaf] = value;
      if (path === "base") {
        if (!coachOptionsFor("hair", value).some((part) => part.id === next.hair.style)) next.hair.style = HAIR_DEFAULTS[value];
        if (value !== "man") next.face.facialHair = "none";
      }
      if (path === "top.style") {
        const clothing = coachOptionsFor("clothes", next.base).find((part) => part.id === value);
        if (clothing?.suggestedColor) next.top.color = clothing.suggestedColor;
      }
      return normalizeCoachConfig(next);
    }, candidateFor = function(path, value) {
      return applyChoice(path, value);
    }, optionGrid = function({ label, choice, path, selected = null, overrides = {}, bases = config.base, selectedValues = null, accessory = false }) {
      const values = choice ? coachOptionsFor(choice, bases) : overrides.values || [];
      if (!values.length) return "";
      if (selected === null && path) selected = configValue(path);
      const id = `coach-options-${slug(label)}`;
      const cards = values.map((part) => {
        const value = part.id;
        let sample;
        let isSelected;
        if (accessory) {
          const chosen = config.accessories.includes(value);
          sample = normalizeCoachConfig({ ...config, accessories: chosen ? config.accessories : [...config.accessories.slice(0, 2), value] });
          isSelected = chosen;
        } else {
          sample = candidateFor(path, value);
          if (choice === "clothes" && part.suggestedColor) sample.top.color = part.suggestedColor;
          if (path === "hair.style") sample = normalizeCoachConfig({ ...sample, hat: { ...sample.hat, style: "none" } });
          isSelected = selectedValues ? selectedValues.includes(value) : value === selected;
        }
        const previewTitle = `${part.label} ${label.toLowerCase()} preview`;
        const actionAttrs = accessory ? `aria-pressed="${isSelected}" data-accessory="${value}"` : `role="radio" aria-checked="${isSelected}" tabindex="${isSelected ? "0" : "-1"}" data-setting="${path}" data-value="${value}"`;
        return `<button class="coach-option${isSelected ? " is-selected" : ""}" type="button" ${actionAttrs} aria-label="${escapeHtml(part.label)}${accessory ? isSelected ? ", selected" : ", add extra" : ""}"><span class="coach-option-art"><img src="${coachSvgDataUri(sample, { title: previewTitle })}" alt="" loading="lazy"></span><span class="coach-option-label">${escapeHtml(part.label)}</span><span class="coach-option-check" aria-hidden="true" data-lucide="check"></span></button>`;
      }).join("");
      const role = accessory ? "group" : "radiogroup";
      return `<fieldset class="coach-field"><legend>${escapeHtml(label)}${accessory ? `<span class="coach-field-note" id="coachAccessoryCount">${config.accessories.length} of 3 selected</span>` : ""}</legend><div class="coach-option-grid" id="${id}" role="${role}" aria-label="${escapeHtml(label)}">${cards}</div></fieldset>`;
    }, swatches = function(label, palette, path, current) {
      const options = palette.map((color, index) => {
        const selected = current === color;
        const name = colorName(color, index, palette.length);
        return `<button class="coach-swatch-option${selected ? " is-selected" : ""}" type="button" role="radio" aria-checked="${selected}" tabindex="${selected ? "0" : "-1"}" aria-label="${escapeHtml(name)}" data-setting="${path}" data-value="${color}"><span class="coach-swatch swatch-${color.slice(1)}" aria-hidden="true"></span><span class="coach-swatch-check" aria-hidden="true" data-lucide="check"></span></button>`;
      }).join("");
      return `<fieldset class="coach-field coach-color-field"><legend>${escapeHtml(label)}</legend><div class="coach-swatches" role="radiogroup" aria-label="${escapeHtml(label)}">${options}</div></fieldset>`;
    }, patternChoices = function() {
      const values = [
        ["solid", "Solid"],
        ["stripes", "Stripes"],
        ["checks", "Checks"],
        ["dots", "Dots"]
      ];
      return `<fieldset class="coach-field"><legend>Pattern</legend><div class="coach-patterns" role="radiogroup" aria-label="Choose a clothing pattern">${values.map(([id, label]) => {
        const selected = config.top.pattern === id;
        return `<button class="coach-pattern-option${selected ? " is-selected" : ""}" type="button" role="radio" aria-checked="${selected}" tabindex="${selected ? "0" : "-1"}" data-setting="top.pattern" data-value="${id}" aria-label="${label}"><span class="coach-pattern-sample pattern-${id}" data-color="${config.top.color}" aria-hidden="true"></span><span>${label}</span><span class="coach-option-check" aria-hidden="true" data-lucide="check"></span></button>`;
      }).join("")}</div></fieldset>`;
    }, renderPanel = function() {
      const category = COACH_CATEGORIES.find((item) => item.id === activeTab) || COACH_CATEGORIES[0];
      const commonHeader = `<div class="coach-panel-heading"><h3>${category.label}</h3><p>${category.description}</p></div>`;
      let content = "";
      if (activeTab === "base") {
        content = `${optionGrid({ label: "Player avatar", choice: "base", path: "base", bases: "woman" })}${swatches("Skin tone", COACH_PALETTE.skin, "skin", config.skin)}`;
      } else if (activeTab === "hair") {
        content = `${optionGrid({ label: "Hairstyle", choice: "hair", path: "hair.style" })}${swatches("Hair color", COACH_PALETTE.hair, "hair.color", config.hair.color)}`;
      } else if (activeTab === "face") {
        content = `${optionGrid({ label: "Eyes", choice: "eyes", path: "face.eyes" })}${optionGrid({ label: "Expression", choice: "mouth", path: "face.mouth" })}${optionGrid({ label: "Brows", choice: "brows", path: "face.brows" })}${config.base === "man" ? optionGrid({ label: "Facial hair", choice: "facialHair", path: "face.facialHair" }) : ""}`;
      } else if (activeTab === "glasses") {
        content = `${optionGrid({ label: "Frames", choice: "glasses", path: "glasses.style" })}${swatches("Frame color", COACH_PALETTE.glasses, "glasses.color", config.glasses.color)}`;
      } else if (activeTab === "clothes") {
        content = `${optionGrid({ label: "Clothing", choice: "clothes", path: "top.style" })}${swatches("Main color", COACH_PALETTE.clothes, "top.color", config.top.color)}${patternChoices()}`;
      } else if (activeTab === "neckwear") {
        content = `${optionGrid({ label: "Neckwear", choice: "neckwear", path: "neck.style" })}${swatches("Color", COACH_PALETTE.clothes, "neck.color", config.neck.color)}`;
      } else if (activeTab === "hats") {
        content = `${optionGrid({ label: "Hat", choice: "hats", path: "hat.style" })}${swatches("Hat color", COACH_PALETTE.clothes, "hat.color", config.hat.color)}`;
      } else if (activeTab === "extras") {
        content = `${optionGrid({ label: "Add up to three details", choice: "extras", accessory: true })}<p class="coach-extra-hint" id="coachExtraHint" role="status">Choose any three details to finish the look.</p>`;
      }
      return `<section class="coach-panel" id="coachPickerPanel" role="tabpanel" aria-labelledby="coachTab${slug(category.id)}">${commonHeader}<div class="coach-panel-content">${content}</div></section>`;
    }, renderTabs = function() {
      return COACH_CATEGORIES.map((category) => {
        const selected = category.id === activeTab;
        return `<button type="button" class="coach-tab${selected ? " is-active" : ""}" id="coachTab${slug(category.id)}" role="tab" aria-controls="coachPickerPanel" aria-selected="${selected}" tabindex="${selected ? "0" : "-1"}" data-coach-tab="${category.id}" aria-label="${category.label}"><span class="coach-tab-icon" data-lucide="${category.icon}" aria-hidden="true"></span><span>${category.label}</span></button>`;
      }).join("");
    }, render = function() {
      const name = config.base === "man" ? "Young man" : "Young woman";
      preview.innerHTML = renderCoachSvg(config, { title: `Your ${name.toLowerCase()} player avatar` });
      preview.setAttribute("role", "group");
      preview.setAttribute("aria-label", `Live preview: your ${name.toLowerCase()} player avatar`);
      const caption = customizer.querySelector("#mascotName");
      if (caption) caption.textContent = `Your ${name.toLowerCase()} avatar`;
      const summary = customizer.querySelector("#coachLookSummary");
      if (summary) summary.textContent = lookSummary();
      const tablist = customizer.querySelector("#coachTabs");
      if (tablist) tablist.innerHTML = renderTabs();
      const panel = customizer.querySelector(".coach-picker-panel");
      if (panel) panel.innerHTML = renderPanel();
      const undo = customizer.querySelector('[data-action="undo"]');
      const redo = customizer.querySelector('[data-action="redo"]');
      if (undo) undo.disabled = undoStack.length === 0;
      if (redo) redo.disabled = redoStack.length === 0;
      const customCount = customizer.querySelector("#coachLookCount");
      if (customCount) customCount.textContent = `${config.accessories.length} ${config.accessories.length === 1 ? "extra" : "extras"}`;
      createIcons({ icons: iconSet, attrs: { class: "coach-icon", "aria-hidden": "true", focusable: "false" }, root: customizer });
    }, configValue = function(path) {
      return path.split(".").reduce((result, key) => result?.[key], config);
    }, lookSummary = function() {
      const hair = coachOptionsFor("hair", config.base).find((part) => part.id === config.hair.style)?.label || "Custom style";
      const clothes = coachOptionsFor("clothes", config.base).find((part) => part.id === config.top.style)?.label || "Outfit";
      const glasses = coachOptionsFor("glasses", config.base).find((part) => part.id === config.glasses.style)?.label;
      return [hair, glasses && glasses !== "No glasses" ? `${glasses} glasses` : "", clothes].filter(Boolean).join(" \xB7 ");
    }, setTab = function(id, focus = false) {
      activeTab = id;
      render();
      if (focus) customizer.querySelector(`[data-coach-tab="${id}"]`)?.focus();
    }, restoreOptionFocus = function(path, value) {
      customizer.querySelectorAll("[data-setting]").forEach((option) => {
        if (option.dataset.setting === path) option.tabIndex = option.dataset.value === value ? 0 : -1;
      });
      customizer.querySelector(`[data-setting="${path}"][data-value="${value}"]`)?.focus();
    }, randomizedConfig = function() {
      const base = pick(COACH_BASES);
      const clothes = coachOptionsFor("clothes", base);
      const extras = coachOptionsFor("extras", base).map((part) => part.id);
      return normalizeCoachConfig({
        ...config,
        base,
        skin: pick(COACH_PALETTE.skin),
        hair: { style: pick(coachOptionsFor("hair", base)).id, color: pick(COACH_PALETTE.hair) },
        glasses: { style: pick(coachOptionsFor("glasses").map((part) => part.id)), color: pick(COACH_PALETTE.glasses) },
        top: { style: pick(clothes).id, color: pick(COACH_PALETTE.clothes), pattern: pick(["solid", "stripes", "checks", "dots"]) },
        neck: { style: pick(coachOptionsFor("neckwear").map((part) => part.id)), color: pick(COACH_PALETTE.clothes) },
        hat: { style: pick(coachOptionsFor("hats").map((part) => part.id)), color: pick(COACH_PALETTE.clothes) },
        face: {
          eyes: pick(coachOptionsFor("eyes").map((part) => part.id)),
          mouth: pick(coachOptionsFor("mouth").map((part) => part.id)),
          brows: pick(coachOptionsFor("brows").map((part) => part.id)),
          facialHair: base === "man" ? pick(coachOptionsFor("facialHair", base).map((part) => part.id)) : "none"
        },
        accessories: [...new Set(Array.from({ length: Math.floor(Math.random() * 4) }, () => pick(extras)))]
      });
    }, restoreHistory = function(from, to) {
      to.push(JSON.stringify(config));
      config = saveCoachConfig(normalizeCoachConfig(JSON.parse(from.pop())));
      render();
      window.dispatchEvent(new CustomEvent("speakup:coach-change", { detail: { config } }));
    };
    let config = readSavedCoachConfig();
    let activeTab = "base";
    const undoStack = [];
    const redoStack = [];
    const maxHistory = 40;
    customizer.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-coach-tab]");
      if (tab) {
        setTab(tab.dataset.coachTab);
        return;
      }
      const setting = event.target.closest("[data-setting]");
      if (setting) {
        const path = setting.dataset.setting;
        const value = setting.dataset.value;
        update(applyChoice(path, value));
        restoreOptionFocus(path, value);
        return;
      }
      const accessory = event.target.closest("[data-accessory]");
      if (accessory) {
        const value = accessory.dataset.accessory;
        const selected = config.accessories.includes(value);
        if (!selected && config.accessories.length >= 3) {
          const hint = customizer.querySelector("#coachExtraHint");
          if (hint) hint.textContent = "You already have three details. Remove one to add another.";
          return;
        }
        update({ ...config, accessories: selected ? config.accessories.filter((item) => item !== value) : [...config.accessories, value] });
        return;
      }
      const action = event.target.closest("[data-action]")?.dataset.action;
      if (action === "reset") update(defaultCoachConfig());
      if (action === "randomize") update(randomizedConfig());
      if (action === "undo" && undoStack.length) restoreHistory(undoStack, redoStack);
      if (action === "redo" && redoStack.length) restoreHistory(redoStack, undoStack);
      if (action === "download-svg") downloadCoachSvg(config);
      if (action === "download-png") downloadCoachPng(config);
    });
    customizer.addEventListener("keydown", (event) => {
      const tab = event.target.closest("[data-coach-tab]");
      if (tab && ["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        const index2 = COACH_CATEGORIES.findIndex((item) => item.id === tab.dataset.coachTab);
        const next2 = event.key === "Home" ? 0 : event.key === "End" ? COACH_CATEGORIES.length - 1 : (index2 + (event.key === "ArrowRight" ? 1 : -1) + COACH_CATEGORIES.length) % COACH_CATEGORIES.length;
        setTab(COACH_CATEGORIES[next2].id, true);
        return;
      }
      const option = event.target.closest('[role="radio"]');
      if (!option || !["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
      const group = option.closest('[role="radiogroup"]');
      const options = [...group.querySelectorAll('[role="radio"]')];
      const index = options.indexOf(option);
      const next = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : (index + (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) + options.length) % options.length;
      event.preventDefault();
      options[next].click();
    });
    window.SpeakUpCoach = {
      getConfig: () => normalizeCoachConfig(config),
      setConfig(next) {
        config = saveCoachConfig(normalizeCoachConfig(next));
        render();
      }
    };
    render();
  }
  function pick(values) {
    return values[Math.floor(Math.random() * values.length)];
  }
  function slug(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }
  function colorName(color, index, total) {
    return `Color ${index + 1} of ${total}, ${color.toUpperCase()}`;
  }
})();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.mjs:
lucide/dist/esm/createElement.mjs:
lucide/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide/dist/esm/replaceElement.mjs:
lucide/dist/esm/icons/badge.mjs:
lucide/dist/esm/icons/check.mjs:
lucide/dist/esm/icons/chevron-down.mjs:
lucide/dist/esm/icons/download.mjs:
lucide/dist/esm/icons/face-slightly-smiling.mjs:
lucide/dist/esm/icons/glasses.mjs:
lucide/dist/esm/icons/hat-glasses.mjs:
lucide/dist/esm/icons/redo-2.mjs:
lucide/dist/esm/icons/rotate-ccw.mjs:
lucide/dist/esm/icons/scissors.mjs:
lucide/dist/esm/icons/shirt.mjs:
lucide/dist/esm/icons/shuffle.mjs:
lucide/dist/esm/icons/sparkles.mjs:
lucide/dist/esm/icons/undo-2.mjs:
lucide/dist/esm/icons/users-round.mjs:
lucide/dist/esm/lucide.mjs:
  (**
   * @license lucide v1.60.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
