import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { useMemo, useReducer } from "react";
import { Section, SectionTitle } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { DocumentEvidenceCard } from "@/components/DocumentEvidenceCard";
import { ALL_EVIDENCES, evidenceReducer, evidenceTypes, getEvidencePage, initialEvidenceState, publishedEvidences, type Evidence } from "@/data/evidencias";

export function EvidenceBank({ items, initiatives }: { items: Evidence[]; initiatives: string[] }) {
  const [state, dispatch] = useReducer(evidenceReducer, initialEvidenceState);
  const years = useMemo(() => [ALL_EVIDENCES, ...Array.from(new Set(publishedEvidences(items).flatMap(item => item.year === undefined ? [] : [String(item.year)]))).sort().reverse()], [items]);
  const result = getEvidencePage(items, state, state.page);
  const select = "rounded-full border border-brand-petrol/15 bg-background px-3 py-1.5 text-xs font-semibold text-brand-petrol";
  // A compact sliding window avoids overflowing the page when the CMS grows.
  const firstPage = Math.max(1, Math.min(result.page - 1, result.totalPages - 2));
  const pageNumbers = Array.from({ length: Math.min(3, result.totalPages) }, (_, index) => firstPage + index);

  return <Section id="evidencias" className="relative overflow-hidden bg-brand-soft">
    <span className="pointer-events-none absolute -right-8 top-10 size-16 rounded-full border-[9px] border-brand-gold/15" aria-hidden="true" />
    <div className="container-x">
      <div className="mx-auto max-w-[760px] text-center">
        <SectionTitle align="center" eyebrow="Evidências" title="Banco de Evidências" />
        <p className="mx-auto -mt-1 max-w-[680px] text-[15px] leading-relaxed text-brand-gray">Certificados, declarações, registros, programas, publicações, matérias, relatórios e outros documentos ajudam a comprovar e preservar a trajetória das iniciativas do Ecossistema Maggu.</p>
      </div>
      <div className="mx-auto mt-7 flex max-w-[900px] flex-wrap items-center justify-center gap-2 rounded-2xl border border-brand-petrol/10 bg-background/70 p-3">
        <label className="flex min-w-0 max-w-full items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray/70">Tipo
          <select value={state.type} onChange={event => dispatch({ field: "type", value: event.target.value })} className={`${select} min-w-0 max-w-[220px]`}><option>{ALL_EVIDENCES}</option>{evidenceTypes.map(type => <option key={type}>{type}</option>)}</select>
        </label>
        <label className="flex min-w-0 max-w-full items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray/70">Iniciativa
          <select value={state.initiative} onChange={event => dispatch({ field: "initiative", value: event.target.value })} className={`${select} min-w-0 max-w-[220px]`}>{[ALL_EVIDENCES, ...initiatives].map(initiative => <option key={initiative}>{initiative}</option>)}</select>
        </label>
        <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray/70">Ano
          <select value={state.year} onChange={event => dispatch({ field: "year", value: event.target.value })} disabled={years.length < 2} className={`${select} disabled:opacity-50`}>{years.map(year => <option key={year}>{year}</option>)}</select>
        </label>
      </div>
      {result.items.length === 0 ? <div className="mx-auto mt-6 flex max-w-[640px] items-center gap-3 rounded-xl border border-brand-petrol/10 bg-background/60 px-5 py-4">
        <FileText className="size-4 shrink-0 text-brand-petrol/60" aria-hidden="true" /><p className="text-sm leading-relaxed text-brand-gray">Nenhuma evidência publicada nesta categoria neste momento.</p>
      </div> : <>
        <ul className="mx-auto mt-6 max-w-3xl space-y-3" aria-label="Evidências publicadas" aria-live="polite">
          {result.items.map((item, index) => <DocumentEvidenceCard key={item.id ?? `${item.title}-${item.year}-${index}`} title={item.title} category={item.type} initiative={item.initiative} date={item.date ?? (item.year === undefined ? undefined : String(item.year))} context={item.context} url={item.url} index={(result.page - 1) * 3 + index} />)}
        </ul>
        {result.totalPages > 1 && <nav aria-label="Paginação das evidências" className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-1.5">
          <Button variant="ghost" size="icon" aria-label="Página anterior" disabled={result.page === 1} onClick={() => dispatch({ page: result.page - 1 })}><ArrowLeft aria-hidden="true" /></Button>
          {pageNumbers.map(page => <Button key={page} variant={page === result.page ? "default" : "ghost"} size="icon" aria-label={`Página ${page}`} aria-current={page === result.page ? "page" : undefined} onClick={() => dispatch({ page })}>{page}</Button>)}
          <Button variant="ghost" size="icon" aria-label="Próxima página" disabled={result.page === result.totalPages} onClick={() => dispatch({ page: result.page + 1 })}><ArrowRight aria-hidden="true" /></Button>
        </nav>}
      </>}
    </div>
  </Section>;
}