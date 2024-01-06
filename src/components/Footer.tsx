"use client";

import React from "react";
import { ThemeContextType, useDark } from "@/context/ThemeContext";

const Footer = () => {
  const { setIsDark, isDark } = useDark() as ThemeContextType;
  return (
    <div className={isDark ? "dark" : ""}>
      <footer className="dark:bg-indigo-950 bg-sky-200 text-indigo-950 fixed bottom-0 left-0 right-0 dark:text-white text-center py-5 text-xs">
        <h2>© 2024 LinkOn Short Link & Qr generate</h2>
      </footer>
    </div>
  );
};

export default Footer;
