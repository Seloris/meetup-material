import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
  separatorKeysCodes = [ENTER, COMMA];

  chips = [
    { name: 'Lay\'s' },
    { name: 'Vico' },
  ];

  constructor() { }

  ngOnInit() {
  }


  add(event: MatChipInputEvent): void {
    const { input } = event;
    const { value } = event;

    // Add our fruit
    if ((value || '').trim()) {
      this.chips.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(chips: any): void {
    const index = this.chips.indexOf(chips);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }
}
