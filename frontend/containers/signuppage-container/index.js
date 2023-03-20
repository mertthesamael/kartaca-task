import styles from "./style.module.scss"
import SignupForm from "@/components/SignupForm"



const SignupPageContainer = () => {

    return(
        <div className={styles.signupPageContainer}>
            <SignupForm />
        </div>
    )
}

export default SignupPageContainer