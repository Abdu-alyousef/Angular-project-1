
import {  HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators'
import { throwError } from "rxjs";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localld: string;
  registered?: boolean
}

@Injectable({providedIn: 'root'})

export class AuthService {
  constructor(private http: HttpClient){}
  signup(email: string, password: string) {
  return  this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaNF9ZjXcchUxIjWLvPIPhMkPe278tl3c',
      {
        email: email,
        password: password,
        returnSecureToken: true
     }
   ).pipe(catchError(errorRes => {
     let errorMessage = 'An unkown error occurred!';
     if (!errorRes.error || !errorRes.error.error){
       return throwError(errorMessage)
     }
     switch (errorRes.error.error.message) {
       case 'EMAIL_EXISTS' :
       errorMessage = 'this email exists already!'
     }
     return throwError(errorMessage)
   }));
  }

  login (email: string, password: string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaNF9ZjXcchUxIjWLvPIPhMkPe278tl3c',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }

}
