import { Component, OnInit } from '@angular/core';

import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['Todos', 'Completados', 'Pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  tareasPendientes: number;

  constructor(private store: Store<AppState>) {
    this.tareasPendientes = 0;
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarTareasPendientes(state.todos);
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const action = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(action);
  }


  private contarTareasPendientes(todos: Todo[]): void {
    this.tareasPendientes = todos.filter( todo => todo.completado === false ).length;
  }

}
