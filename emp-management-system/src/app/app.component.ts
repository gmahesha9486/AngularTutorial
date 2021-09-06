import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 10 Spring Boot CRUD Full Stack App';
   
  constructor(private localStorageService: LocalStorageService,
    private _router: Router) { }

  logout(){
    this.localStorageService.clear('user');
    this._router.navigate(['/login']);

  }

}
