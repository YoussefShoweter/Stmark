import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, SwiperOptions } from 'swiper';
SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SliderComponent implements OnInit {
  swiperConfig:any;
  constructor() { }

  ngOnInit(): void {
    this.swiperConfig={
      slidesPerView:1,
      clickable:true,
      pagination: {
        clickable:true,
      },
      navigation: {
        nextEl: '.right-but',
        prevEl: '.left-but',
      },
    }
  }

}
