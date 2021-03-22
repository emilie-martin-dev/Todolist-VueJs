import {LOCAL_STORAGE_API_TOKEN} from '../../const'

export function getToken(state) {
	if(state.token == undefined && LOCAL_STORAGE_API_TOKEN in localStorage) {
		state.token = localStorage.getItem(LOCAL_STORAGE_API_TOKEN);
	}
	return state.token;
}

export function getHeader(state, getters) {
	return {headers: {"Authorization": "Bearer " + getters.getToken}};
}
