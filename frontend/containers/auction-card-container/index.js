import Image from "next/image";
import styles from "./style.module.scss"
const { default: BottomContainer } = require("./BottomContainer");
const { default: UpperContainer } = require("./UpperContainer");

const AuctionCardContainer = ({mock, isActive ,data }) => {

  return (
    <div className={styles.auctionCardContainer}>
      <Image
        src={data.img}
        fill
        style={{ objectFit: "cover" }}
        alt="Auction Item"
        sizes="(max-width: 100%) 100%, (max-height: 100%), 100%"
      />
      <UpperContainer mock={mock} isActive={isActive}  data={data}/>
      <BottomContainer isActive={isActive} data={data}/>
    </div>
  );
};

export default AuctionCardContainer;
