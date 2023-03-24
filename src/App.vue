<script setup>


  import { usePokemonStore } from './stores/usePokemonStore.js'
  import { RouterLink, RouterView } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import PokeCard from './components/PokeCard.vue';
  import Evoluciones from './components/Evoluciones.vue';
  const pokemonStore = usePokemonStore();
  const { pokemons } = storeToRefs(pokemonStore);

  

</script>


<template>
  <header>  

    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">🏠</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link to="/pokemons" class="nav-link">Pokemons</router-link>
              <router-link to="/favoritos" class="nav-link">Tus pokemons favoritos</router-link>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
    
  </header>

  <div class="container">
    <RouterView />
  </div>


</template>