import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { FilterPipe } from './shared/filter.pipe';
import { RefactorWindowComponent } from './components/refactor-window/refactor-window.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FilterPipe,
    RefactorWindowComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RefactorWindowComponent]
})
export class AppModule {
}
