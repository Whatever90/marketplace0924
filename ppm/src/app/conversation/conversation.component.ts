import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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
  active_conversation = null;
  constructor(private _taskService: TaskService, private _r: Router, private _route: ActivatedRoute) {
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

}
