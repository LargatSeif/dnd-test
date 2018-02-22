import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DashboardComponent } from './dashboard.component';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    
    NgDragDropModule.forRoot()
  ],
  providers: []
})
export class DashboardModule { }
