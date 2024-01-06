"use client";

import { createContext, useContext, useState } from "react";

export interface ThemeContextType{
  isDark:boolean;
  setIsDark:React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType|{}>({});

const ThemeContextProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ setIsDark, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useDark = () => useContext(ThemeContext);

export { useDark, ThemeContextProvider };
