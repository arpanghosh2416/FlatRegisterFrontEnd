import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const DOMAIN = 'https://flatregister.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseURL = `${DOMAIN}/api/user`;
  private _registerAPI = `${this._baseURL}/register`;
  private _getAllUsersAPI = `${this._baseURL}/get-all-users`;

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  getAllUsers(): Observable<any> {
    return this._httpClient.get<any>(this._getAllUsersAPI);
  }

  register(request: any): Observable<any> {
    return this._httpClient.post<any>(this._registerAPI, request);
  }

}