import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private localStorageService: LocalStorageService,
    _router: Router) { }

  canActivate(): boolean {
    if(this.localStorageService.retrieve('user')){
      return true;
    }else{
      return false;
    }
  }
}
