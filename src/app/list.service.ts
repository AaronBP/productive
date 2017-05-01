import { Injectable } from '@angular/core';

@Injectable()

export class ListService {
  todos = [
    "Meet Hagrid",
    "Learn spells",
    "Write potions assignment",
    "Kill Goblins",
    "Run away from Death Eaters"
  ];

  lists = [{name: "Starter Todo", todos: this.todos}]

  getTodos() {
    return this.todos;
  }

  addTodo(todo, list) {
    var list;
    for(var i=0; i<this.lists.length; i++){
      if(this.lists[i].name == list){
        list = this.lists[i];
        list.todos.push(todo);
        return
      }
    }
  }

  editTodo(todo, list, newTodo){
    for(var i=0; i<this.lists.length; i++){
      if(this.lists[i].name === list.name){
        for(var j=0; j<this.lists[i].todos.length; j++){
          if(this.lists[i].todos[j] === todo){
            return this.lists[i].todos[j] = newTodo;
          }
        }
      }
    }
  }

  deleteTodo(todo, list){
    for(var i=0; i<this.lists.length; i++){
      if(this.lists[i].name === list.name){
        for(var j=0; j<this.lists[i].todos.length; j++) {
          if(this.lists[i].todos[j] === todo){
            return this.lists[i].todos.splice(j, 1);
          }
        }
      }
    }
  }

  getLists() {
    return this.lists;
  }

  addList(list) {
    this.lists.push(list);
  }
}
