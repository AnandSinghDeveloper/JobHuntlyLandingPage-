"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import React, { useState } from "react";

const SearchPanal = () => {
  const [locationInput, setLocationInput] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const locations = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(locationInput.toLowerCase())
  );

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-4 sm:p-5 bg-white  shadow-md mt-6 sm:mt-10 mb-1 w-full sm:w-[90%] md:w-[85%] lg:w-[67vw] max-w-4xl">
      <div className="flex items-center w-full sm:w-auto  sm:border-b-0 sm:border-r-2 border-gray-200 pr-2 sm:pr-4">
        <Label htmlFor="search" className="cursor-pointer">
          <CiSearch className="text-black text-xl sm:text-2xl font-bold" />
        </Label>
        <input
          id="search"
          type="text"
          placeholder="Job title or keyword"
          className="h-10 w-full s\90 7o-p8+.[l;'.m:w-[20vw] border-b-2 border-gray-200 text-black min
          [[tvy6upb8g;jhuf v879].9-w-[150px] max-w-[300px] placeholder:opacity-60 px-3 placeholder:text-black outline-none bg-transparent"
        />
      </div>

      <div className="relative flex items-center w-full sm:w-auto">
        <Label htmlFor="location" className="cursor-pointer">
          <HiOutlineLocationMarker className="text-black text-xl sm:text-2xl font-bold" />
        </Label>
        <div className="relative w-full sm:w-[20vw] md:w-[20vw] min-w-[150px] max-w-[300px]">
          <input
            id="location"
            type="text"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            onFocus={() => setShowLocations(true)}
            onBlur={() => setTimeout(() => setShowLocations(false), 200)}
            placeholder="Select or type location"
            className="h-10 w-full px-3 outline-none border-b-2 border-gray-200 text-black bg-transparent"
          />
          {showLocations && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredLocations.length > 0 ? (
                filteredLocations.map((location) => (
                  <div
                    key={location}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    onClick={() => {
                      setLocationInput(location);
                      setShowLocations(false);
                    }}
                  >
                    {location}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No matches found</div>
              )}
            </div>
          )}
        </div>
      </div>

      
      <Button className="w-full md:w-auto sm:w-auto rounded-none text-white cursor-pointer  sm:mt-0 bg-[#4640DE] px-6 py-6 sm:py-2">
        Search my job
      </Button>
    </div>
  );
};

export default SearchPanal;
