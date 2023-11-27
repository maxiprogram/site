import { Component } from '@angular/core';
import { MailMessage, SendMailService } from '../../services/send-mail.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  constructor(private sendMailService: SendMailService) {
    this.loadScript().then((result) => {
      //console.log(result);
    });
  }

  loadScript() {
    return new Promise((resolve, reject) => {
      try {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.async = true;
        scriptElement.src = 'https://www.google.com/recaptcha/api.js';

        scriptElement.addEventListener('load', (event) => {
            resolve({ status: true });
        });

        scriptElement.addEventListener('error', (event) => {
            reject({
                status: false,
                message: `Failed to load the script ＄{scriptElement.src}`
            });
        });
        
        document.head.appendChild(scriptElement);
        //document.body.appendChild(scriptEle);
    } catch (error) {
      reject(error);
    }
    });
  }

  sendMail() {
    const response = (<any>window).grecaptcha.getResponse();
    console.log(response);
    if(response) {
      alert('send');
      let testMessage: MailMessage = {
        username: 'testName',
        subject: 'testSubject',
        from: 'test@gmail.com',
        textMessage: 'testMESSAGE'
      };
      this.sendMailService.sendMail(testMessage);
    } else {
      alert('NO ');
    }
  }
}
