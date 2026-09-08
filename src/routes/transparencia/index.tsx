import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { FileText } from "lucide-react";
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

function EmptyState() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-brand-petrol/10 bg-brand-soft/50 px-5 py-4">
      <FileText className="size-4 shrink-0 text-brand-petrol/60" aria-hidden="true" />
      <p className="text-sm leading-relaxed text-brand-gray">{EMPTY}</p>
    </div>
  );
}

function DocumentList({ category }: { category: "Documentos" | "Relatórios" | "Integridade" }) {
  const docs = useMemo(() => documents.filter((d) => d.category === category), [category]);
  if (docs.length === 0) return <EmptyState />;
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {docs.map((d) => (
        <li key={d.name} className="flex items-center gap-3 rounded-xl border border-brand-petrol/10 bg-white px-4 py-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-[10px] font-bold text-brand-ink">{d.format}</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-brand-ink">{d.name}</p>
            <p className="mt-0.5 text-xs text-brand-gray">{d.year} · {d.format}</p>
          </div>
          <a href={d.url} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border border-brand-petrol/20 px-3 py-1.5 text-xs font-semibold text-brand-petrol hover:bg-brand-soft">Acessar</a>
        </li>
      ))}
    </ul>
  );
}

function Block({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-brand-petrol/10 bg-white p-6 md:p-7">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">{eyebrow}</p>
      <h2 className="mt-2 text-[1.25rem] font-bold leading-snug text-brand-ink md:text-[1.4rem]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const institutional = [
  ["Razão social", "Associação Sócio Cultural Maggu"],
  ["CNPJ", "61.841.454/0001-80"],
  ["Sede", "Benedito Bentes — Maceió/AL"],
  ["E-mail institucional", "comunicacaomktmaggu@gmail.com"],
  ["Telefone", "(82) 99806-7374"],
] as const;

function Transparencia() {
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
        <div className="container-x">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <Block eyebrow="Dados institucionais" title="Identificação da Associação">
              <dl className="divide-y divide-brand-petrol/10 text-sm">
                {institutional.map(([label, value]) => (
                  <div key={label} className="flex flex-wrap gap-x-3 gap-y-0.5 py-2">
                    <dt className="min-w-[9.5rem] text-brand-gray">{label}</dt>
                    <dd className="font-semibold text-brand-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </Block>

            <Block eyebrow="Governança" title="Estrutura e responsabilidades">
              <p className="text-sm leading-relaxed text-brand-gray">A Associação organiza sua gestão por meio da Assembleia Geral, da Diretoria e do Conselho Fiscal, com responsabilidades definidas em estatuto.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/transparencia/governanca-integridade" className="inline-flex rounded-full bg-brand-petrol px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-brand-red">Governança e Integridade</Link>
                <Link to="/equipe" className="inline-flex rounded-full border border-brand-petrol/25 px-5 py-2 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Conheça a equipe</Link>
              </div>
            </Block>

            <Block eyebrow="Documentos" title="Documentação institucional">
              <p className="mb-4 text-sm leading-relaxed text-brand-gray">Estatuto, atas, certidões e demais documentos institucionais, publicados conforme validação.</p>
              <DocumentList category="Documentos" />
            </Block>

            <Block eyebrow="Relatórios" title="Relatórios institucionais">
              <p className="mb-4 text-sm leading-relaxed text-brand-gray">Relatórios publicados após validação institucional.</p>
              <DocumentList category="Relatórios" />
            </Block>

            <Block eyebrow="Integridade" title="Integridade e conduta">
              <p className="text-sm leading-relaxed text-brand-gray">Orientações e canais para o encaminhamento responsável de situações relacionadas à integridade institucional.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/canal-de-denuncias" className="inline-flex rounded-full bg-brand-petrol px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-brand-red">Canal de Denúncias</Link>
                <Link to="/transparencia/governanca-integridade" className="inline-flex rounded-full border border-brand-petrol/25 px-5 py-2 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Governança e Integridade</Link>
              </div>
              <div className="mt-4"><DocumentList category="Integridade" /></div>
            </Block>

            <Block eyebrow="ODS / Maggu 2030" title="Compromissos de sustentabilidade">
              <p className="text-sm leading-relaxed text-brand-gray">Compromissos institucionais, governança e indicadores ligados aos Objetivos de Desenvolvimento Sustentável.</p>
              <Link to="/ods-maggu-2030" className="mt-4 inline-flex rounded-full bg-brand-petrol px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-brand-red">Acessar subárea</Link>
            </Block>

            <Block eyebrow="Privacidade" title="Privacidade e proteção de dados">
              <p className="text-sm leading-relaxed text-brand-gray">Orientações sobre o tratamento de dados pessoais e sobre o uso dos canais digitais da Associação.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/privacidade" className="inline-flex rounded-full bg-brand-petrol px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-brand-red">Política de Privacidade</Link>
                <Link to="/termos-de-uso" className="inline-flex rounded-full border border-brand-petrol/25 px-5 py-2 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Termos de Uso</Link>
              </div>
            </Block>

            <Block eyebrow="Cadastros e redes" title="Reconhecimentos validados">
              <ul className="space-y-2 text-sm leading-relaxed text-brand-gray">
                <li><strong className="font-semibold text-brand-ink">Ponto de Cultura</strong> — Teatro Escola Maggu certificado em 2025.</li>
                <li><strong className="font-semibold text-brand-ink">Cadastro Alagoano do Esporte (CAE)</strong> — inscrição da Associação Maggu.</li>
              </ul>
            </Block>
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
