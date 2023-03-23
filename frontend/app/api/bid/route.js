import axios from "axios";
import { NextResponse } from "next/server";




export async function GET(request) {
  return NextResponse.json({data:db})
  
}

export async function POST(request) {
  
  const req = await request.json()
 try{
   await axios.post("http://127.0.0.1:5001/kartaca-auction/us-central1/app/bid",{id:req.id,from:req.from,amount:Number(req.amount),currentAmount:req.currentAmount})
   return NextResponse.json({data:req})
  }catch(err){
    console.log(err)
  }

}

