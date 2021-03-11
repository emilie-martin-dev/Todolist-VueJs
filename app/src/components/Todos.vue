<template>
	<div class="container row">
		<div class="col s12 l4">
			<h1>&nbsp;</h1>
			<div class="collection">
				<a v-for="list in todolist" :key="list.id" href="#" v-on:click.prevent="selectedList = list.id" v-bind:class="[selectedList == list.id ? 'active': '']" class="collection-item">
					<span class="badge">Nombre de todos</span>{{list.name}}
				</a>
			</div>
		</div>

		<div class="col s12 l8">
			<h1 v-show="showText" v-on:click="transformTodo(todolist[selectedList].id)">{{todolist[selectedList].name}}</h1>
			<h1 v-show="showInput" v-on:keyup.enter="transformTodo(todolist[selectedList].id)"> <input type='text' :value="todolist[selectedList].name" id="newTodoListName"/> </h1>

			<div class="row" v-for="todo in filteredTodosArg" :key="todo.name">
				<label class="col s1"><input type="checkbox" :id="'checkbox-' + todo.id" v-model=todo.completed><span></span></label>
				<div class="col s10" :bool='true'>
					<span v-show='number!=todo.id' v-on:click="transform(selectedList, todo)">{{todo.name}}</span>
					<input v-show='number==todo.id' v-on:keyup.enter="transform(selectedList, todo)"  type='text' :value="todo.name" v-bind:id="todo.id"/>
				</div>
				<a class="col s1 btn-flat"><i v-on:click="deleteTodo({listIndex: selectedList, todo: todo})" class="material-icons">delete</i></a>
			</div>

			<div class="row">
				<div class="input-field col s6">
					<input placeholder="Ajouter une tâche" id="newTodoName" type="text" v-model="newTodoName"/>
				</div>
				<a class="col 3 waves-effect waves-light btn" v-on:click="ajouter({listIndex: selectedList, name: newTodoName}); newTodoName=''"><i class="material-icons left">add</i>Ajouter</a>
			</div>

			<div class="row">
				<a class="btn-flat" v-on:click.prevent="filter = 'all'" v-bind:class="[filter == 'all' ? 'disabled': '']">Toutes</a>
				<a class="btn-flat" v-on:click.prevent="filter = 'todo'" v-bind:class="[filter == 'todo' ? 'disabled': '']">A faire</a>
				<a class="btn-flat" v-on:click.prevent="filter = 'done'" v-bind:class="[filter == 'done' ? 'disabled': '']">Faites</a>
				<span>Il reste {{remainingCurrentList}} tâches à faire</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapMutations, mapGetters} from "vuex";
	import {defineComponent} from 'vue';
	import {store} from '../store/store';

	export default defineComponent({
		data () {
			return {
				newTodoName: '',
				filter: 'all',
				selectedList: 0,
				showText: true,
				showInput: false,
				showTodo: true,
				number: -1
			}
		},

		methods: {
			...mapMutations("todolist", ["deleteTodo", "ajouter", "update", "updateTodo"]),

			transformTodo(listIndex){
				this.showText = !this.showText;
				this.showInput = !this.showInput;

				if(this.showInput == false){
					let input = document.getElementById("newTodoListName");
					store.commit('todolist/updateTodo', {listIndex: listIndex, value: input.value});
				}
			},

			transform(listIndex, todo){
				if(this.number == todo.id){
					this.number  = -1;
					let input = document.getElementById(todo.id);
					store.commit('todolist/update', {listIndex: listIndex, todo: todo, value: input.value});

				}
				else{
					this.number = todo.id;
				}
			}
		},
		props: {
			propsBool:{type: Object},
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
