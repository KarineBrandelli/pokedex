import pokemonsType from "../../utils/pokemonsType";

interface TypeProps {
  handleClick: (pokeType: string) => void;
}

export default function DropdownPokemonType({ handleClick }: TypeProps) {
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
        {pokemonsType.map((pokeType, i: number) => (
          <li key={`${pokeType}-${i}`}>
            <a
              onClick={() => handleClick(pokeType)}
              className="active:bg-blue-800 text-sm sm:text-base"
            >
              {pokeType}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
