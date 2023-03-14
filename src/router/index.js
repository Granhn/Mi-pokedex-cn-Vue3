import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pokemons',
      name: 'PokemonList',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/favoritos',
      name: 'Favoritos',
      component: () => import('../views/FavoritosView.vue')
    },
    
  ]
})

export default router
