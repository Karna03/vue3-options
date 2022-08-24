import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '../components/Calculator.vue'
import ToDo from '../components/ToDo.vue'
import Weather from '../components/Weather.vue'
import Tweet from '../components/comment/tweet.vue'
import Home from '../components/Home.vue'


export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Calculator',
            component: Calculator,
        },{
            path: '/todo',
            name: 'ToDo',
            component: ToDo,
        },{
            path: '/weather',
            name: 'Weather',
            component: Weather,
        },{
            path: '/tweet',
            name: 'Tweet',
            component: Tweet,
        },{
            path: '/home',
            name: 'Home',
            component: Home,
        }
    ]
})
