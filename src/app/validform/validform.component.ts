import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MustMatch } from './must-match.validator';
@Component({
  selector: 'app-validform',
  templateUrl: './validform.component.html',
  styleUrls: ['./validform.component.css']
})
export class ValidformComponent implements OnInit {

  FormData! : FormGroup;
  submitted : boolean = false;
  

  public showPassword: boolean | undefined;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.FormData = this.formBuilder.group({
          firstName: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
          lastName: ['', [Validators.required,Validators.pattern('[a-zA-Z]*')]],
          email: ['', [Validators.required, Validators.email]],
          mobileNumber: ['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]*')]],
          dob : ['',[Validators.required]],
          password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(20),Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,20}/)]],
          confirmPassword: ['', Validators.required],
          fileUpload : ['',[Validators.required]]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.FormData.controls; }

  onSubmit() {
        
      this.submitted = true;
      if (this.FormData.invalid) {
        console.log('Please Enter valid Details');
        return;
      }
      else{
        console.log(this.FormData.value)
      }
  }

  urls : string[] = [];
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  console.log(event.target.result.files);
                   this.urls.push(event.target.result); 
                }
                reader.readAsDataURL(event.target.files[i]);
               
        }
      } 
  }
  remove(){
    this.urls.splice(0,1);
  
  }
  

}
