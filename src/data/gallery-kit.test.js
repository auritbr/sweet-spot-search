import { describe, expect, test } from "bun:test";
import { galleryMedia, publishedMedia, validPlatformUrl } from "./galeria-media";
import { pressKitFile, publishedPressKit } from "./imprensa";

// Test-only inputs; no demonstration records are added to the catalogues.
describe("gallery platforms", () => {
  test("YouTube accepts its real host", () => expect(validPlatformUrl("YouTube", "https://youtu.be/test")).toBe(true));
  test("Spotify accepts its episode host", () => expect(validPlatformUrl("Spotify", "https://open.spotify.com/episode/test")).toBe(true));
  test("platforms cannot use each other's URL", () => expect(validPlatformUrl("Spotify", "https://youtu.be/test")).toBe(false));
  test("lookalike domains are rejected", () => expect(validPlatformUrl("YouTube", "https://youtube.com.example.org/watch?v=test")).toBe(false));
  test("no media is fabricated", () => expect(publishedMedia(galleryMedia)).toEqual([]));
  test("display follows registered order", () => {
    const base = { platform: "YouTube", title: "Test", thumbnail: "/test.jpg", alt: "Test", url: "https://youtu.be/test", published: true, validated: true };
    expect(publishedMedia([{ ...base, id: "later", order: 2 }, { ...base, id: "first", order: 1 }]).map(item => item.id)).toEqual(["first", "later"]);
  });
});
describe("press kit publication", () => {
  const file = { url: "/files/test-kit.pdf", published: true, validated: true };
  test("no registered file means no download", () => expect(publishedPressKit(pressKitFile)).toBe(null));
  test("registered approved file exposes its own URL", () => expect(publishedPressKit(file)).toBe("/files/test-kit.pdf"));
  test("unpublished file cannot appear", () => expect(publishedPressKit({ ...file, published: false })).toBe(null));
  test("unvalidated file cannot appear", () => expect(publishedPressKit({ ...file, validated: false })).toBe(null));
  test("placeholder link cannot appear", () => expect(publishedPressKit({ ...file, url: "#" })).toBe(null));
  test("unsafe link cannot appear", () => expect(publishedPressKit({ ...file, url: "javascript:alert(1)" })).toBe(null));
});