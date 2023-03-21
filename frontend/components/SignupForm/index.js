"use client"
import { useState } from "react"
import MainButton from "../Buttons/MainButton"
import styles from "./style.module.scss"
import axios from "axios"
import { toast } from "react-toastify"

const SignupForm = () => {
    const [password, setPassword] = useState("")
    const signupHandler = async(e) => {
        e.preventDefault()
        try{
            let data = await axios.post('api/signup',{email:e.target.email.value,password:password,name:e.target.name.value})
            console.log(data)
            toast.success("Your account has been created!")
        }catch(err){

            toast.error(err.message)
        }
    }

    const passwordCheck = (e) => {
       console.log(password,e.target.value)
    }

    return(
        <form onSubmit={signupHandler} className={styles.signupForm}>
            <input placeholder="Name" name="name"/>
            <input placeholder="E-mail" name="email"/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} name="password"/>
            <input onChange={passwordCheck} placeholder="Confirm Password" name="passwordConfirm"/>
            <MainButton type='submit' content='Create' />
        </form>
    )
}

export default SignupForm