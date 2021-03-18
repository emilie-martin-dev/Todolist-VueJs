import {LOCAL_STORAGE_API_TOKEN} from '../../const'

export function deleteTodo(state, {listIndex, todo}){
	//mise à jour des id suivant la valeur à supprimer
	for(let i = todo.id; i < state.todolist[listIndex].todos.length; i++){
		state.todolist[listIndex].todos[i].id -= 1;
	}
	//suppression
	state.todolist[listIndex].todos.splice(state.todolist[listIndex].todos.indexOf(todo), 1);
}

export function deleteListTodo(state, {list}){
	if(state.todolist.includes(list)){
		state.todolist.splice(state.todolist.indexOf(list), 1);
	}
}

export function addTodo(state, {listId, name}){
	state.todolist.find(element => element.id == listId).todos.push(
		{
			id: listId,
			name: name,
			completed: false
		}
	);
}

export function addListTodo(state, {id, name}){
	state.todolist.push(
		{
			id: id,
			name: name,
			todos: []
		}
	);
}

export function updateTodoListName(state, {listIndex, value}){
	state.todolist[listIndex].name = value;
	
}

export function update(state, {listIndex, todo, value}){
	state.todolist[listIndex].todos[state.todolist[listIndex].todos.indexOf(todo)].name = value;
}

export function saveToken(state, token) {
	state.token = token;
	localStorage.setItem(LOCAL_STORAGE_API_TOKEN, token);
}