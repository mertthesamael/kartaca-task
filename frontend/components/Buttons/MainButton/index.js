import styles from "./style.module.scss";

const MainButton = ({ icon, content, onClick }) => {
  return (
    <button className={styles.mainButton} onClick={onClick}>
      {icon}
      {content}
    </button>
  );
};

export default MainButton;
