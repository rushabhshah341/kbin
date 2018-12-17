import { Component, OnInit } from '@angular/core';
import { Storage } from '../services/storage.service';
import { LoginService } from '../account/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private token:string;
  userLoggedIn: boolean = false;
  constructor(private localStorage: Storage,
              private loginService: LoginService,
              private router: Router) {    
  }

  ngOnInit() {
    this.getToken();
  }

  getToken(){
   return this.localStorage.getItem('token').then(value => {
      this.token = value;
      if(this.token === "undefined" || this.token === null){
        this.userLoggedIn = false;
      } else{
        this.userLoggedIn = true;
      }
    });

  }
  

  logout() {
    this.loginService.logout();
    this.userLoggedIn = false;
    this.router.navigate(['/login']);
}

}
