interface TypeProps {
  handleClick: () => void;
}

export default function DropdownPokemonType({ handleClick }: TypeProps) {
  const pokemonsTypes = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn bg-blue-800 border-none hover:bg-blue-600"
      >
        Filter: Type
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-bold"
      >
        {pokemonsTypes.map((pokeType, i: number) => (
          <li
            onClick={handleClick}
            key={`${pokeType}-${i}`}
          >
            <a className="active:bg-blue-800">{pokeType}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
