import { useState } from "react";
import dataGeneration from "../../utils/dataGeneration";

interface GenerationProps {
  handleClick: (id: number) => void;
}

export default function DropdownPokemonGeneration({
  handleClick,
}: GenerationProps) {
  const [generationText, setGenerationText] = useState<string>("");

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
              handleClick(i);
              setGenerationText(pokeGeneration.text);
            }}
            key={`${pokeGeneration.id}-${i}`}
          >
            <a className="active:bg-blue-800">{pokeGeneration.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
