"use client";
import React from "react";
import heroimg from "../../public/Vector.png";
import SearchPanal from "../components/SearchPanal";
import Image from "next/image";
import Companypage from "../components/Companypage";
import Categorypage from "../components/Categorypage";
import { IoIosArrowRoundForward } from "react-icons/io";
import CTApage from "../components/CTApage";
import FeaturedJob from "../components/FeaturedJob";
import LaetestJob from "../components/LaetestJob";


const page = () => {
  return (
    <div className=" px-4  sm:px-4">
      <div className="mt-10 flex flex-col gap-5 sm:w-[200px]  md:w-[400px] lg:w-[400px]">
        <h1 className="lg:text-7xl text-5xl  font-bold tracking-tight">
          {" "}
          Discover more then
        </h1>
        <h1 className="lg:text-6xl text-4xl font-bold tracking-tight text-[#26A4FF]">
          {" "}
          5000 + Jobs
        </h1>
        <Image
          className="w-80"
          width={200}
          height={200}
          src={`${heroimg.src}`}
          alt="vector"
        />
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
          Populer : UI Designer, UI Researcher, Android,Admin{" "}
        </p>
      </div>

      <div className="components-container">
        <p className="opacity-60 lg:text-base text-sm font-normal mt-20 mb-5">
          Companies we helped grow
        </p>
        <Companypage />
      </div>
      <div className="Category-container mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            {" "}
            Explore by <span className="text-[#26A4FF]">category</span>
          </h2>

          <h2 className=" hidden lg:flex gap-2 text-[#4640de]">
            Show all jobs{" "}
            <span className=" text-2xl">
              <IoIosArrowRoundForward />
            </span>
          </h2>
        </div>
        <Categorypage />
        <h2 className=" lg:hidden mt-3 flex gap-2 text-[#4640de]">
          Show all jobs{" "}
          <span className=" text-2xl">
            <IoIosArrowRoundForward />
          </span>
        </h2>
      </div>
      <div className="mt-10 CTA-container">
        <CTApage />
      </div>
      <div className="FeatureJob-container mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            {" "}
            Featured <span className="text-[#26A4FF]">Jobs</span>
          </h2>

          <h2 className=" hidden lg:flex gap-2 text-[#4640de]">
            Show all jobs{" "}
            <span className=" text-2xl">
              <IoIosArrowRoundForward />
            </span>
          </h2>
        </div>
        <FeaturedJob />
        <h2 className=" lg:hidden mt-3 flex gap-2 text-[#4640de]">
          Show all jobs{" "}
          <span className=" text-2xl">
            <IoIosArrowRoundForward />
          </span>
        </h2>
      </div>
      <div className="FeatureJob-container mt-10 ">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl mb-10  mt-7 font-bold">
            {" "}
            Leatest <span className="text-[#26A4FF]">Jobs Open </span>
          </h2>

          <h2 className=" hidden lg:flex gap-2 text-[#4640de]">
            Show all jobs{" "}
            <span className=" text-2xl">
              <IoIosArrowRoundForward />
            </span>
          </h2>
        </div>
        <LaetestJob />
        <h2 className=" lg:hidden mt-3 flex gap-2 text-[#4640de]">
          Show all jobs{" "}
          <span className=" text-2xl">
            <IoIosArrowRoundForward />
          </span>
        </h2>
      </div>
     

    </div>
  );
};

export default page;
