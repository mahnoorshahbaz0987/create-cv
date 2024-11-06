import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoImg: any;
  isNavbarHidden = false;
  lastScrollTop = 0;
  showDropdown: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isNavbarHidden = currentScrollTop > this.lastScrollTop && currentScrollTop > 50;
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
  constructor(private router: Router) {
    this.logoImg = "assets/logo.svg";
  }
  navigateToTemplates(event: Event) {
    event.preventDefault();
    this.router.navigate(['/resume.io/app/create-resume/templates']);
  }

}
