<template>
	<div class="container row valign-wrapper" id="loginRegisterMainDiv">
		<div class="col s12 m6 offset-l3 card-panel" id="loginRegisterPanel">
			<login v-show="isLoginUi"></login>
			<register v-show="!isLoginUi"></register>


			<div class="row" v-show="isLoginUi">
				<div class="col s12">
					<p class="center-align"><a href="#" v-on:click.prevent="changeUi()">Vous n'avez pas de compte? Inscrivez-vous!</a></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {defineComponent} from 'vue';
	import Login from '../components/login-register/Login.vue';
	import Register from '../components/login-register/Register.vue';

	export default defineComponent({
		data () {
			return {
				isLoginUi: true
			}
		},

		methods: {
			changeUi() {
				this.isLoginUi = !this.isLoginUi;
			}
		},

		components: {
			login : Login,
			register : Register
		}

	});
</script>

<style>
	#loginRegisterMainDiv {
		height: 100%;
	}

	#loginRegisterPanel{
		padding: 35px;
		padding-bottom: 0px;
	}
</style>
