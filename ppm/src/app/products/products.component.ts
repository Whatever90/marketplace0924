import { Component, OnInit } from '@angular/core';
import { Anonpost } from '../anonpost';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';
import { TaskService } from '../task.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product_id;
  product = null;
  user;
  cur_user = null;
  wishListIncludes = false;
  con_id = null;
  conversation = null;
  message = '';
  photo_buyer;
  photo_seller;
  constructor(private _taskService: TaskService, private _r: Router, private _route: ActivatedRoute, private _http: Http) {
    this._route.paramMap.subscribe(params => {
      this.product_id = params.get('id');
      this._taskService.findProduct(this.product_id, function (data, err) { // searching for a product by ID
        if (data.name !== 'CastError') {
          this.product = data;
          this.findSeller(data.seller);
          this.checkCurUser();
        } else {
          this._r.navigate(['/']);
        }
      }.bind(this));
    });
  }
  findSeller(id) {
    this._taskService.getUser(id, function (data, err) {
      if (data) {
        this.product.seller = data;
      } else {
        console.log(err);
      }
    }.bind(this));
  }
  checkCurUser() {
    this._taskService.showUser(function (data, err) {
      if (data) {
        this.cur_user = data;
        if (!this.cur_user.wishList) {
          this.cur_user.wishList = [];
        } else {
          for (let i = 0; i < this.cur_user.wishList.length; i++) {
            if (this.cur_user.wishList[i]._id === this.product._id) {
              this.wishListIncludes = true;
              break;
            }
          }
        }

      }
      if (err) {
        console.log(err);
      }
    }.bind(this));
  }

  addToWishList() {
    if (!this.cur_user) {
      this._r.navigate(['/login']);
    } else {
      const obj = {
        id: this.cur_user._id,
        product: this.product
      };
      this._taskService.addToWishList(obj, function (data, err) {
        if (data) {
          this.wishListIncludes = true;
          console.log(data);
        } else {
          console.log(err);
        }
      });
    }
  }
  
  onEnter(value: string) { this.message = value }
  contactSeller() {
    if (!this.cur_user) {
      this._r.navigate(['/login']);
    }
    let obj = {
      product: this.product,
      buyer_id: this.cur_user._id
    }
    this._taskService.findConversation(obj, function (data, err) {
      console.log("data =>", data);
      console.log("err =>", err)
      if (data) {
        console.log(data);
        this.conversation = data;
        this.conversation.messages.reverse();
      } else {
        this.conversation = [];
      }
      this.photo_buyer = 'http://placehold.it/50/55C1E7/fff&text=' + this.cur_user.alias[0];
      this.photo_seller = 'http://placehold.it/50/55C1E7/fff&text=' + this.product.seller.alias[0];
    }.bind(this));
  }

  sendingMessage(message) {
    if(message.length<1){
      return;
    }
    let obj = {
      message: message,
      conversation_id: this.conversation._id,
      sender_id: this.cur_user._id,
      sender_alias: this.cur_user.alias,
      reciever_id: this.product.seller._id,
      reciever_alias: this.product.seller.alias,
      product_id: this.product._id
    };
    console.log(obj)
    this._http.post('/conversations/update', obj).subscribe(
      (data) => {data = data.json(); console.log("data => ",data)},
      (err) => console.log("err => ", err)
    );
      
    this._taskService.sendMessage(obj, function (data, err) {
      if (data) {
        this.conversation = data;
        this.conversation.messages.reverse();
      } else {
        console.log(err);
      }
    }.bind(this));
  }
  ngOnInit() {
  }

}
