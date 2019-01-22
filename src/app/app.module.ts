import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { App01Component } from './app01.component';

import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

const appRoutes: Routes = [
  {
	path: '',
	component: App01Component
  },
  {
	path: '**',
	redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    App01Component
  ],
  imports: [
    BrowserModule,
	CommonModule,
	FormsModule, 
	HttpClientModule,
	RouterModule.forRoot(
	  appRoutes
	)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
