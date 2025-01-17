import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './not-found/not-found.page';
import { AuthGuard } from './auth/auth.guard';
import { Router } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard],
    data: { role: 'Profesor'}
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule),
    canActivate: [AuthGuard],
    data: { role: 'Alumno'}
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./home-docente/home-docente.module').then( m => m.HomeDocentePageModule),
    canActivate: [AuthGuard],
    data: { role: 'Administrator'}
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: '**',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
