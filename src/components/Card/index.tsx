import Image from "next/image";
import React from "react";
import { TagType } from "../TagType";

export function Card() {
  return (
    <div className="flex w-80 h-40 bg-type-grass rounded-lg items-center border-type-grass-border border-2d drop-shadow-lg max-w-[240px]">
      <Image
        className="mb-auto"
        width={128}
        height={118}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
        alt="pokemon"
      />
      <div className="flex flex-col w-full p-4 h-full">
        <p className="self-end text-sm text-white">#001</p>
        <h3 className="text-white font-bold text-lg">Bulbasaur</h3>
        <div>
          <TagType />
        </div>
      </div>
    </div>
  );
}
