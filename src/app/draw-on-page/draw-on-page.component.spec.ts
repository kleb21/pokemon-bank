import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawOnPageComponent } from './draw-on-page.component';

describe('DrawOnPageComponent', () => {
  let component: DrawOnPageComponent;
  let fixture: ComponentFixture<DrawOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawOnPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
