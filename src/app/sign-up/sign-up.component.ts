import { Component, OnInit } from '@angular/core';
import {Order} from '../order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  MonEmail = 'user@user.com';
  constructor() { }
  model: Order = new Order();
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.model);
  }
}
