import { AuctionCard } from "@/components/AuctionCard"
import styles from "./style.module.scss"


const HomePageContainer = () => {

    return(
        <div className={styles.homePageContainer}>
            <AuctionCard/>
            <AuctionCard/>
            <AuctionCard/>
        </div>
    )
}

export {HomePageContainer}