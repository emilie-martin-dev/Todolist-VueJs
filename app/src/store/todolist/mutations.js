import {LOCAL_STORAGE_API_TOKEN} from '../../const'

export function deleteTodo(state, {listIndex, todo}){
	state.todolist[listIndex].todos.splice(state.todolist[listIndex].todos.indexOf(todo), 1);
}

export function deleteListTodo(state, {list}){
	if(state.todolist.includes(list)){
		state.todolist.splice(state.todolist.indexOf(list), 1);
	}
}

export function addTodo(state, {listId, id, name}){
	state.todolist.find(element => element.id == listId).todos.push(
		{
			id: id,
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

export function delToken(state){
	state.token = undefined;
	localStorage.setItem(LOCAL_STORAGE_API_TOKEN, undefined);
	console.log(state.token)
}
