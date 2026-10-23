/** Somente relatos reais, validados e autorizados podem ser publicados. */
export type Testimonial = {
  id: string;
  name: string;
  relationship?: string;
  text: string;
  initiative?: string;
  photo?: string;
  photoAlt?: string;
  photoAuthorized?: boolean;
  published: boolean;
  validated: boolean;
  authorized: boolean;
  order?: number;
};

export function publishedTestimonials(items: Testimonial[]) {
  return items.filter(item => item.published && item.validated && item.authorized && item.name.trim() && item.text.trim())
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export const testimonials: Testimonial[] = [];