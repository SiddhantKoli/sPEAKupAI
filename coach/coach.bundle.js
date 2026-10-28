(() => {
  // coach/catalog.js
  var VARIANT_COUNTS = { eyes: 16, mouth: 18, nose: 9 };
  var DOODLE_TOTAL = 100;
  var variantId = (index) => `variant${String(index + 1).padStart(2, "0")}`;
  function componentsForChoice(choice) {
    const eyes = choice * 7 % VARIANT_COUNTS.eyes;
    const mouth = choice * 11 % VARIANT_COUNTS.mouth;
    const nose = choice * 5 % VARIANT_COUNTS.nose;
    return { eyes: variantId(eyes), mouth: variantId(mouth), nose: variantId(nose) };
  }
  function doodleChoices() {
    return Array.from({ length: DOODLE_TOTAL }, (_, index) => ({
      index,
      ...componentsForChoice(index)
    }));
  }
  function doodleForIndex(index) {
    const choice = Math.min(Math.max(0, Number(index) || 0), DOODLE_TOTAL - 1);
    return { index: choice, ...componentsForChoice(choice) };
  }
  function closestDoodleChoice(legacyIndex) {
    const canonical = Math.min(Math.max(0, Number(legacyIndex) || 0), 16 * 18 * 9 - 1);
    const target = {
      eyes: Math.floor(canonical / (18 * 9)),
      mouth: Math.floor(canonical / 9) % 18,
      nose: canonical % 9
    };
    let best = 0;
    let bestDistance = Infinity;
    for (let choice = 0; choice < DOODLE_TOTAL; choice += 1) {
      const parts = componentsForChoice(choice);
      const distance = Number(parts.eyes !== variantId(target.eyes)) + Number(parts.mouth !== variantId(target.mouth)) + Number(parts.nose !== variantId(target.nose));
      if (distance < bestDistance) {
        best = choice;
        bestDistance = distance;
        if (distance === 0) break;
      }
    }
    return best;
  }

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

  // node_modules/@dicebear/styles/dist/croodles-neutral.min.json
  var croodles_neutral_min_default = { $id: "https://cdn.hopjs.net/npm/@dicebear/styles@10.6.0/dist/croodles-neutral.min.json", $schema: "https://cdn.hopjs.net/npm/@dicebear/schema@1.4.0/dist/definition.min.json", $comment: "This file was generated by the DiceBear Exporter for Figma. https://www.figma.com/community/plugin/1005765655729342787", meta: { license: { name: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/", text: "Remix of \u201ECroodles - Doodle your face\u201D (https://www.figma.com/community/file/966199982810283152) by \u201Evijay verma\u201D, licensed under \u201ECC BY 4.0\u201D (https://creativecommons.org/licenses/by/4.0/)" }, creator: { name: "vijay verma", url: "https://vjy.me/" }, source: { name: "Croodles - Doodle your face", url: "https://www.figma.com/community/file/966199982810283152" } }, canvas: { elements: [{ name: "eyes", type: "component", attributes: { transform: "translate(9.5 5.5)" } }, { name: "nose", type: "component", attributes: { transform: "translate(47.5 46.5)" } }, { name: "mouth", type: "component", attributes: { transform: "translate(32.5 93.5)" } }], width: 128, height: 128 }, attributes: { fill: "none", "shape-rendering": "auto" }, components: { eyes: { width: 109, height: 56.7, variants: { variant01: { elements: [{ name: "path", type: "element", attributes: { d: "M19.8 37.8c2.2-3.1 9-8.4 19-4m36.8-.3c2.8-2.7 10.5-6.3 19.4 0", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M28.3 33.3c-1 .5-2.7 2.1-1.5 4.5 1.5 3 6.5.5 6-1.5-.4-1.6-2.2-2-3-2m55-3.4c-1 .2-3 1.4-2.4 4 .8 3.3 6.3 2 6.2-.2 0-1.6-1.7-2.4-2.5-2.5m-70.6-7.8c5.4-1.7 18-3.6 25.7 2.2m31.5.6c3.4-5.4 14.3-11.2 22-7.6", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant02: { elements: [{ name: "path", type: "element", attributes: { d: "M31.4 26.2c7.1-2.6 13.3 5.2 13.3 10.9 0 6.8-5.3 12.5-10.3 12.5s-9.9-5.7-9.9-12.5c0-5.7 4-9.8 7.8-11.3M75 21.7c6.5-2.6 11 5.4 11 11 0 6.8-4 12.6-8.6 12.6s-9-4.7-9-12.2 3.6-10.2 7.1-11.6", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M37.6 39q0 0 0 0m41.9-2.3q0 0 0 0", stroke: { type: "color", name: "ink" }, "stroke-width": "6", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M25.7 17.8c2.8-3.2 10-7.9 17-1.6m21-2.6C68 9.4 78 3.2 83.7 11.8", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant03: { elements: [{ name: "path", type: "element", attributes: { d: "M18.5 40.4c.6-1 2.2-3 4-3.2m.8 6.5 2.8-5m3.9 1.6c0 1.1-1.2 5.4-1.2 5.4m-10-15.1c1.2 2.8 5 8.4 10.3 9.2s9.2-1.1 10.4-2.1m38.8 1.1v3.8M82 38l1.4 3.5m1.9-4.6c.7.7 2.6 2 2.6 3m-17.6-6.4c1.2 1.5 4.2 4.3 6.5 4.3 3 0 8.2-.8 12-4.3M18.7 20.4c1-1.5 4.5-4.8 11-5.2s9 1.2 9.6 2m31.9 2c1.5-2 5.9-6.2 11.5-6.2 2.3.4 7.1 2.1 8.8 6.6", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant04: { elements: [{ name: "path", type: "element", attributes: { d: "M24.2 24.8c1-2.5 4.2-7.3 9.9-7.1s8.3 3.4 8.9 5m25.7.4c1-2.9 4.2-8.4 9.2-7.7a10 10 0 0 1 8.1 6m-63.5 20c2.7-4 9.5-6.6 15-6 6.7.5 4.3 6.5 2.6 7.2-2.2.9-5.2-.9-3.3-3.3 1.4-2 2.8 0 2.4.8m30.9-3c1.7-1.7 6.5-5.2 11.4-5 6.1.4 7.8 3.4 6 5.5-2 2.2-4.6 2.5-4.6 0 0-2.4 2-2.5 2.8-1", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant05: { elements: [{ name: "path", type: "element", attributes: { d: "M27.7 22c2.6 2 7.7 6 8.2 8 .4 1.8-8.8 5.2-13.4 6.7m64.4-16.2c-3.6 1.3-10.5 4.3-9.7 6 1 2.1 6.9 3.7 9.7 5.8", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant06: { elements: [{ name: "path", type: "element", attributes: { d: "M40.3 22.6c-6.4.2-17.8 3-17.8 11.3 0 12.4 9.7 14.6 13.2 14.6 3 0 9.2-1.6 11.5-4 2.3-2.6 3.2-12.6 1.6-15.8-1.1-2.2-3.2-5-7-5", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M28.2 30.8c-.4 0-1.2.2-1 .9.3.6 1.4.5 1.6 0s-.2-1.8-.2-1.8M76 40.4q.5.9.8 0", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M77.8 29c-3 .7-8.6 3.7-7.4 9.8 1.3 6 5.8 7.7 10.4 6.4 4.5-1.4 7-7.6 6.4-10.3-1-3.4-5.7-6-9.4-5M26.2 15.2c2.1 1.6 8 4.3 14.3 2.4 6.3-2 11.2-7.5 12.8-10M76.4 13c-1 1 .2 4.7 2.4 5.5 2.2.9 3.6 1.5 5.8 1.5", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant07: { elements: [{ name: "path", type: "element", attributes: { d: "M33 46.5c-.7-.6-5.1-2.3-7.4-6.2-2.3-3.8-2.5-7.7 0-9.3 1.6-1.2 5.1.6 7.4 2.2m1-.7c1.4-1.6 4-3 6.6-1.5 1.8 1 1.6 7 0 9.3-1.2 1.9-5.2 5-6.7 6m41.3-14.5C73 29.7 68 26.4 66 30c-2.6 4.6 5.6 13 10.2 14.8m1.1.7c2.2-1.7 7-5.4 7.8-6.6 1-1.5 2.8-8 0-10.6s-8.6 1-8.6 5.2m-53-16.7c.6-1.4 3-4.2 7-3.7 5.2.6 6.2 1.5 7.4 3.7m31.8-2.1c.5-1.7 3-4.8 8.2-4 5.2.6 7 3.5 7.3 4.9", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant08: { elements: [{ name: "path", type: "element", attributes: { d: "M32.3 26.3c3.3.6 11-.1 14.7-7.9m15.7-4.9c.5 2.7 2.7 8.5 7.4 10.8a18 18 0 0 0 10.3 2M18.7 39a134 134 0 0 1 27.1-5m-27.3 7.2c6.8-1.3 20.5-4.5 25.2-5.2m21.1-2.7a69 69 0 0 1 26.3 4.1", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M64.2 33.7c7.1-1.2 20.6 3.7 24.6 5.5", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M64 34.6c7-1.3 21.6 4.9 25.6 6.7", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M64 36c7-1.3 21.6 5 25.6 6.9m-67.2-3.1c6.6-2.3 20.6-6.6 24-5.2m-24.9 8.9a444 444 0 0 1 24-7", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant09: { elements: [{ name: "path", type: "element", attributes: { d: "M20.7 16.1c1.6.8 6 1.7 11.2 1.3 4.5-.4 6.5-1.5 7.8-2.9m33-1c2.1 1.9 5.9 2.3 8.3 2.3 2.3.1 5 0 7.1-.4", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "m1.5 17 13.7 7.5m30.5 3.8a32 32 0 0 1 20.5-1.8m28.2-2.4c2.5-1.3 10.6-7.7 13.1-9.6M15.6 25c-.3 3.8-1.7 15.7 0 17.7 2.6 3 27.8-1 29.5-1.5s2-8.8-.5-15.4c-2.2-5.5-20.8-3.1-28.4-1.8", stroke: { type: "color", name: "glasses" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "m17 30.4 2.8-5.4c-.8 3.3-3 11-2.8 12 .3 1.2 5.7-12.6 6.3-12.6.6.1-4.5 16-4.5 17s6-17 6.9-17S21.5 40 22 41s5.4-16 6.2-16.9-4.3 18.2-3.4 18.1 6.1-21 6.9-19c.7 2-4.9 21.2-3 19.5s5.4-21 6.8-19.5-3.6 20-2.4 19.5S37.8 25 38.4 25s-1 17.1-.5 17.1 3.3-14 3.7-15.1c.3-1.2 1-.5 1 3.4-.1 3-1.3 9-1.6 11l3-7.6m24.3-2.3 2.8-7c-.8 3.3-2.3 10-2 10.9.2 1.2 5-11.5 5.5-11.4S71 37 71 38s5-14 5.9-14-3.6 14.8-3 15.7 4.8-15.3 5.6-16.2-4.3 18.2-3.4 18.1 6.1-21 6.9-19c.7 2-5.1 20.7-3.2 19 2-1.6 5.6-20.5 7-19s-3.6 20-2.4 19.6c1.3-.6 4.6-17.6 5.2-17.6s-1 17-.5 17 2.7-12.7 3-13.9c.4-1.1 1.3-.5 1.2 3.3 0 3.1-.8 7.9-1.1 9.9l3-7.6", stroke: { type: "color", name: "glasses" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M68 23.3c6-2.7 22.2-1 25.2 0 3.8 1.1 3.6 14.7 3.3 18s-22.1.2-26.8 0c-3.7-.1-3-12.7-2.1-17.6", stroke: { type: "color", name: "glasses" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant10: { elements: [{ name: "path", type: "element", attributes: { d: "M18 38.3c2-3.1 9-8.4 19-4", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M26.4 33.8c-1 .5-2.7 2.1-1.5 4.5 1.5 3 6.5.5 6-1.5-.4-1.6-2.1-2-3-2M14.5 23.1c4.8-1.7 16.2-3.6 23 2.3M69 23.1c4.7-1.7 16-3.6 22.9 2.3", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M65.4 26.6c6.5-.9 24.4 1.5 27 3.1 3 1.8 3.6 15.2 1.3 21.6-1.2 3.2-13.3 6.7-23.8 0-7.5-4.7-5.9-18.8-5-23.7", stroke: { type: "color", name: "eyepatch" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M68 29.6c-.6 1.8-1.7 8.4-2.4 10.7l5-10.2c-.7 3.2-3.5 14.2-3.3 15.2.3 1.2 5.9-15.3 6.5-15.2.6 0-4.4 16.9-4.4 17.9s5.8-17.2 6.7-17.2-4.4 17.9-3.8 18.8 5.2-17.3 6-18.2-4.6 20.2-3.8 20.1 6.1-21 6.9-19c.7 2-5.1 22-3.2 20.3 2-1.6 5.6-21.8 7-20.3S80.8 53.3 82 52.8s5.5-19.4 6.1-19.4-2.4 20.8-1.8 19.4l5-19.4c.3-1.2 0 3 0 6.9-.1 3-2.2 10.5-2.5 12.5l4.4-14.6c0 2.3 0 7.6-.3 10.1q-.6 3.7-1 4M3.5 1.5a254 254 0 0 0 58.6 26c3 .8 28 4.5 32 2.3 3.3-1.7 11.2-14 13-16", stroke: { type: "color", name: "eyepatch" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant11: { elements: [{ name: "path", type: "element", attributes: { d: "M32.8 25.9a1.5 1.5 0 0 1 1.5 1.6l.5.1a7 7 0 0 1 3 3.7 12 12 0 0 1 .8 6.9 5 5 0 0 1-2.3 3.6q-1.7 1-3.5 1.1a14 14 0 0 1-5.5-.6c-.7-.4-2-1.2-3-2.7a9 9 0 0 1-1-6.9 8 8 0 0 1 4.2-5.4c1.8-1 4-1.3 5.3-1.4m-4.5 10-.1.3.2.2zm3.1-4.2a1.5 1.5 0 0 0-2.8.1l-.4.2a2 2 0 0 0-.9 1 2 2 0 0 0 0 1.5 2 2 0 0 0 2.3 1.4q1.2 0 2-1.3.4-.7.3-1.2l-.4-1.5zm-.2 2.6V34l.1-.2zM27 31.5a4 4 0 0 0-.9 2.1l.4-1zM82 24a1.5 1.5 0 0 1 1.5 1.6l.5.1a7 7 0 0 1 3 3.6 12 12 0 0 1 .8 7 5 5 0 0 1-2.3 3.5q-1.7 1-3.5 1.2a14 14 0 0 1-5.5-.6c-.7-.4-2-1.2-3-2.8a9 9 0 0 1-1-6.8 8 8 0 0 1 4.2-5.4c1.8-1 3.9-1.4 5.2-1.4m.9 10.3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5.4-.3-.2.3.3.2zm3.1-4.3a1.5 1.5 0 0 0-2.8.2l-.4.2a2 2 0 0 0-.9 1 2 2 0 0 0 0 1.5 2 2 0 0 0 2.3 1.4q1.2 0 2-1.3.4-.8.3-1.2l-.4-1.5zm-.2 2.6v-.2l.1-.2zM76 29.6a4 4 0 0 0-.8 2.1l.4-1q0-.6.4-1", fill: { type: "color", name: "ink" } } }, { name: "path", type: "element", attributes: { d: "M25 20.3c1-1.3 3.8-3.4 6-2m44.4-1.8c1.1-1.3 4.3-1.4 4.8 0", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant12: { elements: [{ name: "path", type: "element", attributes: { d: "M30.5 34.1c-1.8-1.7.5-4.4 2.5-3.4 2.5 1.3 3.4 4.3 1.2 6.5s-7.2.8-7.5-4.5 6.5-9.2 10-3c3.3 6.3 2.2 11.9-5.2 11.9-5.1 0-7.3-3.6-7.9-7-1-6.7 2.5-13.6 9.7-12 4.5 1 9.7 4 8.8 13.3-1 9.3-6 10.3-12.3 9.2-7.7-1.3-9.8-8.2-7.3-16m53.5 5c-1.9-1.7.4-4.4 2.4-3.4 2.5 1.3 3.4 4.3 1.2 6.5-2.1 2.2-7.1.8-7.5-4.5-.3-5.3 6.5-9.2 10-3 3.3 6.3 2.2 11.9-5.2 11.9-5.1 0-7.3-3.6-7.8-7-1-6.7 2.4-13.6 9.7-12 4.4 1 9.6 4 8.7 13.3s-6 10.3-12.3 9.2c-7.7-1.3-9.8-8.2-7.3-16M27.3 14.4c3 2.2 8.8 2.6 12 1m30.4-.1c3.6 1 9.2-.3 11.8-2.8", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant13: { elements: [{ name: "path", type: "element", attributes: { d: "M24.3 17.6c1.3 1.2 4.7 2.4 8.6 1.7 3.5-.5 5-2 6-3.9m28.7-.8c2 2.6 5.3 3.4 7.5 3.6 2.2 0 5-.8 7.2-2", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "m1.5 19 13.7 8.5m30.5 3.8a32 32 0 0 1 20.5-1.8m28.2-2.3c2.5-1.4 10.6-7.8 13.1-9.7", stroke: { type: "color", name: "glasses" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M20 44.5c-8.2-3.1-7.5-11.4-3.6-17.2 3-3.8 22.8-2.2 27.2 1.8 4.2 3.8 2.3 11.8-1.8 14.3-3.4 2-16.2 3.1-21.7 1m71.8-19.2c-3.6-1.2-18.2-1-24 2.6-3.8 2.5-6.5 14.7 3.6 16 4.6.7 14.9 0 18.7-1.8 8.2-4 6.8-15.2 1.8-16.8", stroke: { type: "color", name: "glasses" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M27.2 33.8a5 5 0 0 1 4.1-2.6c3.1 0 4 1.3 4.7 2.1m39.4.5a5 5 0 0 1 4.2-2.6c3 0 4 1.3 4.6 2.1", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant14: { elements: [{ name: "path", type: "element", attributes: { d: "M18.3 10.8c1.7-1.3 6.2-2.6 11.3-2 4.5.7 6.4 2.3 7.7 4.3m33.1-.4c2-3 5.7-3.7 8-4q3.8-.4 7.3.4", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "m1.5 19.7 13.7 6.5M45.7 30a32 32 0 0 1 20.5-1.8m28.2-2.4c2.5-1.3 10.6-6.7 13.1-8.6M22.1 48.4c-5-3.1-10.5-15.7-5.9-22.7C21.5 18 40 17 44.3 28.1a23 23 0 0 1 1 14.3c-2 4.6-10.3 13.9-23.3 6M93 25c-5.6-8-21-8.3-25.4.4-1.9 3.7-3 14.2 4.4 20.2 3.8 3 18 8.2 22.8-5.2C97 34 95.2 28.2 93 25", stroke: { type: "color", name: "glasses" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M32 28.3c-.5.2-1.2 1-1 1.8.5 1.2 3.5 2.5 3.6.9q0-2.6-1.2-1.6m45.1-3.2c-.6.5-1.7 1.8-1 2.3 1 .6 4.2 2.3 4 0-.3-1.9-1.1-1.7-1.5-1.4l-.9.7", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant15: { elements: [{ name: "path", type: "element", attributes: { d: "M23 16.7a17 17 0 0 1 11.3-1.9c4.5.6 6.4 2.3 7.7 4.3m28.4-.6c2.2-2.8 6-3.3 8.3-3.4q3.8-.3 7.2.6", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "m1.5 19.1 13.7 8.5m30.5 3.9a32 32 0 0 1 20.5-1.9m28.2-2.3c2.5-1.3 10.6-8.8 13.1-10.6M15.6 28.2c-.3 3.7-.4 13.1 4.4 16.6 4.7 3.5 23.5-.3 25.2-1 1.7-.5 1.7-7.7-.9-14.3-2.1-5.5-20.5-3.7-28-2.3", stroke: { type: "color", name: "glasses" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M68 26.5c6-2.7 22-1 25 0 3.7 1 4.1 10.3 3.8 13.7-.4 3.3-20.5 3.4-25.2 3.2-3.7-.1-4.9-11.6-4-16.5", stroke: { type: "color", name: "glasses" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M31 30.8c-.5.2-1.2 1-1 1.9.5 1 3.5 2.5 3.6.8q0-2.6-1.2-1.6m46.7-2.2c-.6.6-1.7 1.8-1 2.3 1 .7 4.3 2.3 4 0-.2-1.8-1.1-1.7-1.5-1.4l-.8.8", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant16: { elements: [{ name: "path", type: "element", attributes: { d: "M28 39.8c-5.1.3-8.2-4-9.2-6 5.7-5.2 14.2-2.3 17.8-.3-.7 2-3.4 6-8.6 6.3", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M26 35.7c.9.5 2.8 1.1 4-.8 1.7-2.4-2.3-5-3.6-3.8-1 1-.6 2.4-.2 3m62-.4c1-.4 2.6-1.8 1.6-4-1.2-2.8-5.8-.8-5.5 1 .3 1.5 1.9 2 2.6 2", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M88.2 37.3c-5 1.2-9-2.8-9.8-5.5 4.6-6 15-3.5 17.6-1.3-.4 2-2.8 5.7-7.8 6.8M14.8 19.4c5.5-1 18.3-1.4 25.2 5.2m33-.4c3.4-5.4 14.3-11.2 22.1-7.6", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] } } }, mouth: { width: 65.7, height: 23.5, variants: { variant01: { elements: [{ name: "path", type: "element", attributes: { d: "M14.5 11.5a88 88 0 0 0 36.2 0", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant02: { elements: [{ name: "path", type: "element", attributes: { d: "M19.5 16.2c7.2 3.9 23.1 2 25.4-7 .2-1 0-2.7-1.2-2.7", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant03: { elements: [{ name: "path", type: "element", attributes: { d: "M17 9.5c-1.3 2.1.4 7.7 15.3 6.8s19-9 14.5-8.8c-6.2.2-10.7 4.2-20.1 2-3.4-.7-8.5-2-9.7 0", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant04: { elements: [{ name: "path", type: "element", attributes: { d: "M31.5 9.4c-7.2 0-14-1-17-1.9 1 2.6 6.4 8.3 17 8.3 12 0 16.5-5.5 18.3-8.3-6 1.8-11 2-18.3 2", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant05: { elements: [{ name: "path", type: "element", attributes: { d: "M8.5 10.7c3 1.1 9.3 3 24.3 1.7 18.7-1.7 19-3.3 23.4-5.9", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M33.2 7a37 37 0 0 0-18.8 5.2c15.7 12.4 34.8 0 34.8-2.6-2.4-1-2.4-3.3-16-2.5", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant06: { elements: [{ name: "path", type: "element", attributes: { d: "M41.3 10c-8 1.4-20.5.8-22.4 2.3-3.4 3.7 16.2 1.3 20.5.8 8.8-1 11.7-4.9 2-3.2", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant07: { elements: [{ name: "path", type: "element", attributes: { d: "M9.5 5.1c2.4 4 6.6 15.1 22.7 15.1S54.5 6 55.2 4.5", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant08: { elements: [{ name: "path", type: "element", attributes: { d: "M1.5 14.3s5.7-2.8 7.1-7.6m1 1.8c.3.8-6.9 9.3-6.9 9.3m9-9.7c-.5 4.2-5.2 10.3-5.2 10.3m2.6 1.1s5.3-4.8 5.8-10.3m2.2-.3c0 3.5-1.7 11.2-1.7 11.2M43.1 7.2v12.3m-26.9.2s4.2-5.3 4.2-9.6m26.3 7.6s-3-6.2-3-10.6m-21 2.6c.3 2.4-2.9 9.8-2.9 9.8M53 6.4a32 32 0 0 0 5.4 8.3M46.7 7.5a50 50 0 0 0 4.8 9.8M25.2 9.6c-.6 4-1.3 10.6-1.3 10.6M48.3 6.8l6.4 9.2M27.5 9.4c.6 2.8.8 8.6 3.7 10.6M56 6.8c1.5 2.3 4.4 5.9 8.2 6.8M31.5 8.5c0 1.3-1.8 5.9 1 11m5 .5s-5-6.2-5-11.5M35 8c0 3.8 6.1 12 6.1 12m1-.6c-.7-2-4-9.3-3.5-12.5", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant09: { elements: [{ name: "path", type: "element", attributes: { d: "M13.5 6.1c5.3 2.5 13.5 8 22.7 7.7 11-.3 14.6-6.1 16-9.3", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M31.8 5.8c-3-1.9-8.6 1.8-10 4.2 1.6 5.5 7.4 9.2 14 9.2 7.3 0 11.3-6.3 12-8.5h0C47 9.5 46 7.4 43 5.8c-3.7-2-6.1 6-6.8 6s-.6-3.6-4.4-6", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant10: { elements: [{ name: "path", type: "element", attributes: { d: "M52.2 1.6c-7.3 0-26-.7-38.7 2.6 0 10.7 12.6 20.2 23.2 17.3s17-15 15.5-20", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant11: { elements: [{ name: "path", type: "element", attributes: { d: "M31.5 8.4c-7.2 0-14-1-17-1.9 1 2.6 3.4 12 17 12S48 9.3 49.8 6.5c-6 1.8-11 2-18.3 2", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant12: { elements: [{ name: "path", type: "element", attributes: { d: "M51.8 13.2c4.9-9.4-1.4-10-6.6-7.4a49 49 0 0 1-23.5 2.4c-6.4-2.4-9.8-6.7-10.2 4.2s36.2 8.6 40.3.8", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M12.7 11.4c8 2.7 27 5.8 39.2-4m-30.5 3.1-.9 5.6m7.8-4.2-.5 6.2m7.2-6.9.8 6.4m7-8.3 1.4 7", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant13: { elements: [{ name: "path", type: "element", attributes: { d: "M19.7 21c-.5.5-3-7.1-4.1-11l7.4 1.2zm27.2-1.1c-.7.3-3-6-4.3-10l6-2c-1 3.1-.6 11.6-1.7 12", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }, { name: "path", type: "element", attributes: { d: "M10.5 4.2c3 6.2 12.4 7.7 24 6.4 10.3-1.1 16.3-4.4 19.3-8", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant14: { elements: [{ name: "path", type: "element", attributes: { d: "M12.5 13.6s4.2 1.5 7 0c2.9-1.6 3-6 5.2-3.7 2.6 3 3 4.9 4.5 6.3 1.5 1.5 2.6-5 3.9-7 1.2-2.3 4.6 6.1 6.6 6.1 1.9 0 1.4-9.5 3.6-7.5 2.1 1.9 1.8 5.4 8.8 3.4", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant15: { elements: [{ name: "path", type: "element", attributes: { d: "M11.1 14c4.7 4 12.5 10.4 22.9-2 6.6-7.8 15.9.9 18.4-3.2m-44.9 8c1.6-1 4.8-3.8 5-6.7m40.3-4.6c-.1 1.9.1 6 2.2 8", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant16: { elements: [{ name: "path", type: "element", attributes: { d: "M11.1 13.3c4.7 4 13.5 6.5 22.5 5.4A25 25 0 0 0 52.4 8M7.5 16c1.6-1 4.8-3.7 5-6.6m38.1-3.9c1 1.6 3.8 4.8 6.6 5", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant17: { elements: [{ name: "path", type: "element", attributes: { d: "M41.9 6c-4.2 2-20.4 6.7-30.4 4.2 6.2 10 35 11.4 39.6 2.5C56.1 3.3 47 3.4 42 6", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant18: { elements: [{ name: "path", type: "element", attributes: { d: "M17.5 19c2.2-4.6 11.3-13.9 30.3-13.5", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] } } }, nose: { width: 33.9, height: 48.8, variants: { variant01: { elements: [{ name: "path", type: "element", attributes: { d: "M13.2 14.5c3.9 2.1 11 11.9 10.2 17.3-.5 3.6-8.5 2.5-12.9 1.7", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant02: { elements: [{ name: "path", type: "element", attributes: { d: "M21.2 9.5c5 4 12 23 6 29s-8.7-4.7-13.8-4.7-9 6-8.5-1c.4-5.6 4-5.5 4.7-5.8", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant03: { elements: [{ name: "path", type: "element", attributes: { d: "M12.5 43.3c3.7 0 8.5-1.5 9.2-6 .6-3.7-5.6-3.1-7.3-7.4a70 70 0 0 1 0-23.4", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant04: { elements: [{ name: "path", type: "element", attributes: { d: "M12.8 11.5c1.8 16 7.4 10.4 9.8 19.3 2 7-9.2 7.7-12.1 5.4", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant05: { elements: [{ name: "path", type: "element", attributes: { d: "M20.3 7.5c2.7 8 7.6 25.3 5.8 29.4-2.1 5-5.4-2.3-5.4 3.5-1 2.8-3.8 3.2-5.1-1.6-1.3-4.7-5.2 3.5-6.5 1.6-3.6-1.6-.7-7.1 1.2-8.9", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant06: { elements: [{ name: "path", type: "element", attributes: { d: "M23.8 4.5c-.8 5.3-1.2 16.3.3 22.3C27.7 41 22.6 44.3 21 44.3c-5.3 0-6.5-4.7-7.7-18-1.5-16.5-1.6-16.3-3.7-21", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant07: { elements: [{ name: "path", type: "element", attributes: { d: "M1.5 2.2C5 2.2 9.2 8 9.6 17c.7 14.7-4.2 19.4 0 27 2.7 5 17.8 4.7 21.9-3.6 3.2-6.5-3-12-6.6-20.7-3.5-8.3-5.7-13.4-2-18.2", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant08: { elements: [{ name: "path", type: "element", attributes: { d: "M14.8 17.5c-4 .9-7.2 6.8-4 10 4 4 12.3 4.7 13.1 0 .7-3.9-1.3-6-2.7-6.7", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] }, variant09: { elements: [{ name: "path", type: "element", attributes: { d: "M22.8 22c.7.7 2.6 5.4-5.6 6.4-7 .8-7.1-3.7-7.1-5.3", stroke: { type: "color", name: "ink" }, "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" } }] } } } }, colors: { background: { values: ["#ffffff"] }, eyepatch: { notEqualTo: [], values: ["#000000"] }, glasses: { notEqualTo: [], values: ["#000000"] }, ink: { notEqualTo: [], values: ["#000000"] } } };

  // coach/state.js
  var COACH_STORAGE_KEY = "speakup-profile-v1";
  function defaultCoachConfig() {
    return { version: 5, style: "croodles-neutral", doodle: 0 };
  }
  function normalizeCoachConfig(input = {}) {
    const raw = input && typeof input === "object" ? input : {};
    const index = Number(raw.doodle ?? raw.index);
    const isLegacyConfig = Number(raw.version) > 0 && Number(raw.version) < 5;
    const choice = isLegacyConfig ? Number.isInteger(index) && index >= 0 ? closestDoodleChoice(index) : 0 : Number.isInteger(index) && index >= 0 && index < DOODLE_TOTAL ? index : 0;
    return {
      version: 5,
      style: "croodles-neutral",
      doodle: choice
    };
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
  var croodlesNeutral = new Style(croodles_neutral_min_default);
  function renderCoachSvg(input, { title = "SpeakUp profile doodle" } = {}) {
    const config = normalizeCoachConfig(input);
    const doodle = doodleForIndex(config.doodle);
    const svg = new Avatar(croodlesNeutral, {
      seed: `speakup-croodles-${doodle.index}`,
      size: 256,
      idRandomization: true,
      eyesVariant: [doodle.eyes],
      mouthVariant: [doodle.mouth],
      noseVariant: [doodle.nose],
      backgroundColor: ["#fffdf7"],
      inkColor: ["#141b2b"]
    }).toString();
    const accessibleTitle = escapeXml(title);
    return svg.replace('aria-hidden="true"', `role="img" aria-label="${accessibleTitle}"`).replace("<!-- Generated by DiceBear (https://www.dicebear.com) -->", `<title>${accessibleTitle}</title>`);
  }
  function coachSvgDataUri(config, { title = "" } = {}) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(renderCoachSvg(config, { title }))}`;
  }
  function escapeXml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);
  }

  // coach/ui.js
  var preview = document.querySelector("#profileMascot");
  var navAvatar = document.querySelector("#profileNavAvatar");
  var customizer = document.querySelector("#mascotCustomizer");
  var galleryPage = document.querySelector("#doodles");
  if (preview && customizer && galleryPage) {
    let updateStatus = function() {
      const saveButton = galleryPage.querySelector('[data-action="save"]');
      const saveStatus = galleryPage.querySelector("#coachSaveStatus");
      if (saveButton) saveButton.disabled = !dirty;
      if (saveStatus) saveStatus.textContent = dirty ? "Choice ready to save" : "Your saved doodle";
    }, updateSelectedCard = function() {
      grid.querySelectorAll("[data-doodle]").forEach((button) => {
        const selected = Number(button.dataset.doodle) === config.doodle;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-checked", String(selected));
        button.tabIndex = selected ? 0 : -1;
        button.setAttribute("aria-label", `Doodle ${String(Number(button.dataset.doodle) + 1).padStart(2, "0")}${selected ? ", selected" : ""}`);
      });
    }, update = function(index, { focus = false } = {}) {
      const next = normalizeCoachConfig({ version: 5, ...config, doodle: index });
      if (next.doodle === config.doodle) return;
      config = next;
      dirty = true;
      void renderPreview();
      updateStatus();
      updateSelectedCard();
      if (focus) requestAnimationFrame(() => grid.querySelector(`[data-doodle="${config.doodle}"]`)?.focus());
    }, saveChoice = function() {
      if (!dirty) return;
      config = saveCoachConfig(config);
      dirty = false;
      updateStatus();
      window.dispatchEvent(new CustomEvent("speakup:coach-change", { detail: { config } }));
      location.hash = "#profile";
    };
    let config = readSavedCoachConfig();
    let dirty = false;
    let previewRevision = 0;
    let galleryRevision = 0;
    const pngCache = /* @__PURE__ */ new Map();
    const grid = galleryPage.querySelector("#coachDoodleGrid");
    const choices = doodleChoices();
    async function pngFor(index) {
      if (!pngCache.has(index)) pngCache.set(index, createPng(index));
      return pngCache.get(index);
    }
    async function createPng(index) {
      const svgData = coachSvgDataUri({ version: 5, doodle: index }, { title: `Croodles Neutral doodle ${index + 1}` });
      const image = new Image();
      image.decoding = "async";
      image.src = svgData;
      try {
        await image.decode();
        const canvas = document.createElement("canvas");
        canvas.width = 192;
        canvas.height = 192;
        const context = canvas.getContext("2d");
        context.fillStyle = "#fffdf7";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL("image/png");
      } catch {
        return svgData;
      }
    }
    async function renderPreview() {
      const revision = ++previewRevision;
      const image = await pngFor(config.doodle);
      if (revision !== previewRevision) return;
      preview.innerHTML = `<img src="${image}" alt="Croodles Neutral profile picture, doodle ${config.doodle + 1}">`;
      if (navAvatar) navAvatar.innerHTML = `<img src="${image}" alt="">`;
      preview.setAttribute("role", "img");
      preview.setAttribute("aria-label", `Profile picture: doodle ${config.doodle + 1}`);
      const number = customizer.querySelector("#coachSelectedNumber");
      if (number) number.textContent = `Doodle ${String(config.doodle + 1).padStart(2, "0")}`;
    }
    async function renderGallery() {
      const revision = ++galleryRevision;
      grid.innerHTML = choices.map(() => '<div class="coach-option is-loading" aria-hidden="true"></div>').join("");
      const pictures = await Promise.all(choices.map(async ({ index }) => ({ index, image: await pngFor(index) })));
      if (revision !== galleryRevision) return;
      grid.innerHTML = pictures.map(({ index, image }) => {
        const selected = index === config.doodle;
        const label = String(index + 1).padStart(2, "0");
        return `<button class="coach-option${selected ? " is-selected" : ""}" type="button" role="radio" aria-checked="${selected}" tabindex="${selected ? "0" : "-1"}" aria-label="Doodle ${label}${selected ? ", selected" : ""}" data-doodle="${index}"><span class="coach-option-art"><img src="${image}" alt="" loading="lazy"></span><span class="coach-option-label">${label}</span><span class="coach-option-check" aria-hidden="true">\u2713</span></button>`;
      }).join("");
    }
    customizer.addEventListener("click", (event) => {
      if (event.target.closest('[data-action="choose-doodle"]')) {
        location.hash = "#doodles";
        return;
      }
      if (event.target.closest('[data-action="save"]')) saveChoice();
    });
    galleryPage.addEventListener("click", (event) => {
      const choice = event.target.closest("[data-doodle]");
      if (choice) {
        update(Number(choice.dataset.doodle));
        return;
      }
      if (event.target.closest('[data-action="back-profile"]')) {
        location.hash = "#profile";
        return;
      }
      if (event.target.closest('[data-action="save"]')) saveChoice();
    });
    galleryPage.addEventListener("keydown", (event) => {
      const option = event.target.closest('[role="radio"][data-doodle]');
      if (!option || !["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const delta = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const next = event.key === "Home" ? 0 : event.key === "End" ? DOODLE_TOTAL - 1 : Math.min(DOODLE_TOTAL - 1, Math.max(0, config.doodle + delta));
      update(next, { focus: true });
    });
    window.SpeakUpCoach = {
      getConfig: () => normalizeCoachConfig(config),
      setConfig(next) {
        if (dirty) return;
        config = normalizeCoachConfig(next);
        void renderPreview();
        if (grid.children.length) updateSelectedCard();
        updateStatus();
      }
    };
    updateStatus();
    void renderPreview();
    void renderGallery();
  }
})();
