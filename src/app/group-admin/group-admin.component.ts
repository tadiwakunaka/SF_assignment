import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';


@Component({
  selector: 'app-group-admin',
  templateUrl: './group-admin.component.html',
  styleUrls: ['./group-admin.component.css']
})
export class GroupAdminComponent implements OnInit{
  constructor(private router: Router,private location:Location) {
  }
  showCards = true;

  ngOnInit(): void {
    // console.log('hey')
    // this.location.subscribe((event) => {
    //   if (event.type === 'popstate') {
    //     this.showCards=true
    //     console.log('enin')
    //   }
    // });
  }
  navigateToRoute(route:any){
    this.router.navigate([route])
  }

}
