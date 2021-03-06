<template>
	<div>
		<h1>TodoList</h1>
		<ul>
			<li v-for="todo in filteredTodosArg" :key="todo.name">
				<input type="checkbox" :id="'checkbox-' + todo.id" v-model=todo.completed>
				<label :for="'checkbox-' + todo.id">{{todo.id}} | </label>
				<label v-on:click="update(todo)" v-bind:id="todo.name"> {{todo.name}} </label>
				<button v-on:click="decrease(todo)" >Supprimer la todo</button>

			</li>
		</ul>

		<input type="texte" id="addTodoName" v-model='addTodoName' placeholder="Nom de la tache">
		<label> Tache completer: </label>
		<input type="checkbox" id="addTodoCompleted" v-model="addTodoCompleted">

		<button v-on:click="ajouter({name: addTodoName, completed: addTodoCompleted})">Ajouter une todo</button>

		<button v-on:click.prevent="filter = 'done' ">tache complétées</button>
		<button v-on:click.prevent="filter = 'todo' ">tache en cours</button>
		<button v-on:click.prevent="filter = 'all' ">toute tacher</button>

	</div>
</template>

<script>
	import {mapMutations, mapGetters} from "vuex";
	import {defineComponent} from 'vue';

	export default defineComponent({
		data () {
			return {
				addTodoCompleted: false,
				addTodoName:'',
				filter: 'all'
			}
		},
		methods: {
			...mapMutations("todolist", ["decrease", "ajouter", "update"])
		},
		computed:{
			...mapGetters("todolist", ["remaining", "hasTodos", "filteredTodos"]),
			filteredTodosArg() {
				return this.filteredTodos(this.filter);
			}
		}
	});
</script>
