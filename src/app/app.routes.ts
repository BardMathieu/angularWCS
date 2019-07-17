import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UserComponent} from './user/user.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user', component: UserComponent}
];

export { ROUTES };
