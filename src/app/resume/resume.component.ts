import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  resumeCount: any = "19,535";
  templateImg: any;
  JoinUsers: any = "37,109,000";
  showAnswer: boolean = false;
  activeQuestionIndex: number = -1;
  combinedFeatures: any[] = [];
  combinedLogo: any[] = [];
  activeTab: string = 'Sign Up'
  tabList: string[] = ['Sign Up', 'Create', 'Download'];
  tabIndex: number = 0;
  timer: any;
  features: any;
  featuresImg: any;
  logos: any;
  stars: any;
  starIcons: any;
  questionsAndAnswers: any;
  showContent: boolean = false;

  currentIndex = 0;
  getDisplayedReviews() {
    // Return the current set of 3 reviews
    return this.reviews.slice(this.currentIndex, this.currentIndex + 3);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 3) % this.reviews.length; // Move to the next group of 3
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 3 + this.reviews.length) % this.reviews.length; // Move to the previous group of 3
  }

 
  
  
  reviews:any[] = [
    {
      title: 'Platform is very helpful and intuitive', text: 'Platform is very helpful and intuitive. Many features and one on one assistance available. Ai available to help you with your descriptions.', label: 'C.T • about 9 hours ago'
      ,starIcons: [
        'assets/star.svg',
        'assets/star.svg',
        'assets/star.svg',
        'assets/star.svg',
        'assets/star.svg'
      ]
    },
    { title: 'Really easy to use ', text: 'Really easy to use and just recently logged on to update my CV and that was also easy to do. Looks really tidy and professional.', label: 'Mrs Tracey Rowett • about 13 hours ago' ,starIcons: [
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg'
    ]},
    { title: 'Helpful and Easy To Use', text: 'Great templates, easy to edit documents, AI assist does lots of heavy lifting. A must-try for any professional especially when job-seeking.', label: 'Matthew Clift • 1 day ago',starIcons: [
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg'
    ] },
    { title: 'Resume.io takes the worry out of…', text: 'Resume.io takes the worry out of putting together a presenstable resume and cover letter. Its simple to use as well. And customer service is A+. Would definitely recommend.', label: 'Angel R • 3 days ago',starIcons: [
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg'
    ] },
    { title: 'I would highly recommend! ', text: 'Great CV services and excellent customer service - relating to membership subscription. Thank you!', label: 'Jennifer • 3 days ago',starIcons: [
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg'
    ] },
  ];
  lists: any = [
    { heading: 'Easily edit online', content: 'Creating the perfectly formatted, custom tailored resume has never been easier.' },
    { heading: 'Add AI pre-written phrases', content: 'Beat writer’s block with AI pre-written and tested phrases that successfully communicate your experience and skills.' },
    { heading: 'Automatic spell-checker', content: 'Our built-in spell-checker will protect you from mistakes and typos. Remove all the grammar anxiety from resume writing!' },
    { heading: 'Export to anything', content: 'You’re in control of your resume, our exports work perfectly with Word or any other app.' },
  ];
  images: any = [
    'assets/Imgs/search.svg',
    'assets/Imgs/user.svg',
    'assets/Imgs/cover_letter.svg',
    'assets/Imgs/resume_critique.svg',
    'assets/Imgs/salary_analyzer.svg',
  ]
  constructor() {
    this.templateImg = "assets/template.avif";
    this.features = [
      { label: 'Easy online resume builder', text: 'Create an awesome resume in minutes, without leaving your web browser.' },
      { label: 'Automatic spell-checker', text: 'Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors.' },
      { label: 'Your data is safe', text: 'Your data is kept private and protected by strong 256-bit encryption.' },
      { label: 'Automatic summary generator', text: 'Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!' },
      { label: 'Approved templates', text: 'Professionally-designed resume templates and examples. Just edit and download in 5 minutes.' },
      { label: 'AI pre-written phrases', text: 'Use the power of AI and data analysis, choose pre-generated effective phrases and keywords.' },
      { label: 'Optimized resumes', text: 'Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application!' },
      { label: 'Multi-format resume options', text: 'Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.' },
      { label: 'Cover letters', text: 'Our cover letter builder works with the same ease and use of elegant templates as the resume creator.' },
    ];
    this.featuresImg = [
      { position: '0 0' },
      { position: '-450px 0' },
      { position: '-215px 0' },
      { position: '-116px 0' },
      { position: '-336px 0' },
      { position: '-168px 0' },
      { position: '-283px 0' },
      { position: '-392px 0' },
      { position: '-56px 0' },
    ];
    this.logos = [
      { position: '0 -44px' },
      { position: '0 -22px', marginLeft: '-32px' },
      { position: '0 -94px', height: '32px', marginLeft: '0px', marginTop: '11px' },
      { position: '0 -66px', height: '28px', marginLeft: '25px' },
      { position: '0 0', marginLeft: '25px' },
    ]
    this.stars = [
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star-half.svg'
    ]
    this.starIcons = [
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg',
      'assets/star.svg'
    ]
   
    this.questionsAndAnswers = [
      { question: 'How can I use resume.io for free?', answer: 'Resume.io has a few different tools you can use 100% for free without entering any credit card details.', showAnswer: false },
      { question: 'How can I customize my resume?', answer: 'Our resume templates are designed to adapt to your content and look great across all of our designs.', showAnswer: false },
      { question: 'Can I download my resume to Word or PDF?', answer: 'Once your resume is ready there are a number of ways you can export your resumes or cover letters to start applying for jobs. You can download a PDF, DOCX(Word), or TXT file of your resume either directly from your Dashboard or from the Resume Editor.', showAnswer: false },
      { question: 'How do I cancel, downgrade or delete my account?', answer: 'You can cancel a Resume.io subscription right from our website without even logging into the app. To do that visit our Contact Us page here and then click the "Cancel Subscription" option from the menu.', showAnswer: false },
    ];

  };
  ngOnInit() {
    // this.updateVisibleReviews();
    this.combinedFeatures = this.features.map((feature: any, index: any) => {
      const imgPosition = this.featuresImg[index] ? this.featuresImg[index].position : '0 0';
      return { ...feature, imgPosition, imgUrl: '/assets/Imgs/features_sprite.svg' };
    });
    this.combinedLogo = this.logos.map((logo: any, index: any) => {
      const imgPosition = this.logos[index] ? this.logos[index].position : '0 0';
      const imgHeight = this.logos[index] && this.logos[index].height ? this.logos[index].height : '22px';
      const imgLeft = this.logos[index] && this.logos[index].marginLeft ? this.logos[index].marginLeft : '22px';
      const imgTop = this.logos[index] && this.logos[index].marginTop ? this.logos[index].marginTop : '0px';
      return { ...logo, imgPosition, imgHeight, imgLeft, imgTop, imgUrl: '/assets/Imgs/logos.webp' };
    });
    this.startTabProgression();
  }
  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  onClickTab(tab: any) {
    this.activeTab = tab;
    this.tabIndex = this.tabList.indexOf(tab);
    this.restartTabProgression();
  }
  startTabProgression() {
    this.timer = setTimeout(() => {
      this.tabIndex = (this.tabIndex + 1) % this.tabList.length;
      this.activeTab = this.tabList[this.tabIndex];
      this.startTabProgression();
    }, 20000);
  }
  restartTabProgression() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.startTabProgression();
  }
  toggleAnswer(index: number) {
    this.questionsAndAnswers[index].showAnswer = !this.questionsAndAnswers[index].showAnswer;
    if (this.activeQuestionIndex !== index && this.activeQuestionIndex !== -1) {
      this.questionsAndAnswers[this.activeQuestionIndex].showAnswer = false;
    }
    this.activeQuestionIndex = this.questionsAndAnswers[index].showAnswer ? index : -1;
  }
  showFeature() {
    this.showContent = true;
  }
}
