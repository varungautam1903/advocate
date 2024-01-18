import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/auth.guard';
import { Role } from './models/role';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(
      mod => mod.GalleryModule
    )
  },
  {
    path: 'cases',
    loadChildren: () => import('./pages/cases/cases.module').then(
      mod => mod.CasesModule
    )
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(
      mod => mod.HomeModule
    ),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(
      mod => mod.AdminModule
    ),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(
      mod => mod.LoginModule
    )
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
