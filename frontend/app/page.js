"use client";
import styles from "./style.module.scss";
import { HomePageContainer } from "@/containers/homepage-container";
import { UserContext } from "@/store/userContext";
import { useContext } from "react";
import WelcomerContainer from "@/containers/welcomer-container";
import Spinner from "@/components/Spinner";

export default function Home() {
  //Getting current user from context
  const { currentUser, loading } = useContext(UserContext);

  if (loading) {
    return (
      <main className={styles.home}>
        <Spinner />
      </main>
    );
  }
  return (
    <main className={styles.home}>
      {/* Checking if user is logged. If not, rendering the welcoming container. Non-Logged users are not able to read the data that comes from firebase. Since database rules are done in the firebase, this one is for styling. */}
      {currentUser.name ? <HomePageContainer /> : <WelcomerContainer />}
    </main>
  );
}
