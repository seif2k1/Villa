import { form, info } from "@/components/contact/info";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="prop w-full flex items-center justify-center relative">
        <div className="lg:w-1/2 w-[80%] gap-y-[25px] lg:gap-y-0 flex flex-col items-center justify-center py-2">
          <h1 className="bg-white text-black px-4 py-2 font-[500]">
            HOME / CONTACT US
          </h1>
          <h1 className="text-white lg:text-[60px] md:text-[45px] text-[35px]">
            CONTACT US
          </h1>
        </div>
      </div>

      <div className="xl:h-[calc(100vh-160px)] lg:h-[calc(120vh-160px)] h-[calc(320vh-160px)] md:h-[calc(250vh-160px)] w-full my-[60px] ">
        <div className="w-full h-full flex flex-col lg:flex-row  items-start lg:items-center   justify-between">
          <div className=" h-full lg:w-[80%] w-full  flex flex-col items-center lg:justify-between justify-evenly  overflow-hidden lg:px-14">
            <div className="lg:h-[50%] h-[40%] w-[80%]  flex flex-col items-start justify-between ">
              <h6 className="text-[#ee626b] font-bold ">| CONTACT US</h6>
              <h1 className="text-[40px] text-black  lg:w-[50%] w-full font-[600]">
                Get In Touch With Our Agents
              </h1>
              <p>
                When you really need to download free CSS templates, please
                remember our website TemplateMo. Also, tell your friends about
                our website. Thank you for visiting. There is a variety of
                Bootstrap HTML CSS templates on our website. If you need more
                information, please contact us.
              </p>
            </div>
            <ul className="w-full flex flex-col md:w-[80%] items-center justify-between h-[40%] ">
              {info.map((data, i) => {
                return (
                  <li
                    className="w-[100%]  h-[100%] flex items-center md:justify-start justify-center"
                    key={i}
                  >
                    <div className="md:w-[50%] w-[80%] rounded-[10px] shadow-3xl bg-white h-[70%] flex items-center justify-between">
                      <div className="w-[60%] h-full flex items-center justify-center">
                        <Image
                          src={data.logo}
                          alt={data.name}
                          priority
                          layout="response"
                        />
                      </div>
                      <div className="flex w-full h-full flex-col items-start justify-evenly">
                        <h3>{data.type}</h3>
                        <h1 className="">{data.name}</h1>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" lg:h-full h-[50%] lg:w-[40%] w-full flex items-center justify-center">
            <form className="w-[90%] shadow-3xl h-[100%] flex flex-col items-center bg-white justify-center rounded-[15px] overflow-hidden">
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

      <div className="w-full h-screen flex my-[20px] items-center justify-center  ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103040.37654153646!2d5.337425926279489!3d36.19059566311323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f3159c5fcafc4b%3A0xb063cfbbd3cadcd5!2zU8OpdGlm!5e0!3m2!1sfr!2sdz!4v1698936886439!5m2!1sfr!2sdz"
          className="w-[80%] rounded-[15px] h-[80%] border-0 hover:shadow-3xl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
