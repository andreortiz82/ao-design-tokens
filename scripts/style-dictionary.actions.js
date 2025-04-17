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
        `${collection}-${modeName}-${variable.name}`,
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

// Light + Dark Mode CSS
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

// Light Mode CSS
StyleDictionary.registerFormat({
  name: "custom/css/theme/light",
  formatter: function ({ dictionary }) {
    const lightColors = `
      ${dictionary.allTokens
        .map((token) => {
          if (token.mode === "light") {
            return `--${token.name
              .replace("foundation-", "")
              .replace("light-", "")}:${token.value};`;
          }
        })
        .join("\n")}
    `;

    const remaining = `
      ${dictionary.allTokens
        .map((token) => {
          if (token.mode === "mode-1") {
            return `--${token.name
              .replace("mode-1-", "")
              .replace("semantic-", "")}:${token.value};`;
          }
        })
        .join("\n")}
    `;

    return `:root {${lightColors}${remaining}}`;
  },
});

// Dark Mode CSS
StyleDictionary.registerFormat({
  name: "custom/css/theme/dark",
  formatter: function ({ dictionary }) {
    const darkColors = `
      ${dictionary.allTokens
        .map((token) => {
          if (token.mode === "dark") {
            return `--${token.name
              .replace("foundation-", "")
              .replace("dark-", "")}:${token.value};`;
          }
        })
        .join("\n")}
    `;

    const remaining = `
      ${dictionary.allTokens
        .map((token) => {
          if (token.mode === "mode-1") {
            return `--${token.name
              .replace("mode-1-", "")
              .replace("semantic-", "")}:${token.value};`;
          }
        })
        .join("\n")}
    `;

    return `:root {${darkColors}${remaining}}`;
  },
});

// JS Format
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
            (t) => t.collection === c && t.mode === "light",
          );
          const foundationDark = dictionary.allTokens.filter(
            (t) => t.collection === c && t.mode === "dark",
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

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);
StyleDictionaryExtended.buildAllPlatforms();
