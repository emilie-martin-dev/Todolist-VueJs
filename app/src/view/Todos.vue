<template>
	<div class="container row" v-if="this.getToken == undefined">
		<div class="center-align">
			<unlog />
		</div>
	</div>
	<div class="container row" v-if="this.getToken != undefined ">

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
	import Unlog from '../components/login-register/Unlog.vue';
	import {mapGetters} from "vuex";

	export default defineComponent({
		name: "todos",

		components: {
			listTodo : ListTodo,
			todo : Todo,
			unlog : Unlog
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
		},
		computed: {
			...mapGetters("todolist", ["getToken"]),
		}
	});
</script>
