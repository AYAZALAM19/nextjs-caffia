import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { Product } from "@/lib/types/product";

type CartItem = Product & {quantity: number}
interface CartState {
    cart: CartItem[],
    totalCount: number,
    addToCart: (product: Product, qty? :number) => void,
    removeFromCart:(id : string) => void,
    updateQuantity:(id: string, qty?: number) => void,
}
const calcTotal = (cart: CartItem[]) => cart.reduce((acc, item) => acc + item.quantity, 0)

export const useCartStore = create<CartState>()( 
    persist(
    (set, get) => ({
    cart: [],
    totalCount: 0,

    addToCart:(product, qty = 1) =>
    set((state) =>{
        const existing  = state.cart.find((e) => e.id === product.id);
        let updatedCart
        if(existing){
         updatedCart = state.cart.map((c) =>
            c.id === product.id? 
            {...c, quantity: c.quantity + qty}: c)
        }
        else{
        updatedCart = [...state.cart, {...product, quantity: qty}]
        }
        return { cart: updatedCart, totalCount: calcTotal(updatedCart) };
        }),

    removeFromCart:(id) =>
        set((state) => {
            const updatedCart = state.cart.filter((c) => c.id !== id);
            return{cart: updatedCart, totalCount: calcTotal(updatedCart)}
        }),

        updateQuantity: (id, qty = 1) =>
        set((state) => {
          const updatedCart = state.cart.map((c) =>
            c.id === id ? { ...c, quantity: qty } : c
          );
          return { cart: updatedCart, totalCount: calcTotal(updatedCart) };
        }),
}),
{
    name: 'cart-storage',
     partialize: (state) => ({
        cart: state.cart,
        totalCount: state.totalCount || 0  // agar localStorage empty ho to 0
    })
}
))