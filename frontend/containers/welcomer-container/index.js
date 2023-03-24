import MainButton from "@/components/Buttons/MainButton"
import styles from "./style.module.scss"
import Image from "next/image"
import Link from "next/link"


const WelcomerContainer = () => {

    return(
        <div className={styles.welcomerContainer}>
            <div className={styles.welcomerContainer__cta}>
                <div className={styles.welcomerContainer__cta__text}>
                    <div className={styles.welcomerContainer__cta__title}>
                        <h1>Kartaca - Auction Task</h1>
                    </div>
                    <div className={styles.welcomerContainer__cta__description}>
                        <p>Hey there, this is Mert. In this app, you can bid items and track current bid status real-time.</p>
                        <p>In order to access the content, you need to Signup and Login in to your account. So lets do it via clicking the button below.</p>
                    </div>
                </div>
                <div className={styles.welcomerContainer__cta__button}>
                    <Link style={{textDecoration:'none'}} href='/login'>
                        <MainButton content='Login'/>
                    </Link>
                    <Link style={{textDecoration:'none'}} href='/signup'>
                        <MainButton content='Signup'/>
                    </Link>
                </div>
            </div>
            <div className={styles.welcomerContainer__img}>
                <Image draggable='false' src={require("../../assets/png/demo.png")}  style={{ borderRadius:'15px',objectFit:'contain',transform:'scale(0.9)'}} alt="Demo Image"/>
            </div>
        </div>
    )
}

export default WelcomerContainer