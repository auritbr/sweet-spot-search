export type GalleryMedia = {
  id: string;
  type: "Podcast" | "Vídeo";
  title: string;
  thumbnail: string;
  alt: string;
  date?: string;
  description?: string;
  url: string;
  order: number;
  published: boolean;
  validated: boolean;
};

// No episodes or videos have been validated for publication yet.
export const galleryMedia: GalleryMedia[] = [];

export function publishedMedia(records: GalleryMedia[]) {
  return records.filter((item) => item.published && item.validated && item.title.trim() && item.thumbnail.trim() && item.alt.trim() && /^https?:\/\//i.test(item.url)).sort((a, b) => a.order - b.order);
}