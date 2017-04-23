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

  lists = [{name: "Starter Todo", todos: this.todos}, {name: "Second List", todos: ["hello", "todo 2"]}]

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

  getLists() {
    return this.lists;
  }

  addList(list) {
    this.lists.push(list);
    console.log(this.lists)
  }
}
