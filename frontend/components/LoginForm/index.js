"use client"
import styles from "./style.module.scss"
import MainButton from "../Buttons/MainButton"
import { login } from "@/config/firebase"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"


const LoginForm = () => {
    const route = useRouter()
    const loginHandler = async(e) => {
        e.preventDefault()
        try{

          await login(e.target.email.value,e.target.password.value)
          route.push('/')
        }catch(err){
            toast.error(err.message)
        }
        
    }

    return(
        <form onSubmit={loginHandler} className={styles.loginForm}>
            <input name='email' placeholder="Email"></input>
            <input name='password' placeholder="password" type="password"></input>
            <MainButton type='submit' content='Login'/>
        </form>
    )
}

export default LoginForm