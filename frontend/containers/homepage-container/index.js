"use client"
import { AuctionCard } from "@/components/AuctionCard"
import styles from "./style.module.scss"
import { Suspense, useEffect, useState } from "react"
import axios from "axios"
import  { collection, onSnapshot, query, } from "firebase/firestore";
import { db } from "@/config/firebase"
import ProfileHandler from "@/components/ProfileHandler"
import Spinner from "@/components/Spinner"


const HomePageContainer = () => {
    const [items, setItems] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)
        const notesCollection = query(collection(db, 'item'));
        onSnapshot(notesCollection, (snapshot) => {
            setItems( snapshot.docs.map(notes => {

                return {
                    id: notes.id,
                    ...notes.data()
                }
                
            }))
            
        })
        setLoading(false)
// fetch()
},[])

if(loading){
    return(
        <Spinner/>
    )
}
    console.log(items)
    return(
        <div className={styles.homePageContainer}>
            <div className={styles.homePageContainer__profileHandler}>
            <ProfileHandler />
            </div>
           {items?.map(item => <AuctionCard id={item.id} image={item.img} status={item.openTime} details={item.lastBid} name={item.name}/>)}
        </div>
    )
}

export {HomePageContainer}