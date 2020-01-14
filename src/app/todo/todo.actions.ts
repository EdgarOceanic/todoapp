import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[Todo] Agregar Todo';
export const TOGGLE_TODO = '[Todo] Toggle todo';
export const TOGGLE_ALL_TODO = '[Todo] Toggle All';
export const EDITAR_TODO = '[Todo] Editar Todo';
export const BORRAR_TODO = '[Todo] Borrar Todo';
export const LIMPIAR_TODOS_COMPLETADOS = '[Todo] Limpiar Completados';

export class AgregarTodoAction implements Action {
  type = AGREGAR_TODO;
  constructor(public texto: string) {
  }
}

export class ToggleTodoAction implements Action {
  type = TOGGLE_TODO;
  constructor(public id: number) {
  }
}

export class ToggleAllTodoAction implements Action {
  type = TOGGLE_ALL_TODO;
  constructor(public areCheckeds: boolean) {
  }
}


export class EditarTodoAction implements Action {
  type = EDITAR_TODO;
  constructor(public id: number, public nuevoTexto: string) {
  }
}

export class BorrarTodoAction implements Action {
  type = BORRAR_TODO;
  constructor(public id: number) {
  }
}

export class LimpiarTodosCompletadosAction implements Action {
  type = LIMPIAR_TODOS_COMPLETADOS;
}


export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction
 | BorrarTodoAction | ToggleAllTodoAction | LimpiarTodosCompletadosAction;
