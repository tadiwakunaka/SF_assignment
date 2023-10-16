import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from "@angular/common";

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit{

  constructor(private router: Router,private location:Location) {
  }
  showCards = true;

  ngOnInit(): void {
    console.log('hey')
    this.location.subscribe((event) => {
      if (event.type === 'popstate') {
        this.showCards=true
        console.log('enin')
      }
    });
  }

  navigateToRouteSecondary(route: string) {
    if (route === 'createGroup' || route === 'manageGroups' || route === 'chatUI' || route === 'profileUI') {
      this.router.navigate([{outlets: {content: [route]}}]);
      this.showCards = false;
    }
  }

}
