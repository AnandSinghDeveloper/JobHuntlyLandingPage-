"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Dstopcompany from "../../public/Dashboard Company.png";
import { motion } from "framer-motion";

const CTApage = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[400px] lg:h-[500px] p-8 lg:p-16 text-white rounded-tl-[80px] rounded-br-[80px] bg-[#4640de] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Text Content */}
      <motion.div 
        className="flex flex-col gap-6 lg:gap-8 max-w-2xl z-10"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Start posting jobs today
        </h2>
        <p className="text-lg lg:text-xl opacity-90">
          Start posting jobs for only <span className="font-bold">$10</span>
        </p>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button 
            className="bg-white text-[#4640de] hover:bg-gray-100 text-lg py-6 px-8 rounded-lg w-full sm:w-auto"
            size="lg"
          >
            Sign Up for Free
          </Button>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="relative w-full lg:w-1/2 h-[300px] lg:h-full mt-10 lg:mt-0"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={Dstopcompany}
          alt="Company Dashboard"
          fill
          className="object-contain object-right"
          quality={100}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default CTApage;