
import { Todo } from './model/todo.model';
import * as fromTodo from './todo.actions';



const todoAprender = new Todo('Aprender ingles');
todoAprender.completado = true;
const jsMaster = new Todo('Ser maestro en JS');

const estadoInicial: Todo[] = [todoAprender, jsMaster];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {
  console.log('todoReducer', { state, action });
  switch (action.type) {


    case fromTodo.AGREGAR_TODO:
      const agregarAct = action as fromTodo.AgregarTodoAction;
      const todo = new Todo(agregarAct.texto);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      const toggleAct = action as fromTodo.ToggleTodoAction;
      return state.map(item => {
        if (item.id === toggleAct.id) {
          return {
            ...item,
            completado: !item.completado
          } as Todo;
        } else {
          return item;
        }
      });



    case fromTodo.TOGGLE_ALL_TODO:
      const toggleAllAction = action as fromTodo.ToggleAllTodoAction;
      return state.map(item => {
        return {
          ...item,
          completado: toggleAllAction.areCheckeds
        } as Todo;
      });


    case fromTodo.EDITAR_TODO:
      const editAct = action as fromTodo.EditarTodoAction;
      return state.map(item => {
        if (item.id === editAct.id) {
          return {
            ...item,
            texto: editAct.nuevoTexto
          } as Todo;
        } else {
          return item;
        }
      });

    case fromTodo.BORRAR_TODO:
      const borrarAct = action as fromTodo.BorrarTodoAction;
      return state.filter(item => item.id !== borrarAct.id);

    case fromTodo.LIMPIAR_TODOS_COMPLETADOS:
      return state.filter(elem => elem.completado === false);

  }

  return state;

}

