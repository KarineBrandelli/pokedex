import DropdownPokemonGeneration from "./DropdownPokemonGeneration";
import DropdownPokemonType from "./DropdownPokemonType";

export function Dropdowns() {
  return (
    <span className="flex max-[400px]:flex-col items-center max-[400px]:gap-4 gap-8">
      <DropdownPokemonGeneration />
      <DropdownPokemonType />
    </span>
  );
}
