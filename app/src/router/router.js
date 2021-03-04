import { createRouter, createWebHashHistory } from 'vue-router'

import Todos from '../components/Todos.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Todos
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
