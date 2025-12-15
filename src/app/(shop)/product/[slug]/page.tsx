import React from "react";
import { getProductBySlug, products } from "@/data/products";
import { notFound } from "next/navigation";
import {ChevronRight } from 'lucide-react'
import ProductDetail from "@/components/ProductDetails";
import Breadcrumb from "@/components/layout/Breadcrumb";

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
        <div className=" container mx-auto max-w-7xl">
            <Breadcrumb separator={<ChevronRight />} 
             capitalizeLinks/>
            <ProductDetail productdetails={product} />
        </div>
        </>
    )
}