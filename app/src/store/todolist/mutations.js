export function decrease(state, {list, index}){
	state.todolist[list].todos.splice(state.todolist[list].todos.indexOf(index), 1);
}

export function ajouter(state, {list, name, completed}){
	state.todolist[list].todos.push(
		{
			id: (state.todolist[list].todos.length+1),
			name: name,
			completed: completed
		}
	);
}

export function update(state, {list, index}){
	state.todolist[list].todos.splice(state.todolist[list].todos.indexOf(index),1);
}
