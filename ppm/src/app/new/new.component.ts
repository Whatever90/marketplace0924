import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
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
  errormessage;
  products;
  product;
  length;
  switch = true;
  constructor(private _route: ActivatedRoute, private _taskService: TaskService, private _r: Router) {
    this.user = new User();
  }
  switcher() {
    this.switch = !this.switch;
    console.log(this.user);
  }
  reg() {
    console.log(this.user);
    // this._taskService.create(this.user, function (data) {
    //   console.log(data);
    //   if (!data) {
    //     console.log('something wrong');
    //     alert('email is already used by another user');
    //   }
    //   if (data) {
    //     console.log('exellent!');
    //     console.log(data);
    //     this.storeUser(data);
    //     this.errormessage = '';
    //     this._r.navigateByUrl('browse/all');
    //   }
    // }.bind(this));
    // this.user = new User();

  }
  login() {
    console.log(this.loginUser);
    // this._taskService.login(this.loginUser, function (data) {
    //   console.log(data);
    //   if (!data) {
    //     console.log('failed to login');
    //     alert('wrong email or password');
    //   }
    //   if (data) {
    //     this.storeUser(data);
    //     console.log('logining');
    //     this._r.navigateByUrl('browse/all');
    //   }
    // }.bind(this));
    // this.loginUser = new LoginUser;
  }
  storeUser(user) {
    this._taskService.storeUs(user);
  }
  ngOnInit() {
  }
}
