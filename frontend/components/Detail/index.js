import Image from "next/image";
import styles from "./style.module.scss";
import BidForm from "../BidForm";

const Detail = ({ data }) => {
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
          <h1>Bid Status</h1>
          <div className={styles.detail__footer__bid__bidform}>
            <div>
              <p>Last Bid: {data?.lastBid.amount}</p>
              <p>From: {data?.lastBid.from}</p>
            </div>
            <div>
              <BidForm item={data} id={data?.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
