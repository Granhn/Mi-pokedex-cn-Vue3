<script setup>

    import { useRoute } from 'vue-router';
    import { ref } from 'vue'

    const route = useRoute();
    let data = ref([]);
    const getPokeData = async () =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        data.value = await res.json();
    }
    getPokeData();

</script>

<template>
    <h2>{{ data?.name }}</h2>
    <img :src="data?.sprites?.front_default"/>
    <ul>
        <li v-for="tipo in data.types" :key="tipo.slot">
            <p >{{ tipo.type.name }}</p>
        </li>
    </ul>
</template>