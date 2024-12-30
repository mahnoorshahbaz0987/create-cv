import { AfterViewInit, Component } from '@angular/core';  
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);


@Component({
  selector: 'app-swiper-slider',
  templateUrl: './swiper-slider.component.html',
  styleUrl: './swiper-slider.component.css'
})
export class SwiperSliderComponent  implements AfterViewInit {
  templates = [
    { imageUrl: "assets/CV-Templates/Template1.jpg?text=Slide+1",name:'toronto' },
    { imageUrl: "assets/CV-Templates/Template2.jpg?text=Slide+2",name:'dublin' },
    { imageUrl: "assets/CV-Templates/Template3.jpg?text=Slide+3",name:'london' },
    { imageUrl: "assets/CV-Templates/Template4.jpg?text=Slide+3",name:'new york' },
    { imageUrl: "assets/CV-Templates/Template5.jpg?text=Slide+3",name:'vienna' },
    { imageUrl: "assets/CV-Templates/Template6.jpg?text=Slide+3",name:'rio' },
    { imageUrl: "assets/CV-Templates/Template7.jpg?text=Slide+3",name:'remo' },
    { imageUrl: "assets/CV-Templates/Template8.jpg?text=Slide+3",name:'boston' },
    
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.templates.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.templates.length) % this.templates.length;
  }

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      modules: [Navigation],
      spaceBetween: 470, // Space between slides
      loop: true, // Enable looping of slides
      centeredSlides: true, // Center the active slide
      slidesPerView: 3, // Adjust number of visible slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
