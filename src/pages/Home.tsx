import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";

import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import InputSearch from "../components/InputSearch/InputSearch";
import DropdownPokemonType from "../components/DropdownPokemonType/DropdownPokemonType";
import DropdownPokemonGeneration from "../components/DropdownPokemonGeneration/DropdownPokemonGeneration";

import dataGeneration from "../utils/dataGeneration";

export default function Home() {
  const [list, setList] = useState<{ name: string; url: string }[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [isGeneration, setIsGeneration] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit${limit}`)
      .then((response) => {
        setTimeout(() => setIsLoading(false), 500);
        setList(response.data.results);
      });
  }, [offset]);

  function findPokemonInput() {
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

  function findPokemonType() {}

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

  const history = useNavigate();

  function addPokemon(name: string, url: string) {
    const storedData = localStorage.getItem("user-info");

    if (storedData) {
      const profilePokemons = JSON.parse(storedData);
      const userDataPokemons = {
        ...profilePokemons,
        pokemons: [...profilePokemons.pokemons, { name, url }],
      };

      localStorage.setItem("user-info", JSON.stringify(userDataPokemons));
      alert("You catch that pokemon!");
    } else {
      history("/UserInfo");
    }
  }

  return (
    <>
      <Header />
      <div className="w-[85%] mx-auto flex flex-wrap items-center justify-center gap-5 min-[829px]:justify-between py-10">
        <InputSearch
          value={inputValue}
          handleClear={clearInputValue}
          handleClick={findPokemonInput}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <span className="flex max-[400px]:flex-col items-center max-[400px]:gap-4 gap-8">
          <DropdownPokemonGeneration handleClick={getPokemonGeneration} />
          <DropdownPokemonType handleClick={findPokemonType} />
        </span>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <main className="w-[85%] mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {list.map((item) => (
              <Card
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

      <Pagination
        setHidden={isSearching && !isLoading && !isGeneration}
        handlePrevious={() => setOffset(offset - limit)}
        handleNext={() => setOffset(offset + limit)}
      />
    </>
  );
}
