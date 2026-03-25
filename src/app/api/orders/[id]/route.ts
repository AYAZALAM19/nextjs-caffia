import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const { NEXT_PUBLIC_API_URL } = process.env;

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }){
    try{
        const { id } = await params;
        const token = await getToken({ req:  req as any }) as any;

        if (!token || !token.accessToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const res = await fetch(`${NEXT_PUBLIC_API_URL}/orders/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })

        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}