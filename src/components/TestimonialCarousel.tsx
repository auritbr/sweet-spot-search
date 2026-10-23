import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { publishedTestimonials, type Testimonial } from "@/data/depoimentos";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const published = publishedTestimonials(items);
  const [api, setApi] = useState<CarouselApi>();
  const [canNavigate, setCanNavigate] = useState(false);
  useEffect(() => {
    if (!api) return;
    const update = () => setCanNavigate(api.canScrollPrev() || api.canScrollNext());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => { api.off("select", update); api.off("reInit", update); };
  }, [api]);

  if (!published.length) return <p className="mx-auto -mt-1 max-w-[620px] text-center text-[15px] leading-relaxed text-brand-gray">Histórias e relatos das iniciativas serão publicados nesta área após autorização e validação institucional.</p>;

  return <Carousel setApi={setApi} opts={{ align: "start", loop: false, slidesToScroll: "auto" }} aria-label="Histórias e depoimentos" className="mx-auto max-w-4xl">
    {canNavigate && <div className="mb-4 flex justify-end gap-2">
      <CarouselPrevious aria-label="Depoimento anterior" title="Depoimento anterior" className="static size-10 translate-y-0 border-brand-petrol/20 text-brand-petrol hover:bg-brand-soft hover:text-brand-petrol" />
      <CarouselNext aria-label="Próximo depoimento" title="Próximo depoimento" className="static size-10 translate-y-0 border-brand-petrol/20 text-brand-petrol hover:bg-brand-soft hover:text-brand-petrol" />
    </div>}
    <CarouselContent className="items-stretch">
      {published.map((item, index) => <CarouselItem key={item.id} className="md:basis-1/2" aria-label={`${index + 1} de ${published.length}`}>
        <article className="h-full rounded-lg border border-brand-petrol/10 bg-brand-soft/40 p-5 text-left">
          <div className="flex items-center gap-3">
            {item.photo && item.photoAuthorized && <img src={item.photo} alt={item.photoAlt ?? item.name} className="size-10 shrink-0 rounded-full object-cover" loading="lazy" />}
            <div className="min-w-0 break-words"><h3 className="text-base font-semibold leading-snug text-brand-ink">{item.name}</h3>{item.relationship && <p className="mt-1 text-xs leading-relaxed text-brand-gray">{item.relationship}</p>}</div>
          </div>
          <p className="mt-4 whitespace-pre-line break-words text-sm leading-relaxed text-brand-gray">{item.text}</p>
          {item.initiative && <p className="mt-4 break-words text-xs font-semibold text-brand-petrol">{item.initiative}</p>}
        </article>
      </CarouselItem>)}
    </CarouselContent>
  </Carousel>;
}