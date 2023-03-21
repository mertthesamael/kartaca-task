import { NextResponse } from "next/server";
import admin from "firebase-admin"
import credentials from "../kartaca-auction-firebase-adminsdk-d4jfr-909fdd36b2.json"


//Initialize firebase-admin sdk
if(!admin.credential.cert){
  admin.initializeApp({
    credential:admin.credential.cert(credentials)
  })

  //Main database reference
}

export async function GET(request) {
  return NextResponse.json({"test":'data'})
}

export async function POST(request) {
  const req = await request.json();
  const db = admin.firestore()

    const userResponse = await admin.auth().createUser({
      email:req.email,
      password:req.password,
      emailVerified:false,
      disabled:false,
      displayName:req.name
      
    })
    await db.collection('user').doc(`/${req.email}/`).create({
      id: Date.now(),
      name: req.name,
      email: req.email
  })
    return NextResponse.json({ 'data':userResponse })
  
}
