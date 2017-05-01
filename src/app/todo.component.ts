import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ListService } from './list.service'

@Component({
  selector: 'app-todo',
  template: `
  <form #f="ngForm" (ngSubmit)="onTodoChange(f, $event)">
    <li class="collection-item" >
      <span *ngIf="!isEdit">{{ todo }}</span>
      <span *ngIf="isEdit">
        <input ngModel name="todo" class="validate todo-edit" type="text" />
      </span>
      <div class="todo-action">
        <span *ngIf="!isEdit" (click)="editTodo($event, f)"><i class="material-icons">mode_edit</i></span>
        <span *ngIf="!isEdit"(click)="deleteTodo()"><i class="material-icons">delete</i></span>
        <span *ngIf="isEdit" (click)="stopEditTodo()"><i class="material-icons done">done</i></span>
      </div>
    </li>
  </form>
  `
})

export class TodoComponent {
  @Input() todo;
  @Input() list;

  isEdit = false;

  constructor(private listService: ListService) { }

  onTodoChange(form: NgForm, event){
    // event.PreventDefault();
    this.listService.editTodo(this.todo, this.list, form.value.todo);
    this.isEdit = false;
  }

  editTodo(event, form: NgForm){
    this.isEdit = true;
    //['todo'].setValue("elloooo")
    //event.target.previousSibling
  }

  deleteTodo(){
    this.listService.deleteTodo(this.todo, this.list);
  }

  stopEditTodo(){
    this.isEdit = false;
  }
}
