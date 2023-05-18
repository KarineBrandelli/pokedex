import { DropdownPokemonGeneration } from './DropdownPokemonGeneration'
import { DropdownPokemonType } from './DropdownPokemonType'

export function Dropdowns() {
  return (
    <span className="flex items-center gap-8 max-[400px]:flex-col max-[400px]:gap-4">
      <DropdownPokemonGeneration />
      <DropdownPokemonType />
    </span>
  )
}
