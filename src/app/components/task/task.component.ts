import { Component } from '@angular/core';
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
    {text: 'Lorem ipsum dolor sit', id: 1},
    {text: 'Lorem ipsum sit', id: 2},
    {text: 'Lorem ipsum dolor ', id: 3},
    {text: 'Lorem  dolor sit', id: 4},
    {text: 'ipsum dolor sit', id: 5}
  ]
  progress: Todo[] = []
  completed: Todo[] = []
  inputText: string = ''

  constructor(private localStorageService : LocalStorageService) {}


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
    if (this.inputText.trim()) {
      const todo: Todo = {
        text: this.inputText,
        id: uuidv()
      }
      this.todos.unshift(todo)
      this.localStorageService.setLocalStorageData(LOCAL_STORAGE_KEY, this.todos)
      this.inputText = ''
    }
  }


}
