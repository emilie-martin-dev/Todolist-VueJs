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

export function ListTodos(state){
    return function(filterList) {
        for(var i = 0; i < state.todolist.length -1 ; i++){
            if(filterList === i){
                return state.todolist
            }
        }
		return state.todolist
	}
}
