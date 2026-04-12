"use client";
import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { CheckCircle, MoveRight, Truck } from "lucide-react";
import CheckoutOrderSummary from "../checkout/components/CheckoutOrderSummary";
import { useCartStore } from "@/lib/stores/cartStore";
import { useRouter, useSearchParams } from "next/navigation";

const ThankYouContent = () => {
  const { clearCart, resetOrderPlaced } = useCartStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  const [orderInfo, setOrderInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorHeader, setErrorHeader] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) {
      router.push("/");
      return;
    }

    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/thankyou?orderId=${orderId}`);
        if (response.ok) {
          const data = await response.json();
          // Map backend data to UI expectations
          const mappedOrder = {
            id: data.publicOrderCode,
            customer: {
              name: data.shippingName || "Customer",
              email: "your registered email", 
              address: [data.shippingLine1, data.shippingLine2].filter(Boolean).join(", "),
              city: data.shippingCity,
              state: data.shippingState,
              pincode: data.shippingPincode,
            },
            shipping: {
              name: data.shippingType || "Standard Delivery",
              price: 0,
            },
            totalAmount: Number(data.total),
            items: data.items?.map((item: any) => ({
              id: item.id,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              variant: {
                weightGrams: item.variantWeightGrams,
                product: {
                  name: item.productName,
                  imageUrl: item.productImageUrl || '/assets/images/products/product-1.webp',
                  category: "Product"
                }
              }
            })) || []
          };
          setOrderInfo(mappedOrder);
          clearCart(); // Clear cart after successful fetch of "thankyou" page
        } else {
          setErrorHeader(`Order fetch failed. Status: ${response.status}`);
        }
      } catch (err: any) {
        console.error("Failed to fetch order details", err);
        setErrorHeader("Network error. Could not connect to API.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, router, clearCart]);

  if (errorHeader) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4 text-center px-4">
          <div className="text-red-500 mb-2 font-bold text-5xl">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800">Oops! Something went wrong.</h2>
          <p className="text-gray-500 font-medium">{errorHeader}</p>
          <Link href="/" className="mt-6 px-6 py-2 bg-caffia text-white font-semibold rounded-md hover:bg-gray-800 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (loading || !orderInfo) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-caffia"></div>
          <p className="text-gray-500 font-medium tracking-tight">Fetching order details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-center gap-4 md:gap-6 px-3 md:px-4 py-4 md:py-6">
          {/* LEFT */}
          <div className="flex-1 lg:basis-[70%] text-center lg:text-left">
            <CheckCircle className="w-12 md:w-16 h-12 md:h-16 text-green-500 mb-2 md:mb-4 lg:mx-0 mx-auto" />

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-caffia">
              Thank You, {orderInfo.customer?.name || "Customer"}!
            </h1>
            <p className="font-bold text-gray-600 text-base md:text-lg">
              Order Id: <span className="font-bold text-black">{orderInfo.id || "N/A"}</span>
            </p>
            <p className="text-base md:text-lg font-semibold text-gray-500 mb-4 md:mb-6 max-w-xl">
              Your order has been placed successfully. We sent a detailed receipt to
              <span className="text-black font-semibold mx-1">{orderInfo.customer?.email}</span>
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
                      {orderInfo.shipping && (
                        <p className="text-xs md:text-sm text-gray-500 mt-1">
                          Shipping via {orderInfo.shipping.name || "Standard Delivery"}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block w-px self-stretch bg-gray-300"></div>

                  {/* RIGHT: Address */}
                  <div className="flex-1 text-left">
                    <p className="text-xs md:text-sm font-medium text-gray-500 mb-1">
                      Shipping To
                    </p>
                    <p className="text-sm md:text-base font-semibold text-gray-900 line-clamp-1">
                      {orderInfo.customer?.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {orderInfo.customer?.address}, {orderInfo.customer?.city}
                      <br />
                      {orderInfo.customer?.state}, India – {orderInfo.customer?.pincode}
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
              items={orderInfo.items || []}
              subtotal={orderInfo.totalAmount || 0}
              shippingCost={orderInfo.shipping?.price || 0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-caffia"></div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
