<template>
	<h1>&nbsp;</h1>
	<div class="collection">
		<a v-for="list in todolist" :key="list.id" href="#" v-on:click.prevent="selectedList = list.id" v-bind:class="[selectedList == list.id ? 'active': '']" class="collection-item"><span class="badge">Nombre de todos</span>{{list.name}}</a>
	</div>
</template>

<script>
	import {defineComponent} from 'vue';
	import {mapGetters} from "vuex";

	export default defineComponent({
		name: "listTodo",

		data () {
			return {
				selectedList: 0,
				showText: true,
				showInput: false,
			}
		},

		computed:{
			...mapGetters("todolist", ["remaining", "hasTodos", "filteredTodos", "todolist"]),

			filteredTodosArg() {
				return this.filteredTodos(this.selectedList, this.filter);
			},
			remainingCurrentList() {
				return this.remaining(this.selectedList);
			}
		}

	});
</script>
