import Image from "next/image"
import styles from "./style.module.scss"
import BidForm from "../BidForm"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


export const AuctionCard = ({data}) => {
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

// useEffect(() => {
//     if(Date.now() < status?.toDate()){
//         setIsActive(true)
//     }
// },[])

    return(
        <div data-testid='auctionCard' className={styles.auctionCard}>
            <div className={styles.auctionCard__wrapper}>
                <Image src={data.img} fill style={{objectFit:'cover'}} alt="Auction Item" sizes="(max-width: 100%) 100%, (max-height: 100%), 100%"/>
                <div className={styles.auctionCard__wrapper__header}>
                    <div className={styles.auctionCard__wrapper__header__title}>
                        <h1 onClick={() => router.push(`/${data.id}`)}>{data.name}</h1>
                    </div>
                </div>
                <div className={styles.auctionCard__wrapper__footer}>
                    <div className={styles.auctionCard__wrapper__footer__upper}>
                        <div className={styles.auctionCard__wrapper__footer__upper__bidStatus}>
                            <div>
                            <h1>Current Bid</h1><br/>
                            <h2>{data.lastBid.amount}TRY</h2>
                            </div>
                            <div>
                            <h1>From</h1><br/>
                            <h2>{data.lastBid.from}</h2>
                            </div>
                        </div>
                        <div className={styles.auctionCard__wrapper__footer__upper__bidForm}>
                        <BidForm item={data} id={data.id} />
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
