# AO Design Tokens

Custom design tokens for your project. Design Token Gallery is [here](https://andreortiz82.github.io/ao-design-tokens/).

## Install

`npm install ao-design-tokens`

## Usage

In your CSS file, import the token CSS:

```css
@import "ao-design-tokens";

.my-custom-style {
  background: var(--component-base);
  color: var(--component-text-default);
}
```

Additional exports are:

```css
/* Both Light and Dark Modes */
@import "ao-design-tokens";
/* Light Mode */
@import "ao-design-tokens/light";
/* Dark Mode */
@import "ao-design-tokens/dark";
```

This project uses:

- [Radix UI Colors](https://www.radix-ui.com/colors)
- [Style Dictionary](https://styledictionary.com/)
- [Export/Import Variables Figma Plugin](https://www.figma.com/community/plugin/1256972111705530093)
