"use client";
import styles from "./style.module.scss";
import MainButton from "../Buttons/MainButton";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "@/store/userContext";
import { toast } from "react-toastify";
import Auction from "../../assets/svg/auction-svgrepo-com.svg"

const BidForm = ({ item }) => {
  const { currentUser } = useContext(UserContext);
  const bidHandler = async (e) => {
    e.preventDefault();
    if(item.lastBid.amount>e.target.amount.value){
      return toast.error("Bid amount must be greater then recent one.")
    }
    try{
      await axios.post("/api/bid", {
        id: item.id,
        from: currentUser.name,
        amount: e.target.amount.value,
        currentAmount: item.lastBid.amount,
        endpoint:'/bid'
      });
      toast.success(`Your bid is (${e.target.amount.value} TRY) accepted!`)
    }catch(err){
      toast.error(err.message)
    }
  };

  return (
    <form
      data-testid="bidForm"
      className={styles.bidForm}
      onSubmit={bidHandler}
    >
      <input placeholder="Your Bid" name="amount" type="number"></input>
      <MainButton icon={<Auction />} content="Bid" type="submit" />
    </form>
  );
};

export default BidForm;
