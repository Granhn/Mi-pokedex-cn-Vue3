<script setup>
    import { storeToRefs } from 'pinia';
    import { usePokemonStore } from '../stores/usePokemonStore';
    import PokeCard from '../components/PokeCard.vue';
    const pokemonStore = usePokemonStore();
    const { favoritos } = storeToRefs(usePokemonStore());

</script>

<template>
    <h2>Tus favoritos</h2>
    <PokeCard v-for="favorito in favoritos"
                :nombre="favorito.nombrePokemon"
                :imagen="favorito.spritePokemon"
    />
</template>