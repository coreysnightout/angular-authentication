import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';



const appRoutes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'public',
    component: PublicComponent
  },
  {
    path:'private',
    component: PrivateComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
