import {LOCAL_STORAGE_API_TOKEN} from '../../const'

export function saveToken(state, token) {
	state.token = token;
	state.todolist = [];
	localStorage.setItem(LOCAL_STORAGE_API_TOKEN, token);
}

export function delToken(state){
	localStorage.removeItem(LOCAL_STORAGE_API_TOKEN);
	state.token = undefined;
}