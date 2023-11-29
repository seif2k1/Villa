"use client";
import Contact from "@/components/contact/Contact";
import Deal from "@/components/deal/Deal";
import Featured from "@/components/featured/Featured";
import Property from "@/components/property/Property";
import Slider from "@/components/slider/Slider";
import View from "@/components/video/View";
import Image from "next/image";
import { useEffect, useState } from "react";

export default  function Home() {
  const [windowSize, setWindowSize] = useState({
    height: typeof window !== "undefined" && scrollY,
  });

  const handleResize = () => {
    const newWindowSize = {
      height: typeof window !== "undefined" && scrollY,
    };
    setWindowSize(newWindowSize);

    // Send the new size to your Next.js server or perform any other action here
    //console.log("Window size changed:", newWindowSize);
  };

  typeof window !== "undefined" && addEventListener("scroll", handleResize);

  typeof window !== "undefined" && removeEventListener("scroll", handleResize);
  return (
    <main className={`${windowSize.height >= 150 && "mt-[160px]"}`}>
      <div className=" max-w-screen overflow-hidden">
        <Slider />
        <Featured />
        <View />
        <Deal />
        <Property />
        <Contact />
      </div>
    </main>
  );
}
