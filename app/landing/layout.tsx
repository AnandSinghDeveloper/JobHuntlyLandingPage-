"use client";
import { NextPage } from "next";
import React, { useState } from "react";
import { Headeritem } from "./config/config";
import logo from "../../public/Frame 3.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HiMenuAlt2, HiMoon, HiSun } from "react-icons/hi";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useTheme } from "next-themes"


interface NextPageProps {
  children: React.ReactNode;
}

const Landing: NextPage<NextPageProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="  min-h-screen transition-colors duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-[78px] flex justify-between items-center">
        
        <div className="flex items-center gap-2 md:gap-7">
          <div className="flex items-center gap-2">
            <Image
              className="h-8 w-auto"
              width={50}
              height={50}
              src={logo.src}
              alt="JobHuntly logo"
              priority
            />
            <span className="text-xl sm:text-2xl font-bold text-[#2] ">
              JobHuntly
            </span>
          </div>

          <ul className="hidden md:flex gap-6">
            {Headeritem.map((item) => (
              <li key={item.id}>
                <a className=" hover:text-blue-400 dark:hover:text-blue-400 transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex items-center gap-4">
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200  transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <HiSun className="w-5 h-5 text-yellow-300" />
            ) : (
              <HiMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>

         
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-blue-400 rounded-none">
              Login
            </Button>
            <Separator orientation="vertical" className="h-6 " />
            <Button className="bg-[#4640DE] hover:bg-[#3934C2] rounded-none text-white">
              Sign Up
            </Button>
          </div>

        
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-1 rounded-full border border-gray-400 dark:border-gray-600"
            aria-label="Open menu"
          >
            <HiMenuAlt2
              size={24}
              className=""
            />
          </button>
        </div>

       
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent
            side="right"
            className="w-[250px]  p-5"
          >
            <SheetHeader className=" light:bg-gray-200 p-2 rounded-lg mb-4">
              <span className="">JobHuntly</span>
            </SheetHeader>

            <ul className="flex flex-col gap-3">
              {Headeritem.map((item) => (
                <li key={item.id}>
                  <a className="block py-2  hover:text-blue-400 dark:hover:text-blue-400">
                    {item.name}
                  </a>
                </li>
              ))}
              <Separator className="my-2" />
              <div className="flex flex-col gap-3 pt-2">
                <Button variant="ghost" className="text-blue-400">
                  Login
                </Button>
                <Button className="bg-[#4640DE] hover:bg-[#3934C2] text-white">
                  Sign Up
                </Button>
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>

      <main className="container  mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
};

export default Landing;