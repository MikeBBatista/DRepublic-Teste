import { TestBed } from '@angular/core/testing';

import { PaintCalculatorService } from './paint-calculator.service';

describe('PaintCalculatorService', () => {
  let service: PaintCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
