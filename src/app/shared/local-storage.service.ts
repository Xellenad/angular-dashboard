import { Injectable } from '@angular/core';
import { TaskItemModel } from 'src/app/core';

@Injectable()
export class LocalStorageService {

  public todos: TaskItemModel[] = [];

  public getTodoList() {
    const storageData = localStorage.getItem('todo-list');

    return storageData ? JSON.parse(storageData) : [];
  }

  public saveTodoList(data: TaskItemModel[]) {
    localStorage.setItem('todo-list', JSON.stringify(data));
  }

}


