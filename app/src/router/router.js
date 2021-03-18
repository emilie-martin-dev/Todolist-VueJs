import { createRouter, createWebHashHistory } from 'vue-router'

import Todos from '../view/Todos.vue'
import LoginRegisterVue from '../view/LoginRegisterVue.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Todos
	},
	{
		path: '/login',
		name: 'LoginRegister',
		component: LoginRegisterVue
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
