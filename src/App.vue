<script setup>


  import { usePokemonStore } from './stores/usePokemonStore.js'
  import { RouterLink, RouterView } from 'vue-router';
  import { storeToRefs } from 'pinia';

  const pokemonStore = usePokemonStore();
  const { pokemons } = storeToRefs(pokemonStore);

  

</script>


<template>

  <header>
    <div class="container">
      <router-link to="/pokemons">A pokemons</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/favoritos">Tus pokemons favoritos</router-link>
      <h1>Pokedex  </h1>
    </div>
    
  </header>

  <div class="container">
    <RouterView />
  </div>


</template>