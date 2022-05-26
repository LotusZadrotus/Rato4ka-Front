import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpRequest, HttpInterceptor, HttpEvent, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService){}
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("token");
        if (idToken) {
            const cloned = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${idToken}`
                  }
            });

            return next.handle(cloned).pipe(
                catchError((error :HttpErrorResponse)=>{
                    if(error.status === 401){
                        this.auth.logout();
                        console.log("Error");
                        
                    }
                    return throwError("")
                })
            );
        }
        else {
            return next.handle(req);
        }
    }
}