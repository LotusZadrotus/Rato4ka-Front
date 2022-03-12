import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import { map } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private readonly loginEndpoint = `${environment.apiUrl}/security/GetToken`;
    private readonly tokenStorageKey = 'token';
    private readonly loginStorageKey = 'login';

    constructor(private http: HttpClient,
        private router: Router) { }

    login(login: string, password: string){
        return this.http.post(this.loginEndpoint + '/' + login +'?'+ 'password=' +password, null).pipe(
            tap((response:any)=>{
                if (this.token !== null) {
                    localStorage.removeItem(this.tokenStorageKey);
                  }
                  localStorage.setItem(this.loginStorageKey, response.login)
                  localStorage.setItem(this.tokenStorageKey, response.access_token)
            })
        );
    }
    logout(): void {
        localStorage.removeItem(this.tokenStorageKey);
        this.router.navigate(["/login"]);
      }
    get token(){
        return localStorage.getItem(this.tokenStorageKey)
    }
    get loginValue(){
        return localStorage.getItem(this.loginStorageKey);
    }
}