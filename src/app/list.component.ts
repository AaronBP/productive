import { Component, OnInit } from '@angular/core';

import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [ListService]
})

export class ListComponent{
  // todos = [
  //   "Meet Hagrid",
  //   "Learn spells",
  //   "Write potions assignment",
  //   "Kill Goblins"
  // ]
  todos = [];

  constructor(private listService: ListService){}

  ngOnInit() {
    this.todos = this.listService.getTodos();
  }
}
