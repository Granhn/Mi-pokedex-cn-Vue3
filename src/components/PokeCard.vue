<script setup>
    import { RouterLink } from 'vue-router';
    import { usePokemonStore } from '../stores/usePokemonStore';
    const pokemonStore = usePokemonStore();


    defineProps(['nombre','imagen']);
    

</script>


<template>

    
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="imagen" alt="Foto del pokemon">
        <div class="card-body">
            <router-link :to="`/pokemons/${nombre}`">
                <h2 class="card-text">{{ nombre }}</h2>
            </router-link>
            <button class="btn btn-danger" @click="pokemonStore.removerFavorito(nombre)">Eliminar de favoritos</button>
        </div>
    </div>
    
    
</template>