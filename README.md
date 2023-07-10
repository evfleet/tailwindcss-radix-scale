# TailwindCSS Radix Scale

[![MIT License](https://img.shields.io/github/license/evfleet/tailwindcss-radix-scale)](https://github.com/evfleet/tailwindcss-radix-scale/blob/main/LICENSE)

A package to simplify using [Radix Colors](https://www.radix-ui.com/colors) when using [Tailwind](https://tailwindcss.com/).

## Installation

```bash
npm install -D tailwindcss-radix-scale
```

## Usage

Import the colours you'd like to use above where you import Tailwind.

```css
@import '@radix-ui/colors/blue.css';
@import '@radix-ui/colors/blue-dark.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then use the library in your Tailwind config to generate the classes you'd like to use.

```js
import { generateRadixScale } from "tailwindcss-radix-scale";

module.exports = {
  content: [],
  theme: {
    colors: {
      blue: generateRadixScale("blue"),
    },
  },
  plugins: [],
};
```

## Acknowledgements
Fynn ([@fyn](https://github.com/fnn)) for writing the [article](https://fynn.at/shorts/2023-03-19-how-to-use-radix-colors-with-tailwind-css) that motivated creating this package.