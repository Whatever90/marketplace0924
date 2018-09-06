import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  users = [];
  constructor(private _taskService: TaskService) {
  }

  ngOnInit() {

  }

}
