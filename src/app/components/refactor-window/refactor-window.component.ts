import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Todo } from '../../shared/todo.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-refactor-window',
  templateUrl: './refactor-window.component.html',
  styleUrls: ['./refactor-window.component.scss']
})
export class RefactorWindowComponent {
  refactorForm: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    public dialogRef: MatDialogRef<RefactorWindowComponent>,
    private fb: FormBuilder
  ) {
    this.createForm()
  }

  private createForm() {
    this.refactorForm = this.fb.group({
      title: [this.data.title, [Validators.required]],
      text: [this.data.text, [Validators.required]]
    })
  }

  get title() {return this.refactorForm.get('title');}

  get text() {return this.refactorForm.get('text')}


  refactorTodo() {
    console.log(
      this.refactorForm.controls['title'].value,
      this.refactorForm.controls['text'].value
    )
    this.onNoClick()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
