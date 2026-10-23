import { describe, expect, test } from "bun:test";
import { evidenceReducer, getEvidencePage, initialEvidenceState, publishedEvidences } from "./evidencias";
import { publishedTestimonials } from "./depoimentos";

// Synthetic fixtures exercise logic only; they are never public catalogue data.
const items = Array.from({ length: 12 }, (_, i) => ({ id: String(i), title: `Fixture ${i + 1}`, type: i < 5 ? "Certificados" : "Registros", initiative: i < 5 ? "A" : "B", year: i < 5 ? 2026 : 2025, published: true, validated: true, order: i }));
const filters = initialEvidenceState;

describe("evidence pagination", () => {
  test("12 records produce four pages of exactly three records", () => {
    for (let page = 1; page <= 4; page++) {
      const result = getEvidencePage(items, filters, page);
      expect(result.totalPages).toBe(4);
      expect(result.items.map(item => item.id)).toEqual(items.slice((page - 1) * 3, page * 3).map(item => item.id));
    }
  });
  test("five filtered records produce pages of three and two", () => {
    const filter = { ...filters, type: "Certificados" };
    expect(getEvidencePage(items, filter, 1).items).toHaveLength(3);
    expect(getEvidencePage(items, filter, 2).items).toHaveLength(2);
    expect(getEvidencePage(items, filter, 3).page).toBe(2);
  });
  for (const [field, value] of [["type", "Certificados"], ["initiative", "A"], ["year", "2026"]]) {
    test(`${field} resets to page 1`, () => expect(evidenceReducer({ ...filters, page: 4 }, { field, value }).page).toBe(1));
    test(`${field} filters before pagination`, () => expect(getEvidencePage(items, { ...filters, [field]: value }, 2).items.map(item => item.id)).toEqual(["3", "4"]));
  }
  test("no matches have no page or results", () => expect(getEvidencePage(items, { ...filters, initiative: "missing" }, 1)).toEqual({ items: [], page: 0, totalPages: 0 }));
  test("unpublished evidence is excluded", () => expect(publishedEvidences([{ ...items[0], published: false }])).toEqual([]));
  test("unvalidated evidence is excluded", () => expect(publishedEvidences([{ ...items[0], validated: false }])).toEqual([]));
  test("ordering is supplied by records", () => expect(publishedEvidences([items[2], items[0]]).map(item => item.id)).toEqual(["0", "2"]));
});

describe("testimonials publication", () => {
  const item = { id: "fixture", name: "Fixture", text: "Test-only record", published: true, validated: true, authorized: true };
  for (const field of ["published", "validated", "authorized"]) {
    test(`${field} is mandatory`, () => expect(publishedTestimonials([{ ...item, [field]: false }])).toEqual([]));
  }
  test("validated authorized testimonial is included", () => expect(publishedTestimonials([item])).toEqual([item]));
});