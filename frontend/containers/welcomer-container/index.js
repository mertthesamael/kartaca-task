import MainButton from "@/components/Buttons/MainButton";
import styles from "./style.module.scss";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { useGetData } from "@/hooks/useGetData";
import { AuctionCard } from "@/components/AuctionCard";
import { useState } from "react";
import Spinner from "@/components/Spinner";

const WelcomerContainer = () => {
  //Dynamic shadow states  
  const [shadowY, setShadowY] = useState("");
  const [shadowX, setShadowX] = useState("");

  //Fetching Mock data for non-logged users
  const { data: mockData, isLoading } = useGetData(
    "item",
    "uo1kizpSdi4jpYuKp4oj"
  );

  //Function for tracking mouse position
  const offsetHandler = (e) => {
    setShadowY(
      e.tiltAngleYPercentage < 0
        ? Math.abs(e.tiltAngleYPercentage) * 0.2
        : -Math.abs(e.tiltAngleYPercentage) * 0.2
    );

    setShadowX(
      e.tiltAngleXPercentage < 0
        ? -Math.abs(e.tiltAngleXPercentage) * 0.2
        : Math.abs(e.tiltAngleXPercentage) * 0.2
    );
  };
  return (
    <div className={styles.welcomerContainer}>
      <div className={styles.welcomerContainer__cta}>
        <div className={styles.welcomerContainer__cta__text}>
          <div className={styles.welcomerContainer__cta__title}>
            <h1>Kartaca - Auction Task</h1>
          </div>
          <div className={styles.welcomerContainer__cta__description}>
            <p>
              Hey there, this is Mert. In this app, you can bid items and track
              current bid status real-time.
            </p>
            <p>
              In order to access the content, you need to Signup and Login in to
              your account. So lets do it via clicking the button below.
            </p>
          </div>
        </div>
        <div className={styles.welcomerContainer__cta__button}>
          <Link style={{ textDecoration: "none" }} href="/login">
            <MainButton content="Login" />
          </Link>
          <Link style={{ textDecoration: "none" }} href="/signup">
            <MainButton content="Signup" />
          </Link>
        </div>
      </div>
      <div className={styles.welcomerContainer__demo}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Tilt glareEnable={false} onMove={offsetHandler} scale={1.1}>
            <div
              style={{
                boxShadow: `${shadowY}px ${shadowX}px 20px 15px rgb(0, 255, 98)`,
              }}
              className={styles.welcomerContainer__demo__shadow}
            />
            <AuctionCard mock data={mockData}></AuctionCard>
          </Tilt>
        )}
      </div>
    </div>
  );
};

export default WelcomerContainer;
