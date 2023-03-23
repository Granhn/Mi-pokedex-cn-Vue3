import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useGetData } from "../composables/getData";

export const usePokemonStore = defineStore('alerts', () =>{

  let favoritos = ref([]);
  const addAFavoritos = (nombrePokemon,spritePokemon) =>{
    favoritos.value.push({nombrePokemon, spritePokemon});
  }
  const encontrarFavorito = (nombrePokemon) => {
    const existeEnFavoritos = favoritos.value.some(pokemon => pokemon.nombrePokemon === nombrePokemon);
    if (existeEnFavoritos) return true
    return false
  }
  const removerFavorito = (pokemonName) => {
    favoritos.value = favoritos.value.filter(pokemon => pokemon.nombrePokemon !== pokemonName)
  }
  
  return { addAFavoritos, favoritos, encontrarFavorito, removerFavorito }

  

  

});

