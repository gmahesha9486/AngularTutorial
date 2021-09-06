import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';
  responseStatus='';

  constructor(private _service : RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        //this.msg = " Registration successful";
        this._router.navigate(['/login'])
      },
      error=> {
        console.log("exception occurred");
        this.msg="Bad details";
        this.responseStatus = error.status;
        console.log(error);
      }
    )
  }
}
