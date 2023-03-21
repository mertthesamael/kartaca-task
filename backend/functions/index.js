const functions = require("firebase-functions");
const admin = require("firebase-admin")
var serviceAccount = require("../serviceAccountKey.json");

const express = require("express")
const cors = require("cors")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


//Main app
const app = express()
app.use(cors({origin : true}));

//Main database reference
const db = admin.firestore()

//Routes
app.get('/', (req,res) =>{
    return res.status(200).send('Hello, world!')
})

app.get('/items', async(req,res)=>{
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
     return res.status(200).send({status:'Success', data:response})
})


//Create => post()
app.post('/signup', async(req,res)=>{
   
  try{

    const userResponse = await admin.auth().createUser({
      email:req.body.email,
      password:req.body.password,
      emailVerified:false,
      disabled:false,
      displayName:req.body.name
      
    })
    await db.collection('user').doc(`/${req.body.email}/`).create({
      id: Date.now(),
        name: req.body.name,
        email: req.body.email
      })
      return res.status(200).send({status:'Success', data:userResponse})
    }catch(err){
      return res.status(500).send({status:'Error', message:err.message})

    }

})

//Update => put()

app.post("/bid", async(req,res) => {
 
        const docRef = db.collection('item').doc(req.body.id)
        
        try{
          docRef.update({
            lastBid:{
                amount:req.body.amount,
                from:req.body.from
            }
          })
            return res.status(200).send({status:'Success', msg: 'Data Saved'})
        }catch(err){
            console.log(err)
        }

})
//Delete => delete()

//Exports the API to firebase cloud functions
exports.app = functions.https.onRequest(app);