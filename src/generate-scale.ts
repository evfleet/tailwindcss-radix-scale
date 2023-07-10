const availableColors = [
  "tomato",
  "red",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "grass",
  "orange",
  "brown",
  "sky",
  "mint",
  "lime",
  "yellow",
  "amber",
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
  "bronze",
  "gold",
  "black",
  "white",
] as const;

export type RadixColor = (typeof availableColors)[number];

export type RadixScale<T extends string> = {
  "1": `var(--${T}-1)`;
  "2": `var(--${T}-2)`;
  "3": `var(--${T}-3)`;
  "4": `var(--${T}-4)`;
  "5": `var(--${T}-5)`;
  "6": `var(--${T}-6)`;
  "7": `var(--${T}-7)`;
  "8": `var(--${T}-8)`;
  "9": `var(--${T}-9)`;
  "10": `var(--${T}-10)`;
  "11": `var(--${T}-11)`;
  "12": `var(--${T}-12)`;
  a1: `var(--${T}-a1)`;
  a2: `var(--${T}-a2)`;
  a3: `var(--${T}-a3)`;
  a4: `var(--${T}-a4)`;
  a5: `var(--${T}-a5)`;
  a6: `var(--${T}-a6)`;
  a7: `var(--${T}-a7)`;
  a8: `var(--${T}-a8)`;
  a9: `var(--${T}-a9)`;
  a10: `var(--${T}-a10)`;
  a11: `var(--${T}-a11)`;
  a12: `var(--${T}-a12)`;
};

// Inspired from https://fynn.at/shorts/2023-03-19-how-to-use-radix-colors-with-tailwind-css
// Fixed breaking changes from 1.0.0 release of radix-colors
export function generateScale<T extends RadixColor>(color: T): RadixScale<T> {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [
      [id, `var(--${color}-${id})`],
      [`a${id}`, `var(--${color}-a${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}
