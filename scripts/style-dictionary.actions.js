const StyleDictionary = require("style-dictionary");
const baseConfig = require("./style-dictionary.config.json");
const _ = require("lodash");

function objectToRgba(colorObj) {
  // Extract color values
  const r = Math.round(colorObj.r * 255);
  const g = Math.round(colorObj.g * 255);
  const b = Math.round(colorObj.b * 255);
  const a = colorObj.a;

  // Format the RGBA string
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;

  return rgbaColor;
}

/**
 * Parses the JSON file defined in the `style-dictionary.config.json`
 * JSON is downloaded from this Community Plugin: https://www.figma.com/community/plugin/1253571037276959291
 */
function toStyleDictionaryFormat(inputJson, filePath) {
  const styleDictionary = {};
  const collection = _.kebabCase(inputJson.name);
  const modes = inputJson.modes;
  const variables = inputJson.variables;

  for (const mode in modes) {
    variables.map((variable) => {
      const modeName = _.kebabCase(modes[mode]);
      const newVarName = _.kebabCase(
        `${collection}-${modeName}-${variable.name}`
      );

      styleDictionary[newVarName] = {
        ...variable,
        name: newVarName,
        collection: collection,
        file: filePath,
        mode: modeName,
        value: variable.resolvedValuesByMode[mode].resolvedValue,
        alias: _.kebabCase(variable.resolvedValuesByMode[mode].aliasName),
      };
    });
  }

  return styleDictionary;
}

StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ filePath, contents }) => {
    return toStyleDictionaryFormat(JSON.parse(contents), filePath);
  },
});

/**
 * StyleDictionary: Transforms
 * ----------------------------------------
 */

StyleDictionary.registerTransform({
  name: "name-transform",
  type: "name",
  transformer: (token) => {
    let newTokenName = token.name;
    return newTokenName;
  },
});

StyleDictionary.registerTransform({
  name: "value-transform",
  type: "value",
  transformer: (token) => {
    let newTokenValue = token.value;

    if (token.type === "COLOR") {
      newTokenValue = objectToRgba(token.value);
    }

    if (
      token.name.includes("typography-mode-1-font-size-") ||
      token.name.includes("size-mode-1-")
    ) {
      newTokenValue = `${token.value}px`;
    }

    if (token.collection === "semantic")
      newTokenValue = `var(--${token.alias})`;

    return newTokenValue;
  },
});

StyleDictionary.registerTransformGroup({
  name: "custom/group",
  transforms: ["name-transform", "value-transform"],
});

StyleDictionary.registerFormat({
  name: "custom/css/theme",
  formatter: function ({ dictionary }) {
    const lightColors = `@media (prefers-color-scheme: light) {\n :root {
      ${dictionary.allTokens
        .map((token) => {
          if (token.mode === "light") {
            return `--${token.name
              .replace("foundation-", "")
              .replace("light-", "")}:${token.value};`;
          }
        })
        .join("\n")}
    }}`;

    const darkColors = `@media (prefers-color-scheme: dark) {\n :root {
      ${dictionary.allTokens
        .map((token) => {
          if (token.mode === "dark") {
            return `--${token.name
              .replace("foundation-", "")
              .replace("dark-", "")}:${token.value};`;
          }
        })
        .join("\n")}
    }}`;

    const remaining = `:root {
      ${dictionary.allTokens
        .map((token) => {
          if (token.mode === "mode-1") {
            return `--${token.name
              .replace("mode-1-", "")
              .replace("semantic-", "")}:${token.value};`;
          }
        })
        .join("\n")}
    }`;

    return `${lightColors}${darkColors}${remaining}`;
  },
});

// StyleDictionary.registerFormat({
//   name: "custom/js",
//   formatter: function ({ dictionary, file, options }) {
//     let collections = [];
//     dictionary.allTokens.map((token) => {
//       if (!collections.includes(token.collection)) {
//         collections.push(token.collection);
//       }
//     });

//     let output = collections
//       .map((c) => {
//         return `export const ${_.camelCase(c)} = {
//       ${dictionary.allTokens
//         .filter((tkn) => {
//           return tkn.collection === c;
//         })
//         .map((token) => {
//           let value = token.value;
//           let tname = token.name
//             .replace("foundation-", "")
//             .replace("semantic-", "")
//             .replace("mode-1-", "");
//           let tmode = token.mode;

//           if (token.collection === "foundation") {
//             if (tmode === "light") {
//               return `light: {"${tname}" : "${value}"}`;
//             }
//             if (tmode === "dark") {
//               return `dark: {"${tname}" : "${value}"}`;
//             }
//           }

//           return `"${tname}" : "${value}"`;
//         })
//         .join(",")}
//     }\n`;
//       })
//       .join("");

//     return `${output}`;
//   },
// });

StyleDictionary.registerFormat({
  name: "custom/js",
  formatter: function ({ dictionary, file, options }) {
    let collections = [];
    dictionary.allTokens.map((token) => {
      if (!collections.includes(token.collection)) {
        collections.push(token.collection);
      }
    });

    let output = collections
      .map((c) => {
        if (c === "foundation") {
          const foundationLight = dictionary.allTokens.filter(
            (t) => t.collection === c && t.mode === "light"
          );
          const foundationDark = dictionary.allTokens.filter(
            (t) => t.collection === c && t.mode === "dark"
          );

          return `export const foundation = {
            light: {
              ${foundationLight
                .map((token) => {
                  let tname = token.name
                    .replace("foundation-", "")
                    .replace("light-", "");
                  return `"${tname}": "${token.value}"`;
                })
                .join(",\n")}
            },
            dark: {
              ${foundationDark
                .map((token) => {
                  let tname = token.name
                    .replace("foundation-", "")
                    .replace("dark-", "");
                  return `"${tname}": "${token.value}"`;
                })
                .join(",\n")}
            }
          }\n`;
        }

        return `export const ${_.camelCase(c)} = {
          ${dictionary.allTokens
            .filter((t) => {
              return t.collection === c;
            })
            .map((token) => {
              let value = token.value;
              let tname = token.name
                .replace("foundation-", "")
                .replace("semantic-", "")
                .replace("mode-1-", "");
              return `"${tname}": "${value}"`;
            })
            .join(",")}
        }\n`;
      })
      .join("");

    return `${output}`;
  },
});

StyleDictionary.registerFormat({
  name: "custom/tailwind",
  formatter: function ({ dictionary }) {
    let colors = {};
    const collections = [];

    dictionary.allTokens.forEach((token) => {
      if (!collections.includes(token.collection)) {
        collections.push(token.collection);
      }

      if (token.collection === "foundation") {
        const tokenName = token.name
          .replace("foundation-", "")
          .replace("light-", "")
          .replace("dark-", "");
        if (!colors[tokenName]) {
          colors[tokenName] = {};
        }

        if (token.mode === "light") {
          colors[tokenName].light = token.value;
          colors[tokenName].DEFAULT = token.value;
        }
        if (token.mode === "dark") {
          colors[tokenName].dark = token.value;
        }

        if (colors[tokenName].light === colors[tokenName].dark) {
          colors[tokenName] = token.value;
        }
      }

      if (token.collection === "semantic") {
        const tokenName = token.name.replace("semantic-mode-1-component", "ao");
        if (!colors[tokenName]) {
          colors[tokenName] = {};
        }
        colors[tokenName] = token.value;
      }
    });

    return `
/** @type {import('tailwindcss').Config} */
const colors = ${JSON.stringify(colors, null, 2)};
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: colors,
  },
  plugins: [],
};
`;
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);
StyleDictionaryExtended.buildAllPlatforms();
