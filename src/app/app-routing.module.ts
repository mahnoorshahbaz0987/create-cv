import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ResumeTemplatesComponent } from './resume-templates/resume-templates.component';
import { SimpleComponent } from './simple/simple.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { CreativeComponent } from './creative/creative.component';
import { ModernComponent } from './modern/modern.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ResumeAppComponent } from './resume-app/resume-app.component';
import { BlogComponent } from './blog/blog.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { TemplatesComponent } from './templates/templates.component';
import { TosComponent } from './tos/tos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'resume.io', component: ResumeComponent },
  { path: '', redirectTo:'resume.io', pathMatch: 'full' },
  { path: 'resume.io/app/auth/sign-in', component: SignInComponent },
  { path: 'resume.io/app/create-resume', component: CreateResumeComponent },
  { path: 'resume.io/app/create-resume/templates', component: TemplatesComponent },
  { path: 'resume.io/tos', component: TosComponent },
  { path: 'resume.io/privacy', component: PrivacyComponent },
  {path:'resume.io/profile', component:ProfileComponent},
  { path: 'resume.io/app', component: ResumeAppComponent },
  {
    path: 'resume.io/resume-templates', component: ResumeTemplatesComponent },
    // children: [
      { path: 'resume.io/resume-templates/simple', component: SimpleComponent },
      { path: 'resume.io/resume-templates/creative', component: CreativeComponent },
      { path: 'resume.io/resume-templates/modern', component: ModernComponent },
      { path: 'resume.io/resume-templates/professional', component: ProfessionalComponent },
    // ]
  // },
  { path: 'resume.io/resume-builder', component: ResumeBuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
