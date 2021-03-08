export function remaining(state){
	return state.todolist[1].todos.filter((todo) => !todo.completed).length
}

export function hasTodos(state){
	return state.todolist[1].todos.length > 0
}

export function filteredTodos(state){
	return function(filterTodo, filterList) {
		if(filterTodo === 'todo'){
			return state.todolist[filterList].todos.filter(todo => !todo.completed)
		} else if (filterTodo === 'done'){
			return state.todolist[filterList].todos.filter(todo => todo.completed)
		}

		return state.todolist[filterList].todos
	}
}

export function listTodos(state){
    return function() {
		return state.todolist
	}
}
