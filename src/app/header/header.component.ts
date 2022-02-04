import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public router :Router, private user_service:UsersService) { }
  
  ngOnInit(): void {

  }
  
  logout(){
    console.log("successfully logged out!!")
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
