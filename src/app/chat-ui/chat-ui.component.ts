import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUIComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  navigateToRoute(route:any){
    this.router.navigate([route])
  }

}
