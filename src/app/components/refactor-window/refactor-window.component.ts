import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-refactor-window',
  templateUrl: './refactor-window.component.html',
  styleUrls: ['./refactor-window.component.scss']
})
export class RefactorWindowComponent {

  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>()
  refactorForm: FormGroup

  title: FormControl
  text: FormControl

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    const todo = {
      title: this.refactorForm.controls['title'].value,
      text: this.refactorForm.controls['text'].value,
      id: this.data.id
    }
    this.dialogRef.close(todo)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
