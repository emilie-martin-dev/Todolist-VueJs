<template>
	<div class="container row">
		<div class="col s12 l4">
			<h1>&nbsp;</h1>
			<div class="collection">
				<a v-for="(list, index) in todolist" :key="list.id" href="#" v-on:click.prevent="selectedList = list.id" v-bind:class="[selectedList == list.id ? 'active': '']" class="collection-item">
					<span class="badge">{{remainingList[index]}} restant(s)</span> {{list.name}}
				</a>
			</div>
		</div>

		<div class="col s12 l8">
			<h1>{{todolist[selectedList].name}}</h1>

			<div class="row" v-for="todo in filteredTodosArg" :key="todo.name">
				<label class="col s1"><input type="checkbox" :id="'checkbox-' + todo.id" v-model=todo.completed><span></span></label>
				<div class="col s10"><span v-on:click="transform(selectedList, todo)" v-bind:id="todo.id">{{todo.name}}</span></div>
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
				selectedList: 0
			}
		},

		methods: {
			...mapMutations("todolist", ["deleteTodo", "ajouter","update"]),

			transform(listIndex, todo){
				let li = document.getElementById(todo.id);
				//création d'un input de type texte
				let input = document.createElement('input');
				input.setAttribute('type', 'text');
				input.setAttribute('value', li.innerText);
				//affectation d'une fonction à l'input
				input.addEventListener('keydown', function submit(e){
					if(e.code == "Enter"){
						//mise à jour su store
						store.commit('todolist/update', {listIndex: listIndex, todo: todo, value: input.value});
						//mise à jour de l'élément li
						li.innerText = input.value;
						input.parentNode.replaceChild(li, input);
					}
				})
				//replace élément par l'input
				li.parentNode.replaceChild(input, li);
			}
		},

		computed:{
			...mapGetters("todolist", ["remaining", "remainingList", "hasTodos", "filteredTodos", "todolist"]),

			filteredTodosArg() {
				return this.filteredTodos(this.selectedList, this.filter);
			},

			remainingCurrentList() {
				return this.remaining(this.selectedList);
			}
		}

	});
</script>
