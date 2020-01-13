
import * as fromFiltro from './filter.actions';


const inicial: fromFiltro.filtrosValidos = 'Todos';

export function filtroReducer(state = inicial, action: fromFiltro.acciones): fromFiltro.filtrosValidos {

  switch (action.type) {
    case fromFiltro.SET_FILTER:
      return action.filtro;
    default:
      return state;
  }
}


