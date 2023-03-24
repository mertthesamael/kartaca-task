import Image from "next/image";
import styles from "./style.module.scss";
import BidForm from "../BidForm";
import { useEffect, useState } from "react";

const Detail = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
      if(Date.now() < data.openTime?.toDate()){
          setIsActive(true)
      }
  },[])
  return (
    <div data-testid="detail" className={styles.detail}>
      <div className={styles.detail__header}>
        <Image
          src={data?.img}
          fill
          style={{ objectFit: "cover" }}
          alt="Item Image"
          />
      </div>
      <div className={styles.detail__footer}>
        <div className={styles.detail__footer__info}>
          <h1>{data?.name}</h1>
          <p>{data?.description}</p>
        </div>
        <div className={styles.detail__footer__bid}>
          <div className={styles.detail__footer__bid__status}>
          <h1>Bid Status - <span style={isActive?{}:{color:'rgb(0, 255, 98)'}}>{isActive?'Active':'Completed'}</span></h1>
          <div className={styles.detail__footer__bid__status__button} style={isActive?{backgroundColor:'red'}:{backgroundColor:'rgb(0, 255, 98)'}}/>
          </div>
          {isActive?

            <div className={styles.detail__footer__bid__bidform}>
            <div>
              <p style={{fontWeight:'bolder', fontSize:'1.3rem'}}>Last Bid: <span style={{fontWeight:'lighter'}}>{data?.lastBid.amount} TRY</span></p>
              <p style={{fontWeight:'bolder', fontSize:'1.3rem'}}>From: <span style={{fontWeight:'lighter'}}>{data?.lastBid.from}</span></p>
            </div>
            <div style={{width:'50%'}}>
              <BidForm item={data} id={data?.id} />
            </div>
          </div>
          :
          <div style={{display:'flex', flexDirection:'column',gap:'2rem'}}>
            <h1 style={{fontWeight:'bolder', fontSize:'1.3rem'}}>Winner: <span style={{color:'rgb(0, 255, 98)', fontWeight:'lighter'}}>{data.lastBid.from}</span></h1>
            <h1 style={{fontWeight:'bolder', fontSize:'1.3rem'}}>With the amount of: <span style={{color:'rgb(0, 255, 98)', fontWeight:'lighter'}}>{data.lastBid.amount}TRY</span></h1>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Detail;
