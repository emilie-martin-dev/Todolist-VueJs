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
			store.commit("saveToken", response.data.token);

			router.push({name: "Home"});
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
				store.commit("addTodo", {listId: listId, id: element.id, name: element.name , completed: element.completed == 1})
			});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}

export function updateCompleted(store, {id, name, completed, listId}) {
	axios
		.post("http://138.68.74.39/api/completeTodo/"+ id +"?name=" +name+"&completed="+ (completed ? 1 : 0)+"&todolist_id="+ listId, {}, store.getters.getHeader)
		.then(function (){
			store.commit("update", {listId: listId, todo: id, value: name, completed: completed})
		})
		.catch(function (error) {
			console.log(error);
		});
}

export function updateTodos(store, {id, name, completed, listId}) {
	axios
		.patch("http://138.68.74.39/api/todo/"+ id +"?name=" +name+"&completed="+ completed+"&todolist_id="+ listId, {}, store.getters.getHeader)
		.then(function (){
			store.commit("update", {listId: listId, todo: id, value: name, completed: completed})
		})
		.catch(function (error) {
			console.log(error);
		});
}


export function delTodo(store, {listIndex, todo}) {
	axios
		.delete("http://138.68.74.39/api/todo/"+ todo.id, store.getters.getHeader)
		.then(function (){
			store.commit("deleteTodo", {listIndex: listIndex, todo: todo})
		})
		.catch(function (error) {
			console.log(error);
		});
}



export function delListTodo(store, {list}) {
	axios
		.delete("http://138.68.74.39/api/todolist/"+list.id, store.getters.getHeader)
		.then(function () {
			store.commit("deleteListTodo", {list: list});
		})
		.catch(function (error) {
			console.log(error);
		});
}
	