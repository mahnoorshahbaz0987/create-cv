import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-resume-templates',
  templateUrl: './resume-templates.component.html',
  styleUrl: './resume-templates.component.css'
})
export class ResumeTemplatesComponent {
  @ViewChild('content1', { static: false }) el1!: ElementRef;
  @ViewChild('content2', { static: false }) el2!: ElementRef;
  @ViewChild('content3', { static: false }) el3!: ElementRef;
  @ViewChild('content4', { static: false }) el4!: ElementRef;
  @ViewChild('content5', { static: false }) el5!: ElementRef;
  @ViewChild('content6', { static: false }) el6!: ElementRef;
  @ViewChild('content7', { static: false }) el7!: ElementRef;
  @ViewChild('content8', { static: false }) el8!: ElementRef;
  @ViewChild('content9', { static: false }) el9!: ElementRef;
  @ViewChild('content10', { static: false }) el10!: ElementRef;
  @ViewChild('content11', { static: false }) el11!: ElementRef;
  @ViewChild('content12', { static: false }) el12!: ElementRef;
  @ViewChild('content13', { static: false }) el13!: ElementRef;
  @ViewChild('content14', { static: false }) el14!: ElementRef;
  @ViewChild('content15', { static: false }) el15!: ElementRef;
  @ViewChild('content16', { static: false }) el16!: ElementRef;
  @ViewChild('content17', { static: false }) el17!: ElementRef;
  @ViewChild('content18', { static: false }) el18!: ElementRef;
  @ViewChild('content19', { static: false }) el19!: ElementRef;
  @ViewChild('content20', { static: false }) el20!: ElementRef;
  @ViewChild('content21', { static: false }) el21!: ElementRef;
  @ViewChild('content22', { static: false }) el22!: ElementRef;
  @ViewChild('content23', { static: false }) el23!: ElementRef;
  @ViewChild('content24', { static: false }) el24!: ElementRef;
  @ViewChild('content25', { static: false }) el25!: ElementRef;
  @ViewChild('content26', { static: false }) el26!: ElementRef;
  @ViewChild('content27', { static: false }) el27!: ElementRef;
  @ViewChild('content28', { static: false }) el28!: ElementRef;
  @ViewChild('content29', { static: false }) el29!: ElementRef;
  @ViewChild('content30', { static: false }) el30!: ElementRef;
  @ViewChild('content31', { static: false }) el31!: ElementRef;
  @ViewChild('content32', { static: false }) el32!: ElementRef;
  @ViewChild('content33', { static: false }) el33!: ElementRef;
  @ViewChild('content34', { static: false }) el34!: ElementRef;
  @ViewChild('content35', { static: false }) el35!: ElementRef;
  @ViewChild('content36', { static: false }) el36!: ElementRef;
  @ViewChild('content37', { static: false }) el37!: ElementRef;
  @ViewChild('content38', { static: false }) el38!: ElementRef;
  @ViewChild('content39', { static: false }) el39!: ElementRef;
  @ViewChild('content40', { static: false }) el40!: ElementRef;
  @ViewChild('content41', { static: false }) el41!: ElementRef;
  @ViewChild('content42', { static: false }) el42!: ElementRef;
  @ViewChild('content43', { static: false }) el43!: ElementRef;
  @ViewChild('content44', { static: false }) el44!: ElementRef;
  @ViewChild('content45', { static: false }) el45!: ElementRef;
  @ViewChild('content46', { static: false }) el46!: ElementRef;
  @ViewChild('content47', { static: false }) el47!: ElementRef;

  name: string;
  title: string;
  Profile: string;
  profileImg: string;
  Details: any;
  skills: any = [];
  employements: any = [];
  languages: any = [];
  projects: any = [];
  educations: any = [];
  maxDots = 5;
  maxDots1 = 10;
  headingText: string = 'Job-winning resume templates';
  
