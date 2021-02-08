import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PaintCalculatorService } from './paint-calculator.service'

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
  walls: number[] = [];
  result!: string;

  constructor(private paintCalculatorService: PaintCalculatorService) { }

  allValidation() {
    this.paintCalculatorService.validWalls(this.widInput);
    this.paintCalculatorService.validWalls(this.heiInput);
    this.paintCalculatorService.doorValidation(this.heiInput, this.doorCount);
    
    const areaUtil = this.paintCalculatorService.wallToElements(this.widInput, this.heiInput, this.winCount,
                     this.doorCount, this.winCount, this.doorCount);
    
    this.paintCalculatorService.wallList(areaUtil, this.walls, this.saveWall);
  }

  finalResult(){
    if (this.walls.length < 4){
      alert('Número de paredes incompleto!');
    }
    else {
      this.result = this.paintCalculatorService.paintCount(this.walls)
    }
  }

  ngOnInit(): void {
  }

}
