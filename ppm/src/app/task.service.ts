import { Injectable } from '@angular/core';
import { Product } from './product';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { PostsComponent } from './posts/posts.component';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/Rx';
@Injectable()
export class TaskService {
  // context;
  // answer;
  user;
  // fighter1;
  // fighter2;
  key = [];
  posts = [];
  private userSession = new BehaviorSubject(null);
  currentUserSession = this.userSession.asObservable();
  constructor(private _r: Router, private _http: Http) {

  }
// -=========User functions============-
  changeUserSession(u) {
    this.userSession.next(u);
  }
  create(user, callback) {
    this._http.post('/user/new', user)
      .map(data => data.json()) //
      .subscribe(data => callback(data));
  }

  login(user, callback) {
    this._http.post('/user/login', user)
      .map(data => data.json()) //
      .subscribe(data => callback(data));
  }
  showUser(callback) { // get user from session
    this._http.post('/user/showuser', 'lol')
      .map(data => data.json()) //
      .subscribe(data => callback(data));
  }
  storeUs(user) {
    this._http.post('/user/store', user).subscribe(
      (data) => data = data.json(),
      (err) => console.log(err)
    );
  }
  logout() {
    this._http.get('/user/logout', 'lol').subscribe(
      (data) => data = data.json(),
      (err) => console.log(err)
    );
  }
  getUser(user, callback) { // find user by ID
    user = {
      user: user
    };
    console.log(user);
    this._http.post('/user/contact', user)
      .map(data => data.json())
      .subscribe(data => callback(data));
  }
// -=========Product functions============-
  newProduct(product, callback) {
    this._http.post('/products/new', product)
      .map(data => data.json())
      .subscribe(data => callback(data));
  }
  updateProduct(product) {
    console.log('TASKSERVICE:', product);
    this._http.post('/products/update', product).subscribe(
      (data) => data = data.json(),
      (err) => console.log(err)
    );
  }
  showMe(callback) {
    this._http.post('/products/all', 'lol')
      .map(data => data.json())
      .subscribe(data => callback(data));
  }
  showMylist(id, callback) {
    console.log(id);
    id = {
      id: id
    };
    this._http.post('/products/mylist', id)
      .map(data => data.json())
      .subscribe(data => callback(data));
  }
  deleteProduct(id) {
    id = {
      id: id
    };
    this._http.post('/products/delete', id).subscribe(
      (data) => data = data.json(),
      (err) => console.log(err)
    );
  }







  show(callback) {
    console.log('show all!');
    this._http.get('/users').subscribe(
      (data) => callback(data.json()),
      (err) => console.log(err)
    );
  }


  delete(id) {
    console.log(id);
    id = { id: id };
    this._http.post('/user/delete/', id)
      .map(data => data.json())
      .toPromise();
    console.log('did it work?');

  }

}
