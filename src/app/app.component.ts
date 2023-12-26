import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('mainContent') mainContent!: ElementRef;
  @ViewChild('header') header!: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('theme', localStorage.getItem('theme'));
    let themeName = localStorage.getItem('theme');
    if(!themeName) {
      localStorage.setItem('theme', 'dark');
      themeName = 'dark';
    }
    let link = document.createElement('link');
    link.id = 'id-theme';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'theme-' + themeName + '.css';
    document.head.appendChild(link);
  }

  ngAfterViewInit(): void {
    //console.log('this.mainContent', this.mainContent);
    //console.log('this.header', this.header);
    this.mainContent.nativeElement.style.marginTop = this.header.height + 'px';
  }
  

}
