import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  storeToken(token: string): void {
    sessionStorage.setItem('flat-webapp-token', token);
  }

  removeToken(): void {
    if (this.isTokenExist())
    sessionStorage.removeItem('flat-webapp-token');
  }

  fetchToken(): string | null {
    return sessionStorage.getItem('flat-webapp-token');
  }
  
  isTokenExist(): boolean {
    return (this.fetchToken() === null || this.fetchToken() === undefined || this.fetchToken() === '') ? false : true;
  }

}
