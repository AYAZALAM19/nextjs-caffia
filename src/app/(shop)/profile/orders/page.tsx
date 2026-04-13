"use client";

import Link from "next/link";
import { Package, ChevronRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";


export default function OrdersPage() {

    const [orders, setOrders] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const ordersData = async() => {
            try{
                const response = await fetch('/api/orders', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                const data = await response.json();
                
                // Safety check: depending on your API, it might return an array directly,
                // or an object like { data: [...] } or { orders: [...] }
                if (Array.isArray(data)) {
                    setOrders(data);
                } else if (data && Array.isArray(data.data)) {
                    setOrders(data.data);
                } else if (data && Array.isArray(data.orders)) {
                    setOrders(data.orders);
                } else {
                    console.error("Received non-array order data:", data);
                    setOrders([]);
                }
            }
            catch(error){
                console.error("Orders fetch failed:", error);
                setOrders([]);
            } finally {
                setIsLoading(false);
            }
        }
        ordersData();
    },[])

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 font-heading italic">Order History</h1>
                <p className="text-gray-500 mt-2 font-medium">Keep track of your favorite coffee orders.</p>
            </div>

            <div className="space-y-4">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-16 bg-white border border-gray-100 rounded-3xl">
                        <div className="w-10 h-10 border-4 border-gray-200 border-t-caffia rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-500 font-medium">Loading your orders...</p>
                    </div>
                ) : orders.length > 0 ? (
                    orders.map((order: any) => (
                        <Link
                            key={order.id || order.publicOrderCode}
                            href={`/profile/orders/${order.publicOrderCode}`}
                            className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl hover:border-caffia/30 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer"
                        >
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="w-16 h-16 bg-caffia/5 rounded-2xl flex items-center justify-center text-caffia group-hover:scale-110 transition-transform duration-500">
                                    <Package size={28} />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-caffia transition-colors">{order.publicOrderCode}</h3>
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'DELIVERED' ? 'bg-green-100 text-green-600' : order.status === 'CANCELLED' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                                            {order.status || 'PENDING'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-medium flex items-center gap-1">
                                        <Clock size={14} /> {order.createdAt ? new Date(order.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Unknown Date'} • {order.items?.length || 0} Items
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full md:w-auto gap-8 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-50">
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Amount</p>
                                    <p className="text-xl font-black text-gray-900">₹{order.total || 0}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-caffia group-hover:text-white transition-all duration-300">
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="text-center py-16 bg-white border border-gray-100 rounded-3xl">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                            <Package size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No orders yet</h3>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">Looks like you haven't placed any coffee orders yet. Let's fix that!</p>
                        <Link href="/menu" className="inline-block px-8 py-3 bg-caffia text-white font-bold rounded-xl hover:bg-[#a67c52] transition-colors">
                            Explore Menu
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
