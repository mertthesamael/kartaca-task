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

        const db = admin.firestore()
       

        const query = db.collection('item');
        let response = []
         await query.get().then((data)=>{
             let docs = data.docs
             
             docs.map((doc) => {
                 const selectedItem = {
                     ...doc.data()
                 }
                 response.push(selectedItem)
             })
         })
        
        return NextResponse.json({"items":response})
  
}

