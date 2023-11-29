import Image from "next/image";
import contact from "../../../public/images/contact-bg.jpg";
import { info, form } from "./info";

const Contact = () => {
  return (
    <div className="lg:h-[170vh] xl:h-[140vh] h-[250vh]  relative w-full mt-[60px] ">
      <div className="w-full absolute flex items-center top-[3%] lg:top-[5%] justify-center">
        <div className="h-[62%]  lg:w-[40%] w-full flex flex-col items-center justify-between p-6">
          <h6 className="text-[#ee626b] font-bold ">| CONTACT US</h6>
          <h1 className="text-[40px] text-white w-[80%] font-[600] text-center">
            Get In Touch With Our Agents
          </h1>
        </div>
      </div>
      <div className="absolute lg:h-[35%] xl:h-[50%] w-full contact h-[30%] z-[-1]">
        {/* <Image src={contact} alt="video_image" priority layout="response" /> */}
        {/*  <div className="absolute w-full top-[32%] flex items-center justify-center  ">
          <Image
            src={video_bg_1}
            alt="video_image"
            priority
            layout="response"
            className="rounded-[17px]"
          />
        </div>
        <div className="absolute w-full top-[55%] flex items-center justify-center  ">
          <div className="z-[1] bg-[#f25525] cursor-pointer p-2 rounded-full">
            <BsFillPlayCircleFill
              size={65}
              className=" scale-[0.8]"
              fill="white"
            />
          </div>
        </div> */}
      </div>
      <div className="w-full h-[65%] flex flex-col lg:flex-row items-center absolute gap-y-[35px] lg:gap-y-0 lg:top-[25%] top-[20%] justify-between">
        <div className=" h-full lg:w-[60%] w-full flex flex-col items-center justify-between ">
          <div className="w-full lg:h-full h-[35rem] flex items-center justify-center  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103040.37654153646!2d5.337425926279489!3d36.19059566311323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f3159c5fcafc4b%3A0xb063cfbbd3cadcd5!2zU8OpdGlm!5e0!3m2!1sfr!2sdz!4v1698936886439!5m2!1sfr!2sdz"
              className="w-[84%] rounded-[15px] lg:h-[93%] h-full border-0 hover:shadow-3xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ul className="w-full flex flex-col lg:flex-row items-center justify-between lg:h-[20%] h-[100%] ">
            {info.map((data, i) => {
              return (
                <li
                  className="w-[100%]  h-[100%] flex items-center justify-center"
                  key={i}
                >
                  <div className="w-[70%] rounded-[10px] shadow-3xl bg-white h-[70%] flex items-center justify-between">
                    <div className="w-[60%] h-full flex items-center justify-center">
                      <Image
                        src={data.logo}
                        alt={data.name}
                        priority
                        layout="response"
                      />
                    </div>
                    <div className="flex w-full h-full flex-col items-start justify-center">
                      <h3>{data.type}</h3>
                      <h1 className="">{data.name}</h1>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" h-full lg:w-[40%] w-full flex items-center justify-center">
          <form className="w-[90%] shadow-3xl lg:h-[93%] h-full flex flex-col items-center bg-white justify-center rounded-[15px] overflow-hidden">
            {form.map((data, i) => {
              return (
                <div key={i} className="w-full py-[4px] px-5">
                  {data.bb === true ? (
                    <div className="w-[100%]  flex flex-col  justify-between">
                      <h1 className=" capitalize my-3">{data.name}</h1>
                      <input
                        required
                        className=" indent-2 mx-2 w-[90%] focus:outline-[0px] focus:border-[2px] focus:border-black  placeholder:capitalize h-[50px] rounded-full px-4 py-2 bg-[#f6f6f6] text-black"
                        type={data.type}
                        placeholder={data.placeholder}
                      />
                    </div>
                  ) : (
                    <div className="w-[100%]  flex flex-col items-start justify-between">
                      <h1 className=" capitalize">{data.nameMessage}</h1>
                      <textarea
                        name=""
                        required
                        className=" indent-2 mx-2 w-[90%] focus:outline-[0px] focus:border-[2px] focus:border-black bg-[#f6f6f6] text-black my-2 placeholder:capitalize  rounded-[10px] px-4 py-1"
                        id=""
                        placeholder={data.placeholderMessage}
                        rows="8"
                      ></textarea>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="w-full py-[4px] px-5">
              <button className="bg-black mx-2 text-white my-2 px-4 py-2 rounded-[20px] capitalize">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
