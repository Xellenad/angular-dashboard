import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

// @ts-ignore
import { v4 as uuidv } from 'uuid';
import { LocalStorageService } from '../../shared/local-storage.service';
import { Todo } from '../../shared/todo.interface';
import { LOCAL_STORAGE_LIST } from '../../shared/constans';
import { RefactorWindowComponent } from '../refactor-window/refactor-window.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  todos: Todo[] = []
  progress: Todo[] = []
  completed: Todo[] = []
  inputText: string = ''
  searchInput: string = ''
  inputTitle: string = ''

  constructor(
    private localStorageService: LocalStorageService,
    private dialog: MatDialog
  ) {}


  ngOnInit() {
    const todos = this.localStorageService.getLocalStorageData(LOCAL_STORAGE_LIST);
    this.todos = todos ? todos : [];
  }


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
      this.localStorageService.setLocalStorageData(LOCAL_STORAGE_LIST, this.todos)
      this.inputText = ''
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo)=> todo.id != id);
    this.localStorageService.setLocalStorageData(LOCAL_STORAGE_LIST, this.todos)
  }

  openDialog(item: Todo) {
    let dialogRef = this.dialog.open(RefactorWindowComponent, {
      height: '300px',
      width: '400px',
      data: item
    });

    dialogRef.afterClosed (). subscribe ( result => {
      console .log ( 'Window close' );
    });
  }

}

