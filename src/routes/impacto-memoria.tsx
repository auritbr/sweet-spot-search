import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck2, FileText, FolderKanban, History, MapPinned, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle } from "@/components/Shapes";
import { evidences, evidenceTypes } from "@/data/evidencias";
import { projects } from "@/data/site";


export const Route = createFileRoute("/impacto-memoria")({ head:()=>({meta:[
 {title:"Impacto & Memória | Associação Maggu"},{name:"description",content:"Conheça marcos, memórias e evidências da trajetória da Associação Maggu."},{property:"og:title",content:"Impacto & Memória | Associação Maggu"},{property:"og:description",content:"Resultados e histórias da Associação Maggu caminham juntos."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},
]}),component:ImpactoMemoria });

const indicators=[
 {label:"Anos de trajetória",status:"Referência cultural desde 1999",note:"Distinta da formalização jurídica em 2025.",icon:History,tone:"bg-brand-red/10 text-brand-red",shape:"bg-brand-red/20"},
 {label:"Pessoas alcançadas",status:"Em consolidação",note:"Publicação após validação interna.",icon:Users,tone:"bg-brand-cyan/10 text-brand-petrol",shape:"bg-brand-cyan/20"},
 {label:"Atividades realizadas",status:"Em consolidação",note:"Organização por período e categoria.",icon:CalendarCheck2,tone:"bg-brand-gold/15 text-brand-petrol",shape:"bg-brand-gold/25"},
 {label:"Projetos ativos",status:"Estrutura preparada",note:"Atualização futura pela gestão de conteúdo.",icon:FolderKanban,tone:"bg-brand-red/10 text-brand-red",shape:"bg-brand-red/20"},
 {label:"Territórios e parcerias",status:"Em consolidação",note:"Somente dados documentados serão publicados.",icon:MapPinned,tone:"bg-brand-cyan/10 text-brand-petrol",shape:"bg-brand-cyan/20"},
];

const timeline=[
 ["1999","Início da trajetória artística com a Companhia de Teatro Cortina."],
 ["2001","A Paixão de Cristo amplia a presença cultural no território."],
 ["2025","Formalização da Associação Sócio Cultural Maggu."],
 ["2025","Teatro Escola Maggu certificado como Ponto de Cultura."],
 ["2026","Fortalecimento da governança, Comissão ODS e consolidação do Ecossistema Maggu."],
] as const;

