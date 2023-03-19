"use client"
import styles from "./style.module.scss"
import MainButton from "../Buttons/MainButton"


const BidForm = () => {

    const bidHandler = (e) => {
        e.preventDefault()
    }

    return(
        <form className={styles.bidForm} onSubmit={bidHandler}>
            <input type='number'></input>
            <MainButton content='Bid' type='submit'/>
        </form>
    )
}

export default BidForm