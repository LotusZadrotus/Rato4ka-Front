import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserPFP } from '../../models/UserForPFP';
import { UserService } from '../../api/services/user.service';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/models/User';
import { Observable } from 'rxjs';
import { AuthService } from '../../api/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private UserService: UserService, private auth: AuthService) {
    this.edit = false;
   }
  public id: any;
  public user: UserPFP|undefined;
  obs :Observable<UserPFP>|undefined;
  public edit: boolean;
  file: File|undefined;
  faCheck = faCheck;
  faX = faXmark;
  buffer: any|undefined;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {console.log(params);
      this.id = params['id'];
    });
    this.obs =this.UserService.getUserById(this.id)
    this.obs.subscribe(x=>this.user = x)
  }
  editMode(){
    this.edit = !this.edit;
  }
  get image(){
    
    return null;
  }
  Upload(){  
    const reader = this.file?.stream().getReader();
    reader?.read().then(x=>{
      var decoder = new TextDecoder('utf8');
      this.buffer = btoa(String.fromCharCode.apply(null, x.value));
      this.UserService.updateUser(new User(this.user?.id!, this.buffer, this.user?.discordId, this.user?.password, this.user?.email!, this.user?.isadmin!, this.user?.name!, this.user?.login!, this.user?.salt!, this.user?.confirmed!)).subscribe(
        s=>{this.obs?.subscribe(x=>this.user = x)}
      )
    })
    
    window.location.reload();
    
  }
  onChange(event:any){
    this.file =event.target.files[0]
    
    
  }
  acpUserName(usrname: any){
    this.UserService.updateUser(new User(this.user?.id!, this.user?.avatar, this.user?.discordId, this.user?.password, this.user?.email!, this.user?.isadmin!, usrname, this.user?.login!, this.user?.salt!, this.user?.confirmed!)).subscribe(
      s=>{this.obs?.subscribe(x=>this.user = x)}
    )
    
  }
  signOut(){
    this.auth.logout();
    
  }
}
