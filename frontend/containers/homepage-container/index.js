"use client"
import { AuctionCard } from "@/components/AuctionCard"
import styles from "./style.module.scss"
import { useContext } from "react"
import ProfileHandler from "@/components/ProfileHandler"
import Spinner from "@/components/Spinner"
import { ItemContext } from "@/store/itemContext";


const HomePageContainer = () => {
    const {items,loading} = useContext(ItemContext)
    console.log(items)
    if(loading){
        return(
            <Spinner/>
        )
    }

    return(
        <div className={styles.homePageContainer}>
            <div className={styles.homePageContainer__profileHandler}>
            <ProfileHandler />
            </div>
           {items?.map(item => <AuctionCard key={item.name} data={item} />)}
        </div>
    )
}

export {HomePageContainer}