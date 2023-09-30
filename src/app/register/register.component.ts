import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiCallService } from '../api-call.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder,private apicall_service:ApiCallService) {
    this.registerForm = this._formBuilder.group({
      UserId: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      AccessKey: ['', [Validators.required]],
    });
  }
  registerUser(){
    let data ={
      userId:this.registerForm.controls['userId'].value,
      Name:this.registerForm.controls['Name'].value,
      AccessKey:this.registerForm.controls['AccessKey'].value,

    }
    console.log(data,'data')
    this.apicall_service.register(data).subscribe((data: any[]) => {
      console.log(data,'result')
    });
  }
  
}
