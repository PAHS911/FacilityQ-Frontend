import React from "react";
import classroom from "../img/classroom.jpg";
import man from "../img/man.jpg";
import map from "../img/map.jpg";
import biulding from "../img/building.jpg";
const Images = () => {
  return (
    <section>
      <div className="h-[700px]  max-lg:flex max-lg:h-auto max-lg:flex-col  max-lg:justify-center">
        <div
          className=" w-[35%]  h-56 max-ms:h-[30%] border-4 border-[#89C9EF] overflow-hidden  relative max-lg:relative max-lg:top-16  max-lg:left-24 top-16 left-24 max-ml:w-[] max-ml:left-[150px] max-sl:left-[90px]
        max-ss:left-[80px] max-sx:top-8 max-sx:left-[55px] max-ls:top-4 max-ls:left-9 ">
          <img
            className="w-full h-full scale-140 object-center object-cover  transition-transform transform "
            src={classroom}
            alt=""
          />
        </div>
        <div className=" w-[35%]  h-56 max-ms:h-[30%] border-4  overflow-hidden lg:relative max-lg:rel relative bottom-16 left-96 max-lg:left-[550px] max-ml:left-[520px]  border-[#7F8082] max-sl:left-[415px] max-ss:left-[340px] max-sx:left-[290px] max-sx:bottom-28 max-ms:bottom-16 max-ms:left-[250px] max-ls:left-48 max-ls:bottom-12 max-xs:bottom- max-xs:left-
          xl:left-[550px]">
          <img
            className=" w-full h-full scale-140 object-center object-cover  transition-transform transform"
            src={man}
            alt=""
          />
        </div>
        <div className=" w-[25%]  h-36  max-ms:h-[30%]  relative bottom-32 left-16 border-4 border-[#048CC4] max-lg:relative max-lg:left-28 max-ml:left-44 max-sl:left-20 max-ss:left-12 max-sx:bottom-40 max-sx:left-13 max-ms:bottom-16 max-ls:left-4 max-xs:bottom-11 max-xs:left-">
          <img className="w-full h-full " src={map} alt="" />
        </div>
        <div
          className="  relative bottom-40 left-72  w-[35%] h-56  max-ms:h-[150px] max-ls:h-24 border-4  overflow-hidden  border-[#3059A5] max-lg:relative max-lg:left-[440px] max-sl:left-[335px]
        max-ss:left-[250px] max-sx:bottom-56
        max-sx:left-[220px]  max-ms:bottom-32 max-ms:left-[200px] max-ls:left-36
        max-ls:bottom-24 xl:left-96
        ">
          <img className="  w-full h-full" src={biulding} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Images;
