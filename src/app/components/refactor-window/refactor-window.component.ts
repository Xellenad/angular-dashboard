import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-refactor-window',
  templateUrl: './refactor-window.component.html',
  styleUrls: ['./refactor-window.component.scss']
})
export class RefactorWindowComponent {

  constructor(
    public dialogRef: MatDialogRef<RefactorWindowComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  refactorTodo() {

  }
}
