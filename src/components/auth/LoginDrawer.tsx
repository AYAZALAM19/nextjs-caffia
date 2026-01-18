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
import RegisterForm from "./RegisterForm";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

interface LoginDrawerProps {
    children: React.ReactNode;
}

export default function LoginDrawer({ children }: LoginDrawerProps) {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState<"login" | "register">("login");
    const { status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            setOpen(false);
        }
    }, [status]);

    useEffect(() => {
        if (!open) {
            setMode("login");
        }
    }, [open]);

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
                    {mode === "login" ? (
                        <LoginForm onSuccess={() => setOpen(false)} />
                    ) : (
                        <RegisterForm />
                    )}
                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                            type="button"
                            className="font-semibold text-caffia hover:underline"
                            onClick={() => setMode(mode === "login" ? "register" : "login")}
                        >
                            {mode === "login" ? "Sign up" : "Login"}
                        </button>
                    </p>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
