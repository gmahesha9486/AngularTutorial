import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';
  constructor(private _service : RegistrationService, private _router: Router,
      private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
  }

  loginUser(){
      this._service.loginUserFromRemote(this.user).subscribe(
          data => {
            console.log("response received.");
            this.localStorageService.store('user',data);
            this._router.navigate(['/loginsuccess'])
          },
          error => {
            console.log("exception occurred");
            this.msg = "Bad Credentials, Please enter valid details";
          }  
      )
  }

  gotoRegistration(){
      this._router.navigate(['/registration'])
  }
}