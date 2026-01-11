"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, MoveRight, Truck } from "lucide-react";
import CheckoutOrderSummary from "../checkout/components/CheckoutOrderSummary";
import { useCartStore } from "@/lib/stores/cartStore";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
  const { orderPlaced, lastOrder, resetOrderPlaced, clearCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    if (!orderPlaced || !lastOrder) {
      router.push("/");
    }
  }, [orderPlaced, lastOrder, router]);

  useEffect(() => {
    // Clear the cart only when the thank you page is successfully mounted
    if (orderPlaced) {
      clearCart();
    }
  }, [orderPlaced, clearCart]);

  if (!orderPlaced || !lastOrder) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-center gap-4 md:gap-6 px-3 md:px-4 py-4 md:py-6">
          {/* LEFT */}
          <div className="flex-1 lg:basis-[70%] text-center lg:text-left">
            <CheckCircle className="w-12 md:w-16 h-12 md:h-16 text-green-500 mb-2 md:mb-4 lg:mx-0 mx-auto" />

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-caffia">
              Thank You, {lastOrder.customer.name}!
            </h1>
            <p className="font-bold text-gray-600 text-base md:text-lg">
              Order Id: <span className="font-bold text-black">{lastOrder.id}</span>
            </p>
            <p className="text-base md:text-lg font-semibold text-gray-500 mb-4 md:mb-6 max-w-xl">
              Your order has been placed successfully. We sent a detailed receipt to
              <span className="text-black font-semibold mx-1">{lastOrder.customer.email}</span>
            </p>

            <div className="max-w-xl">
              <div className="rounded-lg md:rounded-xl border border-gray-200 bg-gray-50 p-3 md:p-4">
                <div className="flex flex-col lg:flex-row items-start gap-3 md:gap-4">
                  {/* LEFT: Delivery Info */}
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex items-center justify-center w-9 md:w-10 h-9 md:h-10 rounded-full bg-caffia/10 text-caffia flex-shrink-0">
                      <Truck className="w-4 md:w-5 h-4 md:h-5" />
                    </div>

                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-500">
                        Estimated Delivery
                      </p>
                      <p className="text-sm md:text-base font-semibold text-gray-900">
                        5–7 Business Days
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">
                        Shipping via {lastOrder.shipping.name}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block w-px self-stretch bg-gray-300"></div>

                  {/* RIGHT: Address */}
                  <div className="flex-1">
                    <p className="text-xs md:text-sm font-medium text-gray-500 mb-1">
                      Shipping To
                    </p>
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                      {lastOrder.customer.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {lastOrder.customer.address}, {lastOrder.customer.city}
                      <br />
                      {lastOrder.customer.state}, India – {lastOrder.customer.pincode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 my-4 md:my-5">
              <Link
                href="/"
                onClick={resetOrderPlaced}
                className="inline-flex gap-2 md:gap-3 px-4 md:px-6 py-2 text-sm md:text-base font-semibold bg-caffia text-white rounded-md justify-center sm:justify-start hover:bg-gray-800 transition-colors"
              >
                Continue Shopping <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link
                href="#"
                className="inline-flex gap-2 md:gap-3 px-4 md:px-6 py-2 text-sm md:text-base font-semibold duration-200 bg-red-100 text-caffia rounded-md hover:bg-red-200 justify-center sm:justify-start"
              >
                Track Order <MoveRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>

          {/* RIGHT – 40% */}
          <div className="w-full lg:basis-[30%] max-w-md mt-4 md:mt-0">
            <CheckoutOrderSummary
              hideButton
              items={lastOrder.items}
              subtotal={lastOrder.totalAmount}
              shippingCost={lastOrder.shipping.price}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
