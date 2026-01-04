"use client";

import React, { useEffect, useState } from "react";
import CheckoutOrderSummary from "./components/CheckoutOrderSummary";
import CheckoutContactForm from "./components/CheckoutContactForm";
import ShippingOptions, {
  SHIPPING_METHODS,
} from "./components/ShippingOptions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutSchema,
  CheckoutFormData,
} from "@/lib/checkout-validation-shema/checkout-schema";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/stores/cartStore";

export default function Checkout() {
  const router = useRouter();
  const { cart, placeOrder, orderPlaced } = useCartStore();
  // Default to first method (Standard)
  const [selectedMethod, setSelectedMethod] = useState(SHIPPING_METHODS[0]);

  useEffect(() => {
    if (cart.length === 0 && !orderPlaced) {
      router.push("/");
    }
  }, [cart, router, orderPlaced]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  async function OnSubmit(data: CheckoutFormData) {
    console.log("Form submitted data", { ...data, shipping: selectedMethod });
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    placeOrder();
    router.push("/thank-you");
  }

  if (cart.length === 0) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-6">
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
            {/* LEFT SIDE: Form (8 columns on large screens) */}
            <div className="w-full lg:w-[65%] space-y-4 md:space-y-6">
              <div className="bg-white p-4 md:p-5 rounded-lg md:rounded-2xl shadow-sm border border-gray-50">
                <CheckoutContactForm register={register} errors={errors} isSubmitting={isSubmitting} />
              </div>

              {/* Shipping Options Section */}
              <div className="bg-white p-4 md:p-5 rounded-lg md:rounded-2xl shadow-sm border border-gray-50">
                <ShippingOptions
                  selectedMethodId={selectedMethod.id}
                  onSelect={setSelectedMethod}
                />
              </div>

              {/* Aap yahan Payment Method ka section bhi add kar sakte ho niche */}
            </div>

            {/* RIGHT SIDE: Summary (4 columns - Sticky) */}
            <div className="w-full lg:w-[35%] lg:sticky lg:top-6">
              <div className="bg-white p-4 md:p-5 rounded-lg md:rounded-2xl border border-gray-100 shadow-sm">
                <CheckoutOrderSummary
                  shippingCost={selectedMethod.price}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
