import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filtroReducer } from './filter/filter.reducer';
import { filtrosValidos } from './filter/filter.actions';

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

