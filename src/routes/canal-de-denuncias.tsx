// Conteúdo institucional sujeito à validação final da Associação Maggu.
//
// PENDÊNCIAS INSTITUCIONAIS (não implementadas e não anunciadas ao público):
// responsáveis pelo recebimento; triagem; critérios de encaminhamento; conflitos de
// interesse; regras formais de confidencialidade; guarda e descarte de dados; regras de
// acesso; prazos internos; possibilidade ou não de anonimato; eventual proteção contra
// retaliação; integração com Código de Ética e com a política de Privacidade.
// O recebimento de relatos acontece pelo e-mail específico do canal
// (contatooscmaggu@gmail.com). Seguem pendentes, sem anúncio público: endpoint e
// formulário próprios e os fluxos internos listados acima.
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Ban,
  Coins,
  Lock,
  Mail,
  MessageSquareWarning,
  Scale,
  ScrollText,
  Shield,
  UserX,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/canal-de-denuncias")({
  head: () => ({
    meta: [
      { title: "Canal de Denúncia e Relato Ético | Associação Maggu" },
      { name: "description", content: "Conheça o Canal de Denúncia e Relato Ético da Associação Maggu e as orientações para encaminhamento responsável de situações relacionadas à integridade institucional." },
      { property: "og:title", content: "Canal de Denúncia e Relato Ético | Associação Maggu" },
      { property: "og:description", content: "Orientações para encaminhamento responsável de situações relacionadas à integridade institucional." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/canal-de-denuncias" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/canal-de-denuncias" }],
  }),
  component: CanalDenuncias,
});

const relatos = [
  { icon: MessageSquareWarning, accent: "#ED1C24", title: "Assédio e condutas inadequadas", text: "Situações de assédio, constrangimento, intimidação ou comportamento incompatível com um ambiente respeitoso." },
  { icon: UserX, accent: "#FFB400", title: "Discriminação", text: "Relatos envolvendo tratamento discriminatório ou desrespeito relacionado a características pessoais ou sociais." },
  { icon: Coins, accent: "#08B9E6", title: "Uso indevido de recursos", text: "Situações envolvendo possível uso inadequado de recursos, bens, materiais ou estruturas da Associação." },
  { icon: Users, accent: "#00384C", title: "Conflitos de interesse", text: "Situações em que interesses pessoais possam interferir de maneira inadequada em decisões institucionais." },
  { icon: ScrollText, accent: "#ED1C24", title: "Irregularidades", text: "Possíveis descumprimentos de regras, procedimentos, obrigações ou compromissos institucionais." },
  { icon: AlertTriangle, accent: "#FFB400", title: "Outras situações", text: "Outros fatos que possam comprometer a ética, a integridade ou a confiança nas atividades da Associação." },
];

const principios = [
  { icon: Shield, title: "Respeito", text: "O tratamento de situações relacionadas à integridade deve preservar a dignidade das pessoas envolvidas." },
  { icon: Scale, title: "Imparcialidade", text: "A análise de situações relacionadas à integridade deve ocorrer sem julgamentos antecipados." },
  { icon: Ban, title: "Responsabilidade", text: "O canal deve ser utilizado de boa-fé e com informações verdadeiras." },
  { icon: Lock, title: "Proteção das informações", text: "Os procedimentos de acesso, tratamento, armazenamento e proteção das informações serão definidos antes da ativação do recebimento eletrônico de relatos." },
];

function Eyebrow({ children, color = "#08B9E6" }: { children: string; color?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color }}>
      <span className="inline-block h-px w-6" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </span>
  );
}

