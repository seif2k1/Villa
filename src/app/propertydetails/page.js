"use client";
import Deal from "@/components/deal/Deal";
import Prop from "@/components/prop/Prop";
import Propdetails from "@/components/prop/Propdetails";
import Props from "@/components/prop/Props";
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
  const [data, setData] = useState(
    JSON.parse(typeof window !== "undefined" && localStorage.getItem("data"))
  );
  return (
    <main className={`${windowSize.height >= 150 && "mt-[160px]"}`}>
      <div className=" max-w-screen overflow-hidden">
        <Propdetails data={data} />
        <Deal />
      </div>
    </main>
  );
}
