import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/api/services/auth.service';
import { User } from 'src/models/User';
import { UserService } from 'src/api/services/user.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public isLogined: boolean = false;
  public userInfo: User| undefined;
  constructor(private auth: AuthService, private user: UserService) { }

  ngOnInit(): void {
    if(this.auth.token !== null) {
      this.isLogined=true;
      this.user.getInfo().subscribe(x=> this.userInfo=x);
    }
    console.log(this.isLogined)
  }

}
