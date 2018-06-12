import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  juan: Person;

  constructor() {
    this.juan = new Person('0', 'Juan Herrera', 25);
  }
}
