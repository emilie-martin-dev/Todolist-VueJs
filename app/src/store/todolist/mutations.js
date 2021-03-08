export function decrease(state, index){
	//mise à jour des id suivant la valeur à supprimer
	for(let i = index.id; i < state.todolist[0].todos.length; i++){
		state.todolist[0].todos[i].id -= 1;
	}
	//suppression
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

export function update(state, {todo, value}){
	state.todolist[0].todos[state.todolist[0].todos.indexOf(todo)].name = value;
}
