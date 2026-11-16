import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { TURKEY_BOX_OFFICE, HOLLYWOOD_BOX_OFFICE } from "./box-office";

describe("homepage box-office selections", () => {
  it("shows exactly Turkey's top five in source order", () => {
    assert.deepEqual(TURKEY_BOX_OFFICE.films.map(f => f.title), ["Çakallarla Dans 8: Şututgart Çıkarması", "Gupi ve Gülmeyen Kral", "Çatlı 2", "Şapkalı Kedi", "Her Şey Ortada"]);
    assert.deepEqual(TURKEY_BOX_OFFICE.films.map(f => f.rank), [1, 2, 3, 4, 5]);
  });
  it("shows exactly the Hollywood top five in source order", () => {
    assert.deepEqual(HOLLYWOOD_BOX_OFFICE.films.map(f => f.title), ["Ebenezer", "The Cat in the Hat", "Godzilla Minus Zero", "Ramayana: Rise of a Legend", "You Can See Everything"]);
    assert.deepEqual(HOLLYWOOD_BOX_OFFICE.films.map(f => f.rank), [1, 2, 3, 4, 5]);
  });
  it("keeps every poster on the site asset host", () => {
    for (const film of [...TURKEY_BOX_OFFICE.films, ...HOLLYWOOD_BOX_OFFICE.films]) {
      assert.ok(film.poster.startsWith("/__l5e/assets-v1/"));
    }
  });
});