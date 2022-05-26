import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from 'src/models/Content';
import { ContentService } from '../../api/services/content.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ContentService: ContentService) { 
    this.id = 1;
  }
  public info: Content | undefined;
  public obs: Observable<any>|undefined;
  public id: number;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.id = params["id"];
    })
    this.obs = this.ContentService.getContentById(this.id);
    this.obs.subscribe(resp=>{
      let x = resp[0]
      this.info = new Content(x.id, x.name,x.user.id,undefined, x.createdAt, x.releaseDate, undefined,undefined);
    });
    
    
  }

}
