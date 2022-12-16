import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MenubarModule} from 'primeng/menubar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MemberListPageComponent } from './member-list-page/member-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { MemberDashboardPageComponent } from './member-dashboard-page/member-dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    MemberListPageComponent,
    LoginPageComponent,
    MemberDashboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    MenubarModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
