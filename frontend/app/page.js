"use client";
import styles from "./style.module.scss";
import { HomePageContainer } from "@/containers/homepage-container";
import { UserContext } from "@/store/userContext";
import { useContext } from "react";
import WelcomerContainer from "@/containers/welcomer-container";
import Spinner from "@/components/Spinner";

export default function Home() {
  const {currentUser,loading} = useContext(UserContext)

  if(loading){
    return(
      <main className={styles.home}> 
       <Spinner />
      </main>
       )
  }
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
