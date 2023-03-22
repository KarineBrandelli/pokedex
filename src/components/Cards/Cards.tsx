import axios from "axios";
import { useState, useEffect } from "react";
import { getImageURL } from "../../utils/getImageURL";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Pokemons() {
  const [list, setList] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=24")
      .then((response) => setList(response.data.results));
  }, []);

  return (
    <main className="w-[85%] mx-auto">
      <div className="flex items-center justify-center min-[406px]:justify-start py-10">
        <input
          type="search"
          placeholder="Search pokemon"
          className="bg-blue-100 border-2 focus:border-blue-600 outline-none focus:outline-none transition focus:duration-500 ease-in-out py-3 px-5 w-[90%] min-[406px]:w-[22rem] rounded-xl"
        />
        <MagnifyingGlass
          size={25}
          className="text-blue-600 -ml-10 cursor-pointer"
        />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
        {list.map((item) => (
          <Pokemon key={item.name} name={item.name} url={item.url} />
        ))}
      </div>
    </main>
  );
}

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

const Pokemon = ({ name, url }: PokemonProps) => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoProps>({
    base_experience: 0,
    types: [{ type: { name: "grass" } }],
    id: 1,
  });

  const pokemonId = pokemonInfo.id;
  const imgURL = getImageURL(pokemonId);
  const pokemonType = pokemonInfo.types.map(
    (item: PokemonType) => item.type.name
  );

  useEffect(() => {
    axios.get(url).then((response) => setPokemonInfo(response.data));
  }, []);

  function handleName(name: string) {
    const newName = name.charAt(0).toUpperCase() + name.slice(1);

    return newName;
  }

  console.log(pokemonInfo);

  return (
    <div className="bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400 flex justify-between rounded-3xl h-64 shadow-lg p-4 hover:scale-105 transition duration-500 ease-in-out">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-gray-200 italic text-lg">
            <small>#</small> {pokemonId}
          </p>
          <h1 className="text-4xl font-bold pt-6 pb-12 text-white">
            {handleName(name)}
          </h1>
        </div>
        <div className="flex flex-col text-center gap-2">
          {pokemonType.map((type, i: number) => (
            <span
              key={`${type}-${i}`}
              className="rounded-full w-20 py-0.5 text-white font-semibold bg-green-300/60"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="font-semibold text-white text-lg">
          {pokemonInfo.base_experience} <span className="text-sm">XP</span>
        </p>
        <img src={imgURL} className="w-[11rem] h-[85%]"></img>
      </div>
    </div>
  );
};
