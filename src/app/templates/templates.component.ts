import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css'
})
export class TemplatesComponent {
  @ViewChild('sliderWrapper', { static: false }) sliderWrapper!: ElementRef;

  logoImg:string = "assets/logo.svg";
  slides = [
    { img: "assets/CV-Templates/Template1.jpg?text=Slide+1", name: "Slide 1",city:'toronto',userChose:0 },
    { img: "assets/CV-Templates/Template2.jpg?text=Slide+2", name: "Slide 2",city:'dublin',userChose:0 },
    { img: "assets/CV-Templates/Template3.jpg?text=Slide+3", name: "Slide 3",city:'london',userChose:0 },
    { img: "assets/CV-Templates/Template4.jpg?text=Slide+3", name: "Slide 4",city:'new york',userChose:0 },
    { img: "assets/CV-Templates/Template5.jpg?text=Slide+3", name: "Slide 5",city:'vienna',userChose:0 },
    { img: "assets/CV-Templates/Template6.jpg?text=Slide+3", name: "Slide 6",city:'rio',userChose:0 },
    { img: "assets/CV-Templates/Template7.jpg?text=Slide+3", name: "Slide 7",city:'remo',userChose:0 },
    { img: "assets/CV-Templates/Template8.jpg?text=Slide+3", name: "Slide 8",city:'boston',userChose:0 },
    { img: "assets/CV-Templates/Template9.jpg?text=Slide+1", name: "Slide 9",city:'prague',userChose:0 },
    { img: "assets/CV-Templates/Template10.jpg?text=Slide+2", name: "Slide 10",city:'sydney',userChose:0 },
    { img: "assets/CV-Templates/Template11.jpg?text=Slide+3", name: "Slide 11",city:'moscow',userChose:0 },
    { img: "assets/CV-Templates/Template12.jpg?text=Slide+3", name: "Slide 12",city:'madrid',userChose:0 },
    { img: "assets/CV-Templates/Template13.jpg?text=Slide+3", name: "Slide 13",city:'cape town',userChose:0 },
    { img: "assets/CV-Templates/Template14.jpg?text=Slide+3", name: "Slide 14",city:'oslo',userChose:0 },
    { img: "assets/CV-Templates/Template15.jpg?text=Slide+3", name: "Slide 15",city:'paris',userChose:0 },
    { img: "assets/CV-Templates/Template16.jpg?text=Slide+3", name: "Slide 16",city:'geneva',userChose:0 },
    { img: "assets/CV-Templates/Template17.jpg?text=Slide+3", name: "Slide 17",city:'tokyo',userChose:0 },
    { img: "assets/CV-Templates/Template18.jpg?text=Slide+3", name: "Slide 18",city:'milan',userChose:0 },
    { img: "assets/CV-Templates/Template19.jpg?text=Slide+3", name: "Slide 19",city:'lisbon',userChose:0 },
    { img: "assets/CV-Templates/Template20.jpg?text=Slide+3", name: "Slide 20",city:'chicago',userChose:0 },
    { img: "assets/CV-Templates/Template21.jpg?text=Slide+3", name: "Slide 21",city:'athens',userChose:0 },
    { img: "assets/CV-Templates/Template22.jpg?text=Slide+3", name: "Slide 22",city:'singapore',userChose:0 },
    { img: "assets/CV-Templates/Template23.jpg?text=Slide+3", name: "Slide 23",city:'amsterdam',userChose:0 },
    { img: "assets/CV-Templates/Template24.jpg?text=Slide+3", name: "Slide 24",city:'santiago',userChose:0 },
    { img: "assets/CV-Templates/Template25.jpg?text=Slide+3", name: "Slide 25",city:'barcelona',userChose:0 },
    { img: "assets/CV-Templates/Template26.jpg?text=Slide+3", name: "Slide 26",city:'brussels',userChose:0 },
    { img: "assets/CV-Templates/Template27.jpg?text=Slide+3", name: "Slide 27",city:'vancouver',userChose:0 },
    { img: "assets/CV-Templates/Template28.jpg?text=Slide+3", name: "Slide 28",city:'shanghai',userChose:0 },
    { img: "assets/CV-Templates/Template29.jpg?text=Slide+3", name: "Slide 29",city:'copenhagen',userChose:0 },
    { img: "assets/CV-Templates/Template30.jpg?text=Slide+3", name: "Slide 30",city:'america',userChose:0 },
    { img: "assets/CV-Templates/Template31.jpg?text=Slide+3", name: "Slide 31",city:'berlin',userChose:0 }
  ];

  // currentIndex = 0;
  // currentTransformValue = 0; 
  // transformIncrement = 245;

  // ngAfterViewInit() {
  //   this.setSliderWidth();
  //   this.updateSliderPosition();
  // }

  // nextSlide() {
  //   if (this.currentTransformValue > 0 - (this.slides.length - 1) * this.transformIncrement) {
  //     this.currentTransformValue -= this.transformIncrement;
  //     this.updateSliderPosition();
  //   }
  // }

  // prevSlide() {
  //   if (this.currentTransformValue < -7828) {
  //     this.currentTransformValue += this.transformIncrement;
  //     this.updateSliderPosition();
  //   }
  // }

  // setSliderWidth() {
  //   const sliderWrapperElement = this.sliderWrapper.nativeElement;
  //   sliderWrapperElement.style.width = '38781px';
  // }

  // updateSliderPosition() {
  //   const sliderWrapperElement = this.sliderWrapper.nativeElement;
  //   const transformValue = `translate3d(${this.currentTransformValue}px, 0px, 0px)`;
  //   sliderWrapperElement.style.transform = transformValue;
  // }
  currentIndex = 0;

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

