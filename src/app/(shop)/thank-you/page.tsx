"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { CheckCircle, MoveRight, Truck } from "lucide-react";
import CheckoutOrderSummary from "../checkout/components/CheckoutOrderSummary";
import { useCartStore } from "@/lib/stores/cartStore";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
  const { orderPlaced, resetOrderPlaced, clearCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    if (!orderPlaced) {
      router.push("/");
    }
  }, [orderPlaced, router]);

  useEffect(() => {
    // Clear the cart only when the thank you page is successfully mounted
    if (orderPlaced) {
      clearCart();
    }
  }, [orderPlaced, clearCart]);

  if (!orderPlaced) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-center gap-8 px-4">
          {/* LEFT */}
          <div className="flex-1 lg:basis-[70%] text-center  lg:text-left">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4 lg:mx-0 mx-auto" />

            <h1 className="text-4xl font-bold mb-2">Thank You, Ayaz!</h1>
            <p className="font-bold text-gray-600 text-xl">
              Order Id: <span className="font-bold text-black">#24543</span>
            </p>
            <p className="text-lg font-semibold text-gray-500 mb-6 max-w-xl">
              Your has been placed successfully. We sent a detail receipt to
              ayaz@gmail.com
            </p>

            <div className="max-w-xl">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  {/* LEFT: Delivery Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-caffia/10 text-caffia">
                      <Truck className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Estimated Delivery
                      </p>
                      <p className="text-base font-semibold text-gray-900">
                        5–7 Business Days
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Shipping via Bluedart Express
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block w-px self-stretch bg-gray-300"></div>

                  {/* RIGHT: Address */}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      Shipping To
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      Ayaz Alam
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Random address, city
                      <br />
                      Maharashtra, India – 400102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 my-5">
             <Link
              href="/"
              onClick={resetOrderPlaced}
              className="inline-flex gap-3 px-6 py-2 font-semibold my-3 bg-caffia text-white rounded-md"
            >
              Continue Shopping <MoveRight />
            </Link>
              <Link
                href="#"
                className="inline-flex gap-3 px-6 py-2 font-semibold my-3 duration-200 bg-red-300 text-caffia rounded-md hover:bg-red-300 hover:text-caffia"
              >
                Track Order <MoveRight />
              </Link>
            </div>
          </div>

          {/* RIGHT – 40% */}
          <div className="w-full lg:basis-[30%] max-w-md">
            <CheckoutOrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
