import axios from "axios";
import { useState, useEffect } from "react";

import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import MenuFilter from "../components/MenuFilter/MenuFilter";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {
  const [list, setList] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=48")
      .then((response) => setList(response.data.results));
  }, []);

  console.log(list);

  return (
    <>
      <Header />
      <MenuFilter />
      <main className="w-[85%] mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {list.map((item) => (
            <Card key={item.name} name={item.name} url={item.url} />
          ))}
        </div>
      </main>
      <Pagination />
    </>
  );
}
