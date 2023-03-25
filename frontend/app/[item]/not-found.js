"use client";
import Image from "next/image";
import logo from "../../assets/png/kartaca_logo_white.png";
import MainButton from "@/components/Buttons/MainButton";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "grid",
          position: "relative",
          color: "white",
          textAlign: "center",
          placeItems: "center",
          gap: "2rem",
        }}
      >
        <h2>4 0 4</h2>
        <Image src={logo} style={{ transform: "scale(0.3)" }} />
        <h2>You may want to turn back to the main page, so here is the link</h2>
        <MainButton onClick={() => router.push("/")} content="home" />
      </div>
    </main>
  );
};

export default NotFound;
