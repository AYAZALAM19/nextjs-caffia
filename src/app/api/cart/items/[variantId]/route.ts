import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const { NEXT_PUBLIC_API_URL } = process.env;

export async function PUT(request: Request, { params }: {params: Promise<{ variantId: string }>}){
    try{
        const token = await getToken({ req: request as any });

        if(!token){
            return NextResponse.json({ error: "unauthorized"},{status: 401})
        }

        const resolvedParams = await params;
        const variantId = resolvedParams.variantId;

        const { quantity } = await request.json();

        if(!quantity){
            return NextResponse.json({ error: "Missing quantity"}, {status: 400})
        }

        const res = await fetch(`${NEXT_PUBLIC_API_URL}/cart/items/${variantId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.accessToken}`,
            },
            body: JSON.stringify({ quantity }),
        });

        const data = await res.json();
        return NextResponse.json(data);
    }
    catch(error){
        console.log(error);
        return NextResponse.json({ error: "Failed to update cart"}, {status: 500})
    }
}   

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ variantId: string }> }
) {
    try {
        const token = await getToken({ req: request as any });

        if (!token || !token.accessToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const resolvedParams = await params;
        const variantId = resolvedParams.variantId;

        if (!variantId) {
            return NextResponse.json({ error: "Missing variantId" }, { status: 400 });
        }

        const res = await fetch(`${NEXT_PUBLIC_API_URL}/cart/items/${variantId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.accessToken}`,
            },
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error removing from cart:", error);
        return NextResponse.json({ error: "Failed to remove from cart" }, { status: 500 });
    }
}
