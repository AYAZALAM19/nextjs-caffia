import { create } from "zustand";
import { Product } from "@/lib/types/product";
import { products as demoProducts } from "@/data/products";

interface ProductsStates{
    products: Product[]
}

export const useProductsStore = create<ProductsStates>((set) => ({
    products: demoProducts,
}))