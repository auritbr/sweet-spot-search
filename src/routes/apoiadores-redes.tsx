import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { institutionalConnections, publishedConnections, safeOfficialUrl, type ConnectionCategory } from "@/data/conexoes";

const heroImage = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80";
const shareImage = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&h=630&q=75";
const title = "Apoiadores e Redes — Associação Maggu";
const description = "Instituições, organizações, iniciativas e redes que caminham conosco e fortalecem a atuação sociocultural da Associação Maggu.";

export const Route = createFileRoute("/apoiadores-redes")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/apoiadores-redes" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: shareImage }, { name: "twitter:image", content: shareImage },
  ], links: [{ rel: "canonical", href: "/apoiadores-redes" }] }),
  component: ApoiadoresRedes,
});

function ConnectionGrid({ category, empty }: { category: ConnectionCategory; empty: string }) {
  const records = publishedConnections(institutionalConnections, category);
  if (!records.length) return <p className="border-y border-brand-petrol/10 py-6 text-sm leading-relaxed text-brand-gray">{empty}</p>;
  return <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {records.map((record) => {
      const href = safeOfficialUrl(record.officialUrl);
      const content = <>
        <div className="flex h-28 items-center justify-center p-4"><img src={record.logo} alt={record.alt} loading="lazy" className="h-full w-full object-contain" /></div>
        <h3 className="mt-3 text-sm font-semibold leading-snug [overflow-wrap:anywhere]">{record.name}</h3>
        {record.relationshipValidated && record.relationship && <p className="mt-1 text-xs leading-relaxed text-brand-gray">{record.relationship}</p>}
      </>;
      const classes = "block h-full rounded-[14px] border border-brand-petrol/10 bg-card p-4 text-center";
      return <article key={record.id}>{href ? <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={`Site oficial de ${record.name}`}>{content}</a> : <div className={classes}>{content}</div>}</article>;
    })}
  </div>;
}

function ApoiadoresRedes() {
  return <>
    <PageHero eyebrow="CONEXÕES" title="Apoiadores e Redes" subtitle={description} image={heroImage} accent="cyan" compact decoration="orbit" />
    <Section className="overflow-hidden bg-background">
      <div className="container-x">
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3" aria-hidden="true"><span className="h-5 w-10 rounded-t-full border-2 border-brand-cyan border-b-0" /><span className="size-2 rotate-45 bg-brand-gold" /><span className="size-1.5 rounded-full bg-brand-red" /></div>
          <h2 className="text-2xl font-bold md:text-3xl">Quem caminha conosco</h2>
          <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-brand-gray">
            <p>A Associação Sócio Cultural Maggu agradece e reconhece as instituições, organizações, iniciativas e redes que apoiam, colaboram e fortalecem nossa atuação sociocultural.</p>
            <p>Cada parceria representa uma contribuição importante para a promoção da cultura, da arte, da educação e da transformação social.</p>
            <p className="font-semibold text-brand-petrol">Conheça quem caminha conosco!</p>
          </div>
        </div>
      </div>
    </Section>
    <Section className="bg-background">
      <div className="container-x">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Nossos apoiadores e parceiros</h2>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-brand-gray">Instituições e organizações que contribuem, apoiam ou desenvolvem iniciativas em parceria com a Associação Maggu.</p>
        <ConnectionGrid category="APOIADOR/PARCEIRO" empty="Nenhum apoiador ou parceiro publicado nesta seção neste momento." />
      </div>
    </Section>
    <Section className="overflow-hidden bg-brand-soft/60">
      <div className="container-x relative">
        <span className="mb-4 block size-3 rotate-45 border border-brand-cyan" aria-hidden="true" />
        <h2 className="mb-3 max-w-3xl text-2xl font-bold md:text-3xl">Redes e articulações das quais fazemos parte</h2>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-brand-gray">Espaços, redes e articulações que conectam a Associação Maggu a iniciativas, organizações e agendas relacionadas à sua atuação.</p>
        <ConnectionGrid category="REDE/ARTICULAÇÃO" empty="Nenhuma rede ou articulação publicada nesta seção neste momento." />
      </div>
    </Section>
    <CompactFinalCTA title="Construir em rede fortalece o que fazemos." text="Parcerias, apoios e articulações ampliam possibilidades e ajudam a manter iniciativas culturais e comunitárias em movimento." primary={{ label: "Conheça o Ecossistema", to: "/ecossistema" }} secondary={{ label: "Propor parceria", href: "/contato?assunto=Parceria" }} variant="ecosystem" />
  </>;
}