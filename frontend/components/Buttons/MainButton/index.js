import styles from "./style.module.scss";

const MainButton = ({ content, onClick }) => {
  return (
    <button className={styles.mainButton} onClick={onClick}>
      {content}
    </button>
  );
};

export default MainButton;
