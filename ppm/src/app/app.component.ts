import { Component } from '@angular/core';

import { TaskService } from './task.service';
import { Anonpost } from './anonpost';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts = [];
  post = new Anonpost();
  list;
  errors = [];
  check = [];
  user = null;
  test = '<h1>GONGODY</h1>';
  constructor(private _taskService: TaskService, private location: Location) {
    this.checkUser();
  }
  checkUser() {
    this._taskService.showUser(function(data, err){
      if (data) {
        console.log(data);
        this.user = data;
      } else {
        console.log('seems like there is no one');
      }
    }.bind(this));
  }
  logout() {
    this._taskService.logout();
    window.location.reload();
  }
  onSubmit() {
  }
  showAll() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this._taskService.currentUserSession.subscribe(user => this.user = user);
  }
}
