<script setup>

    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue'
    import { useGetData } from '../composables/getData';
import { computed } from '@vue/reactivity';

    const route = useRoute();
    const router = useRouter();
    const { getData, data, error,loading } = useGetData();
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
        console.log(tipo)
        console.log(mapaDeTipos[tipo])
        return mapaDeTipos[tipo]
    })

    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    

</script>

<template>
    <h2 v-if="loading">Cargando pokemones</h2>
    <template v-else>
        <h2>{{ data?.name }}</h2>
        <img :src="data?.sprites?.front_default"/>
        <h3></h3>
        <ul>
            <li v-for="tipo in data.types" :key="tipo.slot">
                <span> {{ tipo.type.name }} {{ emojiDeTipo(tipo.type.name) }}</span>

            </li>
        </ul>
        <button @click="vuelve">Volver a pokemones</button>
    </template>
    
</template>