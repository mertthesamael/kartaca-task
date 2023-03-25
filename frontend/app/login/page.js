"use client";
import LoginPageContainer from "@/containers/loginpage-container";
import styles from "./style.module.scss";
import { useContext, useEffect } from "react";
import { UserContext } from "@/store/userContext";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";

const Login = () => {

  //Getting the logged user data from context
  const { currentUser, loading } = useContext(UserContext);
  
  const router = useRouter();

  //Checking if user already logged in
  useEffect(() => {
    if (currentUser.name) {
      router.push("/");
    }
  }, [currentUser]);

  return (
    <main className={styles.login}>
      {loading ? <Spinner /> : <LoginPageContainer />}
    </main>
  );
};

export default Login;
