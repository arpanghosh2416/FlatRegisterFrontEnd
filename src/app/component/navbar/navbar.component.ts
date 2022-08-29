import { Router } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  isLoggedIn: boolean = false;

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
  }

  ngDoCheck(): void {
    this.isLoggedIn = this._authService.isLoggedIn();
    console.log('I am Logged in status:', this._authService.isLoggedIn());
  }

  ngOnInit(): void {
  }

  logoutOnClick(): void {
    localStorage.clear();
    this._authService.logout();
    this._router.navigateByUrl('/login');
  }

}
