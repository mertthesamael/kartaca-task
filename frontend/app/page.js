"use client"
import styles from "./style.module.scss"
import { HomePageContainer } from '@/containers/homepage-container'
import axios from "axios"



export default function Home() {
  const fetchData =  async() => {
     
    const data =  axios('api/items')
    return console.log(data)
  }

  return (
    <main className={styles.home}>
    <HomePageContainer/>
    <button onClick={fetchData}>test</button>
    </main>
  )
}
