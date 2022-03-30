import { Binary } from "@angular/compiler";

export class User{
    id: number;
    avatar: ArrayBuffer|undefined;
    discordId: string|undefined;
    password: string|undefined;
    email: string;
    isadmin: boolean;
    name: string;
    login: string;
    salt: string|undefined;
    confirmed: boolean;
    constructor(id: number, avatar: ArrayBuffer |undefined, discordId: string|undefined, password: string|undefined, email: string, isadmin:boolean, name: string, login: string, salt: string|undefined, confirmed: boolean){
        this.id = id;
        this.avatar = avatar;
        this.discordId = discordId;
        this.password = password;
        this.email = email;
        this.isadmin = isadmin;
        this.name = name;
        this.login = login;
        this.salt = salt;
        this.confirmed=confirmed;
    }
}