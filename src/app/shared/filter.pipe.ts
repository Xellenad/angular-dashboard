import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any[], search: string = ''): any[] {
    if (!search.trim()) {
      return todos
    }

    return todos.filter(todo => {
      return todo.text.toUpperCase().includes(search.toUpperCase())
    })
  }

}
