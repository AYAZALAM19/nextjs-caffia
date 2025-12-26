import React from "react";
import CheckoutOrderSummary from "./components/CheckoutOrderSummary";
import CheckoutContactForm from "./components/CheckoutContactForm";

export default function Checkout() {
    return(
        <>
       <div className="container mx-auto px-4 py-10">
  {/* Flex ko responsive banaya (Mobile pe stack, Desktop pe side-by-side) */}
  <div className="flex flex-col lg:flex-row gap-12 items-start">
    
    {/* LEFT SIDE: Form (8 columns on large screens) */}
    <div className="w-full lg:w-[65%] space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
        <CheckoutContactForm />
      </div>
      
      {/* Aap yahan Payment Method ka section bhi add kar sakte ho niche */}
    </div>

    {/* RIGHT SIDE: Summary (4 columns - Sticky) */}
    <div className="w-full lg:w-[35%] lg:sticky lg:top-8">
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
        <CheckoutOrderSummary />
        
        {/* Safe Checkout Badge (Trust signal) */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
           <span className="h-[1px] w-8 bg-gray-200"></span>
           Secure Checkout
           <span className="h-[1px] w-8 bg-gray-200"></span>
        </div>
      </div>
    </div>

  </div>
</div>
        </>
    )
}