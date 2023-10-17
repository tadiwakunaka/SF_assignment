
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './usrData';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  constructor(private http: HttpClient) {}

  // Method to handle user login
  login(username: string, password: string) {
    // Sending a POST request to the login endpoint with the provided username and password
    return this.http.post<User>('http://localhost:3000/api/login', { username: username, password: password });
  }
}

