import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http,  } from '@angular/http';
import { BehaviorSubject, ObservableInput } from 'rxjs';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TaskService {
  user;
  key = [];
  posts = [];
  private userSession = new BehaviorSubject(null);
  currentUserSession = this.userSession.asObservable();
  constructor(private _r: Router, private _http: Http, private http: HttpClient ) { //, private http: HttpClient
  }
  // -=========User functions============-
  getIp(){
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      return data.ip;
    })
  }
  changeUserSession(u) {
    this.userSession.next(u);
  }
  create(user, callback) {
    this._http.post('/user/new', user).pipe(
      map(data => data.json())) //
      .subscribe(data => callback(data));
  }

  login(user, callback) {
    user.ip = this.getIp();
    this._http.post('/user/login', user).pipe(
      map(data => data.json())) //
      .subscribe(data => callback(data));
  }
  showUser(callback) { // get user from session
    this._http.post('/user/showuser', 'lol').pipe(
      map(data => data.json())) //
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
    this._http.post('/user/contact', user).pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }
  addToWishList(obj, callback) {
    this._http.post('/user/addToWishList', obj).pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }

    
  
  // -=========Product functions============-
  newProduct(product, callback) {
    this._http.post('/products/new', product).pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }
  findProduct(id, callback) {
    id = {
      id: id
    };
    this._http.post('/products/find', id).pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }
  updateProduct(product) {
    this._http.post('/products/update', product).subscribe(
      (data) => data = data.json(),
      (err) => console.log(err)
    );
  }
  showMe(callback) {
    this._http.post('/products/all', 'lol').pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }
  showMylist(id, callback) {
    id = {
      id: id
    };
    this._http.post('/products/mylist', id).pipe(
      map(data => data.json()))
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
  // Conversation, chats, messages, etc
  findConversation(obj, callback) { // Looking for a conversation by product and buyer IDs
    this._http.post('/conversations/find', obj).pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }
  findAllConversations(id, callback) {
    this._http.post('/conversations/findForUser', id).pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }
  findConversationById(id, callback) { // Looking for a conversation by product and buyer IDs
    id = {
      id: id
    };
    this._http.post('/conversations/findById', id).pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }
  createConversation(obj, callback) {
    this._http.post('/conversations/create', obj).subscribe(
      (data) => data = data.json(),
      (err) => console.log(err)
    );
  }
  updateConversation(obj, callback) {
    this._http.post('/conversations/update', obj).subscribe(
      (data) => data = data.json(),
      (err) => console.log(err)
    );
  }
  sendMessage(obj, callback) {
    this._http.post('/conversations/update', obj).pipe(
      map(data => data.json()))
      .subscribe(data => callback(data));
  }




  // ADMIN FUNCTION++++++++++++++++++++++++++
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
    this._http.post('/user/delete/', id).pipe(
      map(data => data.json()))
      .toPromise();
    console.log('did it work?');

  }

}
