import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  animations: [
    trigger('inputBar', [
      state('exited', style({
        transform: 'scaleX(0.5)',
        opacity: 0,
      })),
      state('entered', style({
        transform: 'scaleX(1)',
        opacity: 1,
      })),
      transition('exited <=> entered', [
        animate('0.3s ease')
      ]),
    ])
  ]
})
export class SignInComponent {
  logoImg:string = "assets/logo.svg";
  showEmailForm: boolean = false;
  constructor(private router: Router) {}
  navigateToTemplates(event: Event) {
    event.preventDefault();
    this.router.navigate(['/resume.io/app/create-resume/templates']);
  }
  inputState = 'exited';

  onFocus() {
    this.inputState = 'entered';
  }

  onBlur() {
    this.inputState = 'exited';
  }

}
