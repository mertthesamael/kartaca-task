"use client"
import styles from "./style.module.scss"
import MainButton from "../Buttons/MainButton"
import axios from "axios"
import { useContext } from "react"
import { UserContext } from "@/store/userContext"


const BidForm = ({item}) => {
    const {currentUser} = useContext(UserContext)
    const bidHandler = async(e) => {
        e.preventDefault()
        const data = axios.post("/api/bid",{id:item.id, from:currentUser.name, amount:e.target.amount.value,currentAmount:item.lastBid.amount})
        // {id:id,from:"Merto",amount:e.target.amount.value})
       
    }

    return(
        <form data-testid='bidForm' className={styles.bidForm} onSubmit={bidHandler}>
            <input placeholder="Your Bid" name='amount' type='number'></input>
            <MainButton content='Bid' type='submit'/>
        </form>
    )
}

export default BidForm