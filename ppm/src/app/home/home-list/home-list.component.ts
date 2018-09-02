import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';

import { HomeComponent } from './../home.component'
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  user = null;
  products = [];
  id;
  constructor(private _taskService: TaskService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id');
      this.getUser(this.id);
    });
  }
  getUser(id) {
    console.log("dddd");
    this._taskService.getUser(this.id, function (data, err) {
      if (data) {
        console.log(data);
      } else {
        console.log(err);
      }
    });
  }
  ngOnInit() {
    this._taskService.getUser(this.id, function (data, err) {
      console.log('searching');
      if (data) {
        console.log(data);
      } else {
        console.log(err);
      }
    });
  }

}
