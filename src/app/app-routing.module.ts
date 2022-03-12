import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationPageComponent},{
    path: 'login', component: LoginPageComponent
  },{
    path: 'user', component: ProfilePageComponent
  },{
    path: '', component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
