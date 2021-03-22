import {LOCAL_STORAGE_API_TOKEN} from '../../const'

export function deleteTodo(state, {listIndex, todo}){
	state.todolist[listIndex].todos.splice(state.todolist[listIndex].todos.indexOf(todo), 1);
}

export function deleteListTodo(state, {list}){
	if(state.todolist.includes(list)){
		state.todolist.splice(state.todolist.indexOf(list), 1);
	}
}

export function addTodo(state, {listId, id, name, completed}){
	state.todolist.find(element => element.id == listId).todos.push(
		{
			id: id,
			name: name,
			completed: completed
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

export function update(state, {listId, todo, value, completed}){
	let list = state.todolist.find(element => element.id == listId)
	list.todos[list.todos.indexOf(list.todos.find(element => element.id == todo))].name = value;
	list.todos[list.todos.indexOf(list.todos.find(element => element.id == todo))].completed = completed ==1;
}

export function saveToken(state, token) {
	state.token = token;
	localStorage.setItem(LOCAL_STORAGE_API_TOKEN, token);
}

export function delToken(state){
	localStorage.removeItem(LOCAL_STORAGE_API_TOKEN);
	state.token = undefined;
}