import Link from "next/link"
import styles from "./style.module.scss"
import SignupForm from "@/components/SignupForm"



const SignupPageContainer = () => {

    return(
        <div className={styles.signupPageContainer}>
            <SignupForm />
            <Link style={{color:'white', textDecoration:'none'}} href='/login'>Login!</Link>
        </div>
    )
}

export default SignupPageContainer