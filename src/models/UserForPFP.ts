import { Binary } from '@angular/compiler';
import { User } from './User';
export class UserPFP extends User{
    isOwned: boolean| undefined;
    constructor(id: number, avatar: ArrayBuffer |undefined, discordId: string|undefined, password: string|undefined, email: string, isadmin:boolean, name: string, login: string, salt: string|undefined, confirmed: boolean, isOwned: boolean|undefined)
    {
      super(id, avatar, discordId, password, email, isadmin, name, login, salt, confirmed)
      this.isOwned = isOwned;  
    }
}