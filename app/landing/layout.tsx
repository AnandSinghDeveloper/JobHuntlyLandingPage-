"use client";
import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { Headeritem } from "./config/config";
import logo from "../../public/Frame 3.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HiMenuAlt2, HiMoon, HiSun, HiX } from "react-icons/hi";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface NextPageProps {
  children: React.ReactNode;
}

const Landing: NextPage<NextPageProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {  setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      color: "#60a5fa", // blue-400
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen transition-colors duration-300 ">
      {/* Navigation Bar */}
      <motion.nav 
        className="container mx-auto px-4 sm:px-6 lg:px-8 h-[78px] flex justify-between items-center sticky top-0 z-50 "
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 md:gap-7">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              className="h-8 w-auto"
              width={50}
              height={50}
              src={logo.src}
              alt="JobHuntly logo"
              priority
            />
            <span className="text-xl sm:text-2xl font-bold ">
              JobHuntly
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            {Headeritem.map((item, i) => (
              <motion.li 
                key={item.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover="hover"
              >
                <a 
                  className={`font-medium transition-colors ${pathname === item.path ? 'text-blue-500 dark:text-blue-400' : ' '}`}
                  href={item.path}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {resolvedTheme === "dark" ? (
              <HiSun className="w-5 h-5 text-yellow-300" />
            ) : (
              <HiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </motion.button>

          {/* Desktop Auth Buttons */}
          <motion.div 
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button variant="ghost" className="text-blue-500 dark:text-blue-400 rounded-lg">
                Login
              </Button>
            </motion.div>
            <Separator orientation="vertical" className="h-6 bg-gray-300 dark:bg-gray-600" />
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button className="bg-[#4640DE] hover:bg-[#3934C2] rounded-lg text-white">
                Sign Up
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-600"
            aria-label="Open menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMenuAlt2 size={20} className="text-gray-600 dark:text-gray-300" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetContent
                  side="right"
                  className="w-[280px] p-5"
                >
                  <SheetHeader className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold text-gray-800 dark:text-white">JobHuntly</span>
                    <button 
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <HiX size={24} className="text-gray-600 dark:text-gray-300" />
                    </button>
                  </SheetHeader>

                  <motion.ul 
                    className="flex flex-col gap-4"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    {Headeritem.map((item, i) => (
                      <motion.li 
                        key={item.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ x: 5 }}
                      >
                        <a 
                          className={`block py-2 px-3 rounded-lg font-medium ${pathname === item.path ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                          href={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                    <Separator className="my-2" />
                    <motion.div 
                      className="flex flex-col gap-3 pt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button 
                        variant="ghost" 
                        className="text-blue-500 dark:text-blue-400 rounded-lg"
                      >
                        Login
                      </Button>
                      <Button 
                        className="bg-[#4640DE] hover:bg-[#3934C2] text-white rounded-lg"
                      >
                        Sign Up
                      </Button>
                    </motion.div>
                  </motion.ul>
                </SheetContent>
              </Sheet>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <motion.main 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <div className="footer-container bg-[#202430] dark:bg-gray-950 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;