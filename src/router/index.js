import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/pokemons',
      name: 'PokemonList',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/favoritos',
      name: 'Favoritos',
      component: () => import('../views/FavoritosView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'PokemonIno',
      component: () => import('../views/PokemonView.vue')
    },
    
  ]
})

export default router
