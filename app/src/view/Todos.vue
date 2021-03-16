<template>
	<div class="container row">

		<div class="col s12 l4">
			<listTodo @newSelectedList="newListSelected"/>
		</div>

		<div class="col s12 l8">
			<todo :idListTodo="idList"/>
		</div>
	</div>
</template>

<script>

	import {defineComponent} from 'vue';
	import ListTodo from '../components/todo/ListTodo.vue';
	import Todo from '../components/todo/Todo.vue';

	export default defineComponent({
		name: "todos",

		components: {
			listTodo : ListTodo,
			todo : Todo
		},
		
		data() {
			return {
				idList: 0,
			};
		},

		methods: {
			newListSelected(selectedList) {
				this.idList = selectedList;
			}
		}
	});
</script>
