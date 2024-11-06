import { Component } from '@angular/core';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrl: './tos.component.css'
})
export class TosComponent {
  tabs: any = [
    { name: 'Right of Withdrawal' },
    { name: 'Cookie Policy' },
    { name: 'Terms of Service', route: 'resume.io/tos' },
    { name: 'Privacy Policy', route: 'resume.io/privacy' }
  ]
}
