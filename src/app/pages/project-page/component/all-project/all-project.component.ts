import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss']
})
export class AllProjectComponent implements OnInit {
  
  ngOnInit(): void {
    //this.getUrl();
  }

  async getUrl() {
    let resp = await fetch('https://maxiprogram.onrender.com/3rdpartylicenses.txt');
    console.log(resp);
  }
}
