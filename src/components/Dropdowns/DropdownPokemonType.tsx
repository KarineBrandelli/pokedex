import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import { pokemonsType } from '../../utils/pokemonsType'

export function DropdownPokemonType() {
  const { setPokemonTypeName } = useContext(AppContext)

  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn border-none bg-blue-800 hover:bg-blue-600"
      >
        Filter: Type
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 font-bold shadow"
      >
        {pokemonsType.map((pokeType, i: number) => (
          <li key={`${pokeType}-${i}`}>
            <a
              onClick={() => setPokemonTypeName(pokeType)}
              className="text-sm active:bg-blue-800 sm:text-base"
            >
              {pokeType}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
