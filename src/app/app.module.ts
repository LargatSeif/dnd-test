import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from './routes';

import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { Dashboard2Module } from './pages/dashboard2';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,   
    RouterModule.forRoot(ROUTES),
    DashboardModule,
    Dashboard2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
