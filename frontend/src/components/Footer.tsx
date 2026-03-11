"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="md:mt-[120px]  shadow-[0_-4px_6px_-1px_#0000001a] ">
      <nav className="bg-white py-[40px]  px-[20px] md:px-0 ">
        <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-between container snap-y">
          <div>
                <Image
                  src="/logo.svg"
                  className="filter brightness-75 contrast-200 hidden md:block"
                  width={105}
                  height={100}
                  priority
                  alt="logo" 
                />
                <Image
                  src="/logo.svg"
                  className="filter brightness-75 contrast-200 block md:hidden"
                  width={120}
                  height={40}
                  priority
                  alt="logo" 
                />
          </div>
              <div className="flex flex-col text-black font-medium text-[14px] md:text-[18px]">
                © 2026 SportcMen
                {/* <Link target="_blank" href="https://wa.me/+996704138085">+996(704)-13-80-85</Link>
                <Link target="_blank" href="https://wa.me/+996509115993">+996(509)-11-59-93</Link> */}
              </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
