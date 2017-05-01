import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ListService } from './list.service'
@Component({
  selector: 'app-list-input',
  template: `
  <div class="new-list" (click)="toggleAddingNewList(1)" [ngClass]="{'new-list-active': highlightedDiv === 1}">
    <i *ngIf="!addingNewList" class="material-icons">add</i>
    <div *ngIf="addingNewList" class="error-message red-text">{{ errorMessage }}</div>
    <form *ngIf="addingNewList" #lf="ngForm" (ngSubmit)="addList(lf)">
      <div class="input-field">
        <input type="text" name="listName" id="list-input" ngModel/>
        <label for="list-input">New List</label>
      </div>
    </form>
  </div>
  `
})

export class ListInputComponent {
  constructor(private listService: ListService) { }
  addingNewList = false;
  errorMessage = "";
  displayNewList = false;
  highlightedDiv: number;

  newListClick() {
    if(!this.displayNewList){
      //change state to expand maaan
      this.displayNewList = !this.displayNewList;
    }
    else {
      //change state back to normal maaaan
      this.displayNewList = !this.displayNewList;
    }
  }

  toggleAddingNewList(newValue: number){
    if(!this.addingNewList){
      this.addingNewList = !this.addingNewList;
    }
    if (this.highlightedDiv !== newValue) {
      this.highlightedDiv = newValue;
    }
  }

  addList(form: NgForm){
    var listName = form.value.listName;
    var lists = this.listService.getLists();
    for(var i=0; i<lists.length; i++){
      if(lists[i].name == listName){
        this.errorMessage = "A list with this name already exists";
        return;
      }
    }
    this.errorMessage = "";
    this.listService.addList({name: listName, todos: []});
    form.reset();
  }
}
