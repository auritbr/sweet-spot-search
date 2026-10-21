import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";

const title = "Notas e Pronunciamentos — Associação Maggu";
const description = "Área de notas e pronunciamentos institucionais da Associação Sócio Cultural Maggu.";
const image = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80";
const shareImage = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&h=630&q=75";

export const Route = createFileRoute("/notas-pronunciamentos")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/notas-pronunciamentos" }, { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: shareImage }, { name: "twitter:image", content: shareImage },
  ], links: [{ rel: "canonical", href: "/notas-pronunciamentos" }] }),
  component: NotasPronunciamentos,
});

function NotasPronunciamentos() {
  return <><PageHero eyebrow="Institucional" title="Notas e Pronunciamentos" image={image} accent="gold" compact decoration="frame" />
    <Section><div className="container-x"><p className="mx-auto max-w-3xl border-y border-brand-petrol/10 py-6 text-center text-sm leading-relaxed text-brand-gray">Nenhuma nota ou pronunciamento publicado nesta área neste momento.</p></div></Section>
  </>;
}