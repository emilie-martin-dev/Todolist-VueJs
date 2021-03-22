<template>
	<div v-if="selectedList in todolist">
		<h1 v-show="!showInput">
			<span v-on:click="transformTodo(selectedList)">{{todolist[selectedList].name}}</span>
			<a class=" btn-flat"><i v-on:click="deleteListTodo({list: todolist[selectedList]})" class="material-icons">delete</i></a>
		</h1>
		<h1 v-show="showInput"><input type='text' :value="todolist[selectedList].name" v-on:keyup.enter="transformTodo(selectedList)" id="todoListName"/> </h1>

		<div class="row" v-for="todo in filteredTodosArg" :key="todo.id">
			<label class="col s1"><input type="checkbox" :id="'checkbox-' + todo.id" v-model=todo.completed><span></span></label>
			<div class="col s10">
				<span v-show='number!=todo.id' v-on:click="transform(selectedList, todo)">{{todo.name}}</span>
				<input v-show='number==todo.id' v-on:keyup.enter="transform(selectedList, todo)"  type='text' :value="todo.name" v-bind:id="todo.id"/>
			</div>
			<a class="col s1 btn-flat"><i v-on:click="deleteTodo({listIndex: selectedList, todo: todo})" class="material-icons">delete</i></a>
		</div>

		<div class="row">
			<div class="input-field col s6">
				<input placeholder="Ajouter une tâche" id="newTodoName" type="text" v-model="newTodoName"/>
			</div>
			<a class="col 3 waves-effect waves-light btn" v-on:click="addTodo({listId: todolist[selectedList].id, id: 0, name: newTodoName}); newTodoName=''"><i class="material-icons left">add</i>Ajouter</a>
		</div>

		<div class="row">
			<a class="btn-flat" v-on:click.prevent="filter = 'all'" v-bind:class="[filter == 'all' ? 'disabled': '']">Toutes</a>
			<a class="btn-flat" v-on:click.prevent="filter = 'todo'" v-bind:class="[filter == 'todo' ? 'disabled': '']">A faire</a>
			<a class="btn-flat" v-on:click.prevent="filter = 'done'" v-bind:class="[filter == 'done' ? 'disabled': '']">Faites</a>
			<span>Il reste {{remainingCurrentList}} tâches à faire</span>
		</div>
	</div>
</template>

<script>
	import {defineComponent} from 'vue';
	import {mapMutations, mapGetters} from "vuex";
	import {store} from '../../store/store';

	export default defineComponent({
		name: "todo",

		data () {
			return {
				newTodoName: '',
				filter: 'all',
				selectedList: 0,
				number: -1,
				showInput: false
			}
		},

		methods: {
			...mapMutations("todolist", ["deleteTodo", "addTodo","update"]),

			transformTodo(listIndex){
				this.showInput = !this.showInput;

				if(this.showInput == false){
					let input = document.getElementById("todoListName");

					store.commit('todolist/updateTodoListName', {listIndex: listIndex, value: input.value});
				}
			},

			transform(listIndex, todo){
				if(this.number == todo.id){
					this.number = -1;
					let input = document.getElementById(todo.id);
					store.commit('todolist/update', {listIndex: listIndex, todo: todo, value: input.value});
				} else {
					this.number = todo.id;
				}
			},

			deleteListTodo({list}){
				if(store.getters.["todolist/todolist"].length-1 == this.selectedList){
					this.selectedList--;
				}
				store.dispatch("todolist/delListTodo", {list :list});
			}
		},

		props: {
			idListTodo: {
				type: Number,
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
		},

		watch: {
			idListTodo() {
				this.selectedList = this.idListTodo;
			}
		}
	});
</script>
