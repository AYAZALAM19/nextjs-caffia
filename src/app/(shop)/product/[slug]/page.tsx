import { notFound } from "next/navigation";
import { ChevronRight } from 'lucide-react'
import ProductDetail from "@/components/ProductDetails";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BrewingGuide } from "@/components/landing/BrewingGuide";
import { ProductDetailsResponse, ProductListResponse } from "@/lib/types/product";

interface ProductsPageProps {
  params: { slug: string }
};

export async function getProduct(slug: string): Promise<ProductDetailsResponse> {
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });
  const data = await res.json();
  console.log('data of product', data)
  if (!res.ok) {
    notFound();
  }
  return data;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { slug } = await params;
  const productData = await getProduct(slug);

  return (
    <>
      <div className=" container mx-auto max-w-7xl">
        <Breadcrumb separator={<ChevronRight />}
          capitalizeLinks />
        <ProductDetail productdetails={productData} />
      </div>
      <BrewingGuide />
    </>
  )
}