import { defineStore } from "pinia";
import { ref } from "vue";
import { useGetData } from "../composables/getData";

export const usePokemonStore = defineStore('alerts', () =>{

  let pokemons = ref([]);
  

  const getPokemons = async() =>{
    try 
    {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await res.json();
      pokemons = data;
    } 
    catch (error) 
    {
      console.log(error);
    }
  }

  return { pokemons, getPokemons };

});

