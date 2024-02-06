import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SignInPageComponent } from '@security';
import { DashboardHomePageComponent } from 'app/dashboard/home/page/dashboard-home-page/dashboard-home-page.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule,
      SignInPageComponent,
      DashboardHomePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
