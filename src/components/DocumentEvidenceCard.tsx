import { ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const tones = [
  "text-document-blue bg-document-blue/12",
  "text-document-amber bg-document-amber/12",
  "text-brand-red bg-brand-red/12",
  "text-document-green bg-document-green/12",
  "text-brand-cyan bg-brand-cyan/12",
  "text-brand-petrol bg-brand-petrol/12",
];

/** Shared ODS document presentation; optional metadata never generates fields. */
export function DocumentEvidenceCard({ title, category, url, initiative, date, context, index = 0 }: {
  title: string; category: string; url?: string; initiative?: string; date?: string; context?: string; index?: number;
}) {
  const tone = tones[index % tones.length];
  return <li className="group flex flex-wrap items-center gap-3 rounded-[16px] border border-brand-petrol/8 bg-background/80 px-5 py-4 transition hover:border-brand-petrol/18">
    <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl ${tone}`}>
      <FileText className="size-4" aria-hidden="true" />
    </span>
    <div className="min-w-0 flex-1 break-words">
      <p className="text-[15px] font-semibold text-brand-ink">{title}</p>
      <p className={`text-xs ${tone.split(" ")[0]}`}>{category}</p>
      {(initiative || date) && <p className="mt-1.5 text-xs text-brand-gray">{[initiative, date].filter(Boolean).join(" · ")}</p>}
      {context && <p className="mt-2 text-sm leading-relaxed text-brand-gray">{context}</p>}
    </div>
    {url?.trim() && <Button asChild variant="outline" className="inline-flex h-auto shrink-0 gap-2 rounded-full border-brand-petrol/20 bg-transparent px-4 py-2 text-xs font-semibold text-brand-petrol shadow-none transition hover:bg-brand-soft hover:text-brand-petrol [&_svg]:size-3.5">
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visualizar ${title}`}>Visualizar <ArrowUpRight aria-hidden="true" /></a>
    </Button>}
  </li>;
}