import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
   title = 'Ramen Rose';
  isCollapsed: boolean = false;

 hello():void{
    console.log("hello")
  }
}
