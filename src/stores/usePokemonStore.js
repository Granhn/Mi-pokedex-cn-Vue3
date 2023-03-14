import { defineStore } from "pinia";
import { ref } from "vue";
export const usePokemonStore = ('alerts', () =>{

  let pokemons = ref([]);
  const getPokemons = async() =>{
    try 
    {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=141&offset=0');
      const results = await data.json();
      results.results.forEach((ele) => { pokemons.value.push(ele) })
      console.log(pokemons.value[135])
    } 
    catch (error) 
    {
      console.log(error);
    }
  }

  const filterPokemon = (pokeName) => {
    const aux = pokemons.value.filter((ele) => { ele.name === pokeName })
    console.log(aux);
  }


  getPokemons();

  return { pokemons };

});

