import styles from "./style.module.scss"
import BidInfo from "./BidInfo";
import Status from "./Status";

const BottomContainer = ({isActive,data}) => {

    
  return (
    <div className={styles.bottomContainer}>
      <BidInfo isActive={isActive} data={data}/>
      <Status data={data} isActive={isActive}/>
    </div>
  );
};

export default BottomContainer;
