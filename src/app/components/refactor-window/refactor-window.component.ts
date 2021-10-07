import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Todo } from '../../shared/todo.interface';


@Component({
  selector: 'app-refactor-window',
  templateUrl: './refactor-window.component.html',
  styleUrls: ['./refactor-window.component.scss']
})
export class RefactorWindowComponent {

  constructor(
    public dialogRef: MatDialogRef<RefactorWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  refactorTodo() {

  }
}
