import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  lastname: string;
  firstname: string;
  age: number;
  sexe: string;
  bio: string;
  skills: any;
  constructor() { }

  ngOnInit() {
  }

}
