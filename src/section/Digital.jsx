import React from "react";

const Digital = () => {
  return (
    <section className="pt-12">
      <div className="flex justify-between max-lg:flex-col gap-16">
        <div className="">
          <div className="">
            <p className="text-gray-700  text-3xl font-bold text-center pb-">eCAMPUS</p>
            <p className="font-sans text-center  pb-4 italic font-medium text-gray-500 tracking-wider">
              View & update your campus information with live interactive maps providing detailed overviews.
            </p>
          </div>
          <div className="bg-blue-300  flex justify-center items-center h-96">
            <p className="text-3xl">Image from FacilityQ</p>
          </div>
        </div>

        <div className="">
          <div className="">
            <p className="text-gray-700  text-3xl font-bold text-center pb-">DIGITAL VAULT</p>
            <p className="font-sans text-center  pb-4 italic font-medium text-gray-500 tracking-wider">
              Store plans, blueprints & other high value documents in a single place with the ease of digital access.
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

export default Digital;
