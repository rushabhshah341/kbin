import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // router: string;
  loginForm: FormGroup;
  private token: string;
  private loading = false;
  private submitted = false;
  private returnUrl: string;
  private error = '';

  constructor(private _router: Router,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) { 
    // this.router = _router.url;
  }
  
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(loginForm){
    console.log(loginForm);
      let userName = loginForm.value.username;
      let password = loginForm.value.password;

      this.loginService.login(userName, password).subscribe(data => {
        console.log(data);
        this.token = data.token;
        if(this.token){
          this.router.navigate([this.returnUrl]);
        }
      });
  }
}
