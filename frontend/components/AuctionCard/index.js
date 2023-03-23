import Image from "next/image";
import styles from "./style.module.scss";
import BidForm from "../BidForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const AuctionCard = ({ data }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
      if(Date.now() < data.openTime?.toDate()){
          setIsActive(true)
      }
  },[])
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const date = data.openTime.toDate().toLocaleDateString("en-US", options)
  return (
    <div data-testid="auctionCard" className={styles.auctionCard}>
      <div className={styles.auctionCard__wrapper}>
        <Image
          src={data.img}
          fill
          style={{ objectFit: "cover" }}
          alt="Auction Item"
          sizes="(max-width: 100%) 100%, (max-height: 100%), 100%"
        />
        <div className={styles.auctionCard__wrapper__header} style={!isActive?{height:"100%"}:{}}>
          <div className={styles.auctionCard__wrapper__header__title}>
            <h1 onClick={() => router.push(`/${data.id}`)}>{data.name}</h1>
          </div>
        </div>
        <div className={styles.auctionCard__wrapper__footer}>
          <div className={styles.auctionCard__wrapper__footer__upper}>
            {isActive ? 
            <>
            <div
            className={styles.auctionCard__wrapper__footer__upper__bidStatus}
            >
              <div>
                <h1>Current Bid</h1>
                <br />
                <h2>{data.lastBid.amount}TRY</h2>
              </div>
              <div>
                <h1>From</h1>
                <br />
                <h2>{data.lastBid.from}</h2>
              </div>
            </div>
            <div
            className={styles.auctionCard__wrapper__footer__upper__bidForm}
            >
              <BidForm item={data} id={data.id} />
            </div>
            </>
              :
              <div style={{display:'flex', flexDirection:'column',gap:'3rem',justifyContent:'center', alignItems:'center'}}>
                <div style={{textAlign:'center'}}>
              <h1 style={{color:'white'}}>Auction Winner is</h1>
              <h1 style={{color:'rgb(0, 255, 98)', fontSize:'2rem', marginTop:'1rem'}}>{data.lastBid.from}</h1>
                </div>
                <div style={{textAlign:'center'}}>
                <h1 style={{color:'white'}}>With the amount of</h1>
                <h1 style={{color:'rgb(0, 255, 98)', fontSize:'2rem', marginTop:'1rem'}}>{data.lastBid.amount + 'TRY'}</h1>
                </div>
              </div>
              }
          </div>
          <div className={styles.auctionCard__wrapper__footer__bottom}>
            <div
              className={styles.auctionCard__wrapper__footer__bottom__status}
            >
              <div
                className={
                  isActive?
                  styles.auctionCard__wrapper__footer__bottom__liveButton
                  :
                  styles.auctionCard__wrapper__footer__bottom__closedButton
                }
              />
              <div>{isActive ? <h3>Live</h3> :<h3 style={{color:'rgb(0, 255, 98)',width:'max-content'}}>Auction Closed</h3>}</div>
              {isActive&&<div>{date}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
