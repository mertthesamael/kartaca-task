"use client"
import { login } from "@/config/firebase"
import styles from "./style.module.scss"
import { HomePageContainer } from '@/containers/homepage-container'
import { UserContext } from "@/store/userContext"
import { useContext, useEffect } from "react"



export default function Home() {
useEffect(() => {
  login('mertenercan@gmail.com',"4185177em")
},[])
  const data = useContext(UserContext)
  console.log(data)
  return (
    <main className={styles.home}>
    <HomePageContainer/>
    </main>
  )
}
