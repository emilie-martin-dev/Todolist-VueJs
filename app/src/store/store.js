import {createStore} from "vuex";

import todolist from "./todolist";

export const store = createStore({
	debug: true,
	modules: {
		todolist
	}
});
