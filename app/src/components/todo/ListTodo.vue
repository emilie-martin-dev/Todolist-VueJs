<template>
	<h1>&nbsp;</h1>
	<div class="collection">
		<a v-for="(list, index) in todolist" :key="list.id" href="#" v-on:click.prevent="selectedList = index" v-bind:class="[selectedList == index ? 'active': '']" class="collection-item" v-on:click="updateSelectedlist">
			<span class="badge">{{remainingList[index]}} restant(s)</span> {{list.name}}
		</a>
	</div>
	<div class="row">
		<div class="input-field col s6">
			<input placeholder="Ajouter une liste" id="newListName" type="text" v-model="newListName"/>
		</div>
		<a class="col 3 waves-effect waves-light btn" v-on:click="addListTodo({name: newListName}); newListName=''"><i class="material-icons left">add</i>Ajouter</a>
	</div>
</template>

<script>
	import {defineComponent} from 'vue';
	import {mapGetters, mapMutations} from "vuex";

	export default defineComponent({
		name: "listTodo",
		emits: ["newSelectedList"],

		data () {
			return {
				selectedList: 0,
				newListName: ''
			}
		},

		methods:{
			...mapMutations("todolist", ["addListTodo"]),

			updateSelectedlist(){
				this.$emit("newSelectedList", this.selectedList);
			}
		},

		computed:{
			...mapGetters("todolist", ["remainingList", "todolist"]),
		}

	});
</script>
