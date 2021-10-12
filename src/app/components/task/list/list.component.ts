import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";

import {TaskItemModel, ListModel} from "../../../core";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() onDrop = new EventEmitter<any>();
  @Input() list: ListModel;
  @Input() searchInput: any;
  @Output() onDeleteTodo = new EventEmitter<string>();
  @Output() onOpenDialog = new EventEmitter<TaskItemModel>();

  constructor() {}

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string, any>) {
    this.onDrop.emit(event)
  }

  deleteTodo(id: string){
    this.onDeleteTodo.emit(id);
  }

  openDialog(item: TaskItemModel){
    this.onOpenDialog.emit(item);
  }
}
