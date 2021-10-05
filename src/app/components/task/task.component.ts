import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { LocalStorageService } from '../../shared/local-storage.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {

  todo: string[] = [ 'Lorem ipsumLorem ipsum', 'Lorem ipsum dolor.', 'Lorem ipsum', 'Lorem sum', 'Lorem ipsumLorem ipsum']
  progress: string[] = []
  completed: string[] = []
  inputText: string = ''

  constructor(private localStorageService : LocalStorageService) {
  }


  drop(event: CdkDragDrop<string[]>) {
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
      this.todo.unshift(this.inputText)

      this.localStorageService.setItem('todo', this.inputText)

      this.inputText = ''
    }
  }


}
