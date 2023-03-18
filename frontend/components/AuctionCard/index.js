import Image from "next/image"
import styles from "./style.module.scss"


export const AuctionCard = () => {

    return(
        <div className={styles.auctionCard}>
            <div className={styles.auctionCard__wrapper}>
                <Image src='https://doublethedonation.com/wp-content/uploads/2022/06/signed-football-1604021_1280-2.jpg' fill style={{objectFit:'cover'}}/>
                <div className={styles.auctionCard__wrapper__header}>
                    <div className={styles.auctionCard__wrapper__header__title}>
                    <h1>Mertcan Ener Imzalı Top</h1>
                    </div>
                </div>
                <div className={styles.auctionCard__wrapper__footer}>

                </div>
            </div>
        </div>
    )
}

