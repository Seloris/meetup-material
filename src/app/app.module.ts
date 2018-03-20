import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { materialModules } from './material-imports';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
