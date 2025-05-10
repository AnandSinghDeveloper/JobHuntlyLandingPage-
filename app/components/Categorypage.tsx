"use client";
import React from "react";
import { exploreByCategory } from "../landing/config/config";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Categorypage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10">
      {exploreByCategory.map((item, index) => (
        <motion.div
          key={item.id}
          className="group relative w-full text-black flex items-center gap-4 lg:items-start lg:flex-col p-5 bg-white  rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#4640de]/30 overflow-hidden"
          whileHover={{ 
            y: -5,
            backgroundColor: "#4640de",
            transition: { duration: 0.3 }
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {/* Icon */}
          <div className="text-4xl text-[#4640de] group-hover:text-white transition-colors duration-300">
            {item.icon}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1 lg:gap-2">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-800  group-hover:text-white transition-colors duration-300">
              {item.name}
            </h3>
            <p className="flex items-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-white/80 transition-colors duration-300">
              <span className="font-medium mr-2">{item.numberOfJobs}</span>
              {item.description}
            </p>
          </div>

          {/* Arrow - Desktop */}
          <div className="hidden lg:block absolute right-5 bottom-5 text-2xl text-gray-400 group-hover:text-white transition-colors duration-300">
            <IoIosArrowRoundForward />
          </div>

          {/* Arrow - Mobile */}
          <div className="lg:hidden ml-auto text-2xl text-gray-400 group-hover:text-white transition-colors duration-300">
            <IoIosArrowRoundForward />
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-[#4640de] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export default Categorypage;