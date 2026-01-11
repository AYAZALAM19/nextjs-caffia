'use client';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import LoginForm from "./LoginForm";

import { useState } from "react";
import Image from "next/image";

interface LoginDrawerProps {
    children: React.ReactNode;
}

export default function LoginDrawer({ children }: LoginDrawerProps) {
    const [open, setOpen] = useState(false);

    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {children}
            </DrawerTrigger>
            <DrawerContent className="h-full w-full sm:w-[400px] ml-auto">
                <DrawerHeader className="flex flex-row justify-between items-center border-b pb-4">
                    <DrawerTitle className="sr-only">Login</DrawerTitle>
                    <Image src="/assets/images/caffia.png" alt="Caffia" width={100} height={100} />
                    <DrawerClose className="p-1 hover:bg-gray-100 border rounded-full transition-colors">
                        <X size={20} />
                    </DrawerClose>
                </DrawerHeader>
                <div className="p-6">
                    <LoginForm onSuccess={() => setOpen(false)} />
                </div>
            </DrawerContent>
        </Drawer>
    );
}
