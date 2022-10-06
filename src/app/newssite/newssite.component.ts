import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newssite',
  templateUrl: './newssite.component.html',
  styleUrls: ['./newssite.component.css']
})
export class NewssiteComponent implements OnInit {

  img1='https://www.vision2030.gov.sa/media/pexjcopy/invest-01.jpg';

 
  constructor() { }
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  ngOnInit(): void {
  }
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
  

}