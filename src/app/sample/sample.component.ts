import { Component, OnInit,  } from '@angular/core';
import { filter, map, Observable, observable, of } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit() {

  }

  search : any;
  students = [
    {name:'ram',age:20,email:'ram@gmail.com',color:'lavender'},
    {name:'navin',age:19,email:'navin@gmail.com',color:'lightgreen'},
    {name:'pandi',age:20,email:'pandi@gmail.com',color:'yellow'},
    {name:'nishanth',age:21,email:'nishanth@gmail.com',color:'orange'},
    {name:'aakash',age:21,email:'aakash@gmail.com',color:'lightblue'}
  ]
 

  condition = false;


  // selectedValue: string= 'One'; 
  //  items = [
  //  {names: 'One', val: 1}, {names: 'Two', val: 2}, {names: 'Three', val: 3}
  //  ];  
  
    selectValue: string='ramkumar';

    employee = [
      {name:'ramkumar',val:1},
      {name:'navinkumar',val:2},
      {name:'muthupandi',val:3},
      {name:'nishanth',val:4}
    ]

   islogin = true;

    Login(){
      this.islogin = true;
    }
    Logout(){
      this.islogin = false;
    }

    ischeck = true;
    

    flag = true;



    marks = [
      12,10,22,33,55,11
    ]
//-------------------------------------
    setClasses = new Set();

  showBlue() {
    this.setClasses.add('blue');
  }

  removeBlue() {
    this.setClasses.delete('blue');
  }
//------------------------------------


birthday = new Date ('2002/07/12')


//-------------

num1 :any = [1,2,3,4,5 ] 
num2 :any= [5,2,3]
num3:any = this.num1.concat(this.num2); 
view :any= ''
click(){
 this.view = this.num3
 console.log(this.num3)
}


getNumbers(): Observable<number> {
  return of(1, 2, 3, 4, 5, 6, 7);
}
calculateNumbers() {
 this.getNumbers().pipe(map(n => n + 10))
 .subscribe(result => console.log(result));
}


}
