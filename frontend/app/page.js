"use client"
import styles from "./style.module.scss"
import { HomePageContainer } from '@/containers/homepage-container'
import { UserContext } from "@/store/userContext"
import { useContext, useEffect } from "react"
import { useGetData } from "@/hooks/useGetData"



export default function Home() {

  const data = useContext(UserContext)
  const {data:item} = useGetData('item','VkpV2N69P3MXVaJnKAiw')


  return (
    <main className={styles.home}>
    <HomePageContainer/>
    </main>
  )
}
