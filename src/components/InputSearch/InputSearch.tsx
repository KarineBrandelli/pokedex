import { ChangeEvent } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";

interface InputSearchProps {
  handleClick: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  value: string;
}

export default function MenuFilter({
  handleClick,
  value,
  handleChange,
  handleClear,
}: InputSearchProps) {
  return (
    <span className="flex items-center justify-between mr-4">
      <MagnifyingGlass
        size={25}
        onClick={handleClick}
        className="absolute text-blue-600 ml-3 cursor-pointer"
      />
      <input
        type="text"
        value={value}
        placeholder="Search pokemon"
        onChange={handleChange}
        className="bg-blue-100 border-2 focus:border-blue-600 outline-none focus:outline-none transition focus:duration-500 ease-in-out py-3 pl-12 pr-4 w-[100%] min-[434px]:w-[22rem] rounded-xl"
      />
      <X
        size={20}
        onClick={handleClear}
        className="text-blue-600 cursor-pointer -ml-8"
      />
    </span>
  );
}
