import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintCalculatorComponent } from './paint-calculator.component';



@NgModule({
  declarations: [
    PaintCalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaintCalculatorComponent
  ]
})
export class PaintCalculatorModule { }
