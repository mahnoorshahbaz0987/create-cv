import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],


})
export class AppComponent {
  showHeaderFooter: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute(this.router.url);
    });
  }

  checkRoute(url: string) {
    const routesWithoutHeaderFooter = ['sign-in','templates'];
    this.showHeaderFooter = !routesWithoutHeaderFooter.some(route => url.includes(route));
    if(url.includes('resume-templates')){
     this.showHeaderFooter = true;
    }
  }
  
}
