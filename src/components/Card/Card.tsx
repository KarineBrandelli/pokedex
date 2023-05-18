import axios from 'axios'
import { useState, useEffect } from 'react'

import { Plus } from '@phosphor-icons/react'
import { colors } from '../../utils/pokemonTypeColor'
import { getImageURL } from '../../utils/getImageURL'

interface PokemonProps {
  name: string
  url: string
  handleClick: () => void
  setRotate: boolean
  typePokemon: string
}
interface PokemonInfoProps {
  base_experience: number
  types: Array<PokemonType>
  id: number
}
interface PokemonType {
  type: {
    name: string
  }
}

export function Card({
  name,
  url,
  handleClick,
  setRotate,
  typePokemon,
}: PokemonProps) {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoProps>({
    base_experience: 0,
    types: [{ type: { name: 'fire' } }],
    id: 1,
  })

  const pokemonId = pokemonInfo.id
  const imgURL = getImageURL(pokemonId)

  const pokemonType = pokemonInfo.types.map(
    (item: PokemonType) => item.type.name,
  )

  const firstPokemonType: string = pokemonType[0]

  function handleColor(color: string): string | undefined {
    return colors[color]
  }

  useEffect(() => {
    axios.get(url).then((response) => setPokemonInfo(response.data))
  }, [])

  return (
    <div
      className={
        !pokemonType.includes(typePokemon) && typePokemon !== '' ? 'hidden' : ''
      }
    >
      <div
        className={`${handleColor(
          firstPokemonType,
        )} flex h-64 justify-between rounded-3xl p-4 shadow-lg transition duration-500 ease-in-out hover:scale-105`}
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className="italic text-gray-200 sm:text-lg">
              <small>#</small> {pokemonId}
            </p>
            <h1 className="pt-2 text-2xl font-bold capitalize text-white sm:text-3xl">
              {name}
            </h1>
          </div>
          <div className="flex flex-col gap-2 text-center">
            {pokemonType.map((type, i: number) => (
              <span
                key={`${type}-${i}`}
                className="w-14 rounded-full bg-white/30 py-1 text-xs font-semibold text-white sm:w-20 sm:text-base"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <span className="flex items-center gap-2.5 text-lg font-semibold text-white">
            <p className="text-sm sm:text-base">
              {pokemonInfo.base_experience}
              <span className="text-xs sm:text-sm"> XP</span>
            </p>
            <p
              onClick={handleClick}
              className={
                setRotate
                  ? 'rotate-45 cursor-pointer rounded-full bg-gray-700/20 p-1'
                  : 'cursor-pointer rounded-full bg-gray-700/20 p-1'
              }
            >
              <Plus size={18} />
            </p>
          </span>
          <img
            src={imgURL}
            alt={`${name} image`}
            className="max-h-[85%] w-[95%]"
          ></img>
        </div>
      </div>
    </div>
  )
}
