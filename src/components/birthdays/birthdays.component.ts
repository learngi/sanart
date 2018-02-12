import { Component } from '@angular/core';

/**
 * Generated class for the BirthdaysComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-birthdays',
  templateUrl: 'birthdays.component.html'
})
export class BirthdaysComponent {

  text: string;

  constructor() {
    console.log('Hello BirthdaysComponent Component');
    this.text = 'Hello World';
  }

}
