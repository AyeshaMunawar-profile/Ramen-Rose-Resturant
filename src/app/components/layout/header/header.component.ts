import {Component, Input, OnInit} from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public LOGO_URl = "../../../../assets/images/logo/logo3.png";
  public size: NzButtonSize = 'large';
  public url: string = "https://www.udemy.com"
  constructor() {
  }

  ngOnInit(): void {
  }

}