  constructor(private router: Router) {

    // Templates Data
    this.name = 'sarah amelia';
    this.title = 'grapics designer';
    this.Profile = "Dedicated and results-oriented software engineer with over 5 years of experience in full-stack web development. Proficient in multiple programming languages including JavaScript, Python, and Java. Skilled in designing and implementing scalable and maintainable web applications. Strong problem-solving abilities and a passion for learning new technologies. A team player with excellent communication skills.";
    this.profileImg = 'assets/Imgs/Professional.png';
    this.Details = {
      address: "4200 Street Phoniex, AZ 85009",
      city: "United States",
      phone: "(405) 142-0987",
      email: "Alex_09ARTJGL@gmail.com"
    }

    this.skills = [
      { name: 'HTML', percentage: 100 },
      { name: 'CSS', percentage: 100 },
      { name: 'JavaScript', percentage: 90 },
      { name: 'React JS', percentage: 80 },
      { name: 'Angular', percentage: 80 },
      { name: 'Python and Java', percentage: 50 },
      { name: 'Web Development', percentage: 70 },
    ];

    this.employements = [
      {
        id: 1,
        company: "Cinnova Technologies L.L.C, Lahore, Pakistan",
        startDate: new Date('Jun, 2021'),
        endDate: null,
        requirements: [
          'Thriving at Cinnove Technologies as a full-stack developer and leading the entire project with (Angular, Ionic, NodeJs with serverless, PSQL, Tailwind CSS) expertise and dedication'
        ]
      },
      {
        id: 2,
        company: "Codility, lahore, Pakistan",
        startDate: new Date("Jan, 2019"),
        endDate: new Date("May, 2021"),
        requirements: [
          'Joined Codility Solutions as a front-end engineer, elevated to a full-stack developer role, excelling in Angular, React, and Node.js. Took on leadership responsibilities, managing the front-end team and delivering stellar performance as a lead developer.'
        ]
      },
      {
        id: 3,
        company: "Jfreaks, Lahore, Pakistan",
        startDate: new Date("Mar, 2016"),
        endDate: new Date("Dec, 2018"),
        requirements: [
          'Joined JFreaks as a front-end developer, maximized the opportunity by mastering a diverse skill set, including Grails, Angular, HTML5, CSS3, PSD to CSS conversion, Bootstrap, Materialized CSS and advanced Git techniques.'
        ]
      }
    ]
    this.projects = [
      {
        id: 1,
        projectTitle: "Refersoft",
        ProjectDescription: "A Powerful Affiliate & Referral Tracking Platform Built For SaaS Businesses",
        ProjectURL: "https://refersoft.io"
      },
      {
        id: 2,
        projectTitle: "SaaSMAX",
        ProjectDescription: "SaaSMAX is where Tech Advisors and Service Providers partner with the right SaaS and Cloud Vendors to make more money.",
        ProjectURL: "https://saasmax.com"
      },
      {
        id: 3,
        projectTitle: "IPGeolocation",
        ProjectDescription: "Free IP API provides country, city, state, province, local currency, latitude and longitude, company detail, ISP lookup, language, zip code, country calling code, time zone, current time, sunset and sunrise time, moonset and moonrise time from any IPv4 and IPv6 address in REST, JSON and XML format over HTTPS.",
        ProjectURL: "https://ipgeolocation.io"
      },
      {
        id: 4,
        projectTitle: "Chowmill",
        ProjectDescription: "It support group meetings, catering, subsidized individual meals and more.With Chowmill you can schedule and order all of your business meals in advance.",
        ProjectURL: "https://chowmill.com/"
      },
      {
        id: 5,
        projectTitle: "PandaStronger",
        ProjectDescription: "The most comprehensive athletic app on the market. Roles are Athlete, Coach, Parent, or Workout Enthusiast.",
        ProjectURL: "https://app.pandastronger.com/"
      },

    ]

    this.educations = [
      {
        institution: "Virtual University of Pakistan",
        degree: 'BSSE, Software Engineering',
        location: 'Lahore',
        startDate: new Date('March, 2015'),
        endDate: new Date("October, 2018"),
      },
    ]
    this.languages = [
      { language: 'English', level: 100 },
      { language: 'Spanish', level: 50 },
      { language: 'French', level: 80 },

    ];
  }
  ngOnInit() {
    const nameData = JSON.parse(localStorage.getItem('nameData') || '{}');
    const savedEducations = JSON.parse(localStorage.getItem('savedEducations') || '[]');
    const savedExperience = JSON.parse(localStorage.getItem('savedExperience') || '[]');
    const savedProjects = JSON.parse(localStorage.getItem('savedProject') || '[]');
    const selectedLanguages = JSON.parse(localStorage.getItem('selectedLanguages') || '[]');
    const skills = JSON.parse(localStorage.getItem('skills') || '[]');
    const profileExperience = localStorage.getItem('profileExperience') || '';
    const profilePicture = localStorage.getItem('profilePicture') || '';
    console.log(nameData);
    console.log(savedEducations);
    console.log(savedExperience);
    console.log(selectedLanguages);
    console.log(skills);
    console.log(profileExperience);
    console.log(savedProjects);

    if (Object.keys(nameData).length > 0) {
      this.Details = nameData;
      this.name = nameData.name || this.name;
      this.title = nameData.title || this.title;
    }

    this.profileImg = profilePicture || this.profileImg;
    this.Profile = profileExperience || this.Profile;
    this.skills = skills.length > 0 ? skills : this.skills;
    this.projects = savedProjects.length > 0 ? savedProjects : this.projects;

    this.employements =
      savedExperience.length > 0
        ? savedExperience.map((exp: any) => ({
          ...exp,
          startDate: exp.startDate ? new Date(exp.startDate) : null,
          endDate: exp.endDate ? new Date(exp.endDate) : null,
          requirements: typeof exp.requirements === 'string' ? exp.requirements.split('\n') : [],
        }))
        : this.employements;

    this.educations =
      savedEducations.length > 0
        ? savedEducations.map((edu: any) => ({
          ...edu,
          startDate: edu.startDate ? new Date(edu.startDate) : null,
          endDate: edu.endDate ? new Date(edu.endDate) : null,
        }))
        : this.educations;

    this.languages = selectedLanguages.length > 0 ? selectedLanguages : this.languages;

  }

