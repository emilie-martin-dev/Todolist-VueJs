<template>

<body>

  <div id="app" >
      <h1> TodoList </h1>
      <ul>
      <li v-for="todo in filteredTodos" :key="todo.name" >
          <input type="checkbox" id="checkbox" v-model=todo.completed>
              <label for="checkbox">{{todo.id}} | Nom de la tache: {{todo.name}} - Completer:{{ (todo.completed == false ? 'non' : 'oui')}} </label>

              <button v-on:click="decrease(todo)" >Supprimer la todo</button>
              <button v-on:click="update(todo)" >Modifier la todo</button>
              <input type="texte" id="addTodoName" v-model='addTodoName' placeholder="Nom de la tache">
      </li>
      </ul>


      <input type="texte" id="addTodoName" v-model='addTodoName' placeholder="Nom de la tache">
      <label> Tache completer: </label>
      <input type="checkbox" id="addTodoCompleted" v-model="addTodoCompleted">


      <button v-on:click="ajouter" >Ajouter une todo</button>

      <button v-bind:id="complete" v-on:click.prevent="filter = 'todo' ">tache compléter</button>
      <button v-bind:id="cour" v-on:click.prevent="filter = 'done' ">tache en cours</button>
      <button v-bind:id="all" v-on:click.prevent="filter = 'all' ">toute tacher</button>

  </div>
</body>

</template>

<script>
 import { defineComponent } from 'vue';
  export default defineComponent({
    data() {
      return {
        todos: [
          {
          id: 1,
          name : 'boucler todo dans une liste',
          completed : true
          },
          {
          id: 2,
          name : 'checkbox marque todo completed',
          completed: true
          },
          {
          id: 3,
          name : 'supprimer la todo (mais pas avec slice() :/)',
          completed: true
          },
          {
          id: 4,
          name : 'filtrer les todos affichées avec computed',
          completed: false
          },
          {
          id: 5,
          name : 'filtrer dans le template avec des boutons',
          completed: false
          },
          {
          id: 6,
          name : 'modifier la source des données affichées dans le template',
          completed: false
          },
          {
          id: 7,
          name : 'ajouter une todo',
          completed: true
          },
          {
          id: 8,
          name : 'déplacer la gestion des données dans un store Vuex',
          completed: false
          }
      ],
          addTodoCompleted: '',
          addTodoName:'',
          filter: 'all',
      }
    },
    methods: {
     decrease: function(index){
        this.todos.splice(this.todos.indexOf(index),1);
      },
      ajouter(){
          this.todos.push(
              {
              id:(this.todos.length+1),
              name:this.addTodoName.toString(),
              completed: (this.addTodoCompleted == true ? true : false)
              }
          );
     },
     update: function(index){
this.todos.splice(this.todos.indexOf(index),1);
     }
    },
    props: {

    },
    computed:{
        remaining(){
            return this.todos.filter(function (todo){
                return !todo.completed
            }).length
        },
        hasTodos(){
            return this.todos.length > 0
        },
        filteredTodos(){
            if(this.filter === 'todo'){
                return this.todos.filter(todo => todo.completed)
            } else if (this.filter === 'done'){
                return this.todos.filter(todo => !todo.completed)
            }
            return this.todos
        }
    }
  });

</script>
