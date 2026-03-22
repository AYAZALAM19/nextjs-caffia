import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const { NEXT_PUBLIC_API_URL } = process.env;

export async function GET(request: Request) {
  try {
    const token = await getToken({ req: request as any });
    
    if (!token || !token.accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`,
      },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const token = await getToken({ req: request as any });

    if (!token || !token.accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { variantId, quantity } = await request.json();
    
    if (!variantId || !quantity) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/cart/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`,
      },
      body: JSON.stringify({ variantId, quantity }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json({ error: "Failed to add to cart" }, { status: 500 });
  }
}