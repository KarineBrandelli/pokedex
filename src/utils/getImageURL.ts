export const getImageURL = (pokemonId: number) => {
  const baseURL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other'

  if (pokemonId >= 650) {
    return `${baseURL}/official-artwork/${pokemonId}.png`
  }

  return `${baseURL}/dream-world/${pokemonId}.svg`
}
