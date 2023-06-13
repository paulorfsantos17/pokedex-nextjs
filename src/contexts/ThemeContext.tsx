"use client";

interface IValue {
  theme: boolean;
  changeValue: () => void;
}

import { createContext, useState } from "react";

export const ThemeContext = createContext<IValue>({
  theme: false,
  changeValue: () => {},
});

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<boolean>(false);
  const changeTheme = () => {
    setTheme(!theme);
  };

  const value: IValue = {
    changeValue: changeTheme,
    theme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
