import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfiveComponent } from './cardfive.component';

describe('CardfiveComponent', () => {
  let component: CardfiveComponent;
  let fixture: ComponentFixture<CardfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardfiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
