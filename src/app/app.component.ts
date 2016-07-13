import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'about',
  template: `
    <div>About Page</div>
  `
})
export class About { }

@Component({
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
  
  <div class="hero-universal">
    <div class="inner-hero">
      
      <main>
        <router-outlet></router-outlet>
      </main>

      <blockquote>{{ server }}</blockquote>
    </div>
  </div>
  `
})
export class App {
  title: string = 'ftw';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    console.log(this);
    // limit the use of setTimeouts
      this.server = 'Rendereo del lado del servidor!';

    // use services for http calls
    this.http.get('http://dashboard.clarovideo.net/api/dns/')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
