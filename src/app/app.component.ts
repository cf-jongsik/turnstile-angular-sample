import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'turnstile';

  ngOnInit() {
    (window as any).turnstileCB = this.turnstileCB.bind(this);
    this.loadTurnstileScript();
  }

  loadTurnstileScript() {
    console.log('Loading Turnstile script');
    const script = document.createElement('script');
    script.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=turnstileCB';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  turnstileCB() {
    console.log('turnstileCB called');
    const turnstile = (window as any).turnstile;
    console.log('turnstile', turnstile);
    if (turnstile) {
      console.log('turnstile', turnstile);

      turnstile.render('#turnstileSample', {
        sitekey: '0x4AAAAAAA9I3SJpjradfKzn',
        theme: 'dark',
      });
    } else {
      console.error('Turnstile is not available on the window object.');
    }
  }

  handleTurnstileClick() {
    const token = (window as any).turnstile.getResponse();
    const textArea = document.getElementById('textArea');
    if (textArea) {
      textArea.innerText =
        textArea.innerText +
        '\n### TOKEN BEGIN ###\n' +
        token +
        '\n### TOKEN END ###\n';
    }
  }
}
