// tslint:disable:max-line-length
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatComponentInfo, MatComponentInfoResponse } from './mat-component-info';

import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';


@Injectable()
export class MatInfoService {

  getComponents(
    filterForm: { category: string },
    pageIndex: number,
    pageSize: number,
    sortBy?: string,
    sortOrder?: '' | 'asc' | 'desc'
  ): Observable<MatComponentInfoResponse> {

    let filtered = [...components];

    if (filterForm && filterForm.category) {
      filtered = filtered.filter(cmp => cmp.category.toLowerCase().indexOf(filterForm.category.toLowerCase()) !== -1);
    }

    if (sortBy) {
      if (sortOrder && sortOrder === 'desc') {
        filtered = filtered.sort((a, b) => a.name < b.name ? 1 : -1);
      } else {
        filtered = filtered.sort((a, b) => a.name > b.name ? 1 : -1);
      }
    }

    return of(
      {
        components: filtered.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
        totalLength: filtered.length
      }).pipe(delay(600));
  }
}

const components: MatComponentInfo[] = [
  { name: 'Autocomplete', category: 'Form Controls', moduleImport: `import {MatAutocompleteModule} from '@angular/material/autocomplete';` },
  { name: 'Checkbox', category: 'Form Controls', moduleImport: `import {MatCheckboxModule} from '@angular/material/checkbox';` },
  { name: 'Datepicker', category: 'Form Controls', moduleImport: `import {MatDatepickerModule} from '@angular/material/datepicker';` },
  { name: 'Form field', category: 'Form Controls', moduleImport: `import {MatFormFieldModule} from '@angular/material/form-field';` },
  { name: 'Input', category: 'Form Controls', moduleImport: `import {MatInputModule} from '@angular/material/input';` },
  { name: 'Radio button', category: 'Form Controls', moduleImport: `import {MatRadioModule} from '@angular/material/radio';` },
  { name: 'Select', category: 'Form Controls', moduleImport: `import {MatSelectModule} from '@angular/material/select';` },
  { name: 'Slider', category: 'Form Controls', moduleImport: `import {MatSliderModule} from '@angular/material/slider';` },
  { name: 'Slide toggle', category: 'Form Controls', moduleImport: `import {MatSlideToggleModule} from '@angular/material/slide-toggle';` },
  { name: 'Menu', category: 'Navigation', moduleImport: `import {MatMenuModule} from '@angular/material/menu';` },
  { name: 'Sidenav', category: 'Navigation', moduleImport: `import {MatSidenavModule} from '@angular/material/sidenav';` },
  { name: 'Toolbar', category: 'Navigation', moduleImport: `import {MatToolbarModule} from '@angular/material/toolbar';` },
  { name: 'Card', category: 'Layout', moduleImport: `import {MatCardModule} from '@angular/material/card';` },
  { name: 'Divider', category: 'Layout', moduleImport: `import {MatDividerModule} from '@angular/material/divider';` },
  { name: 'Expansion Panel', category: 'Layout', moduleImport: `import {MatExpansionModule} from '@angular/material/expansion';` },
  { name: 'Grid list', category: 'Layout', moduleImport: `import {MatGridListModule} from '@angular/material/grid-list';` },
  { name: 'List', category: 'Layout', moduleImport: `import {MatListModule} from '@angular/material/list';` },
  { name: 'Stepper', category: 'Layout', moduleImport: `import {MatStepperModule} from '@angular/material/stepper';` },
  { name: 'Tabs', category: 'Layout', moduleImport: `import {MatTabsModule} from '@angular/material/tabs';` },
  { name: 'Button', category: 'Buttons & Indicators', moduleImport: `import {MatButtonModule} from '@angular/material/button';` },
  { name: 'Button toggle', category: 'Buttons & Indicators', moduleImport: `import {MatButtonToggleModule} from '@angular/material/button-toggle';` },
  { name: 'Chips', category: 'Buttons & Indicators', moduleImport: `import {MatChipsModule} from '@angular/material/chips';` },
  { name: 'Icon', category: 'Buttons & Indicators', moduleImport: `import {MatIconModule} from '@angular/material/icon';` },
  { name: 'Progress spinner', category: 'Buttons & Indicators', moduleImport: `import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';` },
  { name: 'Progress bar', category: 'Buttons & Indicators', moduleImport: `import {MatProgressBarModule} from '@angular/material/progress-bar';` },
  { name: 'Dialog', category: 'Popups & Modals', moduleImport: `import {MatDialogModule} from '@angular/material/dialog';` },
  { name: 'Snackbar', category: 'Popups & Modals', moduleImport: `import {MatSnackBarModule} from '@angular/material/snack-bar';` },
  { name: 'Tooltip', category: 'Popups & Modals', moduleImport: `import {MatTooltipModule} from '@angular/material/tooltip';` },
  { name: 'Paginator', category: 'Data table', moduleImport: `import {MatPaginatorModule} from '@angular/material/paginator';` },
  { name: 'Sort header', category: 'Data table', moduleImport: `import {MatSortModule} from '@angular/material/sort';` },
  { name: 'Table', category: 'Data table', moduleImport: `import {MatTableModule} from '@angular/material/table';` },
];
