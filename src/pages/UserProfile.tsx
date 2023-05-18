import { Link } from 'react-router-dom'
import { Card } from '../components/Card/Card'
import { useState, useEffect } from 'react'
import { ArrowLeft, UserCircle } from '@phosphor-icons/react'

import Pokedex from '../assets/pokedex.png'

interface UserInformation {
  name: string
  email: string
}

interface PokemonFilterProps {
  name: string
  url: string
}

export function UserProfile() {
  const [userProfileInfo, setUserProfileInfo] = useState<UserInformation>({
    name: 'Your Username',
    email: 'youruser@domain.com',
  })

  const [userPokemons, setUserPokemons] = useState<
    Array<{ name: string; url: string }>
  >([
    {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
    },
  ])

  useEffect(() => {
    const storedData = localStorage.getItem('user-info')

    if (storedData) {
      const profilePokemons = JSON.parse(storedData)
      setUserPokemons(profilePokemons.pokemons)
      setUserProfileInfo({
        name: profilePokemons.name,
        email: profilePokemons.email,
      })
    }
  }, [])

  function removePokemon(name: string) {
    const storedData = localStorage.getItem('user-info')

    if (storedData) {
      const profilePokemons = JSON.parse(storedData)

      const findPokemonName = profilePokemons.pokemons.filter(
        (pokemon: PokemonFilterProps) => pokemon.name !== name,
      )

      const userData = {
        ...profilePokemons,
        pokemons: findPokemonName,
      }

      localStorage.setItem('user-info', JSON.stringify(userData))
      setUserPokemons(findPokemonName)
    }
  }

  return (
    <>
      <nav className="sticky top-0 bg-blue-800 px-10 py-3">
        <img src={Pokedex} className="w-[11rem] max-[375px]:mx-auto"></img>
      </nav>
      <div className="mx-auto flex w-[85%] pt-10 pb-5 font-bold text-blue-600">
        <Link to={'/'} className="flex items-center gap-4">
          <ArrowLeft size={28} />
          <span className="text-lg">Find Pokemons</span>
        </Link>
      </div>

      <div className="mx-auto w-[85%]">
        <div className="flex max-w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400/80 to-yellow-300/80 p-4 font-bold max-[465px]:mx-auto max-[465px]:flex-col md:text-lg">
          <span className="text-[4rem] text-blue-600 sm:text-[6rem]">
            <UserCircle />
          </span>
          <div className="flex flex-col gap-3 text-white max-[465px]:items-center ">
            <p className="flex max-w-fit flex-wrap justify-center gap-1 rounded-lg bg-blue-600 px-3 py-1 text-sm sm:text-base">
              Name: <span>{userProfileInfo.name}</span>
            </p>
            <p className="flex max-w-fit flex-wrap justify-center gap-1 rounded-lg bg-blue-600 px-3 py-1 text-sm sm:text-base">
              Email: <span>{userProfileInfo.email}</span>
            </p>
          </div>
        </div>

        <h2 className="pt-7 pb-5 text-2xl font-bold text-blue-600 max-[465px]:text-center md:text-3xl">
          Your Pokédex!
        </h2>

        <div className="grid gap-8 pb-7 md:grid-cols-2 xl:grid-cols-3">
          {userPokemons.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center gap-5 rounded-3xl bg-gradient-to-r from-blue-800 to-blue-500 p-4 text-center font-semibold text-white shadow-lg md:text-xl">
              <p>You don't have any pokemons in your favorites yet.</p>
              <p>Go back and add some pokemons to your profile!</p>
            </div>
          ) : (
            userPokemons.map((pokemon, i: number) => (
              <Card
                typePokemon={''}
                setRotate={true}
                key={`${pokemon.name}-${i}`}
                name={pokemon.name}
                url={pokemon.url}
                handleClick={() => removePokemon(pokemon.name)}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}
