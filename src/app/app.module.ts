import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { UniversalModule } from 'angular2-universal';
 

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'; 
import {routing} from './app.routing';

@NgModule({
  imports:      [ UniversalModule, FormsModule, HttpModule, routing],
  declarations: [ AppComponent, UserComponent, AboutComponent],
  bootstrap:    [ AppComponent  ]
})
export class AppModule { }
