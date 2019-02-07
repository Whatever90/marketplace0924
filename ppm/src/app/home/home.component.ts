import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TaskService } from '../task.service';
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
  hard_copy = [];
  products = [];
  product;
  length;
  active_cat = 'All';

  constructor(private _taskService: TaskService, private _r: Router) {
    this.showAll();
  }
  showAll() {
    this._taskService.showMe(function (data, err) {
      if (data) {
        this.products = data;
        this.hard_copy = data;
      }
      if (err) {
        console.log(err);
      }
    }.bind(this));
  }
  selectCategory(cat){
    this.active_cat = cat;
    this.sortProducts(this.active_cat)
  }
  sortProducts(cat){
    if(cat==='All'){
      this.products = this.hard_copy;
    }else{
      let result = [];
      for(let i in this.hard_copy){
        if(this.hard_copy[i]['category']===cat){
          result.push(this.hard_copy[i]);
        }
      }
      this.products = result;
    }
  }
  ngOnInit() {
  }

}
