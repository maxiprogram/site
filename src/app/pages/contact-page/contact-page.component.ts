import { Component } from '@angular/core';
import { MailMessage, SendMailService } from '../../services/send-mail.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  formMailMessage: FormGroup;
  isViewForm: boolean;

  constructor(private sendMailService: SendMailService) {
    this.formMailMessage = new FormGroup({
      username: new FormControl('',[Validators.required]),
      subject: new FormControl('',[Validators.required]),
      from: new FormControl('',[Validators.required, Validators.email]),
      textMessage: new FormControl('',[Validators.required]),
      responseToken: new FormControl('',[Validators.required])
    });

    this.isViewForm = true;

    this.loadScript().then((result) => {
      //console.log(result);
    });
  }


  loadScript() {
    return new Promise((resolve, reject) => {
      try {
        const scriptElementCallBack = document.createElement('script');
        scriptElementCallBack.type = 'text/javascript';
        scriptElementCallBack.innerHTML = 'function callBackRecaptcha(data) { document.getElementById("id-response-token").value = data; document.getElementById("id-response-token").dispatchEvent(new Event("customchange", {value: data})); }';
        document.head.appendChild(scriptElementCallBack);

        const scriptElementResetCallBack = document.createElement('script');
        scriptElementResetCallBack.type = 'text/javascript';
        scriptElementResetCallBack.innerHTML = 'function callBackResetRecaptcha(data) { document.getElementById("id-response-token").value = ""; document.getElementById("id-response-token").dispatchEvent(new Event("customreset", {value: ""})); }';
        document.head.appendChild(scriptElementResetCallBack);

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

  onSustomChange(event: any) {
    //console.log('event', event);
    //console.log('event.event.target.value', event.target.value);
    this.formMailMessage.get('responseToken')?.setValue(event.target.value);
  }

  onSustomReset(event: any) {
    //console.log('event', event);
    //console.log('event.event.target.value', event.target.value);
    this.formMailMessage.get('responseToken')?.setValue("");
  }

  sendMail() {
    //console.log('this.formMailMessage.value', this.formMailMessage.value);
    this.sendMailService.sendMail(this.formMailMessage.value);
    this.isViewForm = false;

    // const response = (<any>window).grecaptcha.getResponse();
    // console.log(response);
    // if(response) {
    //   console.log('this.formMailMessage.value', this.formMailMessage.value);
    //   alert('send');
    //   this.sendMailService.sendMail(this.formMailMessage.value);
    // } else {
    //   alert('Not recaptcha!');
    // }
  }
}
