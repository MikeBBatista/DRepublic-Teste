import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaintCalculatorService {

  constructor() { }

  wallArea(sideA: number, sideB: number) {
    return sideA * sideB;
  }

  winDoorArea(winCount: number, doorCount: number) {
    const totalArea = (winCount * 2.4) + (doorCount * 1.52);
    return totalArea;
  }

  validWalls(wallSide: ElementRef) {
    const inputValue = Number(wallSide.nativeElement.value);
    if (inputValue < 1 || inputValue > 15) {
      alert('O número inserido está fora do tamanho permitido!');
      wallSide.nativeElement.value = '';
    }
  }

  elementToNumber(inputValue: ElementRef) {
    const inputNumb = Number(inputValue.nativeElement.value);
    return inputNumb;
  }

  doorValidation(wallHei: ElementRef, doorCount: ElementRef) {
    const door = this.elementToNumber(doorCount);
    const wallDoor = (this.elementToNumber(wallHei)) - 1.90;
    if (wallDoor < 0.30 && door >= 1) {
      alert('A altura da porta não é viável para essa parede!')
      wallHei.nativeElement.value = '';
    }
  }

  wallUtilArea(wallWid : ElementRef, wallHei: ElementRef, winCount: ElementRef, doorCount: ElementRef){
    
    return this.wallArea(this.elementToNumber(wallWid), this.elementToNumber(wallHei)) - this.winDoorArea
          (this.elementToNumber(winCount), this.elementToNumber(doorCount));
  }

  wallToElements(wallWid: ElementRef, wallHei: ElementRef, winCount: ElementRef, doorCount: ElementRef,
    windInput: ElementRef, doorInput: ElementRef) {

    const windDoorArea = this.winDoorArea(this.elementToNumber(winCount), this.elementToNumber(doorCount));
    const wallTotalArea = this.wallArea(this.elementToNumber(wallWid), this.elementToNumber(wallHei));
    if (windDoorArea > (wallTotalArea / 2) || (wallTotalArea / 2) == 0) {
      alert('A quantidade de janelas e portas excedem o limite aceitavel!')
      windInput.nativeElement.value = '';
      doorInput.nativeElement.value = '';
      return null;
    }
    else {
      return this.wallUtilArea(wallWid, wallHei, winCount, doorCount);
    }
  }
  disableButton(buttonDisabled : ElementRef) {
    buttonDisabled.nativeElement.disabled = true;
  }

  enableButton(buttonEnable : ElementRef) {
    buttonEnable.nativeElement.disabled = false;
  }
  
  wallList(areaUtil: any, room : number[], saveButton: ElementRef){
    if (typeof areaUtil == 'number'){
      if (room.length < 4){
        room.push(areaUtil);
      }
      else {
        alert('Quatro paredes já foram cadastradas!')
        this.disableButton(saveButton);
      }
    }
  }

  roomAreaTotal(walls : number[]){
    const roomTotalArea = walls.reduce((roomTotalArea, currentElement) => roomTotalArea + currentElement)
    return roomTotalArea;
  }

  paintCount(walls : number[]){
    let roomArea = this.roomAreaTotal(walls);
    let biggesTin = 0;
    let bigTin = 0;
    let mediumTin = 0;
    let smallTin = 0;
    while (roomArea > 0){
      if (roomArea >= 90){
        biggesTin += 1;
        roomArea -= 90;
      }
      else if (roomArea >= 18){
        bigTin += 1;
        roomArea -= 18
      }
      else if (roomArea >= 12.5){
        mediumTin += 1;
        roomArea -= 12.5
      }
      else if (roomArea >= 2.5){
        smallTin += 1;
        roomArea -= 2.5
      }
      else {
        smallTin += 1;
        roomArea -= roomArea;
      }
    }
    return `Para pintar essa sala é preciso ${biggesTin} latas de 18L, ${bigTin} latas de 3.6L, ${mediumTin} latas de 2.5L e
            ${smallTin} latas de 0.5L !`
  }

}
