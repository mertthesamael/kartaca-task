import LoginPageContainer from "@/containers/loginpage-container";
import styles from "./style.module.scss";

const Login = () => {
  return (
    <main className={styles.login}>
      <LoginPageContainer />
    </main>
  );
};

export default Login;
