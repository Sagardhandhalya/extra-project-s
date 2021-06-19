import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {ICredentials} from '../../UserNotes'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ) { }

  // Method to Login User
  loginData(userlogin:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200',
      })
    }
    
    
    return this.http.post<ICredentials>('http://127.0.0.1:8000/api/token/', userlogin, httpOptions)
    .pipe(
      map(result => {
        localStorage.setItem('access_token', result.access); // stores access token in local storage
        localStorage.setItem('refresh_token', result.refresh); // stores refresh token in local storage
        return true;
      })
    );
    
  }

  // Method to Register User
  registerData(userData:any):Observable<any>{

        // Code refactor to match up with backend
        let user = {
          "first_name" : userData['firstname'],
          "last_name":userData['lastname'],
          "email":userData['email'],
          "password":userData['password'],
          "username":userData['username']
      }
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': 'http://localhost:4200',
          })
        }
        return this.http.post('http://127.0.0.1:8000/api/signup/', user, httpOptions)

      }
  
  // Method to Logout User
  logOut(){
  
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }
}

