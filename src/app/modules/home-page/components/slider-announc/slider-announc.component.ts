import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slider-announc',
  templateUrl: './slider-announc.component.html',
  styleUrls: ['./slider-announc.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SliderAnnouncComponent implements OnInit {
  swiperConfig2:any;

  constructor() { }

  ngOnInit(): void {
    this.swiperConfig2={
      slidesPerView:3,
      spaceBetween:30,
      loop:true,
      loopFillGroupWithBlank:true,

      centeredSlides:true,
      clickable:true,
    
  
    }
  }

}
