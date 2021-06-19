import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(private router: Router){}

  // Guards LoggedIn User
  // Doesn't allows to go back to Login without Logout 
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  
    if(!localStorage.getItem('access_token')){
      return true;
    }

    this.router.navigate(['dashboard']);
    return false;
  }
}
