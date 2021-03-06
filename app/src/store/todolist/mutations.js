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
	let li =  document.getElementById(state.todolist[0].todos[state.todolist[0].todos.indexOf(index)].name);
	//création d'un bouton
	let input = document.createElement('input');
	input.setAttribute('type','text');
	input.setAttribute('value',li.innerText);
	//affectation d'une fonction au bouton
	input.addEventListener('keydown',submit);
	function submit(e){
		if(e.code == "Enter"){
			//mise à jour de la li et du store
			li.innerText = input.value;
			state.todolist[0].todos[state.todolist[0].todos.indexOf(index)].name = input.value;
			input.parentNode.replaceChild(li,input);
		}
	}
	//replace élément par le bouton
	li.parentNode.replaceChild(input,li)
}
