export type GalleryMedia = {
  id: string;
  platform: "YouTube" | "Spotify";
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

export function validPlatformUrl(platform: GalleryMedia["platform"], value: string) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) return false;
    const host = url.hostname.toLowerCase();
    return platform === "YouTube"
      ? ["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be", "music.youtube.com"].includes(host) && url.pathname !== "/"
      : platform === "Spotify" && host === "open.spotify.com" && /^\/(?:intl-[a-z-]+\/)?(?:episode|show|track|album|playlist)\/[^/]+/.test(url.pathname);
  } catch {
    return false;
  }
}

export function publishedMedia(records: GalleryMedia[]) {
  return records.filter((item) => item.published && item.validated && item.title.trim() && item.thumbnail.trim() && item.alt.trim() && validPlatformUrl(item.platform, item.url)).sort((a, b) => a.order - b.order);
}