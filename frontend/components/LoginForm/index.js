"use client"
import styles from "./style.module.scss"
import MainButton from "../Buttons/MainButton"
import { login } from "@/config/firebase"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Spinner from "../Spinner"


const LoginForm = () => {
    const route = useRouter()
    const [loading, setLoading] = useState(false)
    
    const loginHandler = async(e) => {
        e.preventDefault()
        setLoading(true)
        try{
            await login(e.target.email.value,e.target.password.value)
            route.push('/')
            setLoading(false)
        }catch(err){
            setLoading(false)
            toast.error(err.message)
        }
        
    }
    if(loading){
        return(
            <Spinner/>
        )
    }
    return(
        <form data-testid='loginForm' onSubmit={loginHandler} className={styles.loginForm}>
            <input name='email' placeholder="Email"></input>
            <input name='password' placeholder="password" type="password"></input>
            <MainButton type='submit' content='Login'/>
        </form>
    )
}

export default LoginForm