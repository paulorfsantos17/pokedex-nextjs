"use client";

import React, { useContext } from "react";
import { HambuguerMenu } from "../hambugerMenu";
import SwitchMode from "../SwitchMode";
import { ThemeContext } from "@/contexts/ThemeContext";

export function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`${!theme && "dark"}`}>
      <div className="p-5 bg-white dark:bg-bgdark flex justify-between items-center md:justify-end md:dark:bg-gray-600 md:bg-gray-300 md:h-12">
        <HambuguerMenu />
        <SwitchMode />
      </div>
    </header>
  );
}
