import { NextResponse } from "next/server";
import admin from "firebase-admin"
import credentials from "../kartaca-auction-firebase-adminsdk-d4jfr-909fdd36b2.json"
import { doc, updateDoc } from "firebase/firestore";



export async function GET(request) {

     
  return NextResponse.json({data:db})
  
}

export async function POST(request) {
   
 
  return NextResponse.json({data:req})

}

