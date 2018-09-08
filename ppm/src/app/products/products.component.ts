import { Component, OnInit } from '@angular/core';
import { Anonpost } from '../anonpost';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';

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
  constructor(private _taskService: TaskService, private _r: Router, private _route: ActivatedRoute) {
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
  contactSeller() {
    if (!this.cur_user) {
      this._r.navigate(['/login']);
    }
    let obj = {
      product_id: this.product,
      buyer_id: this.cur_user._id
    }
    this._taskService.findConversation(obj, function (data, err) {
      if (data) {
        console.log(data);
      } else {
        console.log(err);
      }
    });

  }
  addToWishList() {
    if (!this.cur_user) {
      this._r.navigate(['/login']);
    } else {
      let obj = {
        id: this.cur_user._id,
        product: this.product
      };
      this._taskService.addToWishList(obj, function (data, err) {
        if (data) {
          console.log(data);
        } else {
          console.log(err);
        }
      });

    }

  }

  ngOnInit() {
  }

}
