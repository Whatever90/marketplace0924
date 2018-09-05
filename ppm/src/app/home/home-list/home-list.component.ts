import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../../task.service';
import { Product } from './../../product';
import { HomeComponent } from './../home.component';
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  user = null;
  products = [];
  id;
  cur_user_id = null;
  adder = false;
  product = new Product();

  constructor(private _taskService: TaskService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getUser(this.id);
      this._taskService.showUser(function (data, err) { // searching user in session
        if (data) {
          this.cur_user_id = data._id;
        }
      }.bind(this));
    });
    this.product = new Product();
  }
  getUser(id) { // finding user by id
    this._taskService.getUser(this.id, function (data, err) {
      if (data) {
        this.user = data;
        this._taskService.showMylist(this.user._id, function(d, e){
          if (d) {
            this.products = d;
          } else {
            console.log(e);
          }
        }.bind(this));
      } else {
        console.log(err);
      }
    }.bind(this));
  }
  adding(event) {
    event.preventDefault(); // due to 'a href' link is connected to the function, we should prevent page load
    this.adder = true;
  }
  adding_submit() {
    this.product.seller = this.cur_user_id;
    if (this.product.images.length === 0) {
      let temp = Math.floor(Math.random() * 10 + 1);
      for (let i = 0; i < temp; i++) {
        this.product.images.push('https://source.unsplash.com/collection/1163637/480x480');
      }
    }
    this._taskService.newProduct(this.product, function(data, err){
      if (data) {
        console.log(data);
      } else {
        console.log(err);
      }
    });
    this.product = new Product();
    this.adding_cancel();

  }
  adding_cancel() { // just canceling form
    this.adder = false;
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
