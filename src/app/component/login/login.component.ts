import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenService } from 'src/app/service/token/token.service';


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

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _tokenService: TokenService
  ) {
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
    this._authService.login(this.loginform.value).subscribe(
      response => {
        console.log('response', response);
        console.log('USER', response.user);
        console.log('JWT', response.jwt);
        this.showWrongMessage = false;
        this._tokenService.storeToken(response.jwt);
        localStorage.setItem('username', response.user.username);
        localStorage.setItem('userRole', response.user.userRole);
        this._router.navigateByUrl('/home');
        // location.reload();
      },
      error => {
        console.log('error', error);
        this.showWrongMessage = true;
      }
    );
  }

}