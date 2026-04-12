const { NEXT_PUBLIC_API_URL } = process.env;
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const orderId = searchParams.get("orderId");

        if (!orderId) {
            return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
        }

        const token = await getToken({ req: req as any });

        const res = await fetch(`${NEXT_PUBLIC_API_URL}/orders/thankyou/${orderId}`, {
            headers: {
                "Content-Type": "application/json",
                ...(token?.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {})
            }
        });

        if (!res.ok) {
            return NextResponse.json({ error: "Failed to fetch from backend" }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error("Thankyou API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}