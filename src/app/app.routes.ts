import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { TeacherComponent } from './teacher';
import { NoContentComponent } from './no-content';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'teacher', component: TeacherComponent },

  // { path: 'detail', loadChildren: './+detail#DetailModule' },
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  { path: '**', component: NoContentComponent },
];
