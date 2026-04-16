const { NEXT_PUBLIC_API_URL } = process.env;
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {

    try {
        const token = await getToken({ req: request as any }) as any;
    if(!token || !token.accessToken){
        return NextResponse.json({ error: "Unauthorized"}, {
            status: 401
        });

    }
        const body = await request.json();
    
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/users/profile`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.accessToken}`
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }
}