import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FlatService } from 'src/app/service/flat/flat.service';
import { OwnerService } from 'src/app/service/owner/owner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  flats: any = [];
  // owners: any = [];
  isLoggedIn: boolean = false;

  constructor(
    private _authService: AuthService,
    private _flatService: FlatService,
    private _ownerService: OwnerService
  ) {
  }

  ngOnInit(): void {
    this.fetchAllFlats();
    // this.fetchAllOwners();
  }

  ngDoCheck(): void {
    this.isLoggedIn = this._authService.isLoggedIn();
  }

  fetchAllFlats(): void {
    this._flatService.getAllFlats().subscribe(
      response => {
        console.log('response-arpan', response);
        this.flats = response;
      },
      error => {
        console.log('error-arpan', error);
      }
    );
  }

  // fetchAllOwners(): void {
  //   this._ownerService.getAllOwners().subscribe(
  //     response => {
  //       console.log('response', response);
  //       this.owners = response;
  //     },
  //     error => {
  //       console.log('error', error);
  //     }
  //   );
  // }

}
