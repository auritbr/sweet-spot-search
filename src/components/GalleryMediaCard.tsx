import { ArrowRight, Icon, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GalleryMedia } from "@/data/galeria-media";

const spotifyNode: Parameters<typeof Icon>[0]["iconNode"] = [
  ["circle", { cx: 12, cy: 12, r: 10, key: "circle" }],
  ["path", { d: "M6 9c4-1.5 8-1 12 1", key: "wave-1" }],
  ["path", { d: "M7 12c3-1 6.5-.5 10 1", key: "wave-2" }],
  ["path", { d: "M8 15c2.5-.7 5-.3 8 1", key: "wave-3" }],
];

export function GalleryMediaCard({ item }: { item: GalleryMedia }) {
  const youtube = item.platform === "YouTube";
  const action = youtube ? "Assistir" : "Ouvir";
  const date = item.date ? new Date(item.date) : null;
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex aspect-video items-center justify-center overflow-hidden bg-brand-soft">
        <img src={item.thumbnail} alt={item.alt} loading="lazy" className={youtube ? "h-full w-full object-cover" : "aspect-square h-full max-w-full object-cover"} />
      </div>
      <div className="flex flex-1 flex-col items-start p-5">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${youtube ? "bg-platform-youtube/5 text-brand-ink" : "bg-platform-spotify/10 text-brand-ink"}`}>
          {youtube ? <Youtube className="size-4 text-platform-youtube" aria-hidden="true" /> : <Icon iconNode={spotifyNode} className="size-4 text-platform-spotify-ink" aria-hidden="true" />}
          {item.platform}
        </span>
        <h2 className="mt-3 w-full break-words text-lg font-semibold leading-snug">{item.title}</h2>
        {date && Number.isFinite(date.getTime()) && <time dateTime={item.date} className="mt-2 text-xs text-brand-gray">{new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(date)}</time>}
        {item.description?.trim() && <p className="mt-3 w-full break-words text-sm leading-relaxed text-brand-gray">{item.description}</p>}
        <div className="mt-auto pt-4">
          <Button asChild variant="link" size="sm" className={`h-auto min-h-8 max-w-full whitespace-normal px-0 text-left ${youtube ? "decoration-platform-youtube" : "decoration-platform-spotify"}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${action} ${item.title} no ${item.platform}`} title={`${action} ${item.title} no ${item.platform}`}>
              {action} no {item.platform} <ArrowRight className={youtube ? "text-platform-youtube" : "text-platform-spotify-ink"} aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}