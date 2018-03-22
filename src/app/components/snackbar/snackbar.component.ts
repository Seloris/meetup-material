import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  loading = false;

  constructor(private snackar: MatSnackBar) { }

  ngOnInit() {
  }

  onClick() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.snackar.open('Sauvegardé !', null, { duration: 600 });
    }, 1e3);
  }

}
