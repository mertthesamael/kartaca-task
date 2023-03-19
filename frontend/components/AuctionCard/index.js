import Image from "next/image"
import styles from "./style.module.scss"
import BidForm from "../BidForm"


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
                    <div className={styles.auctionCard__wrapper__footer__upper}>
                        <div className={styles.auctionCard__wrapper__footer__upper__bidStatus}>
                            <div>
                            <h1>Current Bid</h1><br/>
                            <h2>31.00TRY</h2>
                            </div>
                            <div>
                            <h1>From</h1><br/>
                            <h2>Merto</h2>
                            </div>
                        </div>
                        <div className={styles.auctionCard__wrapper__footer__upper__bidForm}>
                        <BidForm />
                        </div>
                    </div>
                    <div className={styles.auctionCard__wrapper__footer__bottom}>
                        <div className={styles.auctionCard__wrapper__footer__bottom__status}>
                            <div className={styles.auctionCard__wrapper__footer__bottom__liveButton}/>
                            <div>
                                <h3>Live</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

