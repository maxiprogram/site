import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-tab-project',
  templateUrl: './tab-project.component.html',
  styleUrls: ['./tab-project.component.scss']
})
export class TabProjectComponent {
  constructor(public languageService: LanguageService) {

  }
}
