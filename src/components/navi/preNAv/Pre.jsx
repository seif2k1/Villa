import Image from "next/image";
import React from "react";
import { info, social } from "./info";

const Pre = () => {
  return (
    <div className=" w-full h-[50px] flex  items-center justify-around border-b border-[#9c9fad]">
      <div className=" h-full md:w-[40%] text-[12px] flex flex-col md:flex-row items-center justify-between">
        {info.map((data, i) => {
          return (
            <div key={i} className="flex items-center w-full ">
              {data.img}
              <h1>{data.text}</h1>
            </div>
          );
        })}
      </div>
      <div className=" h-full md:w-[30%] flex items-center justify-end gap-x-3">
        {social.map((icon, i) => {
          return (
            <div
              className="border-2 border-[#9c9fad] hover:bg-[#f35525] hover:border-[#f35525] cursor-pointer duration-[500ms] bg-[#9c9fad] rounded-full p-[6px] flex- items-center justify-center"
              key={i}
            >
              {icon.logo}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pre;
