"use client";
import React from "react";
import { info } from "./info";
import Image from "next/image";

const Property = () => {
  return (
    <div className=" h-auto w-full my-[35px] lg:my-0">
      <div className="w-full bg-white flex items-center justify-center">
        <div className="h-[62%] lg:w-[40%] w-full flex flex-col items-center justify-between p-6">
          <h6 className="text-[#ee626b] font-bold ">| PROPERTIES</h6>
          <h1 className="text-[40px] w-full font-[600] text-center">
            We Provide The Best Property You Like
          </h1>
        </div>
      </div>
      <div className="gap-y-11 w-full flex flex-wrap items-center justify-between">
        {info.map((data, i) => {
          return (
            <div
              className=" lg:w-[30%] w-full mx-4 shadow-3xl rounded-[15px] py-8 flex items-center justify-center "
              key={i}
            >
              <div className="w-full  flex flex-col items-center justify-between">
                <div className="w-[75%]">
                  <Image
                    src={data.logo}
                    alt="image"
                    className="w-full h-auto rounded-[12px]"
                  />
                </div>
                <div className=" py-8 w-[75%] flex items-center justify-between">
                  <h5 className="px-4 py-2 rounded-[7px] bg-[#fbd9cf]">
                    {data.villa}
                  </h5>
                  <h5 className="text-[#f35525]">Dz {data.price}</h5>
                </div>
                <h5 className="text-[25px] italic uppercase">
                  {data.position}
                </h5>
                <div className="w-[75%] flex items-center border-b-[2px] border-[#eaeaea] flex-wrap p-3">
                  <h2 className="text-[13.5px] capitalize p-2  text-[#4a4a4a]">
                    badrooms :{" "}
                    <span className="text-black font-[500]">
                      {data.badrooms}
                    </span>
                  </h2>
                  <h2 className="text-[13.5px] capitalize p-2  text-[#4a4a4a]">
                    bathrooms :{" "}
                    <span className="text-black font-[500]">
                      {data.bathrooms}
                    </span>
                  </h2>
                  <h2 className="text-[13.5px] capitalize p-2  text-[#4a4a4a]">
                    arias :{" "}
                    <span className="text-black font-[500] lowercase">
                      {data.aria} m<sup>2</sup>
                    </span>
                  </h2>
                  <h2 className="text-[13.5px] capitalize p-2  text-[#4a4a4a]">
                    floors :{" "}
                    <span className="text-black font-[500]">{data.floor}</span>
                  </h2>
                  <h2 className="text-[13.5px] capitalize p-2  text-[#4a4a4a]">
                    parkings :{" "}
                    <span className="text-black font-[500]">
                      {data.parking}
                    </span>
                  </h2>
                </div>

                <h3 className="my-8 px-4 py-2 lg:w-[35%] w-[85%] rounded-[8px] cursor-pointer hover:bg-[#f35525] hover:text-white bg-black text-white text-center">
                  Schedule Visit
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Property;
