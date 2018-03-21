import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatInfoService } from './mat-info.service';

import { merge } from 'rxjs/observable/merge';
import { startWith } from 'rxjs/operators/startWith';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {


  private _displayedColumns = ['name', 'category', 'moduleImport'];
  get displayedColumns() {
    if (this.isReverse) {
      return [...this._displayedColumns].reverse();
    }
    return this._displayedColumns;
  }

  isReverse: false;

  resultsLength = 0;
  isLoadingResults = true;

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filterForm') filterForm: NgForm;

  constructor(private matInfoService: MatInfoService) { }

  ngAfterViewInit() {
    // Reset pagination when sort changed
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page, this.filterForm.valueChanges.pipe(debounceTime(300)))
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.matInfoService
            .getComponents(this.filterForm.value, this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
        }),
        map(response => {
          this.resultsLength = response.totalLength;
          return response.components;

        })
      ).subscribe(components => {
        this.isLoadingResults = false;
        this.dataSource.data = components;
      });
  }

}
