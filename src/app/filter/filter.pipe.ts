import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filtrosValidos): Todo[] {
    console.log(new Date());
    switch (filter) {
      case 'Todos':
        return todos;
      case 'Completados':
        return todos.filter(todo => todo.completado === true);
      case 'Pendientes':
        return todos.filter(todo => todo.completado === false);
    }
  }


}
