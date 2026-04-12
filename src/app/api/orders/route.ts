const { NEXT_PUBLIC_API_URL } = process.env;
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"; // ✅ Added this import

export async function GET(req: Request) {
    try {
        const token = await getToken({ req: req as any })

        const res = await fetch(`${NEXT_PUBLIC_API_URL}/orders/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token?.accessToken}`
            },
        })

        const data = await res.json();
        
        // ✅ Fixed: returning NextResponse instead of just data
        return NextResponse.json(data); 
    }
    catch (error) {
        console.log(error);
        
        // ✅ Fixed: wrap error in NextResponse too
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
