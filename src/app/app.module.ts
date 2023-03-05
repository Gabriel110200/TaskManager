import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskTrackerComponent } from './components/task-tracker/task-tracker.component';
import { ButtonComponent } from './components/button/button.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTrackerComponent,
    ButtonComponent,
    ItemComponent,
    HeaderComponent,
    FooterComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule, 
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
