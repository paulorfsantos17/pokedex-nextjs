import { Search } from "lucide-react";
import React from "react";

export default function Input() {
  return (
    <label
      className="w-full h-10 flex items-center gap-2 px-4 text-white dark:bg-black 
                      bg-third-light rounded-full md:max-w-[300px]">
      <Search className="text-primary-light dark:text-white" />
      <input
        className="bg-transparent w-full placeholder:text-sm focus:outline-none dark:placeholder:text-white placeholder:text-primary-light"
        placeholder="Digite o nome do Pokémon..."
      />
    </label>
  );
}
