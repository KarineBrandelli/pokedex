import React, { useState } from 'react'
import { Pokemon, PokemonProps } from '../types/Pokemon'

export const AppContext = React.createContext({} as PokemonProps)

export const AppContextProvider = ({ children }: Pokemon) => {
  const [list, setList] = useState<Pokemon[]>([])
  const [pokemonTypeName, setPokemonTypeName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(true)
  const [isGeneration, setIsGeneration] = useState(false)
  const limit = 66
  const [offset, setOffset] = useState(0)
  const [generationText, setGenerationText] = useState('')

  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        pokemonTypeName,
        setPokemonTypeName,
        inputValue,
        setInputValue,
        isLoading,
        setIsLoading,
        isSearching,
        setIsSearching,
        isGeneration,
        setIsGeneration,
        limit,
        offset,
        setOffset,
        generationText,
        setGenerationText,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
