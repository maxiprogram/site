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
  public themeName: string|null;

  constructor() {
    this.height = 0;
    this.themeName = localStorage.getItem('theme');
    if(!this.themeName) {
      localStorage.setItem('theme', 'dark');
      this.themeName = 'dark';
    }
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

  changeTheme(themeName: 'dark'|'light') {
    localStorage.setItem('theme', themeName);
    this.themeName = themeName;
    let link = document.getElementById('id-theme');
    if(link) {
      link.setAttribute('href', 'theme-' + this.themeName + '.css');
    }
  }

}
