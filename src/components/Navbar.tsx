"use client";

import { ThemeContextType, useDark } from "@/context/ThemeContext";
import Link from "next/link";
import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { IoMdMail, IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  const { setIsDark, isDark } = useDark() as ThemeContextType;

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-sky-200 dark:bg-indigo-950 fixed top-0 left-0 right-0">
        <nav className="w-full py-5 container mx-auto px-10 text-indigo-950 dark:text-white text-2xl font-bold flex items-center justify-between">
          <h1>
            <Link href={"/"}>LinkOn</Link>
          </h1>
          <div className="flex items-center gap-3">
            <Link href={"https://www.instagram.com/_raizafr/"} target="_blank">
              <AiFillInstagram />
            </Link>
            <Link href={"https://github.com/raizafr"} target="_blank">
              <IoLogoGithub />
            </Link>
            <Link href={"mailto:mhdraizafarhan@gmail.com"} target="_blank">
              <IoMdMail />
            </Link>
            <div className="border-l-2 dark:border-sky-200 border-indigo-950 h-7 w-1" />
            <label className="flex cursor-pointer">
              <input
                type="checkbox"
                onChange={() => setIsDark(!isDark)}
                className="hidden"
              />
              {isDark ? <LuSun /> : <LuMoon />}
            </label>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
