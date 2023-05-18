import { ReactNode } from 'react'

export type Pokemon = {
  id?: number
  name: string
  url: string
  typePokemon?: string
  types?: [{ type: { name: string } }]
  base_experience?: number
  children?: ReactNode
}

export type PokemonProps = {
  list: Pokemon[]
  setList: React.Dispatch<React.SetStateAction<Pokemon[]>>
  pokemonTypeName: string
  setPokemonTypeName: (value: string) => void
  inputValue: string
  setInputValue: (value: string) => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
  isSearching: boolean
  setIsSearching: (value: boolean) => void
  isGeneration: boolean
  setIsGeneration: (value: boolean) => void
  limit: number
  offset: number
  setOffset: (value: number) => void
  generationText: string
  setGenerationText: (value: string) => void
}
