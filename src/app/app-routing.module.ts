import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NoPageComponent } from './component/no-page/no-page.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'about',
    component:AboutComponent
    
  },
  {
    path:'login',
    component:LoginComponent
    
  },
  {
    path:'register',
    component:RegisterComponent
    
  },
  {
    path:'contact',
    component:ContactComponent
    
  },
  {
    path:'**',
    component:NoPageComponent
    
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
