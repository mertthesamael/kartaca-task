import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { success } from "@/style/variables";
import AuctionCardContainer from "@/containers/auction-card-container";

//I used mock prop for non-logged users. If this component has mock enabled, it means that the coming data is static.
export const AuctionCard = ({ data, mock }) => {
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    if (mock) {
      setIsActive(false);
    } else {
      if (Date.now() < data.openTime?.toDate()) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [data]);

  return (
    <div
      data-testid="auctionCard"
      className={styles.auctionCard}
      style={
        isActive ? { color: "red" } : { boxShadow: `0 0 20px 5px ${success}` }
      }
    >
     <AuctionCardContainer isActive={isActive} data={data}/>
    </div>
  );
};
