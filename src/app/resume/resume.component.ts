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
      { position: '0 0',width: '106px' },
      { position: '-450px 0', width: '132px' },
      { position: '-215px 0' },
      { position: '-116px 0', width: '133px' },
      { position: '-336px 0', width: '136px' },
      { position: '-168px 0', width: '136px' },
      { position: '-283px 0', width: '136px' },
      { position: '-392px 0', width: '136px' },
      { position: '-56px 0', width: '136px' },
    ];
    this.logos = [
      { position: '0 -44px', marginLeft: '65px' },
      { position: '0 -22px', marginLeft: '-32px' },
      { position: '0 -94px', height: '32px', marginLeft: '3px', marginTop: '11px' },
      { position: '0 -66px', height: '28px', marginLeft: '30px' },
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
      { question: 'What is the definition of a resume?', answer: 'A resume is a concise document that summarizes your work experience, education, skills, qualities, and accomplishments. It’s used to showcase your qualifications to potential employers and helps you stand out. It tells employers why you deserve a job interview in one or two powerful pages. ', showAnswer: false },
      { question: 'What is the difference between a CV and a resume?', answer: 'In the U.S. and elsewhere around the world, the terms "CV" and "resume" are often used in the same way. However, there are some differences. A resume is typically shorter, highlighting relevant skills and experience for a specific job. A CV (curriculum vitae) is more detailed, focusing on your entire career. For most U.S. job applications, a resume is the preferred format. ', showAnswer: false },
      { question: 'How do I choose the right resume template?', answer: "To choose the right resume template, consider the job you're applying for and your industry. If you're in a creative field, a more visually appealing template might be best. For traditional industries like finance or law, stick to a clean, professional layout. Ensure the template is easy to read, highlights your strengths, and aligns with your experience level. Avoid overloading it with too many graphics or colors that could distract from your qualifications. Choosing the best resume format for the template is also important: Chronological (or reverse chronological) - Most popular: Lists jobs in reverse order, starting with the most recent. Ideal for those with a consistent career track. Functional (skills-based): Highlights skills over chronological work history, perfect for career changers or those with employment gaps. Combination (hybrid): Merges elements of both chronological and functional formats, listing skills followed by employment history. Great for experienced professionals with varied transferable skills relevant to the job. Review our field-tested resume templates or job-specific resume examples to help pick the ideal template for you or change your template on the fly in the builder.", showAnswer: false },
      { question: 'How far back should a resume go?', answer: "A resume should typically go back 10-15 years, focusing on the most recent and relevant experience, and not necessarily all your previous jobs. Older jobs may be summarized briefly or left out if they aren't relevant to the position you're applying for. The goal is to highlight your most valuable skills and accomplishments without overwhelming the reader by making your resume too long.", showAnswer: false },
      { question: 'What does an ATS-friendly resume mean?', answer: "An ATS-friendly resume is designed to pass through the Applicant Tracking Systems, which employers use to screen resumes, especially for roles with lots of applicants. To make your resume ATS-friendly, use a simple, clean format without complex designs or graphics, include relevant keywords from the job description, and use standard fonts. Avoid tables, images, or unusual file formats, and save your resume as a .docx or PDF to ensure compatibility. Use our specially designed ATS resume templates to create the strictest ATS-friendly resume, approved by resume.io career experts. ", showAnswer: false },
      { question: 'What resume file format can I download in?', answer: "While you can’t download it directly in Google Docs format, you can download certain resumes in the .docx file and easily upload them to Google Drive, where you can open and edit them in Google Docs. Both .docx and PDF formats are widely accepted for job applications. View how to download in various formats in the resume builder.", showAnswer: false },
      { question: 'Is it worth paying for a resume builder?', answer: "Yes. Paying for the resume builder offers several advantages. Our free resume builder comes with the Vancouver template, and it's a good start if you have zero budget. However, paid features unlock professional templates, advanced customization, and AI-powered suggestions. All of these increase your chances of getting hired. Your job application is only as strong as your weakest link. The free features are a great starting point, but if you're not getting as many interviews as you would like, perhaps it’s time to make a small investment in your future career.", showAnswer: false },
      { question: 'Should I make a different resume for every job application?', answer: "Yes, it's essential to tailor your resume for every job application. Tailored resumes are directly relevant to the job description. This impresses recruiters. Customize your resume by highlighting the skills, experiences, and accomplishments most relevant to the specific job. This increases your chances of standing out and showing employers you're a great fit for their position. However, you don't need to start from scratch; just tweak key sections to match the job description. With our resume builder, you can easily duplicate existing resumes, paste the new job listing link, and receive tailored advice to help you update your resume to match the specific job requirements. ", showAnswer: false },
      { question: 'What makes resume.io the best resume builder?', answer: "Resume.io stands out for two reasons. Firstly, we’re a market leader. We’ve been refining the builder for more than 10 years; it’s fast, effective, and creates strong resumes that win interviews. Our AI resume builder makes it easy to produce mistake-free resumes that highlight your strengths and align with industry standards. They’re exactly what recruiters want to see. Secondly (and this is a big one, your resume is just the start. With every resume, you get free access to more than 18 powerful career tools like job search, interview preparation, and salary analysis. ", showAnswer: false },

    ];
    

  };
  ngOnInit() {
    // this.updateVisibleReviews();
    this.combinedFeatures = this.features.map((feature: any, index: any) => {
      const imgPosition = this.featuresImg[index] ? this.featuresImg[index].position : '0 0';
      const imgWidth = this.featuresImg[index] && this.featuresImg[index].width ? this.featuresImg[index].width : '105px';

      return { ...feature, imgPosition, imgWidth, imgUrl: '/assets/Imgs/features_sprite.svg' };
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
