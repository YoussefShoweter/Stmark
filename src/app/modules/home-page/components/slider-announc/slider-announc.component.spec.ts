import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAnnouncComponent } from './slider-announc.component';

describe('SliderAnnouncComponent', () => {
  let component: SliderAnnouncComponent;
  let fixture: ComponentFixture<SliderAnnouncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAnnouncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderAnnouncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
