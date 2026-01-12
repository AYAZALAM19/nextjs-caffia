"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, MapPin, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
    { name: "My Profile", href: "/profile", icon: User },
    { name: "My Orders", href: "/profile/orders", icon: Package },
    { name: "Saved Addresses", href: "/profile/addresses", icon: MapPin },
];

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="bg-gray-50/50 min-h-screen">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* SIDEBAR NAVIGATION */}
                    <aside className="w-full lg:w-72">
                        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-gray-900 px-4 mb-2 md:mb-4 font-heading hidden lg:block">Account Hub</h2>

                            {/* Mobile/Tablet Horizontal Scroll */}
                            <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide lg:space-y-1">
                                {sidebarLinks.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                "flex items-center gap-3 px-5 py-3 md:py-4 rounded-2xl transition-all duration-300 whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink",
                                                isActive
                                                    ? "bg-caffia text-white shadow-lg shadow-caffia/20"
                                                    : "text-gray-500 hover:bg-gray-50 hover:text-caffia"
                                            )}
                                        >
                                            <Icon size={20} />
                                            <span className="font-semibold text-sm md:text-base">{link.name}</span>
                                        </Link>
                                    );
                                })}

                                <button
                                    className="flex lg:w-full items-center gap-3 px-5 py-3 md:py-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all duration-300 lg:mt-6 shrink-0 lg:shrink"
                                >
                                    <LogOut size={20} />
                                    <span className="font-semibold text-sm md:text-base">Sign Out</span>
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* MAIN CONTENT AREA */}
                    <main className="flex-1">
                        <div className="bg-white p-5 md:p-10 rounded-3xl shadow-sm border border-gray-100 min-h-[400px] lg:min-h-[600px]">
                            {children}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
}
