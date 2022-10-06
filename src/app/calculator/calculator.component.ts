import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  text : any ="";

  one1 = '1';
  two2 = '2';

  constructor() { }

  ngOnInit(): void {
  }

  one(){
    this.text = this.one1;
  }
  two(){
    this.text = this.two2;
  }


  // ram(){
  //   document.val.ans.value+='4'
  // }

  
}
