import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import { map } from 'rxjs';
import { User } from 'src/models/User';
import { UserPFP } from '../../models/UserForPFP';


@Injectable({
    providedIn: 'root'
})
export class UserService{
    private readonly loginEndpoint = `${environment.apiUrl}/User`;

    constructor(private http: HttpClient,
        private router: Router) { }

    getUserById(id: number):Observable<UserPFP>{
        return this.http.get<UserPFP>(`${environment.apiUrl}/User/GetUserById/${id}`).pipe(
            tap((response: any) =>
                {
                    return response;
                //   let usersList = response;
                //   return usersList.map(function(user: any): User {
                //     return new UserPFP(user.id,
                //         user.avatar,
                //         user.discordId,
                //         user.password,
                //         user.email,
                //         user.isadmin,
                //         user.name,
                //         user.login,
                //         user.salt,
                //         user.confirmed,
                //         user.isOwned);
                //   })
                }
            )
    )}
    getInfo():Observable<User>{
        return this.http.get<User>(`${environment.apiUrl}/User/GetUserByLogin`).pipe(
            tap((response:any)=>{
                return response;}
                )
            
    )}
    updateUser(user: User){
        return this.http.put(`${environment.apiUrl}/User/UpdateUser`, user)
    }
}