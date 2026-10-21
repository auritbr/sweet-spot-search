import { describe, expect, test } from "bun:test";
import { publishedConnections, type InstitutionalConnection } from "./conexoes";
import { publishedMedia, type GalleryMedia } from "./galeria-media";

// Synthetic records are test fixtures only; never included in the public catalogues.
const connection: InstitutionalConnection = { id: "test", name: "Fixture", logo: "/fixture.png", alt: "Logo da Fixture", category: "APOIADOR/PARCEIRO", order: 1, published: true, validated: true, authorized: true };
const media: GalleryMedia = { id: "test", type: "Vídeo", title: "Fixture", thumbnail: "/fixture.jpg", alt: "Fixture", url: "https://example.org/video", order: 1, published: true, validated: true };

describe("institutional publication", () => {
  test("unpublished connections cannot appear", () => expect(publishedConnections([{ ...connection, published: false }], "APOIADOR/PARCEIRO")).toEqual([]));
  test("unvalidated connections cannot appear", () => expect(publishedConnections([{ ...connection, validated: false }], "APOIADOR/PARCEIRO")).toEqual([]));
  test("unauthorized connections cannot appear", () => expect(publishedConnections([{ ...connection, authorized: false }], "APOIADOR/PARCEIRO")).toEqual([]));
  test("supporters are not presented as networks", () => expect(publishedConnections([connection], "REDE/ARTICULAÇÃO")).toEqual([]));
  test("authorized published connections can appear", () => expect(publishedConnections([connection], "APOIADOR/PARCEIRO")).toEqual([connection]));
  test("unpublished media cannot appear", () => expect(publishedMedia([{ ...media, published: false }])).toEqual([]));
  test("unvalidated media cannot appear", () => expect(publishedMedia([{ ...media, validated: false }])).toEqual([]));
  test("validated published media can appear", () => expect(publishedMedia([media])).toEqual([media]));
});