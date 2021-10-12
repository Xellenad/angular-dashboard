import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskItemModel } from '../../core';
import { RefactorWindowComponent } from '../refactor-window/refactor-window.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();

  @Input() items: TaskItemModel[];

  @Input() searchInput: string;


  constructor() {
  }

  ngOnInit(): void {
  }


  delete(id: number) {
    this.onDelete.emit(id)
  }


  edit(item: TaskItemModel) {
    this.onEdit.emit(item)
  }
}
