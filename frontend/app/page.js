"use client";
import styles from "./style.module.scss";
import { HomePageContainer } from "@/containers/homepage-container";
import { UserContext } from "@/store/userContext";
import { useContext } from "react";
import { useGetData } from "@/hooks/useGetData";
import WelcomerContainer from "@/containers/welcomer-container";

export default function Home() {
  const { data: item } = useGetData("item", "VkpV2N69P3MXVaJnKAiw");
  const {currentUser} = useContext(UserContext)
  return (
    <main className={styles.home}>
      {currentUser.name? 
      <HomePageContainer />
      :
      <WelcomerContainer />
      }
    </main>
  );
}
