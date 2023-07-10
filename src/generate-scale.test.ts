import { describe, expect, it } from "vitest";
import { generateScale } from "./generate-scale";

describe("generateScale", () => {
  it("should return a scale of 24 colours", () => {
    const scale = generateScale("red");

    expect(Object.keys(scale).length).toBe(24);
  });

  it("should return a scale with the correct values", () => {
    const scale = generateScale("red");

    const validScale = Object.entries(scale).every(
      ([key, value]) => value === `var(--red-${key})`
    );

    expect(validScale).toBe(true);
  });

  it("should throw an error if the color is not valid", () => {
    expect(() => generateScale("blurple" as any)).toThrowError(
      '"blurple" is not a valid Radix color'
    );
  });
});
