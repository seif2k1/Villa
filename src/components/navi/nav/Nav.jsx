"use client";
import { useState } from "react";
import { list } from "./list";
import { BsFillCalendarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { info, single } from "@/components/prop/info";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Nav = ({ active, setActive }) => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <motion.div className=" h-[100px] w-full flex items-center justify-around shadow-md">
      <h1 className="text-[40px] font-bold">VILLA</h1>
      <ul
        className={`${
          open === false
            ? " hidden "
            : "fixed z-[2] justify-center items-center py-[100px]  bottom-0 top-0 w-screen bg-white flex flex-col"
        } lg:flex  items-center justify-between xl:w-[50%] lg:w-[65%] capitalize text-[14px]`}
      >
        <Link
          onClick={() => {
            setOpen(false);
          }}
          href="/"
          className={`${
            path === "/" ? " text-[#f35525]" : "text-black"
          } cursor-pointer font-[600] tracking-[1px] duration-[500ms] hover:text-[#f35525]`}
        >
          home
        </Link>
        <Link
          onClick={() => {
            setOpen(false);
          }}
          href="/property"
          className={`${
            path === "/property" ? " text-[#f35525]" : "text-black"
          } cursor-pointer font-[600] tracking-[1px] duration-[500ms] hover:text-[#f35525]`}
        >
          properties
        </Link>
        <Link
          href="/propertydetails"
          onClick={() => {
            setOpen(false);
            window !== "undefined" &&
              localStorage.setItem("data", JSON.stringify(single[0]));
          }}
          className={`${
            path === "/propertydetails" ? " text-[#f35525]" : "text-black"
          } cursor-pointer font-[600] tracking-[1px] duration-[500ms] hover:text-[#f35525]`}
        >
          property details
        </Link>
        {/* 
        <button
          onClick={() => {
            console.log(JSON.parse(window.localStorage.getItem("data")));
          }}
        >
          get
        </button> */}
        <Link
          onClick={() => {
            setOpen(false);
          }}
          href="/contact"
          className={`${
            path === "/contact" ? " text-[#f35525]" : "text-black"
          } cursor-pointer font-[600] tracking-[1px] duration-[500ms] hover:text-[#f35525]`}
        >
          contact us
        </Link>
        <li className="lg:flex hidden items-center justify-between rounded-full cursor-pointer capitalize bg-black text-white">
          <span className="p-2 bg-[#f35525] rounded-full">
            <BsFillCalendarFill size={18} fill="white" />
          </span>
          <h6 className="py-2 px-3 duration-[500ms] hover:text-[#f35525]">
            schedule a visit
          </h6>
        </li>
      </ul>
      {open === false ? (
        <GiHamburgerMenu
          className="z-[4] lg:hidden"
          size={35}
          onClick={() => {
            setOpen(true);
          }}
        />
      ) : (
        <MdOutlineClose
          className="z-[4] lg:hidden"
          size={35}
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
    </motion.div>
  );
};

export default Nav;
