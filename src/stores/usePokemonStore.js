import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useGetData } from "../composables/getData";

export const usePokemonStore = defineStore('pokemonsotre', () =>{

  let favoritos = ref([]);

  if (localStorage.getItem('favoritos') ){
    favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  }

  const addAFavoritos = (nombrePokemon,spritePokemon) =>{
    favoritos.value.push({nombrePokemon, spritePokemon});
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
  }

  const encontrarFavorito = (nombrePokemon) => {
    const existeEnFavoritos = favoritos.value.some(pokemon => pokemon.nombrePokemon === nombrePokemon);
    if (existeEnFavoritos) return true
    return false
  }

  const removerFavorito = (pokemonName) => {
    favoritos.value = favoritos.value.filter(pokemon => pokemon.nombrePokemon !== pokemonName);
    localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
  }
  
  return { addAFavoritos, favoritos, encontrarFavorito, removerFavorito }
});

