import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  userName:string ='portfolio component';
  usercolor:string ='#2c3e50';
  flag:boolean=true

  imgs:string='';

  srcs:string[]=[
   ' ./assets/image/poert1.png ',
   ' ./assets/image/port2.png ',
   ' ./assets/image/port3.png ',
   './assets/image/poert1.png ',
   ' ./assets/image/port2.png ',
   ' ./assets/image/port3.png ',

  ];
  hide(element:EventTarget |null, img:HTMLImageElement):void{
if(element==img)return;
this.flag=true;
  }


}
