import { createRouter, createWebHashHistory } from 'vue-router'

import Todos from '../components/Todos.vue'
import LoginRegisterVue from '../view/LoginRegisterVue.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Todos
	},
	{
		path: '/connexion',
		name: 'LoginRegister',
		component: LoginRegisterVue
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
