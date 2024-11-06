import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name: string = '';
  title: string = '';
  email: any = '';
  phone: any = '';
  address: any = '';
  cityName: string = '';
  showModal: boolean = false;
  showExperienceModal: boolean = false;
  degree: string = '';
  institution: string = '';
  location: any = '';
  startDate: string = '';
  endDate: string = '';
  showProfileModal: boolean = false;
  description = '';
  profileExperiences: string = '';
  savedEducations: { degree: string; institution: string; location: any; startDate: string; endDate: string }[] = [];
  company: string = '';
  city: string = '';
  country: string = '';
  requirements: string = '';
  savedExperience: { company: string; city: string; country: string; startDate: string; requirements: string; endDate: string }[] = [];
  projectTitle: string = '';
  ProjectURL: any = '';
  ProjectDescription = '';
  savedProjects: { projectTitle: string; ProjectURL: any; ProjectDescription: any; startDate: string; endDate: string }[] = [];
  showProjectModal: boolean = false;
  languages: string[] = ['English', 'Urdu', 'Spanish', 'French', 'German', 'Chinese'];
  selectedLanguages: { language: string; percentage: number }[] = [];
  skill: string = '';
  skills: { name: string; percentage: number; }[] = [];
  profilePicture: string | null = null;

  onUploadProfile() {
    console.log('Profile Upload');
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicture = reader.result as string;
        this.saveProfilePicture();
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfilePicture(): void {
    if (this.profilePicture) {
      localStorage.setItem('profilePicture', this.profilePicture.toString());
    }
  }

  saveName() {
    if (this.name || this.title || this.email || this.phone || this.address || this.cityName) {
      const nameData = {
        name: this.name,
        title: this.title,
        email: this.email,
        phone: this.phone,
        address: this.address,
        city: this.city
      }
      localStorage.setItem('nameData', JSON.stringify(nameData));
      console.log('name has been saved in localstorage');
    }
  }

  saveEducation() {
    if (this.degree.trim() || this.institution.trim() || this.startDate.trim() || this.endDate.trim() || this.location.trim()) {
      const educationEntry = {
        degree: this.degree.trim(),
        institution: this.institution.trim(),
        location: this.location.trim(),
        startDate: this.startDate.trim(),
        endDate: this.endDate.trim()
      };
      this.savedEducations.push(educationEntry);
      localStorage.setItem('savedEducations', JSON.stringify(this.savedEducations));
      this.degree = '';
      this.institution = '';
      this.location = '';
      this.startDate = '';
      this.endDate = '';
      this.closeDialog();
    }
  }

  openDialog() {
    this.showModal = true;
  }
  
  closeDialog() {
    this.showModal = false;
  }

  openProfileModal() {
    this.showProfileModal = true;
  }

  saveProfile() {
    if (this.description.trim()) {
      this.profileExperiences = this.description;
      localStorage.setItem('profileExperience', this.profileExperiences);
      // this.description = '';
      this.closeProfileDialog();
    }
  }

  closeProfileDialog() {
    this.showProfileModal = false;
  }

  openExperienceDialog() {
    this.showExperienceModal = true;
  }

  closeExperienceDialog() {
    this.showExperienceModal = false;
  }

  saveHistory() {
    if (this.company.trim() || this.city.trim() || this.startDate.trim() || this.endDate.trim() || this.country.trim() || this.requirements.trim()) {
      const emplyementEntry = {
        company: this.company.trim(),
        city: this.city.trim(),
        country: this.country.trim(),
        requirements: this.requirements.trim(),
        startDate: this.startDate.trim(),
        endDate: this.endDate.trim()
      };
      this.savedExperience.push(emplyementEntry);
      localStorage.setItem('savedExperience', JSON.stringify(this.savedExperience));
      this.company = '';
      this.country = '';
      this.requirements = '';
      this.startDate = '';
      this.endDate = '';
      this.closeExperienceDialog();
    }
  }

  openProjectDialog() {
    this.showProjectModal = true;
  }

  closeProjectDialog() {
    this.showProjectModal = false;
  }

  saveProjects() {
    if (this.projectTitle.trim() || this.ProjectURL.trim() || this.startDate.trim() || this.endDate.trim() || this.description.trim()) {
      const ProjectEntry = {
        projectTitle: this.projectTitle.trim(),
        ProjectURL: this.ProjectURL.trim(),
        ProjectDescription: this.ProjectDescription.trim(),
        startDate: this.startDate.trim(),
        endDate: this.endDate.trim()
      };
      this.savedProjects.push(ProjectEntry);
      localStorage.setItem('savedProject', JSON.stringify(this.savedProjects));
      this.projectTitle = '';
      this.ProjectURL = '';
      this.ProjectDescription = '';
      this.startDate = '';
      this.endDate = '';
      this.closeProjectDialog();
    }
  }
  
  isLanguageSelected(language: string): boolean {
    return this.selectedLanguages.some(lang => lang.language === language);
  }

  getLanguagePercentage(language: string): number {
    const lang = this.selectedLanguages.find(lang => lang.language === language);
    return lang ? lang.percentage : 0;
  }

  updateLanguagePercentage(language: string, percentage: number) {
    const langIndex = this.selectedLanguages.findIndex(lang => lang.language === language);
    if (langIndex > -1) {
      this.selectedLanguages[langIndex].percentage = percentage;
    }
  }

  onLanguageChange(event: any, index: number) {
    const selectedLanguage = event.target.value;
    if (event.target.checked) {
      this.selectedLanguages.push({ language: selectedLanguage, percentage: 100 });
    } else {
      const langIndex = this.selectedLanguages.findIndex(lang => lang.language === selectedLanguage);
      if (langIndex > -1) {
        this.selectedLanguages.splice(langIndex, 1);
      }
    }
  }

  saveLanguages() {
    localStorage.setItem('selectedLanguages', JSON.stringify(this.selectedLanguages));
    alert('Languages saved successfully!');
  }

  AddSkills() {
    if (this.skill.trim() !== '') {
      this.skills.push({ name: this.skill, percentage: 100 });
      this.skill = '';
    }
  }

  saveSkills() {
    if (this.skills.length > 0) {
      localStorage.setItem('skills', JSON.stringify(this.skills));
    }
  }

}
