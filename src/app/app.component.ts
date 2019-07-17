import { Component, Input } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  YourName = 'Mathieu';
  showMovies = false;

  changeShowMovies() {
    if (this.showMovies === true) {
      this.showMovies = false;
    } else {
      this.showMovies = true;
    }
  }
}

