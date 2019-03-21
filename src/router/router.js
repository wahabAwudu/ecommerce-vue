import Home from '@/pages/index.vue'
import Categories from '@/pages/categories.vue'

export default [
    { path: '/', component: Home, name: 'home' },
    { path: '/categories/:id', component: Categories, name: 'categories'},
]