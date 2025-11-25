import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { Product } from "@/lib/types/product";
import { it } from "node:test";

type CartItem = Product & {quantity: number}
interface CartState {
    cart: CartItem[],
    totalCount: number,
    addToCart: (product: Product, qty? :number) => void,
    removeFromCart:(id : string) => void,
    updateQuantity:(id: string, qty?: number) => void,
    totalAmount: number,  
    toastMessage: string,
    toastImage: string,

    showToast:(msg: string | null, img: string | null) => void;
}
const calcTotal = (cart: CartItem[]) => cart.reduce((acc, item) => acc + item.quantity, 0);

const calcTotalAmount = (cart: CartItem[]) => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
export const useCartStore = create<CartState>()( 
    persist(
    (set, get) => ({
    cart: [],
    totalCount: 0,
    totalAmount : 0,

    toastMessage: null,
    toastImage: null,

    showToast: (msg, img = null) =>
        set(() => ({
          toastMessage: msg,
          toastImage: img
        })),


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

        get().showToast(`${product.title} added to cart`,product.images[0])

        return { 
            cart: updatedCart, 
            totalCount: calcTotal(updatedCart),
            totalAmount: calcTotalAmount(updatedCart) 
        };
        }),

    removeFromCart:(id) =>
        set((state) => {
            const updatedCart = state.cart.filter((c) => c.id !== id);

            return{
                cart: updatedCart, 
                totalCount: calcTotal(updatedCart),
                totalAmount: calcTotalAmount(updatedCart)
            }
        }),

        updateQuantity: (id, qty = 1) =>
        set((state) => {
            const item = state.cart.find((c) => c.id === id)
          const updatedCart = state.cart.map((c) =>
            c.id === id ? { ...c, quantity: qty } : c
          );
          
          if(item){
          get().showToast(`${item.title} updated`,item.images[0])
          }

          return { 
            cart: updatedCart, 
            totalCount: calcTotal(updatedCart), 
            totalAmount: calcTotalAmount(updatedCart) 
        };
        }),
}),
{
    name: 'cart-storage',
     partialize: (state) => ({
        cart: state.cart,
        totalCount: state.totalCount || 0,  // agar localStorage empty ho to 0
        totalAmount: state.totalAmount || 0
    })
}
))