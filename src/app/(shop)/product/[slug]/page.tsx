import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronRight } from 'lucide-react'
import ProductDetail from "@/components/ProductDetails";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BrewingGuide } from "@/components/landing/BrewingGuide";
import JsonLd from "@/components/seo/JsonLd";
import { ProductDetailsResponse } from "@/lib/types/product";
import { absoluteUrl, site } from "@/lib/site";

interface ProductsPageProps {
  params: Promise<{ slug: string }>
};

// Called by both generateMetadata and the page; Next memoizes the identical fetch per request
export async function getProduct(slug: string): Promise<ProductDetailsResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

// Plain-text, length-limited description for meta tags
function summarize(text: string | undefined, max = 160) {
  const clean = (text ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()}…` : clean;
}

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  const prices = product.variants.filter((v) => v.isActive).map((v) => Number(v.price));
  const fromPrice = prices.length ? Math.min(...prices) : null;

  const description =
    summarize(product.description) ||
    `Buy ${product.name} by Caffia online${fromPrice ? ` from ₹${fromPrice}` : ""}. 100% Arabica, delivered across India.`;
  const image = product.images?.[0] || product.imageUrl;

  return {
    title: `${product.name} ${/instant/i.test(product.category ?? "") ? "Instant Coffee" : "Coffee"}`,
    description,
    alternates: { canonical: `/product/${slug}` },
    openGraph: {
      type: "website",
      url: `/product/${slug}`,
      title: `${product.name} | ${site.name}`,
      description,
      images: image ? [{ url: image, alt: product.name }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${site.name}`,
      description,
      images: image ? [image] : undefined,
    },
  };
}

function productJsonLd(product: ProductDetailsResponse, slug: string) {
  const url = absoluteUrl(`/product/${slug}`);
  const variants = product.variants.filter((v) => v.isActive);
  const images = [...new Set([product.imageUrl, ...(product.images ?? [])].filter(Boolean))];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: summarize(product.description, 5000) || undefined,
      image: images,
      url,
      category: product.category,
      brand: { "@type": "Brand", name: site.name },
      // One Offer per pack size so engines see every price/weight combination
      offers: variants.map((v) => ({
        "@type": "Offer",
        ...(v.sku ? { sku: v.sku } : {}),
        name: `${product.name} ${v.weightGrams}g`,
        price: Number(v.price).toFixed(2),
        priceCurrency: "INR",
        availability: v.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        itemCondition: "https://schema.org/NewCondition",
        url,
        seller: { "@id": `${site.url}/#organization` },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Shop", item: absoluteUrl("/product") },
        { "@type": "ListItem", position: 3, name: product.name, item: url },
      ],
    },
  ];
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { slug } = await params;
  const productData = await getProduct(slug);

  return (
    <>
      <JsonLd data={productJsonLd(productData, slug)} />
      <div className="page-container pt-6">
        <Breadcrumb separator={<ChevronRight size={14} />}
          capitalizeLinks />
        <ProductDetail productdetails={productData} />
      </div>
      <BrewingGuide />
    </>
  )
}
