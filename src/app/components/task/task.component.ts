import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
// @ts-ignore
import {v4 as uuidv} from 'uuid';

import {LocalStorageService} from '../../shared/local-storage.service';
import {RefactorWindowComponent} from '../refactor-window/refactor-window.component';
import {TaskItemModel} from 'src/app/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public allTodos: TaskItemModel[] = [];
  public todos: TaskItemModel[] = []
  public progress: TaskItemModel[] = []
  public completed: TaskItemModel[] = []
  public inputText: string = '';
  public searchInput: string = '';
  public inputTitle: string = '';

  public lists = [
    {
      title: 'To-do',
      id: 'list-todo',
      data: 'todos',
      connectedTo: ['list-progress', 'list-completed'],
      items: this.todos
    },
    {
      title: 'In progress',
      id: 'list-progress',
      data: 'progress',
      connectedTo: ['list-todo', 'list-completed'],
      items: this.progress
    },
    {
      title: 'Completed',
      id: 'list-completed',
      data: 'completed',
      connectedTo: ['list-progress', 'list-todo'],
      items: this.completed
    },
  ]

  constructor(
    private localStorageService: LocalStorageService,
    private dialog: MatDialog
  ) {
  }


  ngOnInit() {
    this.allTodos = this.localStorageService.getTodoList();
    this.mapTodos();
    this.lists[0].items = this.todos;
    this.lists[1].items = this.progress;
    this.lists[2].items = this.completed;
  }


  drop(event: CdkDragDrop<TaskItemModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const data = event.item.data;
      const listId = event.container.id;

      const item = this.allTodos.find((element) => element.id === data.id);

      if (!item) {
        return;
      }
      switch (listId) {

        case 'list-progress': {
          item.type = 'progress';
          break;
        }

        case 'list-completed': {
          item.type = 'completed';
          break;
        }

        default: {
          item.type = 'todo';
        }

      }

      this.localStorageService.saveTodoList(this.allTodos);
      this.mapTodos();
    }
  }

  addTodo() {
    if (this.inputText.trim()) {
      const todo: TaskItemModel = {
        title: this.inputTitle,
        text: this.inputText,
        id: uuidv(),
        type: 'todo'
      }
      this.allTodos.push(todo);
      this.localStorageService.saveTodoList(this.allTodos);
      this.mapTodos();
      this.inputText = '';
    }
  }

  deleteTodo(id: string) {
    const todo = this.allTodos.findIndex((element) => element.id === id);
    if (todo > -1) {
      this.allTodos.splice(todo, 1);
      this.localStorageService.saveTodoList(this.allTodos);
      this.mapTodos();
    }
  }

  openDialog(item: TaskItemModel) {
    let dialogRef = this.dialog.open(RefactorWindowComponent, {
      height: '300px',
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(todo => {
      if (todo) {
        const item: any = this.allTodos.find(item => item.id == todo.id)
        item.title = todo.title
        item.text = todo.text
        this.mapTodos();
        this.localStorageService.saveTodoList(this.allTodos);
      }
    });
  }

  public mapTodos(): void {
    this.todos = this.allTodos.filter((element) => element.type === 'todo');
    this.progress = this.allTodos.filter((element) => element.type === 'progress');
    this.completed = this.allTodos.filter((element) => element.type === 'completed');
    // this.lists[0].todos = this.todos;
    // this.lists[1].todos = this.progress;
    // this.lists[2].todos = this.completed;
  }
}

