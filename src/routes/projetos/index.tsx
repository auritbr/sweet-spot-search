import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { HatchedCircle, ArcThick, BrushStroke, Triangle } from "@/components/Shapes";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Nossos Projetos | Associação Maggu" },
      { name: "description", content: "Conheça as iniciativas que dão vida aos diferentes eixos do Ecossistema Maggu." },
      { property: "og:title", content: "Nossos Projetos — Associação Maggu" },
      { property: "og:description", content: "Projetos, programas, ações, produções e redes do Ecossistema Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projetos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: Projetos,
});

/**
 * Inventário do Ecossistema Maggu.
 * Iniciativas com prioridade de publicação (as demais permanecem previstas no CMS
 * e só devem ser incluídas aqui quando suas fichas forem validadas).
 */
const publishedSlugs = [
  "teatro-escola-maggu",
  "bora-fazer-teatro",
  "cineclube-teatro-maggu",
  "jardim-literario-maggu",
  "infanciar",
  "esporte-na-comunidade",
  "em-memoria-de-mim",
  "educativa-radio-web-maggu",
  "laboratorio-de-arte-sustentavel",
] as const;

/** Status por iniciativa. Preenchido somente quando validado institucionalmente. */
const statusBySlug: Record<string, string> = {};

const ALL = "Todos";

function Projetos() {
  const inventory = useMemo(
    () => projects.filter((p) => (publishedSlugs as readonly string[]).includes(p.slug)),
    [],
  );
  const axes = useMemo(() => [ALL, ...Array.from(new Set(inventory.map((p) => p.category)))], [inventory]);
  const statuses = useMemo(() => {
    const s = Array.from(new Set(inventory.map((p) => statusBySlug[p.slug]).filter(Boolean) as string[]));
    return s.length ? [ALL, ...s] : [];
  }, [inventory]);

  const [axis, setAxis] = useState<string>(ALL);
  const [status, setStatus] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const visible = inventory.filter((p) => {
    if (axis !== ALL && p.category !== axis) return false;
    if (status !== ALL && statusBySlug[p.slug] !== status) return false;
    const q = query.trim().toLowerCase();
    if (q && !(`${p.name} ${p.short} ${p.category}`.toLowerCase().includes(q))) return false;
    return true;
  });

  return (
    <>
      <PageHero
        title="Nossos Projetos"
        eyebrow="Projetos e ações"
        subtitle="Conheça as iniciativas que dão vida aos diferentes eixos do Ecossistema Maggu. Projetos, programas, ações, produções e redes se conectam por meio da cultura, formação, memória, comunicação, cidadania, esporte e desenvolvimento comunitário."
        image="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1920&q=80"
        accent="gold"
        brush="#08B9E6"
        compact
        decoration="diamonds"
      />

      <section className="scroll-mt-24 overflow-hidden bg-background py-12 md:py-16" aria-labelledby="project-list-title">
        <div className="container-x relative">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Inventário do Ecossistema</p>
            <h2 id="project-list-title" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", lineHeight: 1.15, fontWeight: 700 }}>Iniciativas por eixo</h2>
          </div>

          {/* Filtros compactos */}
          <div className="mx-auto mb-9 flex max-w-4xl flex-col gap-3 rounded-2xl border border-brand-petrol/10 bg-background/60 p-3 backdrop-blur-sm sm:p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gray/70">Eixo</span>
              {axes.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAxis(a)}
                  aria-pressed={axis === a}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${axis === a ? "bg-brand-red text-primary-foreground" : "bg-brand-soft text-brand-petrol hover:bg-brand-cyan/15"}`}
                >
                  {a}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gray/70">
                Status
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  disabled={statuses.length === 0}
                  className="rounded-full border border-brand-petrol/15 bg-background px-3 py-1.5 text-xs font-semibold normal-case tracking-normal text-brand-petrol disabled:opacity-50"
                >
                  {statuses.length ? statuses.map((s) => <option key={s} value={s}>{s}</option>) : <option value={ALL}>Não informado</option>}
                </select>
              </label>
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-gray/60" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar iniciativa"
                  aria-label="Buscar iniciativa"
                  className="w-full rounded-full border border-brand-petrol/15 bg-background py-2 pl-9 pr-3 text-sm text-brand-ink placeholder:text-brand-gray/60"
                />
              </div>
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="mx-auto max-w-xl rounded-2xl border border-brand-petrol/10 bg-brand-soft/50 px-5 py-6 text-center text-sm text-brand-gray">Nenhuma iniciativa publicada nesta categoria neste momento.</p>
          ) : (
            <div className="divide-y divide-brand-petrol/15">
              {visible.map((project, index) => (
                <article key={project.slug} className="group relative grid items-center gap-8 py-10 first:pt-2 md:grid-cols-2 md:gap-14 md:py-14">
                  <div className={`relative z-10 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">{project.category}</p>
                    <h3 className="mt-3 max-w-xl text-brand-ink" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.35rem)", lineHeight: 1.15, fontWeight: 700 }}>{project.name}</h3>
                    <BrushStroke color="#FFB400" className="mt-5 w-24" />
                    <p className="mt-5 max-w-xl leading-relaxed text-brand-gray">{project.short}</p>
                    {statusBySlug[project.slug] ? (
                      <p className="mt-3 inline-flex rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-petrol">{statusBySlug[project.slug]}</p>
                    ) : null}
                    <Button asChild className="mt-6 rounded-full bg-brand-red px-6 text-primary-foreground shadow-none hover:bg-brand-petrol">
                      <Link to="/projetos/$slug" params={{ slug: project.slug }}>Conheça o projeto <ChevronRight aria-hidden="true" /></Link>
                    </Button>
                  </div>
                  {project.image ? (
                    <div className={`relative mx-auto w-full max-w-[360px] ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="aspect-square overflow-hidden rounded-full bg-brand-soft">
                        <img src={project.image} alt={`Atividade do projeto ${project.name}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" loading="lazy" />
                      </div>
                      <ArcThick color={index % 2 === 0 ? "#00384C" : "#ED1C24"} className="absolute -left-6 -top-5 w-28 transition-transform duration-500 group-hover:-rotate-6" from={105} to={265} />
                      <HatchedCircle size={82} color="#08B9E6" className="absolute -bottom-4 left-0 opacity-65" />
                      <Triangle color="#FFB400" size={42} className="absolute right-1 top-2" rotate={18 + index * 8} />
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CompactFinalCTA
        title="Cada iniciativa revela uma forma de atuar."
        text="Explore o Ecossistema Maggu ou acompanhe a Agenda para conhecer projetos, atividades e experiências em movimento."
        primary={{ label: "Explorar o Ecossistema", to: "/ecossistema" }}
        secondary={{ label: "Ver Agenda", to: "/agenda" }}
        variant="projects"
      />
    </>
  );
}
