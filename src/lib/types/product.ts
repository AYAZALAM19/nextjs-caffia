export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  flavor: string;
  roastLevel: string;
  weight: string;
  category: string;
  availability: 'available' | 'unavailable';
  features: string[];
  description: string;
  specifications: {
    itemForm: string;
    packageInfo: string;
    dietType: string;
    specialty: string;
    numberOfItems: number;
  };
 quantity?: number;
}

export interface Category {
  slug: string;
  name: string;
  // description: string;
  count: number;
}
