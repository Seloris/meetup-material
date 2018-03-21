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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    TableComponent,
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
