"use client";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { logout } from "@/config/firebase";
import { UserContext } from "@/store/userContext";

const ProfileHandler = ({}) => {
  const [menuState, setMenuState] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(UserContext);

  const signOut = async () => {
    setLoading(true);
    try {
      await logout();
      setMenuState(false);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div data-testid="profileHandler" className={styles.profileHandler}>
      <div
        onClick={() => setMenuState(!menuState)}
        className={styles.profileHandler__display}
      >
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className={styles.profileHandler__display__status} />
            <h3>{currentUser.name}</h3>
          </>
        )}
      </div>
      <div className={styles.profileHandler__hidden}>
        <ol
          style={menuState ? { top: 0 } : { top: "-7rem" }}
          className={styles.profileHandler__hidden__menu}
        >
          <li onClick={signOut}>Sign Out</li>
        </ol>
      </div>
    </div>
  );
};

export default ProfileHandler;
