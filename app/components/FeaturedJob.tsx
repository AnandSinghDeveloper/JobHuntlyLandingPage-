import React from "react";
import { FeturedJobs } from "../landing/config/config";
import { BsDot } from "react-icons/bs";


const FeaturedJob = () => {
  return (
    <div className="mt-10 text-black overflow-x-auto">
      <div className="flex gap-5 w-max lg:grid lg:grid-cols-4 lg:w-full">
        {FeturedJobs.map((item) => (
          <div
            key={item.id}
            className="group w-72 lg:w-75 lg:min-w-0 flex border-1 lg:border-0  gap-2 items-start flex-col h-65  p-5 bg-white"
          >
            <div className="w-full flex items-center justify-between">
              <h1 className="text-5xl  ">{item.logo}</h1>
              <button className="border-1 border-[#4640de] text-[#4640de] px-2 py-1">
                {item.duration}
              </button>
            </div>
            <div className="flex flex-col items-start mt-2">
              <h2 className="text-xl font-bold w-full ">{item.jobRole}</h2>
              <p className="flex items-center  text-sm opacity-50">
                <span className="mr-2">{item.companyName}</span>
                <span>
                  <BsDot className="opacity-50 mt-1 text-2xl" />
                </span>
                {item.location}
              </p>
            </div>
            <div>
              <p className="text-sm opacity-50 h-10 overflow-x-auto">
                {item.description}
              </p>
            </div>
            <div>
              {item.workType.map((workType)=>{
                return(
                  <button className={`${workType=='Marketing'? 'bg-[#FDF3EB] text-[#e59b1b]' :null} ${workType=='Technology'? 'bg-[#fedeff] text-[#C173C6]' :null} ${workType=='Design'? 'bg-[#EFFAF7] text-[#6ED3B8]' :null} ${workType=='Business'? 'bg-[#EDECFC] text-[#5550E0]' :null} ml-2 rounded-3xl text-xm py-1 mt-2 bor px-4 text-start`}>
                    {workType}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
