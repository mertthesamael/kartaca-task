import BidForm from "@/components/BidForm";
import styles from "./style.module.scss"
import { success } from "@/style/variables";

const BidInfo = ({isActive,data}) => {
    
  return (
    <div className={styles.bidInfo}>
      {isActive ? (
        <>
          <div
            className={styles.bidInfo__bidStatus}
          >
            <div>
              <h1>Current Bid</h1>
              <br />
              <h2>{data.lastBid.amount} TRY</h2>
            </div>
            <div>
              <h1>From</h1>
              <br />
              <h2>{data.lastBid.from}</h2>
            </div>
          </div>
          <div className={styles.bidInfo__bidForm}>
            <BidForm item={data} id={data.id} />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "white" }}>Auction Winner is</h1>
            <h1
              style={{
                color: success,
                fontSize: "2rem",
                marginTop: "1rem",
              }}
            >
              {data.lastBid.from}
            </h1>
          </div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "white" }}>With the amount of</h1>
            <h1
              style={{
                color: success,
                fontSize: "2rem",
                marginTop: "1rem",
              }}
            >
              {data.lastBid.amount + " TRY"}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default BidInfo;
