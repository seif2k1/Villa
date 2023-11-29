import Image from "next/image";
import video_bg from "../../../public/images/video-bg.jpg";
import video_bg_1 from "../../../public/images/video-frame.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { info } from "./info";
const View = () => {
  return (
    <div className="h-[180vh] sm:h-[150vh] w-full flex flex-col items-center   ">
      <div className="relative h-full w-full">
        <div className="absolute lg:w-[43%] lg:left-[25%] lg:top-[12%] w-full mt-[77px] lg:mt-[0]  flex items-center justify-center">
          <div className="lg:h-[62%] h-full  flex flex-col items-center justify-between gap-y-[35px] px-6">
            <h6 className="text-[#ee626b] font-bold ">| VIDEO VIEW</h6>
            <h1 className="text-[40px] font-[900] text-center lg:w-full text-white">
              Get Closer View & Different Felling
            </h1>
          </div>
        </div>
        {/* 
        <Image src={video_bg} alt="video_image" priority layout="response" /> */}
        <div className="absolute h-[85%] lg:h-[85%] md:w-full md:h-[70%] inset-0 video -z-[1]"></div>
        <div className="absolute lg:w-[75%] lg:left-[10%] lg:h-[75%] w-full lg:top-[43%] top-[75%] md:top-[40%] flex items-center justify-center  ">
          <Image
            src={video_bg_1}
            alt="video_image"
            priority
            layout="response"
            className="rounded-[17px]"
          />
        </div>
        <div className="absolute w-full lg:top-[74%] top-[80%] md:top-[60%] flex items-center justify-center  ">
          <div className="z-[1] bg-[#f25525] cursor-pointer p-2 rounded-full">
            <BsFillPlayCircleFill
              size={65}
              className=" scale-[0.8]"
              fill="white"
            />
          </div>
        </div>
      </div>
      <div className="h-[60%] sm:h-[40%] w-[80%] xl:mt-[55px]  space-y-[25px] lg:space-y-0 flex lg:flex-row flex-col my-[45px] lg:my-0 items-center justify-between">
        {info.map((data, i) => {
          return (
            <div
              key={i}
              className="w-[250px] sm:w-[80%]  lg:w-[30%] sm:h-[45%] h-[30%] relative flex items-center justify-center bg-[#ffeee9] rounded-[17px]"
            >
              <h1 className="text-[40px] text-[#f25525]">{data.number}</h1>
              <div className="flex flex-col text-[15px] font-[500] w-[50%]  items-center justify-between">
                <h4 className="">{data.name}</h4>
                <h6 className="">{data.descreption}</h6>
              </div>
              <div className="h-[45px] w-[45px] absolute -top-[20%] -right-[7%] bg-[#f25525] rounded-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default View;
