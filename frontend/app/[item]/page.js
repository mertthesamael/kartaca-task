"use client";
import ItemPageContainer from "@/containers/itempage-container";
import styles from "./style.module.scss";
import { notFound } from "next/navigation";
import { useContext } from "react";
import { ItemContext } from "@/store/itemContext";
import Spinner from "@/components/Spinner";

const Item = ({ params }) => {
  const { items, loading } = useContext(ItemContext);
  const itemData = items?.filter(
    (auctionItem) => auctionItem.id == params.item
  );

  if (loading) {
    return <Spinner></Spinner>;
  }

  //If there is no item with given ID, return 404 page.
  if (items && !itemData.length) {
    notFound();
  }
  return (
    <main className={styles.item}>
      <ItemPageContainer item={itemData} />
    </main>
  );
};

export default Item;
