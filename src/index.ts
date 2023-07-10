export type RadixColour =
  | "tomato"
  | "red"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "grass"
  | "orange"
  | "brown"
  | "sky"
  | "mint"
  | "lime"
  | "yellow"
  | "amber"
  | "gray"
  | "mauve"
  | "slate"
  | "sage"
  | "olive"
  | "sand"
  | "bronze"
  | "gold"
  | "black"
  | "white";

// Inspired from https://fynn.at/shorts/2023-03-19-how-to-use-radix-colors-with-tailwind-css
// Fixed breaking changes from 1.0.0 release of radix-colors
export function generateRadixScale(colour: RadixColour) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [
      [id, `var(--${colour}-${id})`],
      [`a${id}`, `var(--${colour}-a${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}
