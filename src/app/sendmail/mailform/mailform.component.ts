import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-mailform',
  templateUrl: './mailform.component.html',
  styleUrls: ['./mailform.component.css']
})
export class MailformComponent implements OnInit {
  FormData!: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {

    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Age: new FormControl('',[Validators.required]),
      Mobilenum: new FormControl('',[Validators.required]),
      // Email: new FormControl([Validators.compose([Validators.required, Validators.email])]),
      Email: new FormControl('',[Validators.required])
    });
    
  }


   onSubmit(FormData: any) {
     console.log(FormData)
     this.contact.PostMessage(FormData)
       .subscribe(response => {
         location.href = 'https://mailthis.to/confirm'
         console.log(response);
         this.FormData.reset();
       }, error => {
       console.warn(error.responseText)
       console.log({ error })
     })
 }
}
