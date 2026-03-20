import { describe, it, expect } from "vitest";
import {
  LANDING_SECTION_TYPES,
  SECTION_TYPE_LABELS,
  SECTION_TYPE_CATEGORIES,
} from "../src/types/landing-pages";
import { sectionConfigSchemas } from "../src/schemas/section-configs";

describe("LANDING_SECTION_TYPES array", () => {
  it("has no duplicates", () => {
    const unique = new Set(LANDING_SECTION_TYPES);
    expect(unique.size).toBe(LANDING_SECTION_TYPES.length);
  });
});

describe("SECTION_TYPE_LABELS", () => {
  it("has an entry for every type in LANDING_SECTION_TYPES", () => {
    for (const type of LANDING_SECTION_TYPES) {
      expect(SECTION_TYPE_LABELS[type]).toBeDefined();
      expect(typeof SECTION_TYPE_LABELS[type]).toBe("string");
      expect(SECTION_TYPE_LABELS[type].length).toBeGreaterThan(0);
    }
  });

  it("has no extra keys beyond LANDING_SECTION_TYPES", () => {
    const labelKeys = Object.keys(SECTION_TYPE_LABELS);
    expect(labelKeys.sort()).toEqual([...LANDING_SECTION_TYPES].sort());
  });
});

describe("SECTION_TYPE_CATEGORIES", () => {
  it("covers every type in LANDING_SECTION_TYPES exactly once", () => {
    const allCategorised = SECTION_TYPE_CATEGORIES.flatMap((cat) => cat.types);
    expect(allCategorised.sort()).toEqual([...LANDING_SECTION_TYPES].sort());
  });

  it("has no duplicate types across categories", () => {
    const allCategorised = SECTION_TYPE_CATEGORIES.flatMap((cat) => cat.types);
    const unique = new Set(allCategorised);
    expect(unique.size).toBe(allCategorised.length);
  });

  it("every category has a non-empty label", () => {
    for (const cat of SECTION_TYPE_CATEGORIES) {
      expect(cat.label.length).toBeGreaterThan(0);
    }
  });

  it("every category has at least one type", () => {
    for (const cat of SECTION_TYPE_CATEGORIES) {
      expect(cat.types.length).toBeGreaterThan(0);
    }
  });
});

describe("sectionConfigSchemas map", () => {
  it("has a schema for every type in LANDING_SECTION_TYPES", () => {
    for (const type of LANDING_SECTION_TYPES) {
      expect(sectionConfigSchemas[type]).toBeDefined();
    }
  });

  it("has no extra keys beyond LANDING_SECTION_TYPES", () => {
    const schemaKeys = Object.keys(sectionConfigSchemas);
    expect(schemaKeys.sort()).toEqual([...LANDING_SECTION_TYPES].sort());
  });
});
