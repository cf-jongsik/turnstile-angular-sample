import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'turnstile';
  sendCaptchaResponse(captchaResponse: string | null) {
    if (captchaResponse === null) {
      return;
    }
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
