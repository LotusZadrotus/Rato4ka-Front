import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registrationForm: FormGroup | any;
  constructor() { }
  isSubmited: boolean| any;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email,Validators.required]),
      password: new FormControl(null, [Validators.minLength(8),Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }
  onSubmit(form:any){
    this.isSubmited = true;
    console.log(form);
  }
  get passwordConfirming(): boolean{
    if(this.registrationForm.get('password')?.value !== this.registrationForm.get("confirmPassword")?.value){
      return false;
    }
    return true;
  }
  get email() {return this.registrationForm.get('email')}
  get login() {return this.registrationForm.get('login')}
}
