import {Component, inject} from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  private userConfig = inject(UsersService);

  username: string = '';
  email: string = '';
  password: string = '';

  constructor() {}

  signup(event:any)
  {
    console.log("at signup");
    event.preventDefault();
    if(this.username == "" || this.email == "" || this.password == "")
    {
      console.log(this.username);
    }
    else{
      this.userConfig.addNewUser(this.email, this.username, this.password);
      console.log("data added");
    }
  }
}

