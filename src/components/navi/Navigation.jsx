"use client";
import Pre from "./preNAv/Pre";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./nav/Nav";
import { useEffect, useState } from "react";
const Navigation = () => {
  const [windowSize, setWindowSize] = useState({
    height: typeof window !== "undefined" && scrollY,
  });
  const [active, setActive] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newWindowSize = {
        height: typeof window !== "undefined" && scrollY,
      };
      setWindowSize(newWindowSize);

      // Send the new size to your Next.js server or perform any other action here
      //console.log("Window size changed:", newWindowSize);
    };

    typeof window !== "undefined" && addEventListener("scroll", handleResize);

    return () => {
      typeof window !== "undefined" &&
        removeEventListener("scroll", handleResize);
    };
  }, []);
  return (
    <motion.div
      className={` ${
        windowSize.height >= 150 && " fixed top-0 left-0 right-0 z-[2] "
      } `}
    >
      {windowSize.height <= 150 && <Pre />}
      {windowSize.height >= 150 ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          className="bg-white"
        >
          <Nav active={active} setActive={setActive} />
        </motion.div>
      ) : (
        <Nav active={active} setActive={setActive} />
      )}
    </motion.div>
  );
};
//fixed top-0 left-0 right-0 z-[2]
export default Navigation;
