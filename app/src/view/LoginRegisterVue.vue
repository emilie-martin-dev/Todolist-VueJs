<template>
	<div class="container row">
		<div class="col s12 m6 offset-l3">
			<login v-show="isLoginUi"></login>
			<register v-show="!isLoginUi"></register>
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
			
		},

		computed:{
			
		},

		components: {
			login : Login,
			register : Register
		}

	});
</script>

<style>

</style>
