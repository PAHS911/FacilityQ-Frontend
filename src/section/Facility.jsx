import React from "react";
import facility from "../facility/facility.svg";
import Images from '../component/Images.jsx'
const Facility = () => {
  return (
    <section className=" ">
      <div className="flex justify-between max-lg:flex-col  ">
        <div className="w-1/2 max-lg:w-full flex flex-col  items-center ">
          <img src={facility} alt="" />
          <p className="relative bottom-11  font-sans text-gray-700  text-3xl font-bold text-center tracking-widest max-sx:bottom-5 max-xs:bottom-5 max-xs:relative">ELEVATED FACILITY PLANNING</p>
          <p className="relative bottom-11 text-center text-gray-600 tracking-wide max-xs:bottom-5 
          max-sx:bottom-5 max-xs:relative">Where Interactive Precision Shapes Tomorrow’s Vision</p>
        </div>

        <div className="w-1/2 max-lg:w-full"><Images/></div>
      </div>
    </section>
  );
};

export default Facility;
