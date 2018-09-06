import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {Location} from '@angular/common'
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import { User } from './../user';
import { LoginUser } from './../loginUser';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  users = [];
  user;
  loginUser = new LoginUser();
  error;
  errormessage = '';
  products;
  product;
  length;
  switch = true;
  constructor(private _location: Location, private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router) {
    this.user = new User();
  }
  switcher() {
    this.switch = !this.switch;
    console.log(this.user);
  }
  reg() {
    console.log(this.user);
    console.log('asd');
    this._taskService.create(this.user, function (data, err) {
      if (data) {
        this.errormessage = '';
        this._taskService.changeUserSession(data);
        this._location.back();
      }
      if (err) {
        console.log(err);
        console.log('something wrong');
        this.errormessage = 'email is already used by another user';
        alert('email is already used by another user');
      }
    }.bind(this));
    this.user = new User();

  }
  log() {
    this._taskService.login(this.loginUser, function (data, err) {
      console.log(data);
      console.log(err);
      if (data) {
        this.errormessage = '';
        this._taskService.changeUserSession(data);
        this._location.back();
      }
      if (err) {
        this.errormessage = 'Wrong email or password';
        alert('wrong email or password');
      }
    }.bind(this));
    this.loginUser = new LoginUser;
  }
  storeUser(user) {
    this._taskService.storeUs(user);
  }
  ngOnInit() {
  }
}
