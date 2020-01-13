import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  areCompleteds = false;

  constructor(private store: Store<AppState>) {

   }

  ngOnInit() {
  }

  marcarTodos(){
    this.areCompleteds = !this.areCompleteds;

    const action = new ToggleAllTodoAction(this.areCompleteds);
    this.store.dispatch(action);

  }

}
