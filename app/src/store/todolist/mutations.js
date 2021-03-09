export function decrease(state, {listIndex, todo}){
	state.todolist[listIndex].todos.splice(state.todolist[listIndex].todos.indexOf(todo), 1);
}

export function ajouter(state, {listIndex, name, completed}){
	state.todolist[listIndex].todos.push(
		{
			id: (state.todolist[listIndex].todos.length+1),
			name: name,
			completed: completed
		}
	);
}

export function update(state, {listIndex, todo}){
	state.todolist[listIndex].todos.splice(state.todolist[listIndex].todos.indexOf(todo),1);
}
