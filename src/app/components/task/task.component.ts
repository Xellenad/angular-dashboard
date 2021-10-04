import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  todo: string[] = [ 'Lorem ipsumLorem ipsum', 'Lorem ipsum dolor.', 'Lorem ipsum', 'Lorem sum', 'Lorem ipsumLorem ipsum']
  progress: string[] = []
  completed: string[] = []
  inputText: string = ''

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
      this.inputText = ''
    }
  }

}
