import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArcThick, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import { documents } from "@/data/site";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/transparencia/")({
  head: () => ({
    meta: [
      { title: "Transparência | Associação Maggu" },
      { name: "description", content: "Documentos, relatórios, governança, integridade e informações institucionais da Associação Sócio Cultural Maggu." },
      { property: "og:title", content: "Transparência | Associação Maggu" },
      { property: "og:description", content: "Informações institucionais da Associação Sócio Cultural Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/transparencia" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/transparencia" }],
  }),
  component: Transparencia,
});

const EMPTY = "Nenhum documento publicado nesta categoria neste momento.";

const institutional = [
  ["Razão social", "Associação Sócio Cultural Maggu"],
  ["CNPJ", "61.841.454/0001-80"],
  ["Sede", "Benedito Bentes — Maceió/AL"],
  ["E-mail institucional", "comunicacaomktmaggu@gmail.com"],
  ["Telefone", "(82) 99806-7374"],
] as const;

const primaryBtn = "inline-flex rounded-full bg-brand-petrol px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-brand-red";
const ghostBtn = "inline-flex rounded-full border border-brand-petrol/25 px-5 py-2 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft";

function DocumentList({ category, color }: { category: string; color: string }) {
  const docs = useMemo(() => documents.filter((d) => d.category === category), [category]);
  if (docs.length === 0) {
    return (
      <p className="border-t border-black/5 py-4 text-sm text-brand-gray">{EMPTY}</p>
    );
  }
  return (
    <ul className="divide-y divide-black/5">
      {docs.map((d) => (
        <li key={d.name} className="flex flex-wrap items-center gap-3 py-4 md:flex-nowrap">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-[10px] font-bold text-brand-ink">{d.format}</span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-brand-ink">{d.name}</p>
            <p className="mt-0.5 text-xs text-brand-gray">{d.year} · {d.format}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <a href={d.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-brand-ink/20 px-3 py-2 text-xs font-semibold text-brand-ink hover:bg-brand-soft">Visualizar</a>
            <a href={d.url} download className="rounded-full px-3 py-2 text-xs font-semibold text-white hover:opacity-90" style={{ backgroundColor: color }}>Baixar</a>
          </div>
        </li>
      ))}
    </ul>
  );
}

type Area = { title: string; color: string; body: React.ReactNode };

function Transparencia() {
  const areas: Area[] = [
    {
      title: "Dados Institucionais",
      color: "#00384C",
      body: (
        <dl className="divide-y divide-black/5 text-sm">
          {institutional.map(([label, value]) => (
            <div key={label} className="flex flex-wrap gap-x-3 gap-y-0.5 py-3">
              <dt className="min-w-[9.5rem] text-brand-gray">{label}</dt>
              <dd className="font-semibold text-brand-ink">{value}</dd>
            </div>
          ))}
        </dl>
      ),
    },
    { title: "Governança", color: "#08B9E6", body: <DocumentList category="Governança" color="#08B9E6" /> },
    { title: "Documentos", color: "#FFB400", body: <DocumentList category="Documentos" color="#FFB400" /> },
    { title: "Relatórios", color: "#ED1C24", body: <DocumentList category="Relatórios" color="#ED1C24" /> },
    { title: "Integridade", color: "#FF7A00", body: <DocumentList category="Integridade" color="#FF7A00" /> },
    { title: "ODS / Maggu 2030", color: "#B8DC4B", body: <DocumentList category="ODS" color="#B8DC4B" /> },
    { title: "Privacidade", color: "#00384C", body: <DocumentList category="Privacidade" color="#00384C" /> },
    { title: "Cadastros e Redes", color: "#08B9E6", body: <DocumentList category="Cadastros e Redes" color="#08B9E6" /> },
  ];


  const [open, setOpen] = useState<Record<string, boolean>>(() => ({ [areas[0]!.title]: true }));
  const toggle = (t: string) => setOpen((v) => ({ ...v, [t]: !v[t] }));

  return (
    <>
      <PageHero title="Transparência" eyebrow="Institucional" subtitle="Acesse documentos, relatórios, atas, certidões, políticas e demais informações institucionais da Associação Sócio Cultural Maggu." image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80" accent="gold" brush="#08B9E6" compact decoration="curve" />

      <section className="relative overflow-hidden bg-white py-12 md:py-16">
        <QuarterCircle corner="br" color="#ED1C24" className="pointer-events-none absolute -left-2 top-12 w-12 opacity-75 md:left-6 md:w-16" />
        <HatchedCircle size={104} color="#08B9E6" className="pointer-events-none absolute -right-12 bottom-8 opacity-20 md:-right-7" />
        <div className="container-x">
          <div className="relative mx-auto max-w-[820px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Compromisso institucional</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight text-brand-ink md:text-[2.1rem]">Nosso jeito de fazer</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-brand-gray md:text-base">
              <p>A Associação Maggu acredita que uma atuação comunitária forte também se constrói com <strong className="font-semibold text-brand-petrol">responsabilidade, organização e transparência</strong>.</p>
              <p>Esta página reúne informações e documentação institucional da Associação. Registros, fotografias, programas e materiais ligados à trajetória das iniciativas ficam reunidos no <Link to="/impacto-memoria" className="font-semibold text-brand-petrol underline-offset-4 hover:underline">Banco de Evidências</Link>, em Impacto &amp; Memória.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="acervo" className="relative overflow-hidden bg-white pb-14 md:pb-20">
        <ArcThick color="#00384C" className="pointer-events-none absolute -left-10 top-6 w-20 opacity-30 md:left-4 md:w-24" from={210} to={330} />
        <Triangle color="#FFB400" size={26} className="pointer-events-none absolute right-6 top-4 hidden opacity-70 md:block" rotate={14} />
        <div className="container-x max-w-4xl">
          <div className="space-y-3">
            {areas.map((area, i) => {
              const isOpen = !!open[area.title];
              return (
                <div key={area.title} className={`overflow-hidden rounded-2xl border border-black/5 ${i % 2 === 0 ? "bg-white" : "bg-brand-soft/50"}`}>
                  <button type="button" onClick={() => toggle(area.title)} aria-expanded={isOpen} className="flex w-full items-center gap-4 px-4 py-4 text-left transition hover:bg-brand-soft/60 md:px-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ backgroundColor: area.color }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /></svg>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-brand-ink" style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", fontWeight: 600 }}>{area.title}</span>
                      <span className="mt-0.5 block text-xs text-brand-gray">{area.summary}</span>
                    </span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-brand-ink transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "none" }} aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                  </button>
                  <div className="grid transition-all" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <div className="px-4 pb-2 md:px-5">{area.body}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CompactFinalCTA
        title="Transparência também se constrói com acesso."
        text="Consulte informações institucionais, conheça a governança da Associação e acompanhe os canais oficiais de contato."
        primary={{ label: "Acessar informações", href: "#acervo" }}
        secondary={{ label: "Entre em Contato", to: "/contato" }}
        variant="transparency"
      />
    </>
  );
}
