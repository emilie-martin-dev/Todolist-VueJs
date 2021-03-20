import axios from "axios";
import router from "../../router/router";

export function login(store, {login, password}) {
	axios
		.post("http://138.68.74.39/api/login?email=" + login + "&password=" + password)
		.then(function (response) {
			store.commit("saveToken", response.data.token);

			router.push({name: "Home"});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}

export function register(store, {name, login, password}) {
	axios
		.post("http://138.68.74.39/api/register?name=" + name + "&email=" + login + "&password=" + password)
		.then(function (response) {
			// handle success
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}

export function getTodoList(store) {
	axios
		.get("http://138.68.74.39/api/todolists", store.getters.getHeader)
		.then(function (response) {
			response.data.forEach(element => {
				store.commit("addListTodo", {id : element.id, name : element.name});

				store.dispatch("getTodosFromListId", {listId: element.id});
			});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}

export function getTodosFromListId(store, {listId}) {
	axios
		.get("http://138.68.74.39/api/todos/"+listId, store.getters.getHeader)
		.then(function (response) {
			response.data.forEach(element => {
				store.commit("addTodo", {listId: listId, id: element.id, name: element.name})
			});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}
