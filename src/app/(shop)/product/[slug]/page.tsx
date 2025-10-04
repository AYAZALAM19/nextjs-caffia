import React from "react";
import { getProductBySlug, products } from "@/data/products";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { P } from "framer-motion/dist/types.d-Cjd591yU";
import ProductDetail from "@/components/ProductDetails";

interface ProductsPageProps {
    params: Promise<{slug: string}>
};
export function generateStaticParams(){
    return products.map((product) =>({
      slug: product.slug,
    }));
}
export default async function ProductsPage({params}:ProductsPageProps) {
const {slug} = await params;
 const product = getProductBySlug(slug)

    if(!product){
        notFound()
    }

    return(
        <>
        <div>
            <ProductDetail productdetails={product} />
        </div>
        </>
    )
}