import React from "react";
import { LetestJobOpen } from "../landing/config/config";
import { BsDot } from "react-icons/bs";

const LatestJob = () => {
  type WorkType = "Marketing" | "Technology" | "Design" | "Business";

  const getWorkTypeColor = (workType: WorkType): string => {
    const colorMap: Record<WorkType, string> = {
      Marketing: "border-[#e59b1b] text-[#e59b1b]",
      Technology: "border-[#C173C6] text-[#C173C6]",
      Design: "border-[#6ED3B8] text-[#6ED3B8]",
      Business: "border-[#5550E0] text-[#5550E0]",
    };

    return colorMap[workType] || "";
  };

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:gap-6">
      {LetestJobOpen.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col gap-4  border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-start md:p-8"
        >
          <div className="flex items-center lg:justify-center justify-start">
            <div className="text-5xl">{item.logo}</div>
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
              {item.jobRole}
            </h2>

            <p className="flex items-center text-sm text-gray-500">
              <span>{item.companyName}</span>
              <BsDot className="mx-1 text-xl" />
              <span>{item.location}</span>
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="whitespace-nowrap rounded-full bg-[#EFFAF7] px-3 py-1 text-xs text-[#6ED3B8] sm:text-sm">
                {item.duration}
              </span>

              <span className="hidden h-5 w-px bg-gray-200 sm:block"></span>

              {item.workType.map((workType, index) => (
                <span
                  key={index}
                  className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs sm:text-sm ${getWorkTypeColor(
                    workType as WorkType
                  )}`}
                >
                  {workType}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestJob;
