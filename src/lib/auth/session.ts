import "server-only";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type CustomerSession = {
    id?: string;
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    role?: string;
};

export async function getSession() {
    return getServerSession(authOptions);
}

export async function getCustomer() {
    const session = await getSession();
    if (!session?.user) return null;

    const user = session.user as CustomerSession;
    return {
        id: user.id,
        name: user.name ?? null,
        email: user.email ?? null,
        phone: user.phone ?? null,
        role: user.role,
    };
}
