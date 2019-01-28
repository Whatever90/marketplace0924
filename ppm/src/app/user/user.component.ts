import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TaskService } from './../task.service';
import { Product } from './../product';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = null;
  products = [];
  id;
  cur_user_id = null;
  adder = false;
  product = new Product();
  fileToUpload: File = null;
  categories = ['Mens Clothing', 'Womens Clothing', 'Cars', 'Home and Garden', 'Electronics', 'Baby and Child', 'Other'];

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
        this._taskService.showMylist(this.user._id, function (d, e) {
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
    this._taskService.newProduct(this.product, function (data, err) {
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
  showWishList() {
    console.log('show then your wish list, Carl');
  }
  handleFileInput(input) {
    let files = input.files
    this.fileToUpload = files.item(0);
    console.log(files.item(0))
    if (!files.item(0)) {
      return;
    }
    if (files.item(0).type.slice(0, 5) !== 'image') {
      console.log("no image", files.item(0).type.slice(0, 5))
    } else {
      console.log('image')
      if (files.item(0).size > 5242880) {
        console.log("too heavy")
      } else {
        console.log('ok size', files.item(0).size / 1048576)
        this.encodeImageFileAsURL(files.item(0))
        input.value = '';
      }
    }
  }
  encodeImageFileAsURL(element) {
    var reader = new FileReader();
    reader.onloadend = function () {
      this.product.images.push(reader.result)
    }.bind(this)
    reader.readAsDataURL(element)
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
