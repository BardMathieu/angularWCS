import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ROUTES } from './app.routes';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MagicOvenComponent } from './magic-oven/magic-oven.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    UserProfileComponent,
    SearchMovieComponent,
    KitchenComponent,
    MagicOvenComponent,
    DeveloperComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

