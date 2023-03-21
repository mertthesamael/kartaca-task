import Image from "next/image"
import styles from "./style.module.scss"
import BidForm from "../BidForm"
import { useEffect, useState } from "react"


export const AuctionCard = ({name,details,status,image, id}) => {

    const [isActive, setIsActive] = useState(false)

// useEffect(() => {
//     if(Date.now() < status?.toDate()){
//         setIsActive(true)
//     }
// },[])

    return(
        <div className={styles.auctionCard}>
            <div className={styles.auctionCard__wrapper}>
                <Image src={image} fill style={{objectFit:'cover'}}/>
                <div className={styles.auctionCard__wrapper__header}>
                    <div className={styles.auctionCard__wrapper__header__title}>
                    <h1>{name}</h1>
                    </div>
                </div>
                <div className={styles.auctionCard__wrapper__footer}>
                    <div className={styles.auctionCard__wrapper__footer__upper}>
                        <div className={styles.auctionCard__wrapper__footer__upper__bidStatus}>
                            <div>
                            <h1>Current Bid</h1><br/>
                            <h2>{details.amount}TRY</h2>
                            </div>
                            <div>
                            <h1>From</h1><br/>
                            <h2>{details.from}</h2>
                            </div>
                        </div>
                        <div className={styles.auctionCard__wrapper__footer__upper__bidForm}>
                        <BidForm id={id} />
                        </div>
                    </div>
                    <div className={styles.auctionCard__wrapper__footer__bottom}>
                        <div className={styles.auctionCard__wrapper__footer__bottom__status}>
                            <div className={styles.auctionCard__wrapper__footer__bottom__liveButton}/>
                            <div>
                                {isActive&&<h3>Live</h3>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

