import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {DATA} from './resource/data';
import {NEWDATA} from './resource/newData';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data;
  expanded = [];

  constructor(public toast: MatSnackBar) {
    this.data = DATA;
  }

  toastCreate(data) {
    this.toast.open(`Item created: ${data.name}`, 'close', {
      duration: 4000 // 4 secs
    });
  }

  async addItem() {
    let newData = NEWDATA;
    await this.data.push(newData);
    this.toastCreate(newData);
  }

  delete(item) {
    // Delete by filtering
    this.data = this.data.filter(item => item !== x);
  }  

  save(item) {
    console.log(item);
  }

}
