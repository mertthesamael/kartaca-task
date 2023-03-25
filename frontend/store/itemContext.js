import { createContext, useContext, useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/config/firebase";
import { UserContext } from "./userContext";

const ItemContext = createContext();

export const ItemContextWrapper = ({ children }) => {
  //Getting current user from UserContext, so whenever it updates, i can fetch Real-Time data.
  const { currentUser } = useContext(UserContext);
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);

  //Realtime Data Fetching Sequence
  useEffect(() => {
    setLoading(true);
    const notesCollection = query(collection(db, "item"));
    onSnapshot(notesCollection, (snapshot) => {
      setItems(
        snapshot.docs.map((items) => {
          return {
            id: items.id,
            ...items.data(),
          };
        })
      );
    });
    setLoading(false);
  }, [currentUser]);

  const data = {
    items: items,
    loading: loading,
  };
  return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

export { ItemContext };
