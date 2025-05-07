"use client";
import React, { useRef } from "react";
import { exploreByCategory } from "../landing/config/config";
import { IoIosArrowRoundForward } from "react-icons/io";

const Categorypage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10 text-black">
      {exploreByCategory.map((item) => {
        return (
          <div
            key={item.id}
            className="group w-full flex border-1 lg:border-0 items-center gap-5 lg:items-start lg:flex-col h-20 lg:h-40 hover:bg-[#4640de] p-5 bg-white"
          >
            <h1 className="text-4xl text-[#4640de] group-hover:text-white">
              {item.icon}
            </h1>
            <div className="flex flex-col gap-.5 sm:gap-1 mt-3">
              <h1 className="text-xl font-bold w-full group-hover:text-white">
                {item.name}
              </h1>
              <p className="flex items-center gap-1 text-sm opacity-50 group-hover:text-white">
                <span className="mr-2">{item.numberOfJobs}</span>
                {item.description}
                <span className="hidden lg:block text-2xl ml-5">
                  <IoIosArrowRoundForward />
                </span>
              </p>
            </div>
            <span className="lg:hidden ml-5 text-2xl group-hover:text-white">
              <IoIosArrowRoundForward />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Categorypage;
