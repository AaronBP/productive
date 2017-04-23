import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

import { ListService } from './list.service';

@Component({
  selector: 'app-todo-input',
  template: `
  <form (ngSubmit)="addTodo(f)" #f="ngForm">
    <div class="input-field">
      <input onSubmit="addTodo()" id="todo-input" type="text" type="text" class="validate" name="todo" ngModel/>
      <label for="todo-input">Todo</label>
    </div>
  </form>
  `,
  providers: [ListService]
})

export class TodoInputComponent {
  constructor(private listService: ListService) { }

  addTodo(form: NgForm) {
    const value = form.value;
    console.log('form value: ' + value.todo)
    // this.listService.addTodo(value.todo);
  }
}
