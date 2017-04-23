import { Component, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'

import { ListService } from './list.service';

@Component({
  selector: 'app-todo-input',
  template: `
  <form (ngSubmit)="addTodo(f)" #f="ngForm">
    <div class="input-field">
      <input id="todo-input" type="text" type="text" class="validate" name="todo" ngModel />
      <label for="todo-input">Todo</label>
    </div>
    <div class="input-field">
      <select ngModel name="list">
        <option value="" disabled selected>Choose list</option>
        <option *ngFor="let list of lists" [ngValue]="list.name">{{ list.name }}</option>
      </select>
    </div>
  </form>
  `,
  providers: []
})

export class TodoInputComponent {
  constructor(private listService: ListService) { }
  @Input() lists;
  addTodo(form: NgForm) {
    const value = form.value;
    this.listService.addTodo(value.todo, value.list);
    console.log(form)
    form.reset()

  }
}
