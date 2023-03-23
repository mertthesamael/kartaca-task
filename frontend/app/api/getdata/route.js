import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(request) {
    const req = await request.json()
    console.log(req)
    try{
        let data = await axios(`http://127.0.0.1:5001/kartaca-auction/us-central1/app/get_spesific/${req.collection}/${req.id}`)
        return NextResponse.json({data:data.data.data})
    }catch(err){
        console.log(err.message)
    }
    
}
