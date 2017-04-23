import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent implements OnInit {
  title = 'Productif';
  lists = []
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.getLists()
  }
}
