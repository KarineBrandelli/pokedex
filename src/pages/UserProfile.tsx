import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, UserCircle } from "@phosphor-icons/react";

interface UserInformation {
  name: string;
  email: string;
}

export default function UserProfile({ name, email }: UserInformation) {
  const [userProfileInfo, setUserProfileInfo] = useState<UserInformation>({
    name: "Jane Doe",
    email: "janedoe@domain.com",
  });

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

      console.log(findPokemonName);

      localStorage.setItem("user-info", JSON.stringify(userData));
      setUserPokemons(findPokemonName);
    }
  }

  return (
    <>
      <nav className="bg-blue-800 px-10 py-3 flex min-[340px]:justify-between justify-center sticky top-0">
        <img src="src/assets/pokedex.png" className="w-[11rem]"></img>
      </nav>
      <div className="w-[85%] mx-auto pt-10 pb-5 flex text-blue-600 font-bold">
        <Link to={"/"} className="flex items-center gap-4">
          <ArrowLeft size={28} />
          <span className="text-lg">Go Back</span>
        </Link>
      </div>

      <div className="w-[85%] mx-auto">
        <div className="flex max-[465px]:flex-col max-[465px]:mx-auto items-center gap-5 w-fit py-6 pl-2 pr-4 bg-gradient-to-r from-yellow-400/80 to-yellow-300/80 md:text-lg font-bold rounded-xl">
          <span className="text-blue-600">
            <UserCircle size={100} />
          </span>
          <div className="flex flex-col max-[465px]:items-center gap-3 text-white ">
            <span className="bg-blue-600 w-fit px-3 py-1 rounded-lg">
              Name: {userProfileInfo.name}
            </span>
            <span className="bg-blue-600 w-fit px-3 py-1 rounded-lg">
              Email: {userProfileInfo.email}
            </span>
            <span className="text-blue-600 w-fit rounded-lg cursor-pointer">
              Sign Out
            </span>
          </div>
        </div>

        <h2 className="pt-10 pb-5 max-[465px]:text-center text-2xl md:text-3xl text-blue-600 font-bold">
          Your Pokédex!
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-800 to-blue-500 flex flex-col gap-5 justify-center items-center text-center rounded-3xl h-64 shadow-lg p-4 md:text-xl text-white font-semibold">
            <p>You don't have any pokemons in your favorites yet.</p>
            <p>Go back and add some pokemons to your profile!</p>
          </div>
        </div>
      </div>
    </>
  );
}
