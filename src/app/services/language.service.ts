import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: string|null;

  constructor() {
    this.language = localStorage.getItem('language');
    if(!this.language) {
      localStorage.setItem('language', 'ru');
      this.language = 'ru';
    }
  }
  
  setLanguage(lang: 'ru'|'en') {
    localStorage.setItem('language', lang);
    this.language = lang
  }

  getLanguage() {
    return this.language;
  }
}