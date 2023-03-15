<script setup>

    import { usePokemonStore } from '../stores/usePokemonStore';
    import { storeToRefs } from 'pinia';
    import { RouterLink } from 'vue-router';

    const pokemonStore = usePokemonStore();
    const { pokemons } = storeToRefs(usePokemonStore());
    console.log(pokemons.value);
</script>


<template>
    <h2>Holaaaa!!!!</h2>
    <ul>
        <li v-for="poke in pokemons" key="poke.name">
            <router-link :to="`/pokemons/${poke.name}`">{{ poke.name }}</router-link>
        </li>
    </ul>
</template>