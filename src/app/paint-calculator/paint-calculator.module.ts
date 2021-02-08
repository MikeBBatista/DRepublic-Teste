import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintCalculatorComponent } from './paint-calculator.component';
import { PaintCalculatorService } from './paint-calculator.service';



@NgModule({
  declarations: [
    PaintCalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaintCalculatorComponent
  ],
  providers: [
    PaintCalculatorService
  ]
})
export class PaintCalculatorModule { }
