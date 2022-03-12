import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rato4ka-front';
  public height: any;
  ngOnInit(): void {
      this.height = window.innerHeight;
      console.log(window.innerHeight);
      
  }
  @HostListener('window:resize', ['$event'])
  OnResize(){
    this.height = window.innerHeight;
  }
}
