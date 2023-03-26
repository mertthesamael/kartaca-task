"use client";
import styles from "./style.module.scss";
import MainButton from "../Buttons/MainButton";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "@/store/userContext";
import { toast } from "react-toastify";
import Auction from "../../assets/svg/auction-svgrepo-com.svg";
import Spinner from "../Spinner";

const BidForm = ({ mock, item }) => {

  //Getting user info from context
  const { currentUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //Bid sequence
  const bidHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    //Checking that if value is valid. It's also done from backend, this one is for the styling.
    if (item.lastBid.amount >= e.target.amount.value) {
      setLoading(false);
      setError(true);
      return toast.error("Bid amount must be greater then recent one.");
    }
    try {
      await axios.post("/api/bid", {
        id: item.id,
        from: currentUser.name,
        amount: e.target.amount.value,
        currentAmount: item.lastBid.amount,
        endpoint: "/bid",
      });
      setLoading(false);
      setError(false);
      toast.success(`Your bid is (${e.target.amount.value} TRY) accepted!`);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <form
      data-testid="bidForm"
      className={styles.bidForm}
      onSubmit={bidHandler}
    >
      <input
        placeholder="Your Bid"
        name="amount"
        type="number"
        style={error ? { border: "1px solid red" } : {}}
      />
      {loading ? (
        <Spinner />
      ) : (
        <MainButton icon={!mock&&<Auction />} content="Bid" type="submit" />
      )}
    </form>
  );
};

export default BidForm;
