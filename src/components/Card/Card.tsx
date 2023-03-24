import axios from "axios";
import { useState, useEffect } from "react";

import { Plus } from "@phosphor-icons/react";
import colors from "../../utils/pokemonTypeColor";
import { getImageURL } from "../../utils/getImageURL";

interface PokemonProps {
  name: string;
  url: string;
}
interface PokemonInfoProps {
  base_experience: number;
  types: Array<PokemonType>;
  id: number;
}
interface PokemonType {
  type: {
    name: string;
  };
}

const Card = ({ name, url }: PokemonProps) => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoProps>({
    base_experience: 0,
    types: [{ type: { name: "fire" } }],
    id: 1,
  });

  const pokemonId = pokemonInfo.id;
  const imgURL = getImageURL(pokemonId);
  const pokemonType = pokemonInfo.types.map(
    (item: PokemonType) => item.type.name
  );

  const firstPokemonType: string = pokemonType[0];

  function handleColor(color: string): string | undefined {
    return colors[color];
  }

  useEffect(() => {
    axios.get(url).then((response) => setPokemonInfo(response.data));
  }, []);

  return (
    <div
      className={`${handleColor(
        firstPokemonType
      )} flex justify-between rounded-3xl h-64 shadow-lg p-4 hover:scale-105 transition duration-500 ease-in-out`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-gray-200 italic text-lg">
            <small>#</small> {pokemonId}
          </p>
          <h1 className="text-2xl md:text-3xl font-bold pt-2 text-white capitalize">
            {name}
          </h1>
        </div>
        <div className="flex flex-col text-center gap-2">
          {pokemonType.map((type, i: number) => (
            <span
              key={`${type}-${i}`}
              className="text-sm md:text-base rounded-full w-20 py-0.5 text-white font-semibold bg-white/30"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <span className="flex gap-5 font-semibold text-white text-lg">
          <p>
            {pokemonInfo.base_experience} <span className="text-sm">XP</span>
          </p>
          <p className="rounded-full bg-gray-700/20 p-1 cursor-pointer">
            <Plus size={20} />
          </p>
        </span>
        <img src={imgURL} className="w-[11rem] h-[85%]"></img>
      </div>
    </div>
  );
};

export default Card;