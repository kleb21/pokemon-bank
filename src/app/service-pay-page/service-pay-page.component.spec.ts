import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePayPageComponent } from './service-pay-page.component';

describe('ServicePayPageComponent', () => {
  let component: ServicePayPageComponent;
  let fixture: ComponentFixture<ServicePayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
