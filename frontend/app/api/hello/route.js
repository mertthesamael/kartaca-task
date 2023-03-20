import { NextResponse } from "next/server";
import admin from "firebase-admin"
import credentials from "./kartaca-auction-firebase-adminsdk-d4jfr-aa352b479f.json"


//Initialize firebase-admin sdk
if(!admin.credential.cert){
  admin.initializeApp({
    credential:admin.credential.cert(credentials)
  })
}

export async function GET(request) {
  return NextResponse.json({"test":'data'})
}

export async function POST(request) {
  const res = await request.json();

    const userResponse = await admin.auth().createUser({
      email:res.email,
      password:res.password,
      emailVerified:false,
      disabled:false,
      displayName:res.name
      
    })
    return NextResponse.json({ 'data':userResponse })
  
}
