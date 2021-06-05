import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCarsComponent } from './total-cars.component';

describe('TotalCarsComponent', () => {
  let component: TotalCarsComponent;
  let fixture: ComponentFixture<TotalCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
