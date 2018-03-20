import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public person: Person = {
    firstName: '',
    lastName: '',
    birthDate: undefined,
    instrument: ''
  };

  public minDate = new Date();
  public maxDate = new Date(2018, 12, 31);

  constructor() { }

  ngOnInit() {
  }

}
