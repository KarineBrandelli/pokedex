import axios from "axios";

import { useContext, ChangeEvent } from "react";
import { AppContext } from "../../context/AppContext";

import { MagnifyingGlass, X } from "@phosphor-icons/react";

export default function MenuFilter() {
  const {
    setList,
    inputValue,
    setInputValue,
    setIsLoading,
    setIsSearching,
    limit,
    offset,
  } = useContext(AppContext);

  function findPokemonInput() {
    if (inputValue.length !== 0) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then((response) => {
          const { name } = response.data;
          setList([
            { name, url: `https://pokeapi.co/api/v2/pokemon/${inputValue}` },
          ]);
          setIsSearching(false);
        })
        .catch((error) => {
          alert("Pokemon not found");
        });
    }
  }

  function clearInputValue() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit${limit}`)
      .then((response) => {
        setTimeout(() => setIsLoading(false), 500);
        setList(response.data.results);
        setInputValue("");
        setIsSearching(true);
      });
  }

  return (
    <span className="flex items-center justify-between mr-4">
      <MagnifyingGlass
        size={23}
        onClick={findPokemonInput}
        className="absolute text-blue-600 ml-3 cursor-pointer"
      />
      <input
        type="text"
        value={inputValue}
        placeholder="Search pokemon"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        className="bg-blue-100 border-2 focus:border-blue-600 outline-none focus:outline-none transition focus:duration-500 ease-in-out py-3 pl-12 pr-4 min-[434px]:w-[22rem] rounded-xl text-sm sm:text-base"
      />
      <X
        size={18}
        onClick={clearInputValue}
        className="text-blue-600 cursor-pointer -ml-8"
      />
    </span>
  );
}
