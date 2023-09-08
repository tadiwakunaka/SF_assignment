import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-group-admin',
  templateUrl: './group-admin.component.html',
  styleUrls: ['./group-admin.component.css']
})
export class GroupAdminComponent {
  constructor(private router: Router) {
  }

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }




}
