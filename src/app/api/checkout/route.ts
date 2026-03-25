import { NextResponse } from "next/server";
const { NEXT_PUBLIC_API_URL } = process.env;
import { getToken } from "next-auth/jwt";


export async function POST( req: Request) {
    try {

        const token = await getToken({ req:  req as any }) as any;
        
        if (!token || !token.accessToken) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { addressId } = await req.json();

        const res = await fetch(`${NEXT_PUBLIC_API_URL}/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.accessToken}`
            },
            body: JSON.stringify({ userId: token.id, addressId }),
        })

        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}