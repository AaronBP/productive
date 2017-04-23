import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { TodoComponent } from './todo.component';
import { TodoInputComponent } from './todo-input.component';
import { ListInputComponent } from './list-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoComponent,
    TodoInputComponent,
    ListInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
