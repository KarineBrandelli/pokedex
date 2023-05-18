import axios from "axios";
import { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";
import dataGeneration from "../../utils/dataGeneration";

export default function DropdownPokemonGeneration() {
  const {
    setList,
    setIsLoading,
    setIsGeneration,
    generationText,
    setGenerationText,
  } = useContext(AppContext);

  function getPokemonGeneration(index: number) {
    const getURL: Array<string> = [];

    dataGeneration.map((generationURL) => {
      getURL.push(generationURL.url);
    });

    for (let i = 0; i < getURL.length; i++) {
      if (index === i) {
        setIsLoading(true);
        axios.get(`${getURL[i]}`).then((response) => {
          setTimeout(() => setIsLoading(false), 1000);
          setIsGeneration(true);
          setList(response.data.results);
        });
      }
    }
  }

  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn bg-blue-800 border-none hover:bg-blue-600"
      >
        Filter: Generation {generationText}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-bold"
      >
        {dataGeneration.map((pokeGeneration, i: number) => (
          <li
            onClick={() => {
              getPokemonGeneration(i);
              setGenerationText(pokeGeneration.text);
            }}
            key={`${pokeGeneration.id}-${i}`}
          >
            <a className="active:bg-blue-800 text-sm sm:text-base">
              {pokeGeneration.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
