import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpRequest, HttpClient } from "@angular/common/http";
import { HttpInterceptor } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginService } from "../services/auth/login.service";
import { ICredentials } from "../UserNotes";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public http: HttpClient, private auth: LoginService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let access_token = localStorage.getItem('access_token');
        if (access_token) {
            req = req.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': 'http://localhost:4200',
                    'Authorization': 'Bearer ' + access_token,
                }
            });
        }

        return next.handle(req).pipe(

            // id request fail with 401  

            catchError(err => {
                if (err.status === 401 && !req.url.includes("refresh")) {
                    if (err.error.code == "token_not_valid") {

                        let userlogin = {
                            "refresh": localStorage.getItem('refresh_token')
                        }

                        // make refresh token request

                        return this.http.post<ICredentials>('http://127.0.0.1:8000/api/token/refresh/', userlogin, { observe: 'response' })
                            .pipe(
                                switchMap(result => {
                                    if (result.status == 200) {
                                        console.log(result);

                                        localStorage.setItem('access_token', result.body.access);
                                        let access_token = localStorage.getItem('access_token');
                                        if (access_token) {
                                            req = req.clone({
                                                setHeaders: {
                                                    'Access-Control-Allow-Origin': 'http://localhost:4200',
                                                    'Authorization': 'Bearer ' + access_token,
                                                }
                                            });
                                        }

                                        // try fail request again with new token
                                        return next.handle(req)
                                    }


                                })
                            );


                    }

                }
                // if refresh token request fail then redirect to login

                else if (err.status === 401 && req.url.includes("refresh")) {
                    this.auth.logOut();
                    this.router.navigate(['login'])
                }
                return throwError(err);
            })
        )
    }
}