import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Dashboard2Component } from './dashboard2.component';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  declarations: [
    Dashboard2Component
  ],
  imports: [
    BrowserModule,
    
    NgDragDropModule.forRoot()
  ],
  providers: []
})
export class Dashboard2Module { }
