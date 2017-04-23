import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ListService } from './list.service'
@Component({
  selector: 'app-list-input',
  template: `
  <form #lf="ngForm" (ngSubmit)="addList(lf)">
    <input type="text" name="listName" placeholder="add new list" ngModel/>
  </form>
  `
})

export class ListInputComponent {
  constructor(private listService: ListService) { }

  addList(form: NgForm){
    var listName = form.value.listName;
    this.listService.addList({name: listName, todos: []})
    console.log(listName);
    form.reset();
  }
}