  getDots(percentage: number): boolean[] {
    const fullDots = Math.round(percentage / 10);
    return Array.from({ length: this.maxDots }, (_, i) => i < fullDots);
  }
  getDots1(percentage: number): boolean[] {
    const fullDots = Math.round(percentage / 10);
    return Array.from({ length: this.maxDots1 }, (_, i) => i < fullDots);
  }

  formatDate(date: Date) {
    if (!date) {
      return 'PRESENT';
    }
    const dateformat: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', dateformat).toUpperCase();
  }

  onDownload(elementRef: ElementRef) {
    const element = elementRef.nativeElement;
    html2canvas(element, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      let heightLeft = pdfHeight;
      let position = 0;
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }
      pdf.save('CV.pdf');
    });
    // html2canvas(this.el1.nativeElement).then(canvas => {
    //   const imgData = canvas.toDataURL('image/jpeg');
    //   const link = document.createElement('a');
    //   link.href = imgData;
    //   link.download = 'Template1.jpg';
    //   link.click();
    // });
    //   html2canvas(this.el6.nativeElement).then(canvas => {
    //     const contentDataURL = canvas.toDataURL('assets/img.jpg');
    //     let pdf = new jsPDF('p', 'mm', 'a4');
    //     let width = pdf.internal.pageSize.getWidth();
    //     let height = canvas.height * width / canvas.width;
    //     pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
    //     pdf.save('CV.pdf');
    //  });
  }
}
