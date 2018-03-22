import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @HostBinding('class.dark-theme') darkThemeEnabled: boolean;

  toggleTheme() {
    this.darkThemeEnabled = !this.darkThemeEnabled;
  }
}
