import { Component, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// @ts-ignore
import { v4 as uuidv } from 'uuid';

import { LocalStorageService } from '../../shared/local-storage.service';
import { Todo } from '../../shared/todo.interface';
import { LOCAL_STORAGE_KEY } from '../../shared/constans';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {

  todos: Todo[] = [
    {title: 'lorem', text: 'Lorem ipsum dolor sit', id: 1},
    {title: 'lorem', text: 'Lorem ipsum sit', id: 2},
    {title: 'lorem', text: 'Lorem ipsum dolor ', id: 3},
    {title: 'lorem', text: 'Lorem  dolor sit', id: 4},
  ]
  progress: Todo[] = []
  completed: Todo[] = []
  inputText: string = ''
  searchInput: string = ''
  inputTitle: string = ''

  constructor(
    private localStorageService: LocalStorageService) {}


  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addTodo() {
    if (this.inputText.trim() && this.inputTitle.trim()) {
      const todo: Todo = {
        title: this.inputTitle,
        text: this.inputText,
        id: uuidv(),
      }
      this.todos.unshift(todo)
      this.localStorageService.setLocalStorageData(LOCAL_STORAGE_KEY, this.todos)
      this.inputText = ''
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo)=> todo.id != id);
    console.log('Delete')
  }



}
