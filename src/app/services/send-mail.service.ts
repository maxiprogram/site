import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface MailMessage {
  username: string;
  subject: string;
  from: string;
  textMessage: string;
};

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/api/send-mail';
    //this.url = 'https://api-backend-7f67.onrender.com/api/send-mail';
  }

  sendMail(mailMessage: MailMessage) {
    this.httpClient.post(this.url, mailMessage).subscribe((response) => {
      //console.log('response', response);
    });
  }
}
