import { Component, OnInit } from '@angular/core';
import { Hello } from '../hello';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  keyPressNumbers(event: { which: any; keyCode: any; preventDefault: () => void; }){
    var charCode = (event.which) ? event.which : event.keyCode;

    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
 
  genders = ['','male', 'female', 'others'];

  model = new Hello ('','','',this.genders[0],'')

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  newadd(){
    this.model = new Hello('', '', '', '','');
  }
  onSubmit(){
    this.submitted = true;
  }

}
