<template>
	<div>
		<li v-for="list in todolist" :key="list.id">
			<button v-on:click.prevent="selectedList = list.id">Liste n°{{list.id+1}}: {{list.name}}</button>
		</li>
	</div>

	<div>
		<h1>TodoList</h1>
		<ul>
			<li v-for="todo in filteredTodosArg" :key="todo.name">
				<input type="checkbox" :id="'checkbox-' + todo.id" v-model=todo.completed>
				<label :for="'checkbox-' + todo.id">{{todo.id}} | Nom de la tache: {{todo.name}} - Completer:{{ (todo.completed == false ? 'non' : 'oui')}} </label>

				<button v-on:click="decrease({listIndex: selectedList, todo : todo})" >Supprimer la todo</button>
				<button v-on:click="update({listIndex: selectedList, todo : todo})" >Modifier la todo</button>
				<input type="texte" placeholder="Nom de la tache">
			</li>
		</ul>

		<input type="texte" id="addTodoName" v-model="addTodoName" placeholder="Nom de la tache">
		<label> Tache completer: </label>
		<input type="checkbox" id="addTodoCompleted" v-model="addTodoCompleted">

		<button v-on:click="ajouter({listIndex: selectedList, name: addTodoName, completed: addTodoCompleted})">Ajouter une todo</button>

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
				filter: 'all',
				selectedList: 0
			}
		},
		methods: {
			...mapMutations("todolist", ["decrease", "ajouter", "update"]),
		},
		computed:{
			...mapGetters("todolist", ["remaining", "hasTodos", "filteredTodos", "todolist"]),
			filteredTodosArg() {
				return this.filteredTodos(this.selectedList, this.filter);
			}
		}
	});
</script>
