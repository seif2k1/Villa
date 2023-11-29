"use client";
import Image from "next/image";
import "./pro.css";
import logo from "../../../public/images/page-heading-bg.jpg";
import { featuredDetails } from "../featured/info";
import { DefaultAccordion } from "../featured/Accordition";
const Propdetails = ({ data }) => {
  return (
    <div className="w-full lg:h-[170vh] h-[250vh] sm:h-[200vh] mt-[50px] lg:mt-0 lg:flex-row flex-col flex lg:items-start items-center justify-between">
      <div className="lg:w-[65%] w-[90%] h-full flex items-center justify-center">
        <div className="w-[90%] lg:h-[90%] h-full flex flex-col items-start justify-between">
          <Image
            src={data.logo}
            height={343}
            loading="lazy"
            alt="logo"
            className="w-full rounded-[15px]"
          />
          <div className="w-full h-full gap-y-[15px] my-[25px] lg:my-0 lg:gap-y-0  lg:h-[35%] flex flex-col items-start justify-evenly">
            <h5 className="px-4 py-2 rounded-[7px] bg-[#fbd9cf]">
              {data.villa}
            </h5>
            <h5 className="capitalize">{data.position}</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              delectus nulla consequuntur facere, nihil repellendus quisquam
              officiis veritatis asperiores eius ex saepe quo in rem. Sapiente
              officiis fuga dolorem accusamus, esse iusto. Eveniet tempore
              corporis debitis. Nisi nihil ullam harum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              vero esse ea ullam illo maiores omnis, pariatur quibusdam totam
              aperiam deserunt odio molestiae veniam earum animi quae temporibus
              placeat voluptatem in dolores blanditiis minus nostrum obcaecati.
              Error iusto provident sed labore quas accusamus! Et officiis
              consequatur ratione molestias deleniti quisquam?
            </p>
          </div>
          <DefaultAccordion />
        </div>
      </div>
      <div className="lg:w-[35%] w-[85%] h-[50%] lg:h-full  flex items-center justify-center">
        <div className="w-full lg:h-[90%] flex items-start bg-white justify-center">
          <div className="lg:h-[40%] h-[90%] lg:w-[80%] w-full rounded-[15px] flex flex-col items-center justify-evenly shadow-3xl">
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
                    <h4 className="text-[20px]  font-[800]">
                      {i < 1 ? data.aria : details.area}
                    </h4>
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
    </div>
  );
};

export default Propdetails;