function ImpactoMemoria(){return <>
 <PageHero eyebrow="Impacto & Memória" title="Impacto que pode ser visto, contado e lembrado." subtitle="Cada oficina, sessão, livro, encontro, apresentação ou formação só ganha sentido quando produz experiência, acesso, memória e possibilidade. Por isso, registramos resultados sem reduzir pessoas a números." image="https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1920&q=80" accent="gold" brush="#08B9E6" decoration="frame"><HeroButton to="#memoria" tone="gold">Explorar memória</HeroButton><HeroButton to="#evidencias" tone="cyan">Ver evidências</HeroButton></PageHero>

 <Section className="relative overflow-hidden bg-background">
   <span className="pointer-events-none absolute -right-9 top-8 size-20 rounded-full border-[10px] border-brand-gold/15" aria-hidden="true" />
   <span className="pointer-events-none absolute left-[7%] top-16 hidden size-3 rotate-45 bg-brand-cyan/45 md:block" aria-hidden="true" />
   <div className="container-x">
    <div className="mx-auto max-w-4xl text-center">
     <SectionTitle align="center" eyebrow="Impacto & Memória" title="Resultados e histórias precisam caminhar juntos." />
     <p className="mx-auto max-w-3xl leading-relaxed text-brand-gray">Nesta página, indicadores quantitativos convivem com histórias, fotografias, documentos e evidências. Todo número publicado deverá indicar seu período de referência e origem.</p>
     <p className="mx-auto mt-5 max-w-xl border-l-2 border-brand-cyan pl-4 text-left text-sm font-semibold leading-relaxed text-brand-petrol sm:text-center sm:border-l-0 sm:pl-0">Memória, evidência e experiência reunidas em uma mesma narrativa.</p>
    </div>
   </div>
  </Section>

  <Section className="overflow-hidden bg-brand-soft"><div className="container-x"><div className="mx-auto max-w-3xl text-center"><SectionTitle align="center" eyebrow="Indicadores" title="O que podemos acompanhar" /></div><div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-5">{indicators.map((item,i)=>{const Icon=item.icon;return <article key={item.label} className="relative min-h-52 overflow-hidden rounded-[16px] border border-brand-petrol/8 bg-background/85 p-4 shadow-[0_14px_28px_-28px_rgba(0,56,76,0.55)]"><span className={`absolute -right-4 -top-4 size-11 ${i%2===0?"rounded-full":"rotate-45 rounded-sm"} ${item.shape}`} aria-hidden="true"/><span className={`inline-flex size-9 items-center justify-center rounded-full ${item.tone}`}><Icon className="size-4" aria-hidden="true"/></span><h3 className="mt-4 text-base leading-snug">{item.label}</h3><p className="mt-3 text-[13px] font-semibold text-brand-petrol">{item.status}</p><p className="mt-1.5 text-xs leading-relaxed text-brand-gray">{item.note}</p></article>})}</div></div></Section>

  <Section id="memoria" className="relative overflow-hidden bg-background">
   <HatchedCircle size={96} color="#ED1C24" className="pointer-events-none absolute -left-11 bottom-2 opacity-[0.07]" />
   <span className="pointer-events-none absolute right-[8%] top-10 hidden size-3 rotate-45 bg-brand-gold/70 md:block" aria-hidden="true" />
   <div className="container-x"><div className="mx-auto max-w-4xl text-center">
    <SectionTitle align="center" eyebrow="Memória Maggu" title="Registrar também é cuidar do que construímos."/>
    <div className="mx-auto max-w-3xl space-y-3 text-sm leading-relaxed text-brand-gray sm:text-base"><p>A Memória Maggu reúne fotografias, cartazes, vídeos, programas, publicações, produções e documentos que ajudam a contar uma trajetória construída por muitas pessoas.</p><p>Mais do que uma galeria, é um acervo vivo: preserva processos, reconhece participações e transforma documentação em patrimônio institucional e comunitário.</p></div>
    <Link to="/galeria" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol underline-offset-4 transition hover:underline">Acessar Galeria <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true"/></Link>
   </div></div>
  </Section>

  <Section className="relative overflow-hidden bg-brand-soft">
   <span className="pointer-events-none absolute -right-8 top-10 size-16 rounded-full border-[9px] border-brand-cyan/10" aria-hidden="true" />
   <span className="pointer-events-none absolute bottom-10 left-[6%] hidden tracking-[0.4em] text-brand-red/20 md:block" aria-hidden="true">••••</span>
   <div className="container-x"><SectionTitle align="center" title="Uma trajetória construída ao longo do tempo."/>
    <ol className="mx-auto grid max-w-6xl gap-3 lg:grid-cols-5">
     {timeline.map(([year,text],i)=><li key={`${year}-${text}`} className="relative min-h-48 overflow-hidden rounded-[15px] border border-brand-petrol/8 bg-background/80 p-5 shadow-[0_14px_28px_-28px_rgba(0,56,76,0.55)]"><span className={`absolute right-5 top-5 ${i%2===0?"size-2.5 rotate-45 rounded-sm":"size-3 rounded-full"} ${i%3===0?"bg-brand-red/65":i%3===1?"bg-brand-gold/75":"bg-brand-cyan/70"}`} aria-hidden="true"/><span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray/60">Marco {String(i+1).padStart(2,"0")}</span><p className="mt-3 text-3xl font-bold text-brand-petrol">{year}</p><p className="mt-3 text-sm leading-relaxed text-brand-gray">{text}</p></li>)}
    </ol>
   </div>
  </Section>

  <Section className="relative overflow-hidden bg-background">
   <ArcThick color="#FFB400" className="pointer-events-none absolute -right-10 top-8 w-20 opacity-[0.1]" from={25} to={150} />
   <span className="pointer-events-none absolute left-[6%] bottom-10 hidden size-2.5 rotate-45 bg-brand-cyan/50 md:block" aria-hidden="true" />
   <span className="pointer-events-none absolute left-[9%] top-12 hidden tracking-[0.4em] text-brand-red/20 md:block" aria-hidden="true">•••</span>
   <div className="container-x"><div className="mx-auto max-w-[720px] text-center">
    <SectionTitle align="center" eyebrow="Histórias" title="Nem todo impacto cabe em um número."/>
    <p className="mx-auto -mt-1 max-w-[620px] text-[15px] leading-relaxed text-brand-gray">Histórias e relatos das iniciativas serão publicados nesta área após autorização e validação institucional.</p>
   </div></div>
  </Section>

  <BancoDeEvidencias />



  <CompactFinalCTA title="Uma trajetória se fortalece quando pode ser conhecida, lembrada e compartilhada." text="Explore as iniciativas da Maggu, conheça o território onde essa história acontece e consulte os documentos que ajudam a registrar sua continuidade." primary={{label:"Ecossistema",to:"/ecossistema"}} secondary={{label:"Território",to:"/quem-somos/territorio"}} tertiary={{label:"Transparência",to:"/transparencia"}} variant="impact"/>
 </>}
const ALL = "Todos";

function BancoDeEvidencias(){
 const [type,setType]=useState<string>(ALL);
 const [initiative,setInitiative]=useState<string>(ALL);
 const [year,setYear]=useState<string>(ALL);

 const initiatives=useMemo(()=>[ALL,...projects.map(p=>p.name)],[]);
 const years=useMemo(()=>[ALL,...Array.from(new Set(evidences.map(e=>String(e.year)))).sort().reverse()],[]);
 const visible=evidences.filter(e=>(type===ALL||e.type===type)&&(initiative===ALL||e.initiative===initiative)&&(year===ALL||String(e.year)===year));

 const select="rounded-full border border-brand-petrol/15 bg-background px-3 py-1.5 text-xs font-semibold text-brand-petrol";

 return <Section id="evidencias" className="relative overflow-hidden bg-brand-soft">
  <span className="pointer-events-none absolute -right-8 top-10 size-16 rounded-full border-[9px] border-brand-gold/15" aria-hidden="true" />
  <div className="container-x">
   <div className="mx-auto max-w-[760px] text-center">
    <SectionTitle align="center" eyebrow="Evidências" title="Banco de Evidências" />
    <p className="mx-auto -mt-1 max-w-[680px] text-[15px] leading-relaxed text-brand-gray">Certificados, declarações, registros, programas, publicações, matérias, relatórios e outros documentos ajudam a comprovar e preservar a trajetória das iniciativas do Ecossistema Maggu.</p>
   </div>

   <div className="mx-auto mt-7 flex max-w-[900px] flex-wrap items-center justify-center gap-2 rounded-2xl border border-brand-petrol/10 bg-background/70 p-3">
    <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray/70">Tipo
     <select value={type} onChange={e=>setType(e.target.value)} className={select}><option value={ALL}>Todos</option>{evidenceTypes.map(t=><option key={t} value={t}>{t}</option>)}</select>
    </label>
    <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray/70">Iniciativa
     <select value={initiative} onChange={e=>setInitiative(e.target.value)} className={`${select} max-w-[220px]`}>{initiatives.map(i=><option key={i} value={i}>{i}</option>)}</select>
    </label>
    <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray/70">Ano
     <select value={year} onChange={e=>setYear(e.target.value)} disabled={years.length<2} className={`${select} disabled:opacity-50`}>{years.map(y=><option key={y} value={y}>{y}</option>)}</select>
    </label>
   </div>

   {visible.length===0
    ? <div className="mx-auto mt-6 flex max-w-[640px] items-center gap-3 rounded-xl border border-brand-petrol/10 bg-background/60 px-5 py-4">
       <FileText className="size-4 shrink-0 text-brand-petrol/60" aria-hidden="true" />
       <p className="text-sm leading-relaxed text-brand-gray">Nenhuma evidência publicada nesta categoria neste momento.</p>
      </div>
    : <ul className="mx-auto mt-6 grid max-w-[980px] gap-3 sm:grid-cols-2">
       {visible.map(item=><li key={`${item.title}-${item.year}`} className="rounded-[15px] border border-brand-petrol/10 bg-background/80 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-red">{item.type}</p>
        <h3 className="mt-2 text-base leading-snug text-brand-ink">{item.title}</h3>
        <p className="mt-1.5 text-xs text-brand-gray">{item.initiative} · {item.year}</p>
        {item.context ? <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.context}</p> : null}
        {item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-petrol underline-offset-4 hover:underline">Visualizar <ArrowRight className="size-4" aria-hidden="true"/></a> : null}
       </li>)}
      </ul>}
  </div>
 </Section>;
}
