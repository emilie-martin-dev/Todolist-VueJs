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

export function getHeader(state, getters, rootState, rootGetters) {
	return rootGetters['login/getHeader'];
}
