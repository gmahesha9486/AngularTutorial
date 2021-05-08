import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  username = '';
  constructor(private localStorageService: LocalStorageService,
    private _router: Router) { }

  ngOnInit(): void {
    
    console.log("testing the storage");
    console.log(this.localStorageService.retrieve('user'));
    this.username = this.localStorageService.retrieve('user').userName;
    
  }

  logout(){
      this.localStorageService.clear('user');
      this._router.navigate(['/login']);

  }
}
