"use client";
import ItemPageContainer from "@/containers/itempage-container";
import styles from "./style.module.scss";
import { notFound } from "next/navigation";
import { useContext } from "react";
import { ItemContext } from "@/store/itemContext";
import Spinner from "@/components/Spinner";
import BackIcon from "../../assets/svg/arrow-back-svgrepo-com.svg";
import Link from "next/link";

const Item = ({ params }) => {
  const { items, loading } = useContext(ItemContext);
  const itemData = items?.filter(
    (auctionItem) => auctionItem.id == params.item
  );

  if (loading) {
    return(
      <main className={styles.item}>
        <Spinner />
      </main>
      );
  }

  //If there is no item with given ID, return 404 page.
  if (items && !itemData.length) {
    notFound();
  }
  return (
    <main className={styles.item}>
      <Link href="/" className={styles.item__goBack}>
        <BackIcon />
      </Link>
      <ItemPageContainer item={itemData} />
    </main>
  );
};

export default Item;
