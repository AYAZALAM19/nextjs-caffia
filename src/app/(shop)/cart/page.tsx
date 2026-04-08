"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ChevronRight } from "lucide-react";
import CartItems from "./components/CartItems";
import { useCartStore } from "@/lib/stores/cartStore";
import Breadcrumb from "@/components/layout/Breadcrumb";
import OrderSummary from "./components/CartOrderSummary";

export default function CartPage() {

  const { status } = useSession();
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  const [addresses, setAddresses] = useState<any[]>([]);
  const cart = useCartStore((state) => state.cartData?.items) || [];
  console.log("data of cart ", cart);

  return (
    <>
      <section className="py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-3 md:px-4">
          <Breadcrumb
            separator={<span> <ChevronRight /> </span>}
            capitalizeLinks
          />
          <h1 className="text-center text-caffia font-semibold lg:text-4xl text-xl md:text-2xl uppercase text-shadow-2xs mt-2 md:mt-4">
            Your Cart
          </h1>

          {cart.length === 0 ? (
            <div>
              <p className="text-center py-6 md:py-8 text-sm md:text-base text-gray-600">Cart is empty</p>
              <div className="flex justify-center items-center">
                <Link
                  href='/product'
                  className="text-center px-6 md:px-8 py-2 text-sm md:text-base bg-caffia text-white font-semibold rounded-lg md:rounded-xl"
                >
                  View Coffee Collection
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
              <div className="w-full lg:w-8/12">
                <CartItems />
              </div>
              <div className="w-full lg:w-4/12">
                <OrderSummary />
              </div>
            </div>
          )}
        </div>
      </section>

    </>
  );
}