function CanalDenuncias() {
  return (
    <main id="main">
      <PageHero
        title="Canal de Denúncia e Relato Ético"
        eyebrow="Integridade"
        subtitle="Um espaço seguro para comunicar situações que possam contrariar os princípios, as normas ou a integridade institucional da Associação Maggu."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80"
        accent="cyan"
        brush="#ED1C24"
        compact
        decoration="constellation"
      />

      {/* Apresentação */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16" aria-labelledby="apresentacao-canal">
        <span className="pointer-events-none absolute -left-16 top-8 hidden size-44 rounded-full border-[18px] border-brand-cyan/10 md:block" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-10 bottom-6 hidden size-24 rotate-45 border border-brand-gold/35 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-3xl text-center">
          <Eyebrow>Canal institucional</Eyebrow>
          <h2 id="apresentacao-canal" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.4rem, 2.1vw, 1.9rem)", lineHeight: 1.25, fontWeight: 700 }}>
            Um espaço para escutar com responsabilidade.
          </h2>
          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-brand-gray" style={{ lineHeight: 1.75 }}>
            <p>A Associação Maggu valoriza relações baseadas em respeito, ética, responsabilidade e transparência.</p>
            <p>Este canal existe para que situações relacionadas à integridade institucional possam ser comunicadas de forma responsável, permitindo análise adequada e adoção das providências cabíveis.</p>
          </div>
        </div>
      </section>

      {/* O que pode ser relatado */}
      <section className="relative overflow-hidden bg-brand-soft/55 py-12 md:py-16" aria-labelledby="o-que-relatar">
        <span className="pointer-events-none absolute -right-20 -top-16 hidden size-56 rounded-full bg-brand-cyan/10 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-5xl">
          <div className="text-center">
            <Eyebrow color="#ED1C24">O que relatar</Eyebrow>
            <h2 id="o-que-relatar" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.35rem, 2vw, 1.8rem)", lineHeight: 1.25, fontWeight: 700 }}>
              Situações que podem ser encaminhadas pelo canal
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatos.map(({ icon: Icon, accent, title, text }) => (
              <article key={title} className="relative overflow-hidden rounded-[18px] border border-brand-petrol/8 bg-white/70 p-5 shadow-[0_1px_2px_rgba(0,56,76,0.05)] backdrop-blur-md">
                <span className="pointer-events-none absolute -right-6 -top-6 size-16 rounded-full" style={{ backgroundColor: `${accent}14` }} aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-3 right-4 size-2.5 rotate-45" style={{ backgroundColor: `${accent}40` }} aria-hidden="true" />
                <span className="relative flex size-9 items-center justify-center rounded-full" style={{ backgroundColor: `${accent}14`, color: accent }} aria-hidden="true">
                  <Icon className="size-[18px]" strokeWidth={2} />
                </span>
                <h3 className="relative mt-3 text-brand-ink" style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}>{title}</h3>
                <p className="relative mt-2 text-[13.5px] text-brand-gray" style={{ lineHeight: 1.65 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Estruturação do canal */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16" aria-labelledby="estruturacao-canal">
        <span className="pointer-events-none absolute -left-14 bottom-4 hidden size-40 rounded-full border border-brand-red/15 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-3xl">
          <div className="rounded-[18px] border border-brand-petrol/10 bg-brand-soft/45 p-6 backdrop-blur-md md:p-8">
            <Eyebrow color="#FFB400">Estruturação do canal</Eyebrow>
            <h2 id="estruturacao-canal" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)", lineHeight: 1.3, fontWeight: 700 }}>
              Um fluxo responsável precisa ser definido antes do recebimento de relatos.
            </h2>
            <div className="mt-4 space-y-3 text-brand-gray" style={{ lineHeight: 1.75 }}>
              <p>A Associação Maggu está estruturando os procedimentos necessários para o funcionamento do Canal de Denúncia e Relato Ético, incluindo responsabilidades, acesso às informações, tratamento de dados, encaminhamento e guarda dos relatos.</p>
              <p>O envio eletrônico será disponibilizado após a aprovação institucional e a implementação das medidas necessárias para seu funcionamento responsável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromissos */}
      <section className="relative overflow-hidden bg-brand-petrol/[0.04] py-12 md:py-16" aria-labelledby="principios-canal">
        <span className="pointer-events-none absolute -right-16 top-10 hidden size-40 rounded-full border-[16px] border-brand-gold/10 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-5xl">
          <div className="text-center">
            <Eyebrow color="#00384C">Compromissos</Eyebrow>
            <h2 id="principios-canal" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.35rem, 2vw, 1.8rem)", lineHeight: 1.25, fontWeight: 700 }}>
              Princípios que orientam a estruturação do canal
            </h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principios.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-l-2 border-brand-cyan/35 pl-4">
                <Icon className="size-[18px] text-brand-petrol" aria-hidden="true" />
                <h3 className="mt-2 text-brand-ink" style={{ fontSize: "0.98rem", fontWeight: 700 }}>{title}</h3>
                <p className="mt-1.5 text-[13.5px] text-brand-gray" style={{ lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uso responsável */}
      <section className="relative overflow-hidden bg-brand-soft/55 py-12 md:py-16" aria-labelledby="uso-responsavel">
        <span className="pointer-events-none absolute -left-12 top-1/2 hidden size-32 -translate-y-1/2 rotate-12 border border-brand-red/20 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-3xl">
          <Eyebrow color="#ED1C24">Uso responsável</Eyebrow>
          <h2 id="uso-responsavel" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.65rem)", lineHeight: 1.3, fontWeight: 700 }}>
            O canal não deve ser utilizado para acusações deliberadamente falsas.
          </h2>
          <div className="mt-4 space-y-3 text-brand-gray" style={{ lineHeight: 1.75 }}>
            <p>Relatos de boa-fé são importantes para fortalecer a integridade institucional.</p>
            <p>O canal não deve ser utilizado para ameaças, perseguições, acusações sabidamente falsas, assédio ou qualquer outra forma de utilização abusiva contra terceiros.</p>
          </div>
        </div>
      </section>

      {/* Canal digital */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16" aria-labelledby="canal-digital">
        <span className="pointer-events-none absolute -left-14 top-10 hidden size-32 rounded-full border border-brand-cyan/15 md:block" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-10 bottom-8 hidden size-20 rotate-45 border border-brand-gold/25 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-3xl">
          <Eyebrow>Canal digital</Eyebrow>
          <h2 id="canal-digital" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)", lineHeight: 1.3, fontWeight: 700 }}>
            Envie seu relato
          </h2>
          <p className="mt-3 text-brand-gray" style={{ lineHeight: 1.75 }}>
            Relatos relacionados à integridade institucional podem ser encaminhados pelo canal específico da Associação Maggu.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 rounded-[14px] border border-brand-petrol/10 bg-brand-soft/45 p-4 backdrop-blur-md">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-cyan/12 text-brand-petrol" aria-hidden="true">
              <Mail className="size-[18px]" strokeWidth={2} />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray/70">E-mail do Canal de Denúncia e Relato Ético</span>
              <a href="mailto:contatooscmaggu@gmail.com" className="block break-all text-[15px] font-semibold text-brand-petrol underline decoration-brand-cyan underline-offset-4">
                contatooscmaggu@gmail.com
              </a>
            </span>
          </div>
          <Button asChild size="sm" className="mt-4 rounded-full bg-brand-petrol px-5 text-primary-foreground hover:bg-brand-red">
            <a href="mailto:contatooscmaggu@gmail.com">Enviar relato por e-mail</a>
          </Button>
        </div>
      </section>

      {/* Privacidade */}
      <section className="relative overflow-hidden bg-white pb-14 md:pb-20" aria-labelledby="privacidade-canal">
        <span className="pointer-events-none absolute right-6 top-0 hidden size-20 rounded-full bg-brand-cyan/10 md:block" aria-hidden="true" />
        <div className="container-x relative max-w-3xl">
          <Eyebrow>Privacidade</Eyebrow>
          <h2 id="privacidade-canal" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)", lineHeight: 1.3, fontWeight: 700 }}>
            Proteção das informações também faz parte do processo.
          </h2>
          <p className="mt-3 text-brand-gray" style={{ lineHeight: 1.75 }}>
            A estruturação do Canal de Denúncia e Relato Ético considera os princípios e as regras previstos na Política de Privacidade e Proteção de Dados Pessoais da Associação Maggu. Antes da ativação do recebimento eletrônico, serão definidos os procedimentos específicos aplicáveis ao tratamento das informações encaminhadas pelo canal.
          </p>
          <Link to="/privacidade" className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-petrol hover:text-brand-red">
            Conheça a Política de Privacidade
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CompactFinalCTA
        title="Integridade também se constrói com diálogo e responsabilidade."
        text="Conheça nossos canais institucionais ou saiba mais sobre as práticas de transparência da Associação Maggu."
        primary={{ label: "Ver Transparência", to: "/transparencia" }}
        secondary={{ label: "Entre em contato", to: "/contato" }}
        variant="privacy"
      />
    </main>
  );
}
