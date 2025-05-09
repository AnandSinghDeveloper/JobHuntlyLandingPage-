"use client";
import React from "react";
import { SiVodafone, SiTesla, SiIntel, SiAmd } from "react-icons/si";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const companies = [
  {
    id: 1,
    icon: <SiVodafone className="text-4xl" />,
    name: "Vodafone",
    color: "#E60000"
  },
  {
    id: 2,
    icon: <SiTesla className="text-4xl" />,
    name: "Tesla",
    color: "#E82127"
  },
  {
    id: 3,
    icon: <SiIntel className="text-6xl" />,
    name: "Intel",
    color: "#0071C5"
  },
  {
    id: 4,
    icon: <SiAmd className="text-7xl" />,
    name: "AMD",
    color: "#ED1C24"
  },
  {
    id: 5,
    icon: <span className="text-4xl font-bold">Talkit</span>,
    name: "Talkit",
    color: "#333333"
  }
];

const Companypage = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center py-8 px-4">
      {companies.map((company, index) => (
        <motion.div
          key={company.id}
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ 
            opacity: 1,
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <div 
            className="flex items-center justify-center"
            style={{ color: company.color }}
          >
            {company.icon}
          </div>
          {company.name && (
            <Label className="text-lg font-medium mt-2 dark:text-white">
              {company.name}
            </Label>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Companypage;