"use client"
import { AuctionCard } from "@/components/AuctionCard"
import styles from "./style.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import  { collection, onSnapshot, query, } from "firebase/firestore";
import { db } from "@/config/firebase"


const HomePageContainer = () => {
    const [items, setItems] = useState()
 
    let fetch =  async() => {
        let data = await axios("http://127.0.0.1:5001/kartaca-auction/us-central1/app/items").then(res => res.data)
        setItems(data.data)
    }

    useEffect(()=> {

        const notesCollection = query(collection(db, 'item'));
        onSnapshot(notesCollection, (snapshot) => {
            setItems( snapshot.docs.map(notes => {

                return {
                    id: notes.id,
                    ...notes.data()
                }
  
              }))
           
        })
// fetch()
    },[])
  
    console.log(items)
    return(
        <div className={styles.homePageContainer}>
           {items?.map(item => <AuctionCard id={item.id} image={item.img} status={item.openTime} details={item.lastBid} name={item.name}/>)}
        </div>
    )
}

export {HomePageContainer}