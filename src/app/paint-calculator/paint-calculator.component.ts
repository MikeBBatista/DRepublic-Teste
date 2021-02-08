import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {PaintCalculatorService} from './paint-calculator.service'

@Component({
  selector: 'app-paint-calculator',
  templateUrl: './paint-calculator.component.html',
  styleUrls: ['./paint-calculator.component.css']
})
export class PaintCalculatorComponent implements OnInit {

  @ViewChild('widthInput') widInput!: ElementRef;
  @ViewChild('heightInput') heiInput!: ElementRef;
  @ViewChild('windNumber') winCount!: ElementRef;
  @ViewChild('doorNumber') doorCount!: ElementRef;
  @ViewChild('saveButton') saveWall!: ElementRef;

  constructor(private paintCalculatorService : PaintCalculatorService ) { }

  allValidation(){
    this.paintCalculatorService.validWalls(this.widInput);
    this.paintCalculatorService.validWalls(this.heiInput);
  }

  ngOnInit(): void {
  }

}
