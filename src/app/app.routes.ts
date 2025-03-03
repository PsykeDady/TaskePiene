import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { CurrentViewComponent } from './current-view/current-view.component';
import { DbViewComponent } from './db-view/db-view.component';
import { InfoComponent } from './info/info.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: CurrentViewComponent }, 
  { path: 'db', component: DbViewComponent }, 
  { path: 'info', component: InfoComponent }, 
  { path: '**', component: NotFoundComponent }, 
];

export const appRouting = provideRouter(appRoutes);
