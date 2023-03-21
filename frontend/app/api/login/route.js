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

 
  
}

