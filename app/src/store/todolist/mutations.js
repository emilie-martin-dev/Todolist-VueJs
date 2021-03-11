export function deleteTodo(state, {listIndex, todo}){
	//mise à jour des id suivant la valeur à supprimer
	for(let i = todo.id; i < state.todolist[listIndex].todos.length; i++){
		state.todolist[listIndex].todos[i].id -= 1;
	}
	//suppression
	state.todolist[listIndex].todos.splice(state.todolist[listIndex].todos.indexOf(todo), 1);
}

export function ajouter(state, {listIndex, name}){
	state.todolist[listIndex].todos.push(
		{
			id: (state.todolist[listIndex].todos.length+1),
			name: name,
			completed: false
		}
	);
}

export function updateTodo(state, {listIndex, value}){
	state.todolist[listIndex].name = value;
}

export function update(state, {listIndex, todo, value}){
	state.todolist[listIndex].todos[state.todolist[listIndex].todos.indexOf(todo)].name = value;
}
