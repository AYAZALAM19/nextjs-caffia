"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Package, MapPin, Search, ChevronRight, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data generator for individual orders
const getOrderDetails = (id: string) => ({
    id,
    date: "12 Jan, 2026",
    status: "In Transit",
    paymentMethod: "Google Pay",
    shippingMethod: "Standard Delivery",
    address: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+91 99875 45874",
        street: "123 Coffee Street, MG Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001"
    },
    items: [
        {
            id: "1",
            title: "Turkish Hazelnut Instant Coffee",
            image: "/assets/images/products/product-3.webp",
            price: 399,
            quantity: 2,
            roast: "Medium",
            grind: "Powder"
        },
        {
            id: "2",
            title: "French Vanilla Instant Coffee",
            image: "/assets/images/products/product-1.webp",
            price: 399,
            quantity: 1,
            roast: "Medium",
            grind: "Powder"
        }
    ],
    summary: {
        subtotal: 1197,
        shipping: 52,
        tax: 0,
        total: 1249
    }
});

export default function OrderDetailPage() {
    const params = useParams();
    const orderId = Array.isArray(params.id) ? params.id[0] : (params.id || "ORD-9921");
    const order = getOrderDetails(orderId as string);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <Link
                        href="/profile/orders"
                        className="text-sm font-bold text-caffia flex items-center gap-2 hover:translate-x-[-4px] transition-transform duration-300"
                    >
                        <ArrowLeft size={16} /> Back to Orders
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 font-heading mt-2">Order {order.id}</h1>
                    <p className="text-gray-500 font-medium">Placed on {order.date}</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-amber-50 text-amber-600 rounded-2xl text-sm font-black uppercase tracking-widest border border-amber-100 flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                        {order.status}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Side: Items & Logistics */}
                <div className="xl:col-span-2 space-y-6">

                    {/* Items List */}
                    <div className="bg-gray-50/50 rounded-3xl border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-white">
                            <h2 className="font-bold text-lg text-gray-900">Order Items</h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {order.items.map((item) => (
                                <div key={item.id} className="p-6 flex gap-6 items-center bg-white/50 hover:bg-white transition-colors duration-300">
                                    <div className="w-20 h-20 bg-white rounded-2xl border border-gray-100 p-2 shrink-0 shadow-sm overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="font-bold text-gray-900 line-clamp-1">{item.title}</h3>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{item.roast} Roast • {item.grind}</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-sm font-medium text-gray-600">Qty: {item.quantity}</p>
                                            <p className="font-bold text-caffia">₹{item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                            <div className="flex items-center gap-3 text-caffia">
                                <MapPin size={20} />
                                <h2 className="font-bold text-gray-900">Shipping Address</h2>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1 font-medium">
                                <p className="font-bold text-gray-900">{order.address.name}</p>
                                <p>{order.address.street}</p>
                                <p>{order.address.city}, {order.address.state} - {order.address.pincode}</p>
                                <p className="pt-2 text-gray-400">Phone: {order.address.phone}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                            <div className="flex items-center gap-3 text-caffia">
                                <Package size={20} />
                                <h2 className="font-bold text-gray-900">Payment & Logistics</h2>
                            </div>
                            <div className="text-sm text-gray-600 space-y-2 font-medium">
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase">Payment Method</p>
                                    <p className="font-bold text-gray-900">{order.paymentMethod}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase">Shipping Via</p>
                                    <p className="font-bold text-gray-900">{order.shippingMethod}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Order Summary */}
                <div className="space-y-6">
                    <div className="bg-caffia text-white p-8 rounded-[40px] shadow-xl shadow-caffia/20 relative overflow-hidden group">
                        {/* Decorative Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                        <h2 className="font-black text-2xl mb-8 flex items-center gap-3">
                            Summary
                        </h2>

                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-center text-white/70 font-semibold">
                                <span>Items Subtotal</span>
                                <span>₹{order.summary.subtotal}</span>
                            </div>
                            <div className="flex justify-between items-center text-white/70 font-semibold">
                                <span>Shipping Fee</span>
                                <span>₹{order.summary.shipping}</span>
                            </div>
                            <div className="flex justify-between items-center text-white/70 font-semibold">
                                <span>Tax (GST)</span>
                                <span>₹{order.summary.tax}</span>
                            </div>
                            <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-end">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-[3px] text-white/40">Grand Total</p>
                                    <p className="text-4xl font-black">₹{order.summary.total}</p>
                                </div>
                                <CheckCircle2 size={32} className="opacity-20" />
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-5 bg-white border-2 border-dashed border-gray-200 rounded-3xl text-gray-400 font-bold hover:border-caffia hover:text-caffia transition-all duration-300 flex items-center justify-center gap-2 group">
                        <Search size={18} className="group-hover:rotate-12 transition-transform" />
                        Download Invoice
                    </button>
                </div>
            </div>
        </div>
    );
}
