import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaintCalculatorService {

  constructor() { }

  wallArea(sideA: number, sideB: number){
    return sideA * sideB;
  }

  winDoorArea(winCount: number, doorCount: number ) {
    const totalArea = (winCount * 2.4) + (doorCount * 1.52);
    return totalArea;
  }

  validWalls(wallSide : ElementRef){
    const inputValue = Number(wallSide.nativeElement.value);
    if (inputValue < 1 || inputValue > 15){
      alert('Número inserido está fora do range permitido!');
      wallSide.nativeElement.value = '';
    }
  }
}
