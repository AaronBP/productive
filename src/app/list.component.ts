import { Component, OnInit, Input } from '@angular/core';

import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: []
})

export class ListComponent implements OnInit{
  todos = [];
  @Input() list;
  constructor(private listService: ListService){}

  ngOnInit() {
    this.todos = this.listService.getTodos();
  }
}
