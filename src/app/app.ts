import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Angular part 2';

  // handleEventClick(event: Event) {

  // console.log('Function Called', event.type);
  // console.log("Value",(event.target as HTMLInputElement).value)
  // console.log('Function Called', (event.target as Element).className);
  // }

  // ---------------------------

  name = '';
  displayName = '';
  email = '';

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  ShowName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Subham';
  }

  getEmail(val: string) {
    console.log(val);
    this.email = val;
  }
  setEmail() {
    this.email = 'default@test.com';
  }
}
