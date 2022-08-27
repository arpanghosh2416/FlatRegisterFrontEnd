import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginform: FormGroup= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });
  showMessage: boolean = false;
  showWrongMessage: boolean = false;
  showSuccessMessage: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  closeMessage(): void {
    this.showMessage = false;
  }

  closeWrongMessage(): void {
    this.showWrongMessage = false;
  }

  closeSuccessMessage(): void {
    this.showSuccessMessage = false;
  }

  userLogin(): void {
    console.log("Login Works")
    console.log(this.loginform.value)
    
    
  }

}