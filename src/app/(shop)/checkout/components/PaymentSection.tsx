"use client";

import React, { useState } from "react";
import { CreditCard, Landmark, Smartphone } from "lucide-react";

const PAYMENT_METHODS = [
    {
        id: "upi",
        name: "UPI (Google Pay, PhonePe, etc.)",
        icon: <Smartphone size={18} />,
        description: "Scan to pay or enter UPI ID",
    },
    {
        id: "card",
        name: "Credit / Debit Card",
        icon: <CreditCard size={18} />,
        description: "Visa, Mastercard, RuPay",
    },
    {
        id: "net-banking",
        name: "Net Banking",
        icon: <Landmark size={18} />,
        description: "All major Indian banks",
    },
];

export default function PaymentSection() {
    const [selected, setSelected] = useState(PAYMENT_METHODS[0].id);

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Payment Method</h3>
            <p className="text-sm text-gray-500 mb-4">Choose how you want to pay</p>

            <div className="space-y-3">
                {PAYMENT_METHODS.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => setSelected(method.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${selected === method.id
                                ? "border-caffia bg-caffia/5"
                                : "border-gray-100 bg-white hover:border-gray-200"
                            }`}
                    >
                        <div className={`p-2 rounded-full ${selected === method.id ? "bg-caffia text-white" : "bg-gray-100 text-gray-600"
                            }`}>
                            {method.icon}
                        </div>
                        <div className="flex-1">
                            <p className={`font-semibold text-sm ${selected === method.id ? "text-caffia" : "text-gray-800"}`}>
                                {method.name}
                            </p>
                            <p className="text-xs text-gray-500">{method.description}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === method.id ? "border-caffia" : "border-gray-300"
                            }`}>
                            {selected === method.id && <div className="w-2.5 h-2.5 bg-caffia rounded-full" />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
