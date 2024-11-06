import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  seekers: any = [
    {name:'Create a Resume'},
    {name:'Resume Examples'},
    {name:'Resume Templates',route:'/resume.io/resume-templates'},
    {name:'Cover Letter Templates'},
    {name:'Job Search'}
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
    {name:'Product Updates'},
    {name:'Sponsorship Program'},
    {name:'Media Kit'},
    {name:'Affiliates'}
  ]
  supports: any = [
    {name:'FAQ'},
    {name:'Contact Us'},
    {name:'Terms of Service'},
    {name:'Privacy'},
    {name:'Right of Withdrawal'}
  ];
}
