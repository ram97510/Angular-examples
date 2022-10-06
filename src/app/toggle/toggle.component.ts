import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuvariable:boolean = false; 
  menu_icon_variable:boolean = false;

  openclick(){
    this.menuvariable =! this.menuvariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }

}
