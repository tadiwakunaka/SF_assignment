import { Component, inject } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // Injecting the UsersService
  private userConfig = inject(UsersService);

  username: string = '';
  email: string = '';
  password: string = '';


  constructor() {}

  // Function to handle signup action
  signup(event: any) {
    console.log("at signup");
    event.preventDefault();
    if (this.username == "" || this.email == "" || this.password == "") {
      console.log(this.username);
    } else {
      this.userConfig.addNewUser(this.email, this.username, this.password).subscribe({
        next: (data) => {
          // Check if the response is successful
          if (data.ok === true) {
            console.log("data"); // Log the data if successful
          }
        }
      });
    }
  }
}


