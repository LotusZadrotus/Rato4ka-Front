import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import { map } from 'rxjs';
import { Content } from 'src/models/Content';


@Injectable({
    providedIn: 'root'
})
export class ContentService{
    private readonly endpoint = `${environment.apiUrl}/content`;

    constructor(private http: HttpClient,
        private router: Router) { }

    getContents(id:number) :Observable<Content[]>{
        return this.http.get<Content[]>(`${environment.apiUrl}/content/GetContents?page=${id}`).pipe(
            map((resp:any)=>{
                return resp.map((item:any)=>{
                    return new Content(
                        item.id,
                        item.name,
                        item.tags,
                        item.creatorId,
                        item.createdAt,
                        item.releaseDate,
                        item.desc
                    )
                })
            }))
}}