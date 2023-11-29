"use client";
import { featuredDetails, image } from "./info";
import Image from "next/image";
import { DefaultAccordion } from "./Accordition";

const Featured = () => {
  return (
    <div className="h-[250vh] lg:h-[115vh] w-full mt-[100px] lg:mt-[0] flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-[33%] w-full lg:h-full lg:items-center flex items-end justify-end pe-[20px]">
        {image.map((img, i) => {
          return (
            <div key={i} className="h-full w-[65%] lg:h-[45%]  ">
              <div className="relative h-full w-full bg-white">
                <Image
                  src={img.featured}
                  alt="image"
                  className="h-full w-full"
                />
                <div className="bg-[#f35525] p-2 flex items-center justify-center h-[90px] w-[90px] lg:h-[110px] lg:w-[110px] rounded-full absolute -left-[2.1rem] lg:-left-[3rem] -bottom-[3rem]">
                  <Image
                    src={img.featuredIcon}
                    alt="image-icon"
                    className=" stroke-purple-500"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:w-[33%] w-full mt-[77px] lg:mt-[0] lg:h-full flex items-center justify-center">
        <div className="lg:h-[62%] h-full  flex flex-col items-start justify-between gap-y-[35px] px-6">
          <h6 className="text-[#ee626b] font-bold text-left">| FEATURED</h6>
          <h1 className="text-[40px] font-[900]">Best Appartment & Sea View</h1>

          <DefaultAccordion />
        </div>
      </div>
      <div className="lg:w-[33%] w-full h-full  flex  items-center justify-center">
        <div className="h-[62%] w-[90%] lg:w-[90%] flex flex-col  items-center justify-evenly shadow-3xl">
          {featuredDetails.map((details, i) => {
            return (
              <ul
                key={i}
                className={`flex items-center justify-between w-[80%] ${
                  i < 3 && "border-b-[1px] border-gray-500 "
                } p-5 `}
              >
                <Image src={details.logo} alt={details.area} />
                <li className="flex flex-col items-center justify-between">
                  <h4 className="text-[20px]  font-[800]">{details.area}</h4>
                  <h6 className="text-[15px] text-gray-500 font-[500]">
                    {details.description}
                  </h6>
                  <hr />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
