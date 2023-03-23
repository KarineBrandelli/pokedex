import { MagnifyingGlass } from "@phosphor-icons/react";

import DropdownPokemonType from "../DropdownPokemonType/DropdownPokemonType";
import DropdownPokemonGeneration from "../DropdownPokemonGeneration/DropdownPokemonGeneration";

export default function MenuFilter() {
  return (
    <div className="w-[85%] mx-auto flex flex-wrap items-center justify-center gap-5 min-[829px]:justify-between py-10">
      <span className="flex items-center mr-4">
        <MagnifyingGlass
          size={25}
          className="absolute text-blue-600 ml-3 cursor-pointer"
        />
        <input
          type="search"
          placeholder="Search pokemon"
          className="bg-blue-100 border-2 focus:border-blue-600 outline-none focus:outline-none transition focus:duration-500 ease-in-out py-3 pl-12 pr-4 w-[100%] min-[434px]:w-[22rem] rounded-xl"
        />
      </span>
      <span className="flex max-[400px]:flex-col items-center max-[400px]:gap-4 gap-8">
        <DropdownPokemonType />
        <DropdownPokemonGeneration />
      </span>
    </div>
  );
}
