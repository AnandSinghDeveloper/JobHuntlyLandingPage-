'use client'
import React from "react";
import { SiVodafone } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiIntel } from "react-icons/si";
import { SiAmd } from "react-icons/si";
import { Label } from "@/components/ui/label";

const Companypage = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 opacity-40 md:grid-cols-3 sm:grid-cols-4 items-center text-center  ">
      <div className="flex   gap-1">
        <SiVodafone className="text-4xl flex " />
        <Label className="text-xl">Vodafone</Label>
      </div>
      <div className="flex  justify-center gap-1">
        {" "}
        <SiTesla className="text-4xl" />
        <Label className="text-xl">TESLA</Label>
      </div>

      <div className="flex justify-center">
        {" "}
        <SiIntel className="text-6xl" />
      </div>
      <div className="flex justify-center">
        <SiAmd className="text-7xl" />
      </div>
      <div className="flex justify-center">
        {" "}
        <h2 className="text-3xl">Talkit</h2>
      </div>
    </div>
  );
};

export default Companypage;
