import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { Product } from "@/lib/types/product";

type CartItem = Product & {quantity: number}
interface CartState {
    cart: CartItem[],
    addToCart: (product: Product, qty? :number) => void,
    removeFromCart:(id : string) => void,
    updateQuantity:(id: string, qty?: number) => void,
}

export const useCartStore = create<CartState>()( 
    persist(
    (set, get) => ({
    cart: [],
    addToCart:(product) =>
    set((state) =>{
        const existing  = state.cart.find((e) => e.id === product.id);
        if(existing){
            return{
                cart: state.cart.map((c) => c.id === product.id ? {...c, quantity: c.quantity  + 1}:c)
            }
        }
        return {cart: [...state.cart , {...product, quantity : 1}]}
        }),

    removeFromCart:(id) =>
        set((state) =>({cart: state.cart.filter((c) => c.id !== id) })),

    updateQuantity: (id, qty)=> 
        set((state) =>({
            cart: state.cart.map((c) => (c.id === id ? {
                ...c, quantity:qty }: c))
        })),
}),
{
    name: 'cart-storage'
}
))