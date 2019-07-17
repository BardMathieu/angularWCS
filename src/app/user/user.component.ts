import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  Isvisible = true;
  constructor() { }

  ngOnInit() {
  }
  changehide() {
    if (this.Isvisible === true){
      this.Isvisible = false;
    } else {
      this.Isvisible = true;
    }
  }
}
