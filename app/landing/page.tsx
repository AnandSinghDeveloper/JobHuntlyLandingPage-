'use client'
import React from "react";
import heroimg from "../../public/Vector.png";
import SearchPanal from "../components/SearchPanal";
import Image from "next/image";

const page = () => {
  return (
    <div className="text-white px-4 lg:px-30 sm:px-4">
      <div className="mt-10 flex flex-col gap-5 sm:w-[200px]  md:w-[400px] lg:w-[400px]">
        <h1 className="lg:text-6xl text-5xl  font-bold tracking-tight">
          {" "}
          Discover more then
        </h1>
        <h1 className="lg:text-6xl text-4xl font-bold tracking-tight text-[#26A4FF]">
          {" "}
          5000 + Jobs
        </h1>
        <Image className="w-80"width={200} height={200} src={`${heroimg.src}`} alt="vector" />
        <p className="opacity-60 lg:text-base text-sm font-normal">
          {" "}
          Great platform for the job seekers that searching for new career
          heights and passionate about startup{" "}
        </p>
      </div>
      <div>
        <SearchPanal />
      </div>
      <div>
      <p className="opacity-60 lg:text-base text-sm font-normal mt-7 ">
          {" "}
           Populer : UI Designer, UI Researcher, Android,Admin {" "} 
        </p>
      </div>
    </div>
  );
};

export default page;
