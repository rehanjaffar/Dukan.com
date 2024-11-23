import React, { createElement } from "react";
import BannerImg from "../../assets/women/women2.jpg";

import { content } from "./BannerData";



const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4">

{
  content.map((item,i)=>{
    return (
      <div data-aos="fade-up" data-aos-delay={i*300} key={i} className="flex items-center gap-4">
     <div className={`text-4xl h-12 w-12 shadow-sm p-4 flex items-center rounded-full ${item.bg} dark:bg-violet-400`}>             
{

  createElement(item.logo)
 
}
</div>             
                {item.title}

        </div>
    )
  })
}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
