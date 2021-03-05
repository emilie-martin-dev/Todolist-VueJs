export function decrease(state, index){
	state.todolist[0].todos.splice(state.todolist[0].todos.indexOf(index), 1);
}

export function ajouter(state, {name, completed}){
	state.todolist[0].todos.push(
		{
			id: (state.todolist[0].todos.length+1),
			name: name,
			completed: completed
		}
	);
}

export function update(state, index){
	state.todolist[0].todos.splice(state.todolist[0].todos.indexOf(index),1);
}