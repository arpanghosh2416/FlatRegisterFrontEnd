import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NoPageComponent } from './component/no-page/no-page.component';
import { RegisterComponent } from './component/register/register.component';

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
    data: {
      title: `About | ${applicationName}`
    }
  },
  {
    path:'login',
    component:LoginComponent,
    data: {
      title: `Login | ${applicationName}`
    }
  },
  {
    path:'register',
    component:RegisterComponent,
    data: {
      title: `Register | ${applicationName}`
    }
  },
  {
    path:'contact',
    component:ContactComponent,
    data: {
      title: `Contact | ${applicationName}`
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
export class AppRoutingModule { }
