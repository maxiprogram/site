import { AfterViewInit, OnInit, Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() leftMenu!: MatSidenav;
  @ViewChild('matToolBar') matToolBar!: MatToolbar;

  public height: number;

  constructor() {
    this.height = 0;
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    //console.log('this.leftMenu', this.leftMenu);
    //console.log('this.matToolBar', this.matToolBar);
    //console.log(this.matToolBar._toolbarRows);
    this.height = this.matToolBar._toolbarRows.length * 64;
  }

  onClickLeftMenu() {
    this.leftMenu.toggle();
  }

}
