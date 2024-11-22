import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InValueComponent } from './invalue.component';

describe('InvalueComponent', () => {
  let component: InValueComponent;
  let fixture: ComponentFixture<InValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
