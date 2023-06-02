export const fetchPokemons = async (offset: number, limit: number) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  const response = await fetch(URL)
  const data = await response.json()
  const results = data.results

  return results
}
