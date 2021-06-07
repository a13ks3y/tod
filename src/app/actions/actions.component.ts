import { Component, OnInit } from '@angular/core';
import {Action} from "./action";

@Component({
  selector: 'tod-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.less']
})
export class ActionsComponent implements OnInit {
  actions: Action[] = [
    new Action('Do something 1', 'Just do.'),
    new Action('Do something 2', 'Just do.'),
    new Action('Do something 3', 'Just do.'),
    new Action('Do something 4', 'Just do.'),
  ];
  constructor() {  }

  ngOnInit(): void {


  }

}
