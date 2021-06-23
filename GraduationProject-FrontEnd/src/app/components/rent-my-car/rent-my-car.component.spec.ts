import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentMyCarComponent } from './rent-my-car.component';

describe('RentMyCarComponent', () => {
  let component: RentMyCarComponent;
  let fixture: ComponentFixture<RentMyCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentMyCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentMyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
