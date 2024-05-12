import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/auth.guard';
import { Role } from './models/role';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(
      mod => mod.GalleryModule
    )
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(
      mod => mod.UserModule
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
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(
      mod => mod.ProfileModule
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
