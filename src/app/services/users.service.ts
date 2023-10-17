import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,private router: Router) {}

  addNewUser(email:any, username:any, password:any)
  {
    return this.http.post<any>('http://localhost:3000/api/addUser', { email: email, username: username, password: password });
  }

}

