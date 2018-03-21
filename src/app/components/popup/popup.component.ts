import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LinkListComponent } from './link-list/link-list.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onClick() {
    this.dialog.open(LinkListComponent, {
      width: '500px'
    });
  }

}
