import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

number1: any;
number2: any;
result: any;

constructor() {
}

add() {
  this.result = this.number1 + this.number2;
}

sub() {
  this.result = this.number1 - this.number2;
}

multi() {
  this.result = this.number1 * this.number2;
}

division() {
  this.result = this.number1 / this.number2;
}
clear(){
  this.number1='';
  this.number2='';
  this.result='';
}

ngOnInit(): void {
}
}
