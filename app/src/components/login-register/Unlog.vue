<template>

	<h1 class="cyan-text darken-4"> Vous êtes hors ligne </h1>
	<p> Appuyer sur ce bouton pour rejoindre vous connectez:</p>
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
