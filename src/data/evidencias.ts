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
   initiative?: string;
  /** Ano ou data de referência. */
   year?: number;
   date?: string;
   id?: string;
   published: boolean;
   validated: boolean;
   order?: number;
  /** Breve contexto do documento. */
  context?: string;
  /** URL apenas quando existir arquivo real publicado. */
  url?: string;
};

/** Vazio até que evidências reais sejam validadas e publicadas. */
export const evidences: Evidence[] = [];

export const EVIDENCE_PAGE_SIZE = 3;
export const ALL_EVIDENCES = "Todos";
export type EvidenceFilters = { type: string; initiative: string; year: string };
export type EvidenceState = EvidenceFilters & { page: number };
export const initialEvidenceState: EvidenceState = { type: ALL_EVIDENCES, initiative: ALL_EVIDENCES, year: ALL_EVIDENCES, page: 1 };

export function evidenceReducer(state: EvidenceState, action: { field: keyof EvidenceFilters; value: string } | { page: number }): EvidenceState {
  return "field" in action ? { ...state, [action.field]: action.value, page: 1 } : { ...state, page: action.page };
}

export function publishedEvidences(items: Evidence[]) {
  return items.filter(item => item.published && item.validated && item.title.trim())
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getEvidencePage(items: Evidence[], filters: EvidenceFilters, requestedPage: number) {
  const filtered = publishedEvidences(items).filter(item =>
    (filters.type === ALL_EVIDENCES || item.type === filters.type) &&
    (filters.initiative === ALL_EVIDENCES || item.initiative === filters.initiative) &&
    (filters.year === ALL_EVIDENCES || String(item.year) === filters.year));
  const totalPages = Math.ceil(filtered.length / EVIDENCE_PAGE_SIZE);
  const page = totalPages === 0 ? 0 : Math.max(1, Math.min(requestedPage, totalPages));
  return { items: page === 0 ? [] : filtered.slice((page - 1) * EVIDENCE_PAGE_SIZE, page * EVIDENCE_PAGE_SIZE), page, totalPages };
}
