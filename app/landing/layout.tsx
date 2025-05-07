"use client";
import { NextPage } from "next";
import React from "react";
import { Headeritem } from "./config/config";
import logo from "../../public/Frame 3.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NextPageProps {
  children: React.ReactNode;
}

const Landing: NextPage<NextPageProps> = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#202430] min-h-screen">
      <nav className="container mx-auto max-w-screen  px-4 sm:px-6 lg:px-30 h-[78px] flex justify-between items-center text-white">
        <div className="flex items-center gap-2 md:gap-7">
          <div className="flex items-center gap-2">
            <Image className="h-8 w-auto" width={50} height={50} src={`${logo.src}`} alt="logo" />
            <span className="text-xl sm:text-2xl font-bold">JobHuntly</span>
          </div>

          <ul className="hidden md:flex gap-4 cursor-pointer ml-6">
            {Headeritem.map((item) => (
              <li key={item.id}>
                <a className="hover:text-blue-400 transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex gap-2 items-center">
          <Button variant="ghost" className="text-blue-400   rounded-none">
            Login
          </Button>
          <Separator
            orientation="horizontal"
            className=" bg-white rotate-90 "
            style={{ width: "14%" }}
          />
          <Button className="bg-[#4640DE] hover:bg-[#4640DE] rounded-none text-white">
            Sign Up
          </Button>
        </div>

        <Sheet>
          <SheetTrigger>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                <HiMenuAlt2
                  size={30}
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "50%",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                />
              </button>
            </div>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[200px] bg-[#2a3142]  text-white p-5 rounded-tl-lg rounded-bl-lg"
          >
            <SheetHeader className="bg-[#353c4ce3] p-2 mt-3 rounded-lg ">
              JobHuntly
            </SheetHeader>

            <ul className="flex flex-col gap-4">
              {Headeritem.map((item) => (
                <li key={item.id}>
                  <a className="block py-2 hover:text-blue-400">{item.name}</a>
                </li>
              ))}
              <Separator className="" />
              <div className="flex flex-col gap-3 pt-2">
                <Button variant="ghost" className="text-blue-400 w-full">
                  Login
                </Button>
                <Button className="bg-[#4640DE] hover:bg-[#3934C2] text-white w-full">
                  Sign Up
                </Button>
              </div>
            </ul>
          </SheetContent>
        </Sheet>

       

      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {props.children}
      </div>
    </div>
  );
};

export default Landing;
