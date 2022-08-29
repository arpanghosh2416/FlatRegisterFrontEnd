import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatService } from 'src/app/service/flat/flat.service';
import { OwnerService } from 'src/app/service/owner/owner.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-register-flat',
  templateUrl: './register-flat.component.html',
  styleUrls: ['./register-flat.component.css']
})
export class RegisterFlatComponent implements OnInit {

  registerFlatForm: FormGroup = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    stay: new FormControl('')
  });

  flat: any;
  owner: any = {
    ownerName: '',
    ownerEmail: '',
    phoneNumber: '',
    flats: [
      {
        flatId: 0,
        storeyNumber: 0,
        livingStatus: true,
        price: 0
      }
    ]
  };

  constructor(
    private _router: Router,
    private _flatService: FlatService,
    private _ownerService: OwnerService,
    private _tokenService: TokenService,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.fetchFlat();
  }

  fetchFlat(): void {
    const flatId = this._activatedRoute.snapshot.paramMap.get('flatId');
    this._flatService.getFlatById(Number(flatId)).subscribe(
      response => {
        console.log('response', response);
        this.flat = response;
      },
      error => {
        console.log('error', error);
        this._router.navigateByUrl('no-flat-found');
      }
    );
  }

  registerFlatOnClick(): void {
    this.flat.soldOut = true;
    console.log(this.registerFlatForm.value);
    let formDetails = this.registerFlatForm.value;

    this.owner.ownerName = `${formDetails.fname} ${formDetails.lname}`;
    this.owner.ownerEmail = `${formDetails.email}`;
    this.owner.phoneNumber = `${formDetails.phone}`;
    this.owner.flats[0].flatId = this.flat.flatId;
    this.owner.flats[0].storeyNumber = this.flat.storeyNumber;
    this.owner.flats[0].livingStatus = (formDetails.stay === 'true') ? true : false;
    this.owner.flats[0].price = this.flat.price;
    this.owner.flats[0].soldOut = this.flat.soldOut;

    console.log('Owner', this.owner);

    if (this._tokenService.isOwner()) {
      let ownerId = Number(localStorage.getItem('ownerStatus'));
      this._ownerService.updateOwner(ownerId, this.owner).subscribe(
        response => {
          console.log('response', response);
          this._router.navigateByUrl('/home');
        },
        error => {
          console.log('error', error);
        }
      );
    } else {
      this._ownerService.createOwner(this.owner).subscribe(
        response => {
          console.log('response', response);
          localStorage.setItem('ownerStatus', response.ownerId);
          this._router.navigateByUrl('/home');
        },
        error => {
          console.log('error', error);
        }
      );
    }
  }

}
