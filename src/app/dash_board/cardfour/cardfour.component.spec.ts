import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfourComponent } from './cardfour.component';

describe('CardfourComponent', () => {
  let component: CardfourComponent;
  let fixture: ComponentFixture<CardfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardfourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
