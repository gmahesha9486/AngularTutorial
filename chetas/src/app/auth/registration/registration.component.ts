import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';
  responseStatus='';

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm){
      console.log("======= hello");
      if(!form.valid){
        console.log("======= if");
      }else{
        console.log("======= else"); 
      }

  }
}
