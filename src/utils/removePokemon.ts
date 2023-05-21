import { Pokemon } from '../types/Pokemon'

export function removePokemon(
  name: string,
  setUserPokemons: React.Dispatch<
    React.SetStateAction<Array<{ name: string; url: string }>>
  >,
) {
  const storedData = localStorage.getItem('user-info')

  if (storedData) {
    const profilePokemons = JSON.parse(storedData)

    const findPokemonName = profilePokemons.pokemons.filter(
      (pokemon: Pokemon) => pokemon.name !== name,
    )

    const userData = {
      ...profilePokemons,
      pokemons: findPokemonName,
    }

    localStorage.setItem('user-info', JSON.stringify(userData))
    setUserPokemons(findPokemonName)
  }
}
