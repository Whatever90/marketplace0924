import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';

import { TaskService } from '../task.service';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  conversations = null;
  conversation_id = null;
  cur_user;
  message = '';
  active_conversation = null;
  constructor(private _taskService: TaskService, private _r: Router, private _route: ActivatedRoute, private _http: Http) {
    this._taskService.showUser(function (d, e) {
      if (d) {
        this.cur_user = d;
        const obj = {
          id: d._id
        };
        this._taskService.findAllConversations(obj, function (data, err) {
          if (data) {
            this.conversations = data;
            this.active_conversation = this.conversations[0];
          } else {
            console.log(err);
          }
        }.bind(this));
      } else {
        this._r.navigate(['/']);
      }
    }.bind(this));
  }

  ngOnInit() {
  }
  activeConversation(conversation){
    this.active_conversation = conversation;
    console.log(this.active_conversation)
  }
  sendingMessage(message) {
    if(message.length<1){
      return;
    }
    console.log(message)
    let obj = {
      message: message,
      conversation_id: this.active_conversation._id,
      sender_id: this.cur_user._id,
      sender_alias: this.cur_user.alias,
      reciever_id: this.active_conversation.seller._id,
      reciever_alias: this.active_conversation.seller.alias,
      product_id: this.active_conversation.product._id
    };
    console.log(obj)
    this._http.post('/conversations/update', obj).subscribe(
      (data) => {
        data = data.json();
        console.log("data => ",data);
        // this.conversation = data;
        // this.conversation.messages.reverse();
      },
      (err) => console.log("err => ", err)
    );
  }

}
