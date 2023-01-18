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
  }

  ngAfterViewInit(): void {
    //console.log('this.mainContent', this.mainContent);
    //console.log('this.header', this.header);
    this.mainContent.nativeElement.style.marginTop = this.header.height + 'px';
  }
  

}
