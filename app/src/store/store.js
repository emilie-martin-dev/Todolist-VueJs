import {createStore} from "vuex";

import todolist from "./todolist";
import login from "./login";

export const store = createStore({
	debug: true,
	modules: {
		todolist,
		login
	}
});
