import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  imgVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  
  onimg = "/assets/switch-on.png";
  offimg = "/assets/switch-off.png";
   
  onswitch = false;
  offswitch = true;

  onclick(){
    this.offswitch = false
    this.onswitch =! this.onswitch;
  }
  offclick(){
    this.onswitch = false
    this.offswitch =! this.offswitch;
  }


  one = {}
  two = {}
  three = {}
  four = {}

  
  blue(){
    this.one = {'background-color':'blue','color':'white'}
    this.two = false
    this.three = false
    this.four = false
  }
  green(){
    this.two = {'background-color':'green','color':'white'}
    this.one = false
    this.three = false
    this.four = false
  }
  black(){
    this.three = {'background-color':'black','color':'white'}
    this.two = false
    this.one = false
    this.four = false
  }
  white(){
    this.four = {'background-color':'white'}
    this.two = false
    this.three = false
    this.one = false
  }
  
}

