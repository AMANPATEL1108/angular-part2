import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.html',
  styleUrl: './car.css',
})
export class Car {
  carName: string = '';
  getCarName(val: string) {
    this.carName = val;
    console.log(this.carName);
  }

  setcarName(carname: string) {
    this.carName = 'Car N Updated ';
    console.log(this.carName);
  }
}
