import styles from "./style.module.scss";
import Detail from "@/components/Detail";

const ItemPageContainer = ({ item }) => {
  return (
    <div className={styles.itemPageContainer}>
      {item && <Detail data={item[0]} />}
    </div>
  );
};

export default ItemPageContainer;
