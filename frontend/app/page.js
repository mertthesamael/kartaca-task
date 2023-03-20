"use client"
import styles from "./style.module.scss"
import { Inter } from 'next/font/google'
import { HomePageContainer } from '@/containers/homepage-container'
import axios from "axios"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const fetchData =  async() => {
     
    const data =  axios.post('api/hello',{email:"sssssssssss@gmail.com",password:"4185177em"})
    return console.log(data)
  }

  return (
    <main className={styles.home}>
    <HomePageContainer/>
    <button onClick={fetchData}>test</button>
    </main>
  )
}
