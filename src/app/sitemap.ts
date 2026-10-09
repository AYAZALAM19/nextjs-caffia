import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/api/products";
import { absoluteUrl } from "@/lib/site";

// Rebuild the sitemap hourly so new products show up without a redeploy
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/product"), changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/menu"), changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.5 },
  ];

  const { data } = await getProducts();
  const productPages: MetadataRoute.Sitemap = data
    .filter((p) => p.slug && p.isActive !== false)
    .map((p) => ({
      url: absoluteUrl(`/product/${p.slug}`),
      changeFrequency: "weekly",
      priority: 0.8,
      images: p.imageUrl ? [p.imageUrl] : undefined,
    }));

  return [...staticPages, ...productPages];
}
