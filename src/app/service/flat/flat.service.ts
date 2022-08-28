import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const DOMAIN = 'https://flatregister.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  private _baseURL = `${DOMAIN}/api/flat`;
  private _getAllFlatsAPI = `${this._baseURL}/get-all-flats`;

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  getAllFlats(): Observable<any> {
    return this._httpClient.get<any>(this._getAllFlatsAPI);
  }

}
