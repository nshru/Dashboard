import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsixComponent } from './cardsix.component';

describe('CardsixComponent', () => {
  let component: CardsixComponent;
  let fixture: ComponentFixture<CardsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
