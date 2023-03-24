import Link from "next/link"
import styles from "./style.module.scss"
import SignupForm from "@/components/SignupForm"



const SignupPageContainer = () => {

    return(
        <div className={styles.signupPageContainer}>
            <SignupForm />
            <div style={{textAlign:'center'}}>
            <p style={{color:'grey', marginBottom:'1rem'}}>Already have an account?</p>
            <Link style={{color:'white', textDecoration:'none'}} href='/login'>Login</Link>
            </div>
        </div>
    )
}

export default SignupPageContainer