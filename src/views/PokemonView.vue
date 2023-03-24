<script setup>

    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { usePokemonStore } from '../stores/usePokemonStore.js'
    import { useGetData } from '../composables/getData';
    import Evoluciones from '../components/Evoluciones.vue';


    const route = useRoute();
    const router = useRouter();

    const pokemonStore = usePokemonStore();
    const { addAFavoritos, encontrarFavorito } = pokemonStore
    const { getData, data , error ,loading } = useGetData();
    const vuelve = () => router.back('/pokemons')
    const emojiDeTipo = ((tipo) => {
        const mapaDeTipos = {
            'normal': '☯',
            'fighting':'💪',
            'flying': '🛩',
            'poison':'💀',
            'ground':'🌍',
            'rock':'⛰',
            'bug':'🐛',
            'ghost':'👻',
            'steel':'🔗',
            'fire':'🔥',
            'water':'🌊',
            'grass':'🌿',
            'electric':'⚡',
            'psychic':'🧠',
            'ice':'🥶',
            'dragon':'🐉',
            'dark':'🌚',
            'fairy':'🧚‍♀️',
            'unknown':'👁‍🗨',
            'shadow':'🕶'
        }
        return mapaDeTipos[tipo]
    });

    (getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`));

</script>

<template>
    <h2 v-if="loading">Cargando pokemone</h2>
    <template v-else>
        <h2>{{ data?.name }}</h2>
        <img :src="data?.sprites?.front_default"/>
        <h3></h3>
        <ul>
            <li v-for="tipo in data.types" :key="tipo.slot">
                <span> {{ tipo.type.name }} {{ emojiDeTipo(tipo.type.name) }}</span>

            </li>
        </ul>
        <Evoluciones
        especie="dada"
        />
        <button class="btn btn-primary" @click="vuelve">Volver</button>
        <button :disabled="encontrarFavorito(data.name)" class="btn btn-primary" @click="addAFavoritos(data.name,data.sprites.front_default)">Añadir a favoritos</button>

    </template>
    
</template>