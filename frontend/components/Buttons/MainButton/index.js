import styles from "./style.module.scss";
import Icon from "../../../assets/svg/auction-svgrepo-com.svg"
const MainButton = ({ icon, content, onClick }) => {
  return (
    <button className={styles.mainButton} onClick={onClick}>
      {icon}
      {content}
    </button>
  );
};

export default MainButton;
