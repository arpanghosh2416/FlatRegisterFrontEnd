import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username:new FormControl('',),
    password:new FormControl('',),
    cpass:new FormControl('',),
    userRole:new FormControl('NORMAL')
  });

  errormessage:boolean = false;
  successMessage:boolean = false;

  constructor(
    private _userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  closeSuccessMessage(): void {
    this.successMessage = false;
  }

  registerOnClick(): void {
    console.log('register works', this.registerForm.value);
    this.registerForm.value.userRole = 'NORMAL';
    this._userService.register(this.registerForm.value).subscribe(
      response => {
        console.log('response', response);
        this.successMessage = true;
        this.registerForm.reset();
      },
      error => {
        console.log('error', error);
        this.successMessage = false;
      }
    );
  }

}
