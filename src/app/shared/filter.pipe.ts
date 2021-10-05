import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './todo.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], search: string = ''): Todo[] {
    if (!search.trim()) {
      return todos
    }

    return todos.filter(todo => {
      return todo.text.toUpperCase().includes(search.toUpperCase())
    })
  }

}
