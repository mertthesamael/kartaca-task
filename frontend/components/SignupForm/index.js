"use client";
import { useState } from "react";
import MainButton from "../Buttons/MainButton";
import styles from "./style.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";

const SignupForm = () => {
  const route = useRouter();

  //Password checker states
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //Main signup function
  const signupHandler = async (e) => {
    e.preventDefault();
    if (error) {
      return toast.error("Password does not match.");
    }
    setLoading(true);
    try {
      await axios.post("/api/signup", {
        email: e.target.email.value,
        password: password,
        name: e.target.name.value,
        endpoint: "/signup",
      });
      setLoading(false);
      toast.success("Your account has been created!");
      route.push("/login");
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  //Checking if password inputs are equal
  const passwordCheck = (e) => {
    if (password !== e.target.value) {
      return setError(true);
    }
    return setError(false);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <form
      data-testid="signupForm"
      onSubmit={signupHandler}
      className={styles.signupForm}
    >
      <input placeholder="Name" required name="name" />
      <input placeholder="E-mail" required name="email" />
      <input
        type="password"
        required
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        minLength={6}
      />
      <input
        style={error ? { border: "1px solid red", outline: "none" } : {}}
        onChange={passwordCheck}
        placeholder="Confirm Password"
        name="passwordConfirm"
        type="password"
        required
      />
      <MainButton type="submit" content="Create" />
    </form>
  );
};

export default SignupForm;
