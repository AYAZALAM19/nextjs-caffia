import { unstable_rethrow } from "next/navigation";
import { ProductListResponse } from "@/lib/types/product";

export type ProductsResult = ProductListResponse & {
  // true when the API couldn't be reached or returned an error,
  // so pages can tell "no products" apart from "backend down"
  failed?: boolean;
};

const EMPTY: ProductListResponse = { data: [], page: 1, limit: 10, total: 0 };

// Shared by landing and listing pages; Next memoizes identical fetches within one render,
// so multiple sections calling this hit the API only once per request.
export async function getProducts(): Promise<ProductsResult> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    return res.json();
  } catch (error) {
    // Let Next's internal signals (e.g. dynamic rendering bailout at build time) through
    unstable_rethrow(error);
    console.error("[getProducts]", error);
    return { ...EMPTY, failed: true };
  }
}
