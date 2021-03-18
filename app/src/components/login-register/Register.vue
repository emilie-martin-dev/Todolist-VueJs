<template>
	<div class="row">
		<form class="col s12">

			<div class="row">
				<div class="input-field col s12">
					<input placeholder="Nom d'utilisateur" id="username" type="text" v-model="username">
					<label for="username">Nom d'utilisateur</label>
				</div>
			</div>

			<div class="row">
				<div class="input-field col s12">
					<input placeholder="Votre email" id="email" type="text" v-model="email">
					<label for="email">Votre email</label>
				</div>
			</div>

			<div class="row">
				<div class="input-field col s12">
					<input placeholder="Mot de passe" id="password" type="password" v-model="password">
					<label for="password">Mot de passe</label>
				</div>
			</div>

			<div class="row">
				<div class="input-field col s12">
					<input placeholder="Veuillez confirmer votre mot de passe" id="passwordConfirm" type="password" v-model="passwordConfirm">
					<label for="passwordConfirm">Veuillez confirmer votre mot de passe</label>
				</div>
			</div>

			<div class="row" v-show="!passwordMatch">
				<p> Ces mots de passe ne correspondent pas. Veuillez réessayer. </p>
			</div>

			<div class="row">
				<div class="col s12 center-align">
					<a class="waves-effect waves-light btn" v-on:click="valider(username, email, password)">Valider</a>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import {defineComponent} from 'vue';
	import {store} from '../../store/store';

	export default defineComponent({
		name: "register",

		data () {
			return {
				email:"",
				username:"",
				password:"",
				passwordConfirm:"",
				passwordMatch :true
			}
		},

		methods: {

			valider(username, email, password){
				this.passwordMatch = this.password == this.passwordConfirm
				if(this.passwordMatch){
					store.dispatch("todolist/register", {name: username, login: email, password});
				}
			}

		},

		computed:{

		}

	});
</script>
