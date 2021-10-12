import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { FilterPipe } from './shared/filter.pipe';
import { RefactorWindowComponent } from './components/refactor-window/refactor-window.component';
import { MatInputModule } from '@angular/material/input';
import { ListComponent } from './components/task/list/list.component';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FilterPipe,
    RefactorWindowComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    LocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
