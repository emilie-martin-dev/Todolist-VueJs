<template>
    <div>
        <li v-for="todolist in forListTodos" :key="todolist.id">
        <button v-on:click.prevent="filterList = todolist.id">Liste n°{{todolist.id}}: {{todolist.name}}</button>

        </li>
    </div>

	<div>
		<h1>TodoList</h1>
		<ul>

                <li v-for="todo in filteredTodosArg" :key="todo.name">
                    <input type="checkbox" :id="'checkbox-' + todo.id" v-model=todo.completed>
                    <label :for="'checkbox-' + todo.id">{{todo.id}} | Nom de la tache: {{todo.name}} - Completer:{{ (todo.completed == false ? 'non' : 'oui')}} </label>

                    <button v-on:click="decrease(todo)" >Supprimer la todo</button>
                    <button v-on:click="update(todo)" >Modifier la todo</button>
                    <input type="texte" placeholder="Nom de la tache">
                </li>

		</ul>

		<input type="texte" id="addTodoName" v-model='addTodoName' placeholder="Nom de la tache">
		<label> Tache completer: </label>
		<input type="checkbox" id="addTodoCompleted" v-model="addTodoCompleted">

		<button v-on:click="ajouter({name: addTodoName, completed: addTodoCompleted})">Ajouter une todo</button>

		<button v-on:click.prevent="filterTodo = 'done' ">tache complétées</button>
		<button v-on:click.prevent="filterTodo = 'todo' ">tache en cours</button>
		<button v-on:click.prevent="filterTodo = 'all' ">toute tacher</button>
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
				filterTodo: 'all',
                filterList: 0
			}
		},
		methods: {
			...mapMutations("todolist", ["decrease", "ajouter", "update", "viewListTodo"]),
		},
		computed:{
			...mapGetters("todolist", ["remaining", "hasTodos", "filteredTodos", "listTodos"]),
			filteredTodosArg() {
				return this.filteredTodos(this.filterTodo, this.filterList);
			},
            forListTodos() {
				return this.listTodos();
			}
		}
	});
</script>
