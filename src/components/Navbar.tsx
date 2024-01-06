"use client";

import { ThemeContextType, useDark } from "@/context/ThemeContext";
import Link from "next/link";
import React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
  const { setIsDark, isDark } = useDark() as ThemeContextType;

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-sky-200 dark:bg-indigo-950 fixed top-0 left-0 right-0">
        <nav className="w-full py-5 container mx-auto px-10 text-indigo-950 dark:text-white text-2xl font-bold flex items-center justify-between">
          <h1>
            <Link href={"/"}>LinkOn</Link>
          </h1>
          <label className="flex">
            <input
              type="checkbox"
              onChange={() => setIsDark(!isDark)}
              className="hidden"
            />
            {isDark ? <LuSun /> : <LuMoon />}
          </label>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
