import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publishedPressKit, type PressKitFile } from "@/data/imprensa";

export function PressKitDownload({ file }: { file: PressKitFile | null }) {
  const url = publishedPressKit(file);
  if (!url) return null;
  return <Button asChild size="sm" className="mt-5 h-auto min-h-9 max-w-full whitespace-normal rounded-full px-4 py-2">
    <a href={url} download target="_blank" rel="noopener noreferrer" aria-label="Baixar Kit de Imprensa" title="Baixar Kit de Imprensa">
      <Download aria-hidden="true" /> Baixar Kit de Imprensa
    </a>
  </Button>;
}