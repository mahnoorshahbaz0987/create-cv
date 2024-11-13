import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeTemplatesComponent } from './resume-templates/resume-templates.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { SimpleComponent } from './simple/simple.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { FooterComponent } from './footer/footer.component';
import { CreativeComponent } from './creative/creative.component';
import { ModernComponent } from './modern/modern.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ResumeAppComponent } from './resume-app/resume-app.component';
import { BlogComponent } from './blog/blog.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TemplatesComponent } from './templates/templates.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { TosComponent } from './tos/tos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    ResumeTemplatesComponent,
    SimpleComponent,
    ResumeBuilderComponent,
    FooterComponent,
    CreativeComponent,
    ModernComponent,
    ProfessionalComponent,
    ResumeAppComponent,
    BlogComponent,
    SignInComponent,
    TemplatesComponent,
    CreateResumeComponent,
    TosComponent,
    PrivacyComponent,
    TabsComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
