"use client"
import { AuctionCard } from "@/components/AuctionCard"
import styles from "./style.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import  { collection, onSnapshot, query, } from "firebase/firestore";
import { db } from "@/config/firebase"


const HomePageContainer = () => {
    const [items, setItems] = useState()
    // let fetch =  async() => {
    //     let data = await axios("/api/items").then(res => res.data)
    //     setItems(data)
    // }

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

    },[])
  
    console.log(items)
    return(
        <div className={styles.homePageContainer}>
           {items?.map(item => <AuctionCard name={item.name}/>)}
        </div>
    )
}

export {HomePageContainer}