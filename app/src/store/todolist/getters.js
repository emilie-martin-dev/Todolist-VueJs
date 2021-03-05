export function remaining(state){
	return state.todolist[0].todos.filter((todo) => !todo.completed).length
}

export function hasTodos(state){
	return state.todolist[0].todos.length > 0
}

export function filteredTodos(state){
	return function(filter) {
		if(filter === 'todo'){
			return state.todolist[0].todos.filter(todo => !todo.completed)
		} else if (filter === 'done'){
			return state.todolist[0].todos.filter(todo => todo.completed)
		}

		return state.todolist[0].todos
	}
}