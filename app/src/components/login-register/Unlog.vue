<template>

	<h1 class="teal-text darken-4"> Vous êtes déconnecté </h1>
	<p> Appuyer sur ce bouton pour vous connectez:</p>
	<a class="btn"  v-on:click="redirection()"> Connexion</a>

</template>

<script>
	import {defineComponent} from 'vue';
	import router from "../../router/router";

	export default defineComponent({
		name: "unlog",

		methods: {
			redirection(){
				router.push('/login');
			}
		}
	})
</script>
