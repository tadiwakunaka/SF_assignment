import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent {

  constructor(private router: Router,private location:Location) {
  }
  showCards = true;

  ngOnInit(): void {

  }
  navigateToRoute(route:any){
    this.router.navigate([route])
  }



}
