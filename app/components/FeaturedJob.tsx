import React from "react";
import { FeturedJobs } from "../landing/config/config";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";

const FeaturedJob = () => {
  return (
    <div className="mt-10 text-black overflow-x-auto">
      <div className="flex gap-4 w-max lg:gap-6 lg:grid lg:grid-cols-4 lg:w-full pb-4">
        {FeturedJobs.map((item, index) => (
          <motion.div
            key={item.id}
            className="group w-72 lg:w-80 lg:min-w-0 flex border rounded-xl border-gray-200 shadow-sm gap-2 items-start flex-col h-65 p-5 bg-white"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: { duration: 0.2 }
            }}
          >
            <div className="w-full flex items-center justify-between">
              <h1 className="text-5xl">{item.logo}</h1>
              <button className="border border-[#4640de] text-[#4640de] px-2 py-1 text-sm">
                {item.duration}
              </button>
            </div>
            
            <div className="flex flex-col items-start mt-2 w-full">
              <h2 className="text-xl font-bold">{item.jobRole}</h2>
              <p className="flex items-center text-sm opacity-50">
                <span className="mr-1">{item.companyName}</span>
                <BsDot className="opacity-50 mt-1 text-2xl" />
                <span>{item.location}</span>
              </p>
            </div>
            
            <div className="w-full">
              <p className="text-sm opacity-50 h-10 overflow-x-auto">
                {item.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {item.workType.map((workType, inx) => (
                <motion.span
                  key={inx}
                  className={`${
                    workType === 'Marketing' ? 'bg-[#FDF3EB] text-[#e59b1b]' : 
                    workType === 'Technology' ? 'bg-[#fedeff] text-[#C173C6]' :
                    workType === 'Design' ? 'bg-[#EFFAF7] text-[#6ED3B8]' :
                    'bg-[#EDECFC] text-[#5550E0]'
                  } rounded-3xl text-xs py-1 px-3`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {workType}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;