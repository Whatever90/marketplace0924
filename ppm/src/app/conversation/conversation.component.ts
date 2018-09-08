import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  conversation = null;
  conversation_id = null;
  constructor(private _taskService: TaskService, private _r: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
      this.conversation_id = params.get('con_id');
      this._taskService.findConversationById(this.conversation_id, function (data, err) { // searching for a product by ID
        if (data.name !== 'CastError') {
          this.conversation = data;
          this.findSeller(data.seller_id);
          this.checkCurUser();
        } else {
          this._r.navigate(['/']);
        }
      }.bind(this));
    });
   }

  ngOnInit() {
  }

}
