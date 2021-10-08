import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Todo } from '../../shared/todo.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-refactor-window',
  templateUrl: './refactor-window.component.html',
  styleUrls: ['./refactor-window.component.scss']
})
export class RefactorWindowComponent {

  @Output() onAdd: EventEmitter<Todo> = new EventEmitter<Todo>()
  refactorForm: FormGroup

  title: FormControl
  text: FormControl

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
    this.title = this.refactorForm.get('title') as FormControl
    this.text = this.refactorForm.get('text') as FormControl
  }


  refactorTodo() {
    const todo: Todo = {
      title: this.refactorForm.controls['title'].value,
      text: this.refactorForm.controls['text'].value,
      id: this.data.id
    }
    console.log(todo)
    this.onAdd.emit(todo)
    this.onNoClick()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
