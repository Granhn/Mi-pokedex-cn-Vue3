<script setup>

    defineProps(['nombre','imagen']);
    import { RouterLink } from 'vue-router';

</script>


<template>

    
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="imagen" alt="Foto del pokemon">
        <div class="card-body">
        <router-link :to="`/pokemons/${nombre}`">
            <h2 class="card-text">{{ nombre }}</h2>
        </router-link>
        </div>
    </div>
    
    
</template>