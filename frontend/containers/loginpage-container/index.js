import LoginForm from "@/components/LoginForm"
import styles from "./style.module.scss"
import Link from "next/link"




const LoginPageContainer = () => {

    return(
        <div className={styles.loginPageContainer}>
            <LoginForm />
            <Link style={{color:'white', textDecoration:'none'}} href='/signup'>Sign Up!</Link>
        </div>
    )
}

export default LoginPageContainer