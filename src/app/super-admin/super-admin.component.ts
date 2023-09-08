import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent {

  constructor(private router: Router) {}

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }

}
