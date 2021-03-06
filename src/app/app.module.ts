import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { materialModules } from './material-imports';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MatInfoService } from './components/table/mat-info.service';
import { PopupComponent } from './components/popup/popup.component';
import { LinkListComponent } from './components/popup/link-list/link-list.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ChipsComponent } from './components/chips/chips.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    TableComponent,
    PopupComponent,
    LinkListComponent,
    SnackbarComponent,
    ChipsComponent,
  ],
  entryComponents: [
    LinkListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  providers: [MatInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
