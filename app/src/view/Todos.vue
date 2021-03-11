<template>
	<div class="container row">

		<div class="col s12 l4">
			<listTodo> </listTodo>
		</div>

		<div class="col s12 l8">
			<todo> </todo>
		</div>
	</div>
</template>

<script>

	import {defineComponent} from 'vue';
	import ListTodo from '../components/Todo/ListTodo.vue';
	import Todo from '../components/Todo/Todo.vue';

	export default defineComponent({
		
		components: {
			listTodo : ListTodo,
			todo : Todo
		},

	});
</script>
