import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoImg: any;
  isMenuOpen = false;
  constructor(private router: Router) {
    this.logoImg = "assets/logo.svg";
  }
  navigateToTemplates(event: Event) {
    event.preventDefault();
    this.router.navigate(['/resume.io/app/create-resume/templates']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
