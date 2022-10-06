import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  // restPasswordForm! : FormGroup
  // passwordsMatching = false;
  // isConfirmPasswordDirty = false;
  // newPassword = new FormControl(null,[(c : AbstractControl) => Validators.required(c),
  // Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,10}/),]);

  // fileupload = new FormControl(null,[(d : AbstractControl) => Validators.required(d),
  // Validators.pattern(/(?=.*image)/),]);
  
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {}

  // FormData = this.builder.group({
  //   newPassword: this.newPassword
  // })

//---------------upload file---------------------
//   urls : string[] = [];
//   onSelectFile(event:any) {
//     if (event.target.files && event.target.files[0]) {
//         var filesAmount = event.target.files.length;
//         for (let i = 0; i < filesAmount; i++) {
//                 var reader = new FileReader();
//                 reader.onload = (event:any) => {
//                   console.log(event.target.result);
//                    this.urls.push(event.target.result); 
//                 }
                
//                 reader.readAsDataURL(event.target.files[i]);
//         }
//       } 
//   }
//   remove(){
//     this.urls.splice(0,1);
//   }
// }
// // if (event.target.files[0]) {
//   const file: File = event.target.files[0];
//   var pattern = /image-*/;

//   if (!file.type.match(pattern)) {
//     alert('Invalid format');
//     return;
//   }
//   else{
//    const fileupload : boolean = true;
//   }

//   // here you can do whatever you want with your image. Now you are sure that it is an image
// }
}