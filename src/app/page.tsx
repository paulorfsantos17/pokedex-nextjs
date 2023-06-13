"use client";

import { Card } from "@/components/Card";
import Input from "@/components/Input/input";
import SwitchMode from "@/components/SwitchMode";
import { HambuguerMenu } from "@/components/hambugerMenu";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${!theme && "dark"}`}>
      <div className=" p-5 bg-white dark:bg-bgdark">
        <main className="md:p-4 flex flex-col items-center">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-[32px] font-bold text-primary-light dark:text-white leading-relaxed md:text-lg">
              Qual Pokémon você está procurando?
            </h2>
            <Input />
          </div>
          <div className=" mt-10 flex flex-col items-center justify-center gap-4 md:flex-row flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>
    </div>
  );
}
