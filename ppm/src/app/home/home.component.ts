import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { User } from './../user';
import { LoginUser } from './../loginUser';
import { CompileNgModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [];
  user = new User();
  loginUser = new LoginUser();
  error;
  errormessage;
  products;
  product;
  length;

  constructor(private _taskService: TaskService, private _r: Router) {
    this.showAll();
  }
  showAll() {
    this._taskService.showMe(function (data, err) {
      console.log(data);
      console.log('----------------------');
      console.log(err);
      if (data) {
        console.log('somehow true statement is ERROR, lol');
        console.log(data);
        this.products = data;
        console.log(this.products);
      }
      if (err) {
        console.log('yes!!!!!!!!!!!!!!');
        this.products = data;
      }
    }.bind(this));
  }

  ngOnInit() {
  }

}
