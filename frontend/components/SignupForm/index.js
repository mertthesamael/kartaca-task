"use client"
import { useState } from "react"
import MainButton from "../Buttons/MainButton"
import styles from "./style.module.scss"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

const SignupForm = () => {
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const route = useRouter()
    const signupHandler = async(e) => {
        e.preventDefault()
       try{

           let data = await axios.post('/api/signup',{email:e.target.email.value,password:password,name:e.target.name.value})
           toast.success("Your account has been created!")
           route.push('/login')
        }catch(err){
            toast.error(err.message)
        }
            
        
    }

    const passwordCheck = (e) => {
       if(password!==e.target.value){
        return setError(true)
       }
       return setError(false)
       
    }

    return(
        <form onSubmit={signupHandler} className={styles.signupForm}>
            <input placeholder="Name" name="name" />
            <input placeholder="E-mail" name="email" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} name="password"/>
            <input inval onChange={passwordCheck} placeholder="Confirm Password" name="passwordConfirm"/>
            <MainButton type='submit' content='Create' />
        </form>
    )
}

export default SignupForm