"use client";
import { useState } from "react";
import { infoType, info } from "./info";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Nav from "../navi/nav/Nav";

const Props = () => {
  const [selected, setSelected] = useState(0);
  const [villas, setVillas] = useState(info);

  const filter = (type) => {
    setVillas(info.filter((item) => item.type.includes(type) === true));
  };
  const [active, setActive] = useState(3);
  return (
    <div className="mt-[100px] h-auto w-full mb-16">
      <div className="w-full my-5 flex items-center justify-center">
        <div className="w-[80%] lg:w-[50%] flex gap-y-[25px] lg:gap-y-0 lg:flex-row flex-col items-center justify-between ">
          <button
            className={`${
              selected === 0 ? " bg-[#f35525] " : " bg-black "
            } text-white px-4 py-2 lg:w-[119px] w-[100%] h-[46px] hover:bg-[#f35525] rounded-[7px] duration-[1s]`}
            onClick={() => {
              setSelected(0);
              setVillas(info);
            }}
          >
            All
          </button>
          <button
            className={`${
              selected === 1 ? " bg-[#f35525]" : " bg-black "
            } text-white px-4 py-2 lg:w-[119px] w-[100%] h-[46px] hover:bg-[#f35525] rounded-[7px] duration-[1s]`}
            onClick={() => {
              setSelected(1);
              filter("apartment");
            }}
          >
            Apartment
          </button>
          <button
            className={`${
              selected === 2 ? " bg-[#f35525] " : " bg-black "
            } text-white px-4 py-2 lg:w-[119px] w-[100%] h-[46px] hover:bg-[#f35525] rounded-[7px] duration-[1s]`}
            onClick={() => {
              setSelected(2);
              filter("villa_house");
            }}
          >
            Villa House
          </button>
          <button
            className={`${
              selected === 3 ? " bg-[#f35525] " : " bg-black "
            } text-white px-4 py-2 lg:w-[119px] w-[100%] h-[46px] hover:bg-[#f35525] rounded-[7px] duration-[1s]`}
            onClick={() => {
              setSelected(3);
              filter("penthouse");
            }}
          >
            Penthouse
          </button>
        </div>
      </div>
      <motion.div className=" w-full  my-5 flex flex-wrap items-center ">
        {villas.map((data, i) => {
          return (
            <AnimatePresence>
              <motion.div
                onClick={() => {
                  window !== "undefined" &&
                    localStorage.setItem("data", JSON.stringify(data));

                  <Nav setActive={active} />;
                }}
                key={data.id} /* 
                onClick={() =>
                  window !== "undefined" &&
                  localStorage.setItem("data", data.badrooms, data.bathrooms)
                } */
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                layout
                transition={{ duration: 0.3 }}
                className="my-2 lg:w-[30%] w-full mx-4  shadow-3xl rounded-[15px] py-5 flex items-center justify-center "
              >
                <Link
                  href="/propertydetails"
                  className="w-full flex flex-col items-center justify-between"
                >
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
                      <span className="text-black font-[500]">
                        {data.floor}
                      </span>
                    </h2>
                    <h2 className="text-[13.5px] capitalize p-2  text-[#4a4a4a]">
                      parkings :{" "}
                      <span className="text-black font-[500]">
                        {data.parking}
                      </span>
                    </h2>
                  </div>

                  <h3 className="my-8 px-4 py-2 w-[35%] rounded-[8px] cursor-pointer hover:bg-[#f35525] hover:text-white bg-black text-white text-center">
                    Schedule Visit
                  </h3>
                </Link>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Props;
