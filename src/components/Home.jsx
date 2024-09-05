import React from "react";
import { Carousel } from "flowbite-react";

import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"


const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <a href="https://www.freepik.com"><img src={banner} alt="Designed by Freepik" href="https://www.freepik.com/"/></a>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Efficient Procurement for <span className="text-brandPrimary leading-snug">Goods & Services</span></h1>
            <p className="text-neutralGrey text-base mb-8">Connecting You with Top Providers since 1995</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Free Consult!</button>
           </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner2} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Top Notch Vendors, <span className="text-brandPrimary leading-snug">Seamless Connections</span></h1>
            <p className="text-neutralGrey text-base mb-8">Committed to Ensuring Unmatched Quality and Consistent Reliability Every Time</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Free Consult!</button>
           </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner3} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Easy Consultations with Procurement Experts <span className="text-brandPrimary leading-snug">for free of cost</span></h1>
            <p className="text-neutralGrey text-base mb-8">Experience Professional Guidance That Makes a Difference</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Free Consult!</button>
           </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
