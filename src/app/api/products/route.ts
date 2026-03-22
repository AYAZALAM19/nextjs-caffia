import { NextResponse } from "next/server";
const {NEXT_PUBLIC_API_URL} = process.env

export async function GET(){

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/products`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })

    const data = await res.json()
    console.log('data of products',data.data)
    return NextResponse.json(data);

}