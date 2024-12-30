import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  tabs = [
    { name: 'All Templates', link: './', icon:'template-icon'},
    { name: 'Simple', link: 'simple', icon: 'simple-icon' },
    { name: 'ATS', link: 'ats', icon: 'icon-ats' },
    { name: 'Modern', link: 'modern', icon: 'icon-modern' },
    { name: 'Professional', link: 'professional', icon: 'icon-professional' },
    { name: 'Creative', link: 'creative', icon: 'icon-creative' },
  ];
  
}
