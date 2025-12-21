import React from "react";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import CheckoutContactForm from "./components/CheckoutContactForm";

export default function Checkout() {
    return(
        <>
        <div className=" container mx-auto">
            <div className="flex">
                <div className="w-8/12">
                    <CheckoutContactForm/>
                </div>
                <div className="w-4/12">
                 <CheckoutOrderSummary />
                </div>
            </div>
        </div>
        </>
    )
}