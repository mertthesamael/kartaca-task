import LoginForm from "@/components/LoginForm";
import styles from "./style.module.scss";
import Link from "next/link";

const LoginPageContainer = () => {
  return (
    <div className={styles.loginPageContainer}>
      <LoginForm />
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "grey", marginBottom: "1rem" }}>
          Don't have an account?
        </p>
        <Link style={{ color: "white", textDecoration: "none" }} href="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginPageContainer;
