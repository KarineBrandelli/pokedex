import { NavigateFunction } from "react-router-dom"

export function addPokemon(name: string, url: string, history: NavigateFunction) {
  const storedData = localStorage.getItem('user-info')

  if (storedData) {
    const profilePokemons = JSON.parse(storedData)
    const userDataPokemons = {
      ...profilePokemons,
      pokemons: [...profilePokemons.pokemons, { name, url }],
    }

    localStorage.setItem('user-info', JSON.stringify(userDataPokemons))
    alert("You've captured that pokemon!")
  } else {
    history('/UserInfo')
  }
}
