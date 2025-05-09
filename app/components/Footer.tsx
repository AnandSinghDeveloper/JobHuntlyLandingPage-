import { Separator } from '@/components/ui/separator'
import React from 'react'
import logo from "../../public/Frame 3.png";
import Image from "next/image";
import { About, Resources } from "../landing/config/config";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const socialIconVariants = {
  hover: {
    y: -5,
    scale: 1.1,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.9
  }
};

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      className='flex flex-col w-full lg:p-20 bg-[#202430]'
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <div className='flex flex-col items-start text-white lg:flex-row lg:justify-between gap-8 p-10 lg:h-70 sm:p-5'>
        
        <motion.div 
          className='flex flex-col gap-4'
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <Image
              className="h-8 w-auto"
              width={50}
              height={50}
              src={logo.src}
              alt="JobHuntly logo"
              priority
            />
            <span className="text-xl sm:text-2xl font-bold text-white">
              JobHuntly
            </span>
          </div>
          <motion.p 
            className='text-sm opacity-70 lg:max-w-[300px] text-left'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Great platform for the job seeker that passionate about startups. Find your dream job easier.
          </motion.p>
        </motion.div>

        {/* Links Sections */}
        <motion.div 
          className='flex justify-between w-full lg:w-auto lg:gap-20'
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className='text-xl font-semibold mb-5'>About</h2>
            <ul className='flex flex-col gap-3'>
              {About.map((item) => (
                <motion.li 
                  key={item.id} 
                  className='text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer text-left'
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className='text-xl font-semibold mb-5'>Resources</h2>
            <ul className='flex flex-col gap-3'>
              {Resources.map((item) => (
                <motion.li 
                  key={item.id} 
                  className='text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer text-left'
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          className='text-start lg:w-[350px] flex flex-col gap-5'
          variants={itemVariants}
        >
          <h2 className='text-xl font-semibold'>Get jobs notifications</h2>
          <p className='text-sm opacity-70 text-left'>
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <motion.div 
            className='flex flex-col lg:flex-row gap-3'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <input 
              type="text" 
              placeholder="Email Address" 
              className='bg-white p-3 text-black outline-none rounded-md flex-grow' 
            />
            <motion.button 
              className='bg-[#4640DE] text-white px-6 py-3 rounded-md hover:bg-[#3a35c2] transition-colors'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <Separator orientation='horizontal' className='mt-5 w-full bg-gray-700' />

      {/* Copyright and Socials */}
      <motion.div 
        className='flex flex-col items-center gap-4 lg:flex-row lg:justify-between p-6 text-white opacity-70 text-sm'
        variants={itemVariants}
      >
        <div>2021 @ JobHuntly. All rights reserved.</div>
        <div className='flex gap-4'>
          {[FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaSnapchatSquare, FaSquareTwitter].map((Icon, index) => (
            <motion.div
              key={index}
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
              className='cursor-pointer'
            >
              <Icon className='text-2xl hover:text-[#4640DE] transition-colors' />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer