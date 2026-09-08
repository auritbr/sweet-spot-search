/**
 * Banco de Evidências — Impacto & Memória.
 *
 * TIPO 2 (EVIDÊNCIA): trajetória, resultados e memória das iniciativas.
 * Documentos institucionais (estatuto, atas, certidões, políticas, relatórios
 * institucionais) NÃO entram aqui — pertencem à página Transparência.
 *
 * Nenhum item deve ser criado sem arquivo real e validação institucional.
 */

export const evidenceTypes = [
  "Certificados",
  "Declarações",
  "Registros",
  "Programas",
  "Publicações",
  "Matérias",
  "Relatórios de atividades",
  "Materiais gráficos",
  "Fotografias",
  "Recortes de imprensa",
  "Registros históricos",
  "Outros documentos comprobatórios",
] as const;

export type EvidenceType = (typeof evidenceTypes)[number];

export type Evidence = {
  title: string;
  type: EvidenceType;
  /** Iniciativa relacionada (nome já cadastrado no Ecossistema). */
  initiative: string;
  /** Ano ou data de referência. */
  year: number;
  /** Breve contexto do documento. */
  context?: string;
  /** URL apenas quando existir arquivo real publicado. */
  url?: string;
};

/** Vazio até que evidências reais sejam validadas e publicadas. */
export const evidences: Evidence[] = [];
