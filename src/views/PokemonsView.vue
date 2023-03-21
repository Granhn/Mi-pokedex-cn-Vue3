<script setup>

    import { useGetData } from '../composables/getData';
    import { RouterLink } from 'vue-router';

    const { getData, data, error,loading } = useGetData();
    getData('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');

</script>


<template>
    <p v-if="loading">Cargando pokemones</p>
    <template v-else>
        <h2>Holaaaa!!!!</h2>
        <p>Vista de pokemones</p> 
            <h2>Nombres de pokemones</h2>
            <ul class="list-group">
                <li v-for="pokemon in data?.results" class="list-group-item">
                    <router-link :to="`/pokemons/${pokemon.name}`">
                        <p>{{ pokemon.name }}</p>
                    </router-link>
                    
                </li>
            </ul>
        <button :disabled="!data.previous" class="btn btn-danger me-2" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
    </template>
    
</template> 