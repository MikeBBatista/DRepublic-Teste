import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintCalculatorComponent } from './paint-calculator.component';

describe('PaintCalculatorComponent', () => {
  let component: PaintCalculatorComponent;
  let fixture: ComponentFixture<PaintCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
