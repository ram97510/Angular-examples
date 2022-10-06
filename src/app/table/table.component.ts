import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  search:any;
  student =[
    { regno:101,name:'ramkumar',age:20,course:'bca',year:'III',address:'madurai',email:'ram @gmail.com',color:'#ccffcc',size:'30px'},
    { regno:102,name:'navin',age:21,course:'bsc',year:'II',address:'dharmapuri',email:'navin @gmail.com',color:'#80ff80'},
    { regno:103,name:'muthupandi',age:20,course:'bca',year:'III',address:'theni',email:'pandi @gmail.com',color:'#ffe699'},
    { regno:104,name:'sameer',age:19,course:'bcom',year:'I',address:'mettupalayam',email:'sameer @gmail.com',color:'#ffff60'},
    { regno:105,name:'jeeva',age:20,course:'maths',year:'II',address:'karamadai',email:'jeeva @gmail.com',color:'#ffb3b3'},
    { regno:106,name:'nishanth',age:19,course:'chemistry',year:'I',address:'salem',email:'nishanth @gmail.com',color:'#ff8080'},
    { regno:107,name:'aakash',age:22,course:'english',year:'II',address:'mettupalayam',email:'aakash @gmail.com',color:'#99ccff'},
    { regno:108,name:'hari',age:21,course:'physics',year:'III',address:'kuttaiyur',email:'hari @gmail.com',color:'#66b3ff'},
    { regno:109,name:'sesan',age:19,course:'maths',year:'III',address:'gandhipuram',email:'sesan @gmail.com',color:'#ffb3ff'},
    { regno:110,name:'Arun',age:18,course:'tamil',year:'I',address:'ooty',email:'arun @gmail.com',color:' #ff85ff'}
    
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
