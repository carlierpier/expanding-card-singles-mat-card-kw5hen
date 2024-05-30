import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../material.module';


import { AppComponent } from './app.component';
import {ToastComponent} from './toast/toast.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
