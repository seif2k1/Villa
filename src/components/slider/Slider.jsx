"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../public/images/banner-01.jpg";
import img1 from "../../../public/images/banner-02.jpg";
import img2 from "../../../public/images/banner-03.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { BiSolidArrowToLeft } from "react-icons/bi";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const Slider = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className=" h-full w-full ">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper relative"
        >
          <SwiperSlide>
            <Image src={img} alt="img" />
            <div className="absolute text-white flex flex-col lg:top-[25%] items-center justify-between md:top-[37%] lg:items-start top-[15%] left-[5%] md:left-[30%]">
              <h5 className="bg-white text-black px-4 w-[150px]  py-2">
                Algeria , <span className="text-[#f25525]">Setif</span>
              </h5>
              <h2 className="text-[30px] lg:text-[50px] text-center lg:text-left my-[15px] lg:w-[50%]">
                Hurry!
                <br />
                Get the Best Villa for you
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img1} alt="img" />
            <div className="absolute text-white flex flex-col lg:top-[25%] items-center justify-between md:top-[37%] lg:items-start top-[15%] left-[5%] md:left-[30%]">
              <h5 className="bg-white text-black px-4 w-[150px] py-2">
                Algeria , <span className="text-[#f25525]">Setif</span>
              </h5>
              <h2 className="text-[30px] lg:text-[50px] text-center lg:text-left my-[15px] lg:w-[50%]">
                Be Quick!
                <br />
                Get the best villa in town
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img2} alt="img" />
            <div className="absolute text-white flex flex-col lg:top-[25%] items-center justify-between md:top-[37%] lg:items-start top-[15%] left-[5%] md:left-[30%]">
              <h5 className="bg-white text-black px-4 w-[150px] py-2">
                Algeria , <span className="text-[#f25525]">Setif</span>
              </h5>
              <h2 className="text-[30px] lg:text-[50px] text-center lg:text-left my-[15px] lg:w-[50%]">
                Act Now!
                <br />
                Get the highest level penthouse
              </h2>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev ">
            <BsFillArrowLeftCircleFill
              className=" hover:fill-gray-500"
              size={300}
              fill="white"
            />
          </div>
          <div className="swiper-button-next">
            <BsFillArrowRightCircleFill
              className=" hover:fill-gray-500"
              size={300}
              fill="white"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
