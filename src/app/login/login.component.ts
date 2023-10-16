import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any[];

  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UsersService) {
    this.data = []
  }




}
