import styles from "./style.module.scss";

const Spinner = () => {
  return (
    <div data-testid="spinner" className={styles.spinner}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
