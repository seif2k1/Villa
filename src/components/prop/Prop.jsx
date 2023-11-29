import Image from "next/image";
import prope_logo from "../../../public/images/page-heading-bg.jpg";
import "./pro.css";
const Prop = () => {
  return (
    <div className="prop w-full flex items-center justify-center relative">
      <div className="w-1/2 flex flex-col items-center justify-center py-2">
        <h1 className="bg-white text-black px-4 py-2 font-[500]">
          HOME / PROPERTIES
        </h1>
        <h1 className="text-white lg:text-[60px] text-[35px] md:text-[50px]">
          PROPERTIES
        </h1>
      </div>
    </div>
  );
};

export default Prop;
