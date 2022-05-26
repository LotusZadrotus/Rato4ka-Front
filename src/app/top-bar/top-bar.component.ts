import { Component, OnInit, SimpleChange } from '@angular/core';
import { AuthService } from 'src/api/services/auth.service';
import { User } from 'src/models/User';
import { UserService } from 'src/api/services/user.service';
import { filter, takeUntil } from 'rxjs';
import { NavigationEnd, RouterEvent, Router } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public isLogined: boolean = false;
  public userInfo: User| undefined;
  constructor(private auth: AuthService, private user: UserService, private router: Router) { }

  ngOnInit(): void {
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      if(this.auth.token !== null) {
        this.isLogined=true;
        this.user.getInfo().subscribe(x=> this.userInfo=x);
      }
      return false;
    };

    console.log(this.isLogined)
  }
  
}
