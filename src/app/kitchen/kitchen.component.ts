import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  flourQuantity: number;
  saltQuantity: number;
  sugarQuantity: number;
  eggQuantity: number;
  numberOfCookies: number;
  cook = false;
  constructor() { }

  ngOnInit() {
  }
  startCooking() {
    this.cook = true;
  }
}
