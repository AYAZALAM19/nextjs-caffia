"use client";

import React, { useEffect, useState } from "react";
import CheckoutOrderSummary from "./components/CheckoutOrderSummary";
import { useSession } from "next-auth/react";
import AddressSelector from "@/components/AddressSelector";
import ShippingOptions, {
  SHIPPING_METHODS,
} from "./components/ShippingOptions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutSchema,
  CheckoutFormData,
} from "@/lib/checkout-validation-shema/checkout-schema";
import PaymentSection from "./components/PaymentSection";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/stores/cartStore";
import { toast } from "sonner";
import { stat } from "node:fs";

type CheckoutType  = {
  orderId: number,
  publicOrderCode: string,
}

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function Checkout() {
  const router = useRouter();
  const status = useSession().status;
  const cartData = useCartStore((state) => state.cartData);
  const cart = cartData?.items || [];
  const { placeOrder, orderPlaced, clearCart } = useCartStore();
  // Default to first method (Standard)
  const [selectedMethod, setSelectedMethod] = useState(SHIPPING_METHODS[0]);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);

  // Removed the useEffect that was forcefully pushing to home

  const {
    register,
    handleSubmit,
    setValue, // ye setter react-hook-form se nikala
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  async function OnSubmit(formData: CheckoutFormData) {
    if (!selectedAddressId) {
      toast.error("Please select a shipping address");
      return;
    }

    try{
      const res = await loadRazorpayScript();
      if (!res) {
        toast.error("Razorpay SDK failed to load");
        return;
      }

      const response = await fetch('/api/checkout', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addressId: selectedAddressId
        })
      })
      const result = await response.json() as any;
      if(!response.ok){
        toast.error(result.message || "Failed to place order")
        return;
      }

      const orderData = result.data || result;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Caffia Coffee",
        description: "Order Payment",
        order_id: orderData.razorpayOrderId,
        handler: async function (paymentResponse: any) {
          try {
            const verifyRes = await fetch('/api/checkout/verify', {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: orderData.orderId,
                razorpayPaymentId: paymentResponse.razorpay_payment_id,
                razorpayOrderId: paymentResponse.razorpay_order_id,
                razorpaySignature: paymentResponse.razorpay_signature
              })
            });
            const verifyData = await verifyRes.json();
            
            if (verifyRes.ok) {
              toast.success("Payment Successful!");
              useCartStore.setState({ 
                orderPlaced: true,
                lastOrder: orderData 
              }); 
              clearCart();
              router.push(`/thank-you?orderId=${orderData.publicOrderCode}`);
            } else {
              toast.error(verifyData.message || "Payment verification failed");
            }
          } catch (error) {
            toast.error("Error verifying payment");
          }
        },
        theme: {
          color: "#000000",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

    }
    catch(error){
      console.error("Checkout error:", error);
      toast.error("Something went wrong!");
    }
  }
  return (
    <>
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-6">
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
            {/* LEFT SIDE: Form (8 columns on large screens) */}
            <div className="w-full lg:w-[65%] space-y-4 md:space-y-6">
              <div className="bg-white p-4 md:p-5 rounded-lg md:rounded-2xl shadow-sm border border-gray-50">
                <AddressSelector onSelect={(id) => {
                  setSelectedAddressId(id); // Purana kaam: Parent UI ka state update
                  setValue("addressId", id); // Naya kaam: Form validation ko bol diya ki value mil gayi hai
                }} />
              </div>

              {/* Shipping Options Section */}
              <div className="bg-white p-4 md:p-5 rounded-lg md:rounded-2xl shadow-sm border border-gray-50">
                <ShippingOptions
                  selectedMethodId={selectedMethod.id}
                  onSelect={setSelectedMethod}
                />
              </div>

              {/* Payment Method Section */}
              <div className="bg-white p-4 md:p-5 rounded-lg md:rounded-2xl shadow-sm border border-gray-50">
                <PaymentSection />
              </div>
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
