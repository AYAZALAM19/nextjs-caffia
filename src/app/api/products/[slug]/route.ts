import { NextResponse } from "next/server";
const { NEXT_PUBLIC_API_URL } = process.env;

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const { slug } = params;

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/products/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();
    return NextResponse.json(data);
}