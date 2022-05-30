import Vue from 'vue'
import Router from 'vue-router' 
import MusicDetail from '@/pages/MusicDetail'
import MusicHome from '@/pages/MusicHome'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component:  MusicHome
    },
    {
        path: '/detail',
        component: MusicDetail
    }
]

export default new Router({
    routes,
})
