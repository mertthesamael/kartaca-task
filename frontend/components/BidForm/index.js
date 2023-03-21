"use client"
import styles from "./style.module.scss"
import MainButton from "../Buttons/MainButton"
import axios from "axios"


const BidForm = ({id}) => {

    const bidHandler = async(e) => {
        e.preventDefault()
        //id
        //from
        //amounda
        const data = axios.post("http://127.0.0.1:5001/kartaca-auction/us-central1/app/bid",{id:id,from:"Merto",amount:e.target.amount.value})
        console.log(data)
    }
    console.log(id)

    return(
        <form className={styles.bidForm} onSubmit={bidHandler}>
            <input name='amount' type='number'></input>
            <MainButton content='Bid' type='submit'/>
        </form>
    )
}

export default BidForm