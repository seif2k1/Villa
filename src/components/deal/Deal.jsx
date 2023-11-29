"use client";
import { useState } from "react";
import { info } from "./info";
import Image from "next/image";
import { BsFillCalendarFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
const Deal = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className=" lg:h-[130vh] xl:h-screen w-full bg-[#fafafa]">
      <div className="w-full h-[30%] flex flex-col lg:flex-row items-center justify-between lg:px-10 py-14">
        <div className="flex flex-col w-full lg:items-start items-center justify-between lg:px-16 px-10">
          <h6 className="text-[#ee626b] font-bold text-left">| BEST DEAL</h6>
          <h1 className="text-[40px] mt-5 lg:w-[80%] w-full text-center lg:text-left  font-[900]">
            Find Your Best Deal Right Now!
          </h1>
        </div>
        <div className=" xl:w-[70%] lg:w-[127%] h-full flex w-[80%] items-end">
          <ul className="flex flex-col lg:flex-row gap-y-[15px] lg:gap-0 mt-[25px] lg:mt-0 items-center  justify-evenly w-full ">
            {info.map((data, i) => {
              return (
                <li
                  onClick={() => setSelected(i)}
                  key={i}
                  className={`${
                    selected === i ? " bg-[rgb(243,85,37)] " : " bg-black "
                  }  text-white w-[90%] lg:w-auto text-center lg:text-left px-5 py-3 rounded-[8px] duration-[1s] cursor-pointer`}
                >
                  {data.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className=" w-full h-[70%] flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[28%] w-full h-full flex items-center justify-center">
          {info.map((data, i) => {
            return (
              i === selected && (
                <motion.ul
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", duration: 3 }}
                  key={i}
                  className=" h-[80%] lg:w-[80%] w-[90%]  rounded-[17px] bg-[#fafafa] lg:p-10 p-5 shadow-3xl flex flex-col items-center justify-between"
                >
                  <li className="w-full flex items-center justify-between text-gray-500 font-[400] p-3 border-b-[1px] border-[#eeeeee]">
                    Total Flat Space{" "}
                    <span className="text-black font-[800] text-[19px]">
                      {" "}
                      {data.area}
                      <sup>2</sup>
                    </span>
                  </li>
                  <li className="w-full flex items-center justify-between text-gray-500 font-[400] p-3 border-b-[2px] border-[#eeeeee]">
                    Floor number{" "}
                    <span className="text-black font-[800] text-[19px]">
                      {" "}
                      {data.floor}{" "}
                    </span>
                  </li>
                  <li className="w-full flex items-center justify-between text-gray-500 font-[400] p-3 border-b-[2px] border-[#eeeeee]">
                    Number of rooms{" "}
                    <span className="text-black font-[800] text-[19px]">
                      {" "}
                      {data.rooms}{" "}
                    </span>
                  </li>
                  <li className="w-full flex items-center justify-between text-gray-500 font-[400] p-3 border-b-[2px] border-[#eeeeee]">
                    Parking Available{" "}
                    <span className="text-black font-[800] text-[19px]">
                      {" "}
                      {data.parking}{" "}
                    </span>
                  </li>
                  <li className="w-full flex items-center justify-between text-gray-500 font-[400] p-3 border-b-[2px] border-[#eeeeee]">
                    Payment Process{" "}
                    <span className="text-black font-[800] text-[19px]">
                      {" "}
                      {data.payment}{" "}
                    </span>
                  </li>
                </motion.ul>
              )
            );
          })}
        </div>
        <div className="lg:w-[37%] w-[90%] my-[15px] lg:my-0 h-full flex items-center justify-center">
          {info.map((data, i) => {
            return (
              i === selected && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", duration: 3 }}
                  key={i}
                  className=" h-[80%] w-full"
                >
                  <Image
                    src={data.logo}
                    alt="video_image"
                    priority
                    layout="response"
                    className="rounded-[17px] h-full w-full "
                  />
                </motion.div>
              )
            );
          })}
        </div>
        <div className="lg:w-[33%] w-[90%] my-[15px] lg:my-0 h-full flex flex-col lg:items-center items-start justify-center">
          {info.map((data, i) => {
            return (
              i === selected && (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", duration: 3 }}
                  key={i}
                  className="h-[80%] lg:w-[80%] w-full gap-y-[15px] lg:gap-y-0 flex flex-col items-start justify-between  "
                >
                  <h1 className="text-[20px] font-[700]">{data.about_Name}</h1>

                  <h4 className="w-full flex flex-col text-[#5b5b5b] items-center justify-between flex-wrap">
                    {data.about1}
                    <br />
                    <span className="my-4">{data.about2}</span>
                  </h4>
                  <div className="w-full ">
                    <div className="flex lg:w-[71%] xl:w-[55%] w-[85%] sm:w-[35%] h-[50px] items-center justify-between rounded-full cursor-pointer capitalize bg-black text-white">
                      <span className="p-[13px] bg-[#f35525] rounded-full">
                        <BsFillCalendarFill size={22} fill="white" />
                      </span>
                      <h6 className="py-2 px-3 duration-[500ms] hover:text-[#f35525]">
                        schedule a visit
                      </h6>
                    </div>
                  </div>
                </motion.div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Deal;
