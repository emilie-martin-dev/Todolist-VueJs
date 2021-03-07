<template>
	<div>
		<h1>TodoList</h1>
		<ul>
			<li v-for="todo in filteredTodosArg" :key="todo.name">
				<input type="checkbox" :id="'checkbox-' + todo.id" v-model=todo.completed>
				<label :for="'checkbox-' + todo.id">{{todo.id}} | </label>
				<label v-on:click="transform(todo)" v-bind:id="todo.name"> {{todo.name}} </label>
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
	import {store} from '../store/store';
	export default defineComponent({
		data () {
			return {
				addTodoCompleted: false,
				addTodoName:'',
				filter: 'all'
			}
		},
		methods: {
			...mapMutations("todolist", ["decrease", "ajouter","update"]),

			transform(todo){
				let li =  document.getElementById(todo.name);
				//création d'un input de type texte
				let input = document.createElement('input');
				input.setAttribute('type','text');
				input.setAttribute('value',li.innerText);
				//affectation d'une fonction à l'input
				input.addEventListener('keydown',submit);
				function submit(e){
					if(e.code == "Enter"){
						//mise à jour su store
						store.commit('todolist/update',{index: todo, value: input.value});
						//mise à jour de l'élément li
						li.innerText = input.value;
						input.parentNode.replaceChild(li,input);
					}
				}
				//replace élément par l'input
				li.parentNode.replaceChild(input,li);
			}
		},
		computed:{
			...mapGetters("todolist", ["remaining", "hasTodos", "filteredTodos"]),
			filteredTodosArg() {
				return this.filteredTodos(this.filter);
			}
		}
	});
</script>
