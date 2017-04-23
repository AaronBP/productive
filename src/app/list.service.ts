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

  lists: [{}] = [{name: "Starter Todo", todos: this.todos}, {name: "Second List", todos: ["hello", "todo 2"]}]

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  getLists() {
    return this.lists;
  }

  addList(list) {
    this.lists.push(list);
    console.log(this.lists)
  }
}
