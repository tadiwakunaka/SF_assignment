import { Injectable, inject} from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private http = inject(HttpClient);

  constructor() { }

  login(username:string,password:string){
    return this.http.post<any>('http://localhost:3000/api/auth', { username: username, password: password });
  }

}
