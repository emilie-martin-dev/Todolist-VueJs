<template>
	<h1><a class="btn" v-on:click="delToken()"> <i class="material-icons left">exit_to_app</i> Déconnexion</a></h1>
	<div class="collection">
		<a v-for="(list, index) in todolist" :key="list.id" href="#" v-on:click.prevent="selectedList = index" v-bind:class="[selectedList == index ? 'active': '']" class="collection-item" v-on:click="updateSelectedlist">
			<span class="badge">{{remainingList[index]}} restant(s)</span> {{list.name}}
		</a>
	</div>
	<div class="row">
		<div class="input-field col s6">
			<input placeholder="Ajouter une liste" id="newListName" type="text" v-model="newListName"/>
		</div>
		<a class="col 3 waves-effect waves-light btn" v-on:click="addListTodos({name: newListName}); newListName=''"><i class="material-icons left">add</i>Ajouter</a>
	</div>
</template>

<script>
	import {defineComponent} from 'vue';
	import {mapGetters, mapMutations, mapActions} from "vuex";
	import {store} from '../../store/store';

	export default defineComponent({
		name: "listTodo",
		emits: ["newSelectedList"],

		data () {
			return {
				selectedList: 0,
				newListName: ''
			}
		},

		methods: {
			...mapActions("todolist", ["addListTodos"]),
			...mapMutations("todolist", ["delToken"]),

			updateSelectedlist(){
				this.$emit("newSelectedList", this.selectedList);
			}
		},

		mounted() {
			store.dispatch("todolist/getTodoList");
		},

		computed:{
			...mapGetters("todolist", ["remainingList", "todolist"]),
		}

	});
</script>
