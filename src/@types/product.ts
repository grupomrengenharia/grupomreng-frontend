type Variation = {
  description: string;
  code: string;
  grossWeight: string;
  netWeight: string;
};

export type Product = {
  id: string;
  slug: string;
  url: string;
  categories: string[];
  name: string;
  description: string;
  images: string[];
  variations: Variation[];
};
