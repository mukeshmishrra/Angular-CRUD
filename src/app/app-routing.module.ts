import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path:"add",
    component:AddUserComponent,
    canActivate:[AuthGuardGuard]

  },
  {
    path:'',
    component:LoginUserComponent
  },

  // {
  //   path:'',redirectTo:'login', pathMatch: 'full'
  // },
  {
    path:"edit/:id",
    component:EditUserComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path:"login",
    component:LoginUserComponent
  },
  {
    path:"register",
    component:RegisterUserComponent
  },
  {
    path:"user-dashboard",
    component:ViewUserComponent,
    canActivate:[AuthGuardGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }