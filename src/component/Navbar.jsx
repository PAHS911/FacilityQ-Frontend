import React from "react";
import { FaMoon } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <section className="p-5   ">
      <div className=" flex justify-center items-center text-center max-md:hidden">
        <div className="flex justify-center items-center text-center   ">
          <ul className="flex justify-center items-center text-center  gap-7  ">
            <li className="cursor-pointer ">Home</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Team</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="relative left-24  flex gap-3">
          <div className="">
            <button className="px-3 py-1 ">Log in</button>
          </div>
          <div className="">
            <button className="px-3 py-1 rounded-xl bg-gray-700 text-white">
              Sign up
            </button>
          </div>
          <div className="flex justify-center items-center text-xl text-gray-700">
            <FaMoon />
          </div>
        </div>
      </div>
      <div className="hidden text-2xl max-md:block text-left">
        <IoMenuOutline className="" />
      </div>
    </section>
  );
};
export default Navbar;
