import { set } from "zod";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface cartItem {
  id: number;
  userId: number;
  updatedAt: string;

  items:{
    id: number;
    cartId: number;
    variantId: number;
    quantity: number;
    unitPrice: string;
    variant: {
      id: number;
      productId: number;
      weightGrams: number;
      price: string;
      stock: number;
      sku: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      product: {
        id: number;
        name: string;
        slug: string;
        description: string;
        category: string;
        imageUrl: string;
        images: string[];
        isActive: boolean;
        createdAt: string;
        updatedAt: string;
        price: string;
      }

    }
    itemTotal: string;
  }[]
  totalItems: number;
  cartTotal: string;
}
export interface AddItemToCart {
  variantId: number;
  quantity: number;
}

export interface updateItemIncart {
  quantity: number;
}
export interface CartStore{
  cartData: cartItem | null;
  orderPlaced: boolean;
  lastOrder: any | null;

  //Action function
  fetchCart: () => Promise<void>;
  addItemToCart: (data: AddItemToCart) => Promise<void>;
  updateItemQuantity: (variantId: number, quantity: number) => Promise<void>;
  removItemFromCart: (variantId: number) => Promise<void>;
  clearCart: () => Promise<void>;
  placeOrder: (orderData: any) => Promise<void>;
  resetOrderPlaced: () => void;
  toastMessage: string | null;
  toastImage: string | null;
  showToast: (message: string | null, image?: string| null) => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartData: null,
  orderPlaced: false,
  lastOrder: null,
  toastMessage: null,
  toastImage: null,

  showToast:(message, image = null) => set({
    toastMessage: message,
    toastImage: image
  }),
  fetchCart: async() => {
    try{
      const response = await fetch(`/api/cart`);
      const data = await response.json();
      set({cartData: data})
    }
    catch(error){
      console.log(error);
    }
  },
  addItemToCart: async(data: AddItemToCart) => {
    try{
      const response = await fetch(`/api/cart`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      await get().fetchCart();
    }
    catch(error){
      console.log(error);
    }
  },

  removItemFromCart: async(variantId: number) => {
    try{
      await fetch(`/api/cart/items/${variantId}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      await get().fetchCart();
    }
    catch(error){
        console.log(error)
    }
  },
  updateItemQuantity: async(variantId: number,quantity: number) =>{
    try{
      const response = await fetch(`/api/cart/items/${variantId}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({quantity}),
      });
      await get().fetchCart()
    }
    catch(error){
      console.log(error);
    }
  },
  clearCart: async () => {
    set({ cartData: null });
  },
  placeOrder: async (orderData: any) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        set({
          orderPlaced: true,
          lastOrder: result.data || result, // Expecting backend to return created order
          cartData: null,
        });
      }
    } catch (error) {
      console.error("Place order error:", error);
    }
  },
  resetOrderPlaced: () => set({ orderPlaced: false, lastOrder: null }),
}))