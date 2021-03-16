<template>
	<h1>&nbsp;</h1>
	<div class="collection">
		<a v-for="list in todolist" :key="list.id" href="#" v-on:click.prevent="selectedList = list.id" v-bind:class="[selectedList == list.id ? 'active': '']" class="collection-item" v-on:click="updateSelectedlist"><span class="badge">Nombre de todos</span>{{list.name}}</a>
	</div>
</template>

<script>
	import {defineComponent} from 'vue';
	import {mapGetters} from "vuex";

	export default defineComponent({
		name: "listTodo",
		emits: ["newSelectedList"],

		data () {
			return {
				selectedList: 0,
			}
		},

		methods:{
			updateSelectedlist(){
				this.$emit("newSelectedList", this.selectedList);
			}
		},

		computed:{
			...mapGetters("todolist", ["todolist"]),
		}

	});
</script>
