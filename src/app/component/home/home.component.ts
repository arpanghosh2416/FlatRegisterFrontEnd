import { Component, OnInit } from '@angular/core';
import { FlatService } from 'src/app/service/flat/flat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flats: any = [];

  constructor(
    private _flatService: FlatService
  ) {
  }

  ngOnInit(): void {
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

}
