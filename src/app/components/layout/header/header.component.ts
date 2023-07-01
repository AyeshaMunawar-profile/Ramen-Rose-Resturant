import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public LOGO_URl = "../../../../assets/images/logo/logo3.png";

  constructor() { }

  ngOnInit(): void {
  }

}
