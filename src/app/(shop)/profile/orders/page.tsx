"use client";

import React from "react";
import Link from "next/link";
import { Package, ChevronRight, Clock } from "lucide-react";

// Mock data for production-like feel
const orders = [
    {
        id: "ORD-9921",
        date: "12 Jan, 2026",
        status: "In Transit",
        amount: "₹1,249",
        items: 3,
    },
    {
        id: "ORD-8854",
        date: "08 Jan, 2026",
        status: "Delivered",
        amount: "₹499",
        items: 1,
    }
];

export default function OrdersPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 font-heading italic">Order History</h1>
                <p className="text-gray-500 mt-2 font-medium">Keep track of your favorite coffee orders.</p>
            </div>

            <div className="space-y-4">
                {orders.map((order) => (
                    <Link
                        key={order.id}
                        href={`/profile/orders/${order.id}`}
                        className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl hover:border-caffia/30 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer"
                    >
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="w-16 h-16 bg-caffia/5 rounded-2xl flex items-center justify-center text-caffia group-hover:scale-110 transition-transform duration-500">
                                <Package size={28} />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-caffia transition-colors">{order.id}</h3>
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 font-medium flex items-center gap-1">
                                    <Clock size={14} /> {order.date} • {order.items} Items
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between w-full md:w-auto gap-8 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-50">
                            <div className="text-right">
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Amount</p>
                                <p className="text-xl font-black text-gray-900">{order.amount}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-caffia group-hover:text-white transition-all duration-300">
                                <ChevronRight size={20} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
