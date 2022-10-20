import {createRouter, createWebHistory} from 'vue-route'


export const routes = createRouter({
    history: createWebHistory(),
    routes:[
    {
        path:"/",
        name:"login",
        component: Login,
    },
    {
        path:"/cadastro",
        name:"cadastro",
        component: Cadastro,
    },
    {
        path:"/home",
        name:"home",
        component: Home,
    },

]})