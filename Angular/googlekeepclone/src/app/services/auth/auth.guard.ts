import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  // Method to guard routes
 // Get access token and stores in local storage otherwise redirects to login

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  
    if(localStorage.getItem('access_token')){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
  
  
}
