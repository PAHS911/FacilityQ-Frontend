import React from "react";
import Batman from "../img/Batman.jpg";
import Q from "../facility/Q.svg";
const Reshaping = () => {
  return (
    <section>
      <div className="flex max-lg:flex max-lg:flex-col gap-16">
        <div className="w-1/2 max-lg:w-full flex flex-col justify-center items-center ">
          <p className="font-sans w-96 max-xs:w-72 flex items-center justify-center  text-gray-700  text-3xl font-bold text-center pb-9">
            Reshaping School Facility Planning
          </p>
          <p className="font-sans text-center  pb-4 italic font-medium text-gray-500 tracking-wider">
            FACILITYQ stands at the forefront of innovation, aiming to transform
            the landscape of School Facilities Planning as we know it today.
            Crafted by our team of facilities professionals, we understand the
            many challenges our colleagues face today.
          </p>
          <p className=" text-center font-sans italic font-medium text-gray-500 tracking-wider">
            Our data driven, online interface, provides quick access for all
            stakeholders to make timely & well informed decisions. This makes
            FACILITYQ your digital and interactive Facilities Master Plan
            Discover the difference FACILITYQ can make in your district today.
          </p>
        </div>

        <div className="relative max-lg:w-full  max-lg:mt-16 w-1/2  max-lg:flex  max-lg:justify-center">
          <img className="h-[]" src={Batman} alt="" />
          <img className="h-[] absolute top-0 opacity-50" src={Q} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Reshaping;
