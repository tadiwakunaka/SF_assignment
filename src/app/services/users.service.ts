import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,private router: Router) {}

  getData() {
    return this.http.get<any[]>('assets/user.json')
  }

}

