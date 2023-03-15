import { defineStore } from "pinia";
import { ref } from "vue";
import { useGetData } from "../composables/getData";

export const usePokemonStore = defineStore('alerts', () =>{

  let pokemons = ref([]);
  

  const getPokemons = async() =>{
    try 
    {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
      const data = await res.json();
      data.results.forEach(poke => {
        pokemons.value.push(poke);
      })
    } 
    catch (error) 
    {
      console.log(error);
    }
  }

  getPokemons();
  return { pokemons };

});

