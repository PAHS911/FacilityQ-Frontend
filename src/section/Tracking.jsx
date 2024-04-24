import React from "react";

const Tracking = () => {
  return (
    <section className="pt-12">
      <div className="flex justify-between max-lg:flex-col gap-16">
        <div className="w-1/2 max-lg:w-full">
          <div className="">
            <p className="text-gray-700  text-3xl font-bold text-center pb-">
              Q-REPORTS
            </p>
            <p className="font-sans text-center  pb-4 italic font-medium text-gray-500 tracking-wider">
              Create reports using the various FACILITYQ tools. From needs assessments to capacity reports the ability to pull information & analytics quickly from a single source is at your fingertips.
            </p>
          </div>
          <div className="bg-blue-300  flex justify-center items-center h-96">
            <p className="text-3xl">Image from FacilityQ</p>
          </div>
        </div>

        <div className="w-1/2 max-lg:w-full">
          <div className="">
            <p className="text-gray-700  text-3xl font-bold text-center pb-">
              Q-TRACKING
            </p>
            <p className="font-sans text-center  pb-4 italic font-medium text-gray-500 tracking-wider">
              Monitor & manage your physical assets efficiently, planning maintenance on your schedule to maximize budget resources.
            </p>
          </div>
          <div className="bg-blue-300 flex justify-center items-center h-96">
            <p className="text-3xl  ">Image from FacilityQ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
