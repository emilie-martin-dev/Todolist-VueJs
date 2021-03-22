<template>
	<div class="row">
		<form class="col s12">
			<div class="row">
				<div class="input-field col s12">
					<input placeholder="Nom d'utilisateur" id="username" type="text" class="validate" v-model="username">
					<label for="username">Nom d'utilisateur</label>
				</div>
			</div>

			<div class="row">
				<div class="input-field col s12">
					<input placeholder="Mot de passe" id="password" type="password" class="validate" v-model="password">
					<label for="password">Mot de passe</label>
				</div>
			</div>
			
			<div class="row">
				<div class="col s12 center-align">
					<a class="waves-effect waves-light btn" v-on:click="login(username, password)">Connexion</a>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import {defineComponent} from 'vue';
	import {store} from '../../store/store';

	export default defineComponent({
		name: "login",
		
		data () {
			return {
				username: "",
				password: ""
			}
		},

		methods: {
			login(username, password) {
				store.dispatch("login/login", {login: username, password});
			}
		}

	});
</script>
