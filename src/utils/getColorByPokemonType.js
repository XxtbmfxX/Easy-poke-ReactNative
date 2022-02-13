import { POKEMON_TYPE_COLORS } from "./PokemonTypeColors";

function getColorByPokemonType(type) {
  return POKEMON_TYPE_COLORS[type.toLowerCase()];
}

export default getColorByPokemonType;
