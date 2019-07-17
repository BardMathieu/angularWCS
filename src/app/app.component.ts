import { Component, Input } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  YourName = 'Mathieu';
  isThisIngredientVital = true;
  displayGuestList = false;
  showMovies = false;
  songList = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

  changeShowMovies() {
    if (this.showMovies === true) {
      this.showMovies = false;
    } else {
      this.showMovies = true;
    }
  }
}

