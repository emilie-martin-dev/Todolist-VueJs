import {LOCAL_STORAGE_API_TOKEN} from '../../const'

export function remaining(state){
	return function(listIndex) {
		return state.todolist[listIndex].todos.filter((todo) => !todo.completed).length
	}
}

export function remainingList(state, getters){
	let remaining = [];
	
	getters.todolist.forEach(list => {
		remaining.push(list.todos.filter((todo) => !todo.completed).length);
	});

	return remaining;
}

export function hasTodos(state){
	return function(listIndex) {
		return state.todolist[listIndex].todos.length > 0
	}
}

export function filteredTodos(state){
	return function(listIndex, filter) {
		if(filter === 'todo'){
			return state.todolist[listIndex].todos.filter(todo => !todo.completed)
		} else if (filter === 'done'){
			return state.todolist[listIndex].todos.filter(todo => todo.completed)
		}

		return state.todolist[listIndex].todos
	}
}


export function todolist(state){
	return state.todolist;
}

export function getToken(state) {
	if(state.token == undefined && LOCAL_STORAGE_API_TOKEN in localStorage) {
		state.token = localStorage.getItem(LOCAL_STORAGE_API_TOKEN);
	}

	return state.token;
}

export function getHeader(state, getters) {
	return {headers: {"Authorization": "Bearer " + getters.getToken}};
}