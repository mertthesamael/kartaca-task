"use client"
import styles from "./style.module.scss"
import Detail from "@/components/Detail"
import { useContext } from "react"
import { ItemContext } from "@/store/itemContext"
import Spinner from "@/components/Spinner"


const ItemPageContainer = ({item}) => {


    return(
        <div className={styles.itemPageContainer}>
            {item&&<Detail data={item[0]}/>}
        </div>
    )
}

export default ItemPageContainer