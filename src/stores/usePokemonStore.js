import { defineStore } from "pinia";
import { ref } from "vue";
import { useGetData } from "../composables/getData";

export const usePokemonStore = defineStore('alerts', () =>{

  let favoritos = ref([]);
  const addAFavoritos = (nombrePokemon,spritePokemon) =>{
    favoritos.value.push({nombrePokemon, spritePokemon});
  }
  return { addAFavoritos, favoritos }

  

  

});

