import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <li class="collection-item">{{ todo }}</li>
  `
})

export class TodoComponent {
  @Input() todo;
}
