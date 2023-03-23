import axios from "axios";
import { NextResponse } from "next/server";


export async function POST(request) {
  const req = await request.json()

try{
  let data = await axios.post('http://127.0.0.1:5001/kartaca-auction/us-central1/app/signup',{email:req.email,password:req.password,name:req.name})
  console.log(data.data)
return NextResponse.json({'response':200})
}catch(err){
  console.log(err.message)
}

}
