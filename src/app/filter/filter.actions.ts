import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set filtro';

export type filtrosValidos = 'Todos' | 'Completados' | 'Pendientes';

export class SetFiltroAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filtro: filtrosValidos) {

  }
}


export type acciones = SetFiltroAction;
