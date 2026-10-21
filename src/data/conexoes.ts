export type ConnectionCategory = "APOIADOR/PARCEIRO" | "REDE/ARTICULAÇÃO";

export type InstitutionalConnection = {
  id: string;
  name: string;
  logo: string;
  category: ConnectionCategory;
  relationship?: string;
  relationshipValidated?: boolean;
  officialUrl?: string;
  order: number;
  published: boolean;
  validated: boolean;
  authorized: boolean;
  alt: string;
};

// Only add official records after institutional validation and publication authorization.
export const institutionalConnections: InstitutionalConnection[] = [];

export function publishedConnections(records: InstitutionalConnection[], category: ConnectionCategory) {
  return records.filter((item) => item.category === category && item.published && item.validated && item.authorized && item.name.trim() && item.logo.trim() && item.alt.trim()).sort((a, b) => a.order - b.order);
}

export function safeOfficialUrl(url?: string) {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : undefined;
  } catch {
    return undefined;
  }
}