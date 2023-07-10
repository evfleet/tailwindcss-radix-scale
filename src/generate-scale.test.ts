import { describe, expect, it } from "vitest";
import { generateScale } from "./generate-scale";

describe("generateScale", () => {
  it("should return a scale of 24 colours", () => {
    const scale = generateScale("red");

    expect(Object.keys(scale).length).toBe(24);
  });
});
