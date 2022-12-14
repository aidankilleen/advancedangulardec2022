import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HasRoleGuard } from './has-role.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { MemberDashboardPageComponent } from './member-dashboard-page/member-dashboard-page.component';
import { MemberListPageComponent } from './member-list-page/member-list-page.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomePageComponent }, 
  { path: 'about', component: AboutPageComponent }, 
  { path: 'contact', component: ContactPageComponent }, 
  { path: 'members', component: MemberListPageComponent,canActivate:[IsAuthenticatedGuard] }, 
  { path: 'dashboard', component: MemberDashboardPageComponent, canActivate:[IsAuthenticatedGuard]},
  { path: 'login', component: LoginPageComponent }, 
  { path: 'admin', 
      component: AdminPageComponent, 
      canActivate:[IsAuthenticatedGuard, HasRoleGuard], 
      data: {
        role: 'admin'
      } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
