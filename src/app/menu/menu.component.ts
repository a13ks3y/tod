import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tod-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

	public isHidden: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
