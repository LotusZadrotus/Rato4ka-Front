import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContentService } from '../../api/services/content.service';
import { Content } from '../../models/Content';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public pageNumber: number;
  constructor(private service:ContentService) { 
    this.pageNumber = 1;
    this.max_pages = 1;
  }
  public apiUrl = `${environment.apiUrl}`;
  public max_pages: number;
  chunked: any| undefined;
  ngOnInit(): void {
    this.service.getContents(this.pageNumber).subscribe(x=>{this.chunked=this.chunk(x,5); console.log(x);
    })
    this.max_pages = 2;
  }
  public pagiClick(numb: number){
    if ((this.pageNumber >= 1) && ((this.pageNumber + numb) !== 0) && ((this.pageNumber + numb)<=this.max_pages)) {
      this.pageNumber += numb;
    }
    this.service.getContents(this.pageNumber).subscribe({
      next: (x)=>{this.chunked = this.chunk(x, 5)
      },
      error: (x)=>{ this.chunked = undefined;
      }
    })
  }
  private chunk(arr: any, size: number) {
    var newArr = [];
    if(arr === undefined) return undefined;
    if(arr.length < 6)  {newArr.push(arr);return newArr}
    for (var i=0; i <arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }
}
