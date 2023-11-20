import { createRouter, createWebHistory } from "vue-router";
import CubosComponent from './components/CubosComponent.vue'
import Cubos from './components/Cubos.vue'
import DetalleCubo from './components/DetalleCubo.vue'


const myRoutes = [
    {
        path: "/", component: CubosComponent
    },
    {
        path: "/cubos/:marca", component: Cubos
    },
    {
        path: "/deatalle/:idCubo", component: DetalleCubo
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;