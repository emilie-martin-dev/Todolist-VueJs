<template>
	<div class="container row">

		<div class="col s12 l4">
			<listTodo @newSelectedList="upSelectedList"/>
		</div>

		<div class="col s12 l8">
			<todo :idLi="idList"/>
		</div>
	</div>
</template>

<script>

	import {defineComponent} from 'vue';
	import ListTodo from '../components/Todo/ListTodo.vue';
	import Todo from '../components/Todo/Todo.vue';

	export default defineComponent({
		name: "todos",
		emits: ["newSelectedList"],
		components: {
			listTodo : ListTodo,
			todo : Todo
		},data: function() {
			return {
				idList: 0,
			};
		},
		methods: {
			upSelectedList(selectedList) {
				this.idList = selectedList;
			}
		}
	});
</script>
