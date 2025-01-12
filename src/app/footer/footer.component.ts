import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  dropdowns: { [key: string]: boolean } = {
    jobSeekers: false,
  };

  toggleDropdown(section: string): void {
    this.dropdowns[section] = !this.dropdowns[section];
  }
  seekers: any = [
    {name:'Create a Resume', route: 'resume'},
    {name:'Resume Examples', route: 'resume'},
    {name:'Resume Templates',route:'/resume.io/resume-templates'},
    {name:'Cover Letter Templates', route: 'resume'},
    {name:'Job Search', route: 'resume'}
  ];
  careers: any = [
    {name:'Resume Help'},
    {name:'Job Interview'},
    {name:'Career'},
    {name:'Cover Letter'},
    {name:'Blog',route:'resume.io/blog'}
  ];
  companies: any = [
    {name:'About Us'},
    {name:'Pricing'},
    {name:'Sponsorship Program'},
    {name:'Media Kit'},
    {name:'Affiliates'}
  ]
  supports: any = [
    {name:'FAQ'},
    {name:'Contact Us'},
    {name:'Terms of Service'},
    {name:'Privacy'},
    {name:'Right of Withdrawal'},
    {name:'Do not sell, do not share'}
  ];
  
}
