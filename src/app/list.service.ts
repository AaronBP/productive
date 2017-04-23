import { Injectable } from '@angular/core';

@Injectable()

export class ListService {
  todos = [
    "Meet Hagrid",
    "Learn spells",
    "Write potions assignment",
    "Kill Goblins",
    "Run away from Death Eaters"
  ]

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
    console.log(this.todos)
  }
}
