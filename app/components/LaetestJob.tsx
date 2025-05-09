import React from "react";
import { LetestJobOpen } from "../landing/config/config";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";

const LatestJob = () => {
  type WorkType = "Marketing" | "Technology" | "Design" | "Business";

  const getWorkTypeStyle = (workType: WorkType) => {
    switch(workType) {
      case "Marketing": 
        return "border-[#e59b1b] text-[#e59b1b] bg-[#FDF3EB]";
      case "Technology":
        return "border-[#C173C6] text-[#C173C6] bg-[#fedeff]";
      case "Design":
        return "border-[#6ED3B8] text-[#6ED3B8] bg-[#EFFAF7]";
      case "Business":
        return "border-[#5550E0] text-[#5550E0] bg-[#EDECFC]";
      default:
        return "";
    }
  };

  return (
    <motion.div 
      className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {LetestJobOpen.map((item, index) => (
        <motion.div
          key={item.id}
          className="group flex flex-col gap-4 border border-gray-100 bg-white p-6 shadow-sm sm:flex-row sm:items-start md:p-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Logo */}
          <div className="flex items-center lg:justify-center justify-start">
            <motion.div 
              className="text-5xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.logo}
            </motion.div>
          </div>

          {/* Job Details */}
          <div className="flex flex-1 flex-col">
            {/* Job Title */}
            <motion.h2 
              className="text-lg font-bold text-gray-900 sm:text-xl relative pb-1"
              whileHover={{ color: "#4640de" }}
            >
              {item.jobRole}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4640de]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.h2>

            {/* Company Info */}
            <p className="flex items-center text-sm text-gray-500">
              <span>{item.companyName}</span>
              <BsDot className="mx-1 text-xl" />
              <span>{item.location}</span>
            </p>

            {/* Tags */}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <motion.span 
                className="whitespace-nowrap rounded-full bg-[#EFFAF7] px-3 py-1 text-xs text-[#6ED3B8] sm:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.duration}
              </motion.span>

              <span className="hidden h-5 w-px bg-gray-200 sm:block"></span>

              {item.workType.map((workType, idx) => (
                <motion.span
                  key={idx}
                  className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs sm:text-sm ${getWorkTypeStyle(workType as WorkType)}`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {workType}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LatestJob;