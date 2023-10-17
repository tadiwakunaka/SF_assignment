
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import { User } from '../services/usrData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User[] = [];
  username: string = '';
  password: string = '';

  // Constructor with dependency injection for necessary services
  constructor(private authService: LoginAuthService, private router: Router) {}

  // Function to handle user login
  signin(event: any) {
    console.log("at signin");
    event.preventDefault(); // Preventing default form submission behavior
    if (this.username == "" || this.password == "") {
      console.log("no input");
    } else {
      // Calling the login service with provided username and password
      this.authService.login(this.username, this.password).subscribe((data) => {
        this.users.push(data);
        console.log("loggedIn", this.users);
      });
    }
  }
}









