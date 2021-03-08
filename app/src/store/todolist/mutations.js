export function decrease(state, filterList, index){
	state.todolist[filterList].todos.splice(state.todolist[filterList].todos.indexOf(index), 1);
}

export function ajouter(state, filterList, {name, completed}){
	state.todolist[filterList].todos.push(
		{
			id: (state.todolist[filterList].todos.length+1),
			name: name,
			completed: completed
		}
	);
}

export function update(state, filterList, index){
	state.todolist[filterList].todos.splice(state.todolist[filterList].todos.indexOf(index),1);
}
