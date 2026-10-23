// Conteúdo da subárea ODS / Maggu 2030. Estrutura preparada para atualização simples.

export const odsCommission = [
  {
    title: "Caráter consultivo e estratégico",
    text: "A Comissão ODS é permanente e atua orientando decisões institucionais, sem substituir as instâncias de direção da Associação.",
    accent: "cyan" as const,
  },
  {
    title: "Integração às práticas",
    text: "Aproxima os Objetivos de Desenvolvimento Sustentável das rotinas, projetos e processos já desenvolvidos pela organização.",
    accent: "gold" as const,
  },
  {
    title: "Acompanhamento da jornada",
    text: "Acompanha o estágio documental da Associação na jornada do Selo ODS Brasil 2026 e organiza as evidências correspondentes.",
    accent: "red" as const,
  },
  {
    title: "Melhoria contínua",
    text: "Revisa compromissos e indicadores periodicamente, propondo ajustes a partir do que é observado na prática.",
    accent: "petrol" as const,
  },
];

export const odsJourney = [
  { step: "01", title: "Sensibilização", text: "Aproximação da equipe e da diretoria com a agenda dos ODS." },
  { step: "02", title: "Organização interna", text: "Constituição da Comissão ODS e definição de responsabilidades." },
  { step: "03", title: "Mapeamento de práticas", text: "Leitura das ações já realizadas e sua relação com os objetivos." },
  { step: "04", title: "Definição de compromissos", text: "Escolha de compromissos institucionais possíveis e verificáveis." },
  { step: "05", title: "Indicadores e acompanhamento", text: "Construção de indicadores simples para observar a evolução." },
  { step: "06", title: "Evidências e melhoria contínua", text: "Publicação de evidências e revisão periódica dos compromissos." },
];

export const odsCommitments = [
  { title: "Educação e formação", text: "Fortalecer percursos formativos artísticos, culturais e técnicos no território.", color: "#C5192D" },
  { title: "Inclusão e acesso cultural", text: "Ampliar o acesso a atividades culturais gratuitas e acolhedoras.", color: "#FF3A21" },
  { title: "Redução de desigualdades", text: "Priorizar públicos historicamente com menos acesso a bens culturais.", color: "#DD1367" },
  { title: "Fortalecimento comunitário", text: "Apoiar vínculos, convivência e participação no Benedito Bentes.", color: "#FD9D24" },
  { title: "Sustentabilidade e responsabilidade", text: "Adotar práticas responsáveis nas ações, materiais e processos.", color: "#3F7E44" },
  { title: "Governança e parcerias", text: "Qualificar a gestão institucional e a atuação em rede.", color: "#00689D" },
];

export type OdsIndicator = { label: string; value: string; note: string; smallValue?: boolean };

export const odsIndicators: OdsIndicator[] = [
  { label: "Projetos relacionados", value: "9+", note: "Projetos e iniciativas do Ecossistema Maggu conectados aos compromissos institucionais." },
  { label: "Ações realizadas", value: "90+", note: "Atividades culturais, formativas, comunitárias e institucionais realizadas." },
  { label: "Públicos atendidos", value: "5.000+", note: "Pessoas alcançadas pelas iniciativas, atividades e ações da Associação." },
  { label: "Parceiros envolvidos", value: "19+", note: "Organizações, instituições e parceiros que fortalecem a atuação e as iniciativas da Associação." },
  { label: "Evidências publicadas", value: "Em consolidação", smallValue: true, note: "Documentos e registros disponibilizados publicamente para acompanhamento dos compromissos e resultados." },
];

// Somente documentos/evidências com arquivo real publicado.
export type OdsEvidenceItem = { name: string; category: string; url: string };
export const odsEvidence: OdsEvidenceItem[] = [];

export const odsRelatedProjects = [
  { title: "Sustentabilidade & Desenvolvimento", text: "Práticas responsáveis e cuidado com o território.", accent: "#3F7E44" },
  { title: "Infância & Território", text: "Ações voltadas a crianças e adolescentes da comunidade.", accent: "#FD9D24" },
  { title: "Arte, Cultura & Formação", text: "Percursos formativos em teatro e outras linguagens.", accent: "#ED1C24" },
  { title: "Audiovisual & Comunicação", text: "Registro, memória e comunicação comunitária.", accent: "#08B9E6" },
];
