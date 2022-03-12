import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserPFP } from '../../models/UserForPFP';
import { UserService } from '../../api/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private UserService: UserService) { }
  public id: any;
  public user: UserPFP|undefined;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {console.log(params);
      this.id = params['id'];
    });
    this.UserService.getUserById(this.id).subscribe(x=>{console.log(x);this.user=x;
    })
  }

}
