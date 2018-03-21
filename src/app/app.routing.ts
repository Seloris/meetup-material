import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PopupComponent } from './components/popup/popup.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'table', component: TableComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

