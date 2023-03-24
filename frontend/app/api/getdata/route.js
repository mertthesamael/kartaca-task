import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(request) {
    const req = await request.json()
    console.log(req)
  
    try{
        let data = await axios(`${process.env.NEXT_PUBLIC_API+req.endpoint}/${req.collection}/${req.id}`)
        return NextResponse.json({data:data.data.data})
    }catch(err){
        console.log(err.message)
    }
    
}
