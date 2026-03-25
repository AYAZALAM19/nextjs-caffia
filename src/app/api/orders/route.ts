const { NEXT_PUBLIC_API_URL } = process.env;
import { getToken } from "next-auth/jwt";

export async function GET( req: Request) {
    try {

        const token = await getToken({ req:  req as any })

        const res = await fetch(`${NEXT_PUBLIC_API_URL}/orders/me`, {
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
