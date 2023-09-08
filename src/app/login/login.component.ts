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

  ngOnInit(): void{
    this.userService.getData().subscribe((result) => {
      this.data = result;
      console.log('Data from JSON file:', this.data);
    });
  }

  navToUserDash() {
    console.log("start fnunction")
    const userSuperAdmin = this.data.find((u) => u.username === this.username && u.password === this.password && u.role === "superAdmin");
    const userAdmin = this.data.find((u) => u.username === this.username && u.password === this.password && u.role === "admin");
    const user = this.data.find((u) => u.username === this.username && u.password === this.password && u.role === "user");

    if (userSuperAdmin) {
      this.router.navigate(['/superAdmin']);
    } else if (userAdmin){
      this.router.navigate(['/groupAdmin']);
    }else if (user){
      this.router.navigate(['/userDash']);
    }else {
      alert('Invalid username or password. Please try again.');
    }

  }



}
