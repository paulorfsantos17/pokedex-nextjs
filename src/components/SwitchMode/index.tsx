"use client";
import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function SwitchMode() {
  const theme = useContext(ThemeContext);
  return (
    <label className="relative inline-flex items-center cursor-pointer ">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={theme.changeValue}
      />
      <div
        className={`w-16 h-7 peer-focus:outline-none  rounded-full peer dark:bg-black 
                    flex items-center justify-between
                    peer-checked:after:translate-x-9 peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] after:bg-secondary-light after:rounded-full 
                    after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary-light 
                  peer-checked:after:bg-checked-light`}>
        <Moon size={16} color="#fafafa" className="z-40 ml-[5px]" />
        <Sun size={16} color="#fafafa" className="z-40 mr-[5px]" />
      </div>
    </label>
  );
}
