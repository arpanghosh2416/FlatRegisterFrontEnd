import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FlatViewComponent } from './component/flat-view/flat-view.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NoPageComponent } from './component/no-page/no-page.component';
import { RegisterOwnerComponent } from './component/register-owner/register-owner.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guard/auth/auth.guard';
import { DeauthGuard } from './guard/deauth/deauth.guard';
import { OwnerGuard } from './guard/owner/owner.guard';

const applicationName = 'Flat Registration';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    data: {
      title: `Home | ${applicationName}`
    }
  },
  {
    path:'about',
    component:AboutComponent,
    canActivate:[AuthGuard],
    data: {
      title: `About | ${applicationName}`
    }
  },
  {
    path:'contact',
    component:ContactComponent,
    canActivate:[AuthGuard],
    data: {
      title: `Contact | ${applicationName}`
    }
  },
  {
    path:'flat-view/:flatId',
    component:FlatViewComponent,
    canActivate:[AuthGuard],
    data: {
      title: `View Flat | ${applicationName}`
    }
  },
  {
    path:'register-owner',
    component:RegisterOwnerComponent,
    canActivate:[AuthGuard, OwnerGuard],
    data: {
      title: `Register as Owner | ${applicationName}`
    }
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[DeauthGuard],
    data: {
      title: `Login | ${applicationName}`
    }
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[DeauthGuard],
    data: {
      title: `Register | ${applicationName}`
    }
  },
  {
    path:'**',
    component:NoPageComponent,
    data: {
      title: `404 Not Found | ${applicationName}`
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
