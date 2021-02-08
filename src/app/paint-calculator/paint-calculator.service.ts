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

  elementToNumber(inputValue: ElementRef){
    const inputNumb = Number(inputValue.nativeElement.value);
    return inputNumb;
  }

  doorValidation(wallHei : ElementRef, doorCount : ElementRef) {
    const door = this.elementToNumber(doorCount);
    const wallDoor = (this.elementToNumber(wallHei)) - 1.90;
    if (wallDoor < 0.30 && door >= 1){
        alert('A altura da porta não é viável para essa parede!')
        wallHei.nativeElement.value = '';
    }
  }

  
}
