import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/lib/types/product";
import { toast } from "sonner";

export type CartItem = Product & {
  quantity: number;
  selectedRoast?: string;
  selectedGrind?: string;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    Phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  shipping: {
    id: string;
    name: string;
    price: number;
  };
  items: CartItem[];
  totalAmount: number;
  totalWithShipping: number;
  createdAt: string;
}

interface CartState {
  cart: CartItem[],
  totalCount: number,
  addToCart: (product: Product, qty?: number, roast?: string, grind?: string) => void,
  removeFromCart: (id: string, roast?: string, grind?: string) => void,
  updateQuantity: (id: string, qty: number, roast?: string, grind?: string) => void,
  totalAmount: number,
  toastMessage: string,
  toastImage: string,
  orderPlaced: boolean,
  lastOrder: Order | null;
  placeOrder: (data: { customer: Order['customer'], shipping: Order['shipping'] }) => void,
  resetOrderPlaced: () => void,
  clearCart: () => void,
  showToast: (msg: string | null, img: string | null) => void;
}
const calcTotal = (cart: CartItem[]) => cart.reduce((acc, item) => acc + item.quantity, 0);

const calcTotalAmount = (cart: CartItem[]) => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      totalCount: 0,
      totalAmount: 0,
      orderPlaced: false,
      lastOrder: null,

      toastMessage: null,
      toastImage: null,

      placeOrder: (data) =>
        set((state) => {
          const orderId = '#' + Math.floor(10000 + Math.random() * 90000).toString();
          const newOrder: Order = {
            id: orderId,
            customer: data.customer,
            shipping: data.shipping,
            items: [...state.cart],
            totalAmount: state.totalAmount,
            totalWithShipping: state.totalAmount + data.shipping.price,
            createdAt: new Date().toISOString()
          };

          return {
            orderPlaced: true,
            lastOrder: newOrder
          }
        }),

      clearCart: () =>
        set({
          cart: [],
          totalCount: 0,
          totalAmount: 0,
        }),

      resetOrderPlaced: () =>
        set({
          orderPlaced: false,
        }),

      showToast: (msg, img = null) =>
        set(() => ({
          toastMessage: msg,
          toastImage: img
        })),


      addToCart: (product, qty = 1, roast, grind) =>
        set((state) => {
          const existing = state.cart.find((e) =>
            e.id === product.id &&
            e.selectedRoast === roast &&
            e.selectedGrind === grind
          );
          let updatedCart

          if (existing) {
            updatedCart = state.cart.map((c) =>
              (c.id === product.id && c.selectedRoast === roast && c.selectedGrind === grind) ?
                { ...c, quantity: c.quantity + qty } : c)
          }
          else {
            updatedCart = [...state.cart, { ...product, quantity: qty, selectedRoast: roast, selectedGrind: grind }]
          }

          toast.success(`${product.title} added to cart`, {
            description: roast ? `${roast} Roast | ${grind || 'Standard'} Grind` : undefined
          });

          return {
            cart: updatedCart,
            totalCount: calcTotal(updatedCart),
            totalAmount: calcTotalAmount(updatedCart)
          };
        }),

      removeFromCart: (id, roast, grind) =>
        set((state) => {
          const updatedCart = state.cart.filter((c) =>
            !(c.id === id && c.selectedRoast === roast && c.selectedGrind === grind)
          );

          return {
            cart: updatedCart,
            totalCount: calcTotal(updatedCart),
            totalAmount: calcTotalAmount(updatedCart)
          }
        }),

      updateQuantity: (id, qty, roast, grind) =>
        set((state) => {
          const updatedCart = state.cart.map((c) =>
            (c.id === id && c.selectedRoast === roast && c.selectedGrind === grind) ? { ...c, quantity: qty } : c
          );

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