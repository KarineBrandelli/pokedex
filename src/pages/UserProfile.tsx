import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import { useState, useEffect } from "react";
import { ArrowLeft, UserCircle } from "@phosphor-icons/react";

import Pokedex from "../assets/pokedex.png";

interface UserInformation {
  name: string;
  email: string;
}

interface PokemonFilterProps {
  name: string;
  url: string;
}

export default function UserProfile({ name, email }: UserInformation) {
  const [userProfileInfo, setUserProfileInfo] = useState<UserInformation>({
    name: "Your Username",
    email: "youruser@domain.com",
  });

  const [userPokemons, setUserPokemons] = useState<
    Array<{ name: string; url: string }>
  >([
    {
      name: "Pikachu",
      url: "https://pokeapi.co/api/v2/pokemon/pikachu",
    },
  ]);

  useEffect(() => {
    const storedData = localStorage.getItem("user-info");

    if (storedData) {
      const profilePokemons = JSON.parse(storedData);
      setUserPokemons(profilePokemons.pokemons);
      setUserProfileInfo({
        name: profilePokemons.name,
        email: profilePokemons.email,
      });
    }
  }, []);

  function removePokemon(name: string) {
    const storedData = localStorage.getItem("user-info");

    if (storedData) {
      const profilePokemons = JSON.parse(storedData);

      const findPokemonName = profilePokemons.pokemons.filter(
        (pokemon: PokemonFilterProps) => pokemon.name !== name
      );

      const userData = {
        ...profilePokemons,
        pokemons: findPokemonName,
      };

      localStorage.setItem("user-info", JSON.stringify(userData));
      setUserPokemons(findPokemonName);
    }
  }

  return (
    <>
      <nav className="bg-blue-800 px-10 py-3 sticky top-0">
        <img src={Pokedex} className="w-[11rem] max-[375px]:mx-auto"></img>
      </nav>
      <div className="w-[85%] mx-auto pt-10 pb-5 flex text-blue-600 font-bold">
        <Link to={"/"} className="flex items-center gap-4">
          <ArrowLeft size={28} />
          <span className="text-lg">Find Pokemons</span>
        </Link>
      </div>

      <div className="w-[85%] mx-auto">
        <div className="flex max-[465px]:flex-col max-[465px]:mx-auto items-center gap-3 max-w-fit p-4 bg-gradient-to-r from-yellow-400/80 to-yellow-300/80 md:text-lg font-bold rounded-xl">
          <span className="text-blue-600 text-[4rem] sm:text-[6rem]">
            <UserCircle />
          </span>
          <div className="flex flex-col max-[465px]:items-center gap-3 text-white ">
            <p className="bg-blue-600 max-w-fit px-3 py-1 rounded-lg flex flex-wrap gap-1 justify-center text-sm sm:text-base">
              Name: <span>{userProfileInfo.name}</span>
            </p>
            <p className="bg-blue-600 max-w-fit px-3 py-1 rounded-lg flex flex-wrap gap-1 justify-center text-sm sm:text-base">
              Email: <span>{userProfileInfo.email}</span>
            </p>
          </div>
        </div>

        <h2 className="pt-7 pb-5 max-[465px]:text-center text-2xl md:text-3xl text-blue-600 font-bold">
          Your Pokédex!
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 pb-7">
          {userPokemons.length === 0 ? (
            <div className="bg-gradient-to-r from-blue-800 to-blue-500 flex flex-col gap-5 justify-center items-center text-center rounded-3xl h-64 shadow-lg p-4 md:text-xl text-white font-semibold">
              <p>You don't have any pokemons in your favorites yet.</p>
              <p>Go back and add some pokemons to your profile!</p>
            </div>
          ) : (
            userPokemons.map((pokemon, i: number) => (
              <Card
                typePokemon={""}
                setRotate={true}
                key={`${pokemon.name}-${i}`}
                name={pokemon.name}
                url={pokemon.url}
                handleClick={() => removePokemon(pokemon.name)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
