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
          <h1>Bid Status - {isActive?'Active':'Closed'}</h1>
          {isActive?

            <div className={styles.detail__footer__bid__bidform}>
            <div>
              <p>Last Bid: {data?.lastBid.amount}</p>
              <p>From: {data?.lastBid.from}</p>
            </div>
            <div>
              <BidForm item={data} id={data?.id} />
            </div>
          </div>
          :
          <div style={{display:'flex', flexDirection:'column',gap:'2rem'}}>
            <h1>Winner: <span style={{color:'rgb(0, 255, 98)'}}>{data.lastBid.from}</span></h1>
            <h1>With the amount of: <span style={{color:'rgb(0, 255, 98)'}}>{data.lastBid.amount}TRY</span></h1>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Detail;
