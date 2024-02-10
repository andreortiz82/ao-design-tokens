# AO Design Tokens

## Get started

1. Run `npm install ao-design-tokens`
2. In your project CSS, import the following:
```
@import "ao-design-tokens";

body {
    color: var(--color-inverse);
    background: var(--blue-9);
    padding: var(--size-5);
}

```
3. That's it!

### CSS Reset 
Includes the [EM CSS Reset](https://meyerweb.com/eric/tools/css/reset/).

### Colors
This project contains CSS variables sourced from the [Radix UI System Colors](https://www.radix-ui.com/colors). Not all colors are included. Supports **light and dark modes**.