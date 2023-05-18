import axios from "axios";
import { useContext, useEffect } from "react";

import { AppContext } from "../context/AppContext";

import { useNavigate } from "react-router-dom";

import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import InputSearch from "../components/InputSearch/InputSearch";
import { Dropdowns } from "../components/Dropdowns/Dropdowns";

export default function Home() {
  const history = useNavigate();

  const {
    list,
    setList,
    pokemonTypeName,
    isLoading,
    setIsLoading,
    isSearching,
    isGeneration,
    limit,
    offset,
  } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => {
        setTimeout(() => setIsLoading(false), 500);
        setList(response.data.results);
      });
  }, [offset]);

  function addPokemon(name: string, url: string) {
    const storedData = localStorage.getItem("user-info");

    if (storedData) {
      const profilePokemons = JSON.parse(storedData);
      const userDataPokemons = {
        ...profilePokemons,
        pokemons: [...profilePokemons.pokemons, { name, url }],
      };

      localStorage.setItem("user-info", JSON.stringify(userDataPokemons));
      alert("You've captured that pokemon!");
    } else {
      history("/UserInfo");
    }
  }

  return (
    <>
      <Header />
      <div className="w-[85%] mx-auto flex flex-wrap items-center justify-center gap-5 min-[829px]:justify-between py-10">
        <InputSearch />
        <Dropdowns />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <main className="w-[85%] mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {list.map((item) => (
              <Card
                typePokemon={pokemonTypeName}
                setRotate={false}
                key={item.name}
                name={item.name}
                url={item.url}
                handleClick={() => addPokemon(item.name, item.url)}
              />
            ))}
          </div>
        </main>
      )}

      <Pagination setHidden={isSearching && !isLoading && !isGeneration} />
    </>
  );
}
