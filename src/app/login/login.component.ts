import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  router: string;
  constructor(private _router: Router) { 
    this.router = _router.url;
  }
  
  ngOnInit() {
  }

}
