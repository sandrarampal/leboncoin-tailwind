import { useState } from "react";
import type { ReactNode } from "react";
import { DarkModeContext } from "../DarkModeContext";

type TCompProps = {
  children: ReactNode;
};

export const DarkModeProvider = ({ children }: TCompProps) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkMode, setDarkMode: setDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
