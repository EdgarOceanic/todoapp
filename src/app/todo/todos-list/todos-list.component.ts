import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
    });
  }

}
