import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LinkListComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }

}
