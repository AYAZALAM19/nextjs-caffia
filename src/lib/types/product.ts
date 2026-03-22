export interface Product {
  id: string | number;
  slug: string;
  name: string;      // was title
  title?: string;     // for backward compatibility
  price: number;      // we'll map startingPrice to this or use it directly
  startingPrice?: number;
  imageUrl?: string;
  images: string[];
  category: string;
  description: string;
  isActive?: boolean;
  // Legacy fields made optional
  brand?: string;
  flavor?: string;
  roastLevel?: string;
  weight?: string;
  availability?: 'available' | 'unavailable';
  features?: string[];
  specifications?: {
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

export interface ProductResponse {
  id: number;
  name: string;
  slug: string;
  category: string;
  imageUrl: string;
  isActive: boolean;
  startingPrice: number;
  totalStock: number;
  defaultVariant?: {
    id: number;
    weightGrams: number;
    price: string;
    stock: number;
  } | null;
}

// Wrapper for the paginated list API response
export interface ProductListResponse {
  data: ProductResponse[];
  page: number;
  limit: number;
  total: number;
}

export interface ProductVariant {
  id: number;
  weightGrams: number;
  price: string;        // backend sends this as string e.g. "299"
  stock: number;
  sku: string;
  isActive: boolean;
}

export interface ProductDetailsResponse {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  imageUrl: string;
  images: string[];
  price: string | null;  // backend sends null at top-level, actual prices are in variants
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  variants: ProductVariant[];  // array, not object
}